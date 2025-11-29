import React, { useState, useEffect, useMemo } from 'react';
import { 
    Scale, Ruler, Thermometer, Clock, Zap, Database, 
    ArrowRightLeft, Copy, Check, Gauge, Weight, Activity, Signal
} from 'lucide-react';

type Category = 'length' | 'weight' | 'volume' | 'area' | 'temp' | 'speed' | 'time' | 'digital' | 'energy' | 'pressure' | 'power';

interface UnitDefinition {
    name: string;
    factor: number; // Factor to convert to base unit (or from base)
    offset?: number; // For temp
}

const CATEGORIES: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'length', label: 'Length', icon: <Ruler className="w-5 h-5"/> },
    { id: 'weight', label: 'Weight', icon: <Weight className="w-5 h-5"/> },
    { id: 'temp', label: 'Temperature', icon: <Thermometer className="w-5 h-5"/> },
    { id: 'volume', label: 'Volume', icon: <Zap className="w-5 h-5"/> },
    { id: 'area', label: 'Area', icon: <Activity className="w-5 h-5"/> },
    { id: 'speed', label: 'Speed', icon: <Gauge className="w-5 h-5"/> },
    { id: 'time', label: 'Time', icon: <Clock className="w-5 h-5"/> },
    { id: 'digital', label: 'Digital Storage', icon: <Database className="w-5 h-5"/> },
    { id: 'energy', label: 'Energy', icon: <Zap className="w-5 h-5"/> },
    { id: 'pressure', label: 'Pressure', icon: <Gauge className="w-5 h-5"/> },
    { id: 'power', label: 'Power', icon: <Signal className="w-5 h-5"/> },
];

const UNIT_DATA: Record<Category, Record<string, UnitDefinition>> = {
    length: {
        'm': { name: 'Meter', factor: 1 },
        'km': { name: 'Kilometer', factor: 1000 },
        'cm': { name: 'Centimeter', factor: 0.01 },
        'mm': { name: 'Millimeter', factor: 0.001 },
        'µm': { name: 'Micrometer', factor: 1e-6 },
        'nm': { name: 'Nanometer', factor: 1e-9 },
        'mi': { name: 'Mile', factor: 1609.344 },
        'yd': { name: 'Yard', factor: 0.9144 },
        'ft': { name: 'Foot', factor: 0.3048 },
        'in': { name: 'Inch', factor: 0.0254 },
        'nmi': { name: 'Nautical Mile', factor: 1852 },
    },
    weight: {
        'kg': { name: 'Kilogram', factor: 1 },
        'g': { name: 'Gram', factor: 0.001 },
        'mg': { name: 'Milligram', factor: 1e-6 },
        't': { name: 'Metric Ton', factor: 1000 },
        'lb': { name: 'Pound', factor: 0.45359237 },
        'oz': { name: 'Ounce', factor: 0.02834952 },
        'st': { name: 'Stone', factor: 6.35029318 },
        'ct': { name: 'Carat', factor: 0.0002 },
    },
    volume: {
        'l': { name: 'Liter', factor: 1 },
        'ml': { name: 'Milliliter', factor: 0.001 },
        'm3': { name: 'Cubic Meter', factor: 1000 },
        'cm3': { name: 'Cubic Centimeter', factor: 0.001 },
        'gal': { name: 'Gallon (US)', factor: 3.78541 },
        'qt': { name: 'Quart (US)', factor: 0.946353 },
        'pt': { name: 'Pint (US)', factor: 0.473176 },
        'cup': { name: 'Cup (US)', factor: 0.236588 },
        'floz': { name: 'Fluid Ounce (US)', factor: 0.0295735 },
    },
    area: {
        'm2': { name: 'Square Meter', factor: 1 },
        'km2': { name: 'Square Kilometer', factor: 1e6 },
        'cm2': { name: 'Square Centimeter', factor: 1e-4 },
        'mm2': { name: 'Square Millimeter', factor: 1e-6 },
        'ha': { name: 'Hectare', factor: 10000 },
        'ac': { name: 'Acre', factor: 4046.86 },
        'mi2': { name: 'Square Mile', factor: 2.59e6 },
        'ft2': { name: 'Square Foot', factor: 0.092903 },
        'in2': { name: 'Square Inch', factor: 0.00064516 },
    },
    temp: {
        // Factors handled separately in logic due to offsets
        'C': { name: 'Celsius', factor: 1 },
        'F': { name: 'Fahrenheit', factor: 1 },
        'K': { name: 'Kelvin', factor: 1 },
        'R': { name: 'Rankine', factor: 1 },
    },
    speed: {
        'mps': { name: 'Meter per second', factor: 1 },
        'kph': { name: 'Kilometer per hour', factor: 0.277778 },
        'mph': { name: 'Mile per hour', factor: 0.44704 },
        'kn': { name: 'Knot', factor: 0.514444 },
        'fps': { name: 'Foot per second', factor: 0.3048 },
    },
    time: {
        's': { name: 'Second', factor: 1 },
        'ms': { name: 'Millisecond', factor: 0.001 },
        'min': { name: 'Minute', factor: 60 },
        'h': { name: 'Hour', factor: 3600 },
        'd': { name: 'Day', factor: 86400 },
        'wk': { name: 'Week', factor: 604800 },
        'mo': { name: 'Month (Avg)', factor: 2.628e6 },
        'y': { name: 'Year (Avg)', factor: 3.154e7 },
    },
    digital: {
        'b': { name: 'Bit', factor: 1/8 },
        'B': { name: 'Byte', factor: 1 },
        'KB': { name: 'Kilobyte', factor: 1024 },
        'MB': { name: 'Megabyte', factor: 1024**2 },
        'GB': { name: 'Gigabyte', factor: 1024**3 },
        'TB': { name: 'Terabyte', factor: 1024**4 },
        'PB': { name: 'Petabyte', factor: 1024**5 },
    },
    energy: {
        'j': { name: 'Joule', factor: 1 },
        'kj': { name: 'Kilojoule', factor: 1000 },
        'cal': { name: 'Calorie', factor: 4.184 },
        'kcal': { name: 'Kilocalorie', factor: 4184 },
        'wh': { name: 'Watt-hour', factor: 3600 },
        'kwh': { name: 'Kilowatt-hour', factor: 3.6e6 },
        'ev': { name: 'Electronvolt', factor: 1.6022e-19 },
    },
    pressure: {
        'pa': { name: 'Pascal', factor: 1 },
        'bar': { name: 'Bar', factor: 100000 },
        'psi': { name: 'PSI', factor: 6894.76 },
        'atm': { name: 'Atmosphere', factor: 101325 },
        'torr': { name: 'Torr', factor: 133.322 },
    },
    power: {
        'w': { name: 'Watt', factor: 1 },
        'kw': { name: 'Kilowatt', factor: 1000 },
        'mw': { name: 'Megawatt', factor: 1e6 },
        'hp': { name: 'Horsepower', factor: 745.7 },
    }
};

const UnitConverterTool: React.FC = () => {
    const [category, setCategory] = useState<Category>('length');
    // We do NOT initialize these with specific strings, but derive them to avoid category mismatch
    const [fromUnitKey, setFromUnitKey] = useState<string>('');
    const [toUnitKey, setToUnitKey] = useState<string>('');
    
    const [inputVal, setInputVal] = useState<string>('1');
    const [outputVal, setOutputVal] = useState<string>('');
    const [copied, setCopied] = useState(false);

    const currentUnits = useMemo(() => UNIT_DATA[category], [category]);

    // Safety: Ensure selected units belong to the current category
    const activeFromUnit = currentUnits[fromUnitKey] ? fromUnitKey : Object.keys(currentUnits)[0];
    const activeToUnit = currentUnits[toUnitKey] ? toUnitKey : (Object.keys(currentUnits)[1] || Object.keys(currentUnits)[0]);

    // Update state if we fell back to default (prevents "controlled input" warnings if we were passing undefined)
    useEffect(() => {
        if (fromUnitKey !== activeFromUnit) setFromUnitKey(activeFromUnit);
        if (toUnitKey !== activeToUnit) setToUnitKey(activeToUnit);
    }, [activeFromUnit, activeToUnit, fromUnitKey, toUnitKey]);

    const changeCategory = (newCat: Category) => {
        setCategory(newCat);
        // Automatically reset units when category changes to prevent crash
        const units = Object.keys(UNIT_DATA[newCat]);
        setFromUnitKey(units[0]);
        setToUnitKey(units[1] || units[0]);
        setInputVal('1');
    };

    // Calculation Logic
    useEffect(() => {
        if (!inputVal || isNaN(parseFloat(inputVal))) {
            setOutputVal('');
            return;
        }

        const val = parseFloat(inputVal);
        let result = 0;

        // Safety check
        if (!currentUnits[activeFromUnit] || !currentUnits[activeToUnit]) return;

        if (category === 'temp') {
            // Temperature Special Handling
            let baseC = val;
            
            // Convert TO Celsius first
            if (activeFromUnit === 'F') baseC = (val - 32) * 5/9;
            else if (activeFromUnit === 'K') baseC = val - 273.15;
            else if (activeFromUnit === 'R') baseC = (val - 491.67) * 5/9;

            // Convert FROM Celsius to Target
            if (activeToUnit === 'C') result = baseC;
            else if (activeToUnit === 'F') result = (baseC * 9/5) + 32;
            else if (activeToUnit === 'K') result = baseC + 273.15;
            else if (activeToUnit === 'R') result = (baseC + 273.15) * 9/5;

        } else {
            // Standard Factor-based Conversion
            const fromFactor = currentUnits[activeFromUnit].factor;
            const toFactor = currentUnits[activeToUnit].factor;
            
            // Convert to Base, then to Target
            const baseVal = val * fromFactor;
            result = baseVal / toFactor;
        }

        // Formatting
        if (Math.abs(result) < 1e-6 || Math.abs(result) > 1e9) {
            setOutputVal(result.toExponential(4));
        } else {
            // Smart rounding to avoid floating point errors (e.g. 3.0000000004)
            // Use 10 significant digits
            setOutputVal(parseFloat(result.toPrecision(10)).toString());
        }

    }, [category, activeFromUnit, activeToUnit, inputVal, currentUnits]);

    const handleSwap = () => {
        setFromUnitKey(activeToUnit);
        setToUnitKey(activeFromUnit);
        setInputVal(outputVal); // Also swap values conceptually
    };

    const copyResult = () => {
        navigator.clipboard.writeText(outputVal);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Category Selector */}
            <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Select Category</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => changeCategory(cat.id)}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                                    category === cat.id 
                                    ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500 text-primary-700 dark:text-primary-400 ring-1 ring-primary-500' 
                                    : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-700'
                                }`}
                            >
                                <div className="mb-1">{cat.icon}</div>
                                <span className="text-xs font-bold">{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Converter */}
            <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8">
                    
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                             {CATEGORIES.find(c => c.id === category)?.icon} 
                             {CATEGORIES.find(c => c.id === category)?.label} Converter
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        
                        {/* Input Group */}
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-sm font-bold text-slate-500 uppercase">From</label>
                            <input 
                                type="number" 
                                value={inputVal} 
                                onChange={(e) => setInputVal(e.target.value)} 
                                className="w-full p-4 text-xl rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white font-mono"
                                placeholder="0"
                            />
                            <select 
                                value={activeFromUnit} 
                                onChange={(e) => setFromUnitKey(e.target.value)}
                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium cursor-pointer"
                            >
                                {Object.entries(currentUnits).map(([key, u]) => (
                                    <option key={key} value={key}>{(u as UnitDefinition).name} ({key})</option>
                                ))}
                            </select>
                        </div>

                        {/* Swap Button */}
                        <button 
                            onClick={handleSwap}
                            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-500 hover:text-primary-600 transition-colors shadow-sm"
                            title="Swap Units"
                        >
                            <ArrowRightLeft className="w-6 h-6" />
                        </button>

                        {/* Output Group */}
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-sm font-bold text-slate-500 uppercase">To</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    readOnly
                                    value={outputVal} 
                                    className="w-full p-4 text-xl rounded-xl border border-primary-200 dark:border-primary-900 bg-primary-50 dark:bg-primary-900/10 text-primary-900 dark:text-primary-100 font-mono focus:outline-none"
                                    placeholder="Result"
                                />
                                {outputVal && (
                                    <button 
                                        onClick={copyResult}
                                        className="absolute right-3 top-3.5 p-1.5 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-600 dark:text-primary-400 transition-colors"
                                        title="Copy Result"
                                    >
                                        {copied ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                                    </button>
                                )}
                            </div>
                            <select 
                                value={activeToUnit} 
                                onChange={(e) => setToUnitKey(e.target.value)}
                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium cursor-pointer"
                            >
                                {Object.entries(currentUnits).map(([key, u]) => (
                                    <option key={key} value={key}>{(u as UnitDefinition).name} ({key})</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {/* Formula / Info */}
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                            {category === 'temp' ? (
                                <span>Temperature conversions use specific formulas rather than simple factors.</span>
                            ) : (
                                currentUnits[activeFromUnit] && currentUnits[activeToUnit] && (
                                    <span>
                                        1 {currentUnits[activeFromUnit].name} = {(currentUnits[activeFromUnit].factor / currentUnits[activeToUnit].factor).toPrecision(6)} {currentUnits[activeToUnit].name}
                                    </span>
                                )
                            )}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UnitConverterTool;