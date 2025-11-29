
import React, { useState, useEffect } from 'react';
import { 
    Calendar, Clock, Cake, Shuffle, Copy, Check, RefreshCw, 
    Percent, ArrowRight, ArrowDownRight, ArrowUpRight,
    Activity, Ruler, Weight, Info, Heart, Wind, Moon, Coffee, 
    Globe, Rocket, Star, Sun
} from 'lucide-react';

// --- Helpers for Age Calculator ---

const getZodiacSign = (day: number, month: number) => {
    const signs = [
        { name: "Capricorn", start: 1, end: 19 },
        { name: "Aquarius", start: 20, end: 18 },
        { name: "Pisces", start: 19, end: 20 },
        { name: "Aries", start: 21, end: 19 },
        { name: "Taurus", start: 20, end: 20 },
        { name: "Gemini", start: 21, end: 20 },
        { name: "Cancer", start: 21, end: 22 },
        { name: "Leo", start: 23, end: 22 },
        { name: "Virgo", start: 23, end: 22 },
        { name: "Libra", start: 23, end: 22 },
        { name: "Scorpio", start: 23, end: 21 },
        { name: "Sagittarius", start: 22, end: 21 },
        { name: "Capricorn", start: 22, end: 31 },
    ];
    
    // Adjust logic for array indexing or simple check
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    return "Capricorn";
};

const getChineseZodiac = (year: number) => {
    const animals = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
    return animals[year % 12];
};

const getBirthstone = (month: number) => {
    const stones = [
        "Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl",
        "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"
    ];
    return stones[month - 1]; // month is 1-12
};

// Safe date generator (YYYY-MM-DD)
const getTodayString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// --- Age Calculator ---
export const AgeCalculatorTool: React.FC = () => {
    const [dob, setDob] = useState('');
    const [today, setToday] = useState(getTodayString()); // Initialize strictly
    const [result, setResult] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<'summary' | 'time' | 'facts' | 'space'>('summary');

    const calculate = () => {
        if (!dob || !today) return;
        
        const [y1, m1, d1] = dob.split('-').map(Number);
        const [y2, m2, d2] = today.split('-').map(Number);

        // JavaScript months are 0-indexed
        const birthDate = new Date(y1, m1 - 1, d1);
        const targetDate = new Date(y2, m2 - 1, d2);
        
        if (birthDate > targetDate) {
            alert("Birth date cannot be in the future relative to the target date!");
            return;
        }

        // --- Exact Age ---
        let years = y2 - y1;
        let months = m2 - m1;
        let days = d2 - d1;

        if (days < 0) {
            // Borrow days from previous month
            // Day 0 of a month is the last day of the previous month
            const prevMonthLastDay = new Date(y2, m2 - 1, 0).getDate();
            days += prevMonthLastDay;
            months--;
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        // --- Total Units ---
        const diffTimeMs = targetDate.getTime() - birthDate.getTime();
        // Fallback for extremely small differences
        if (diffTimeMs < 0) return;

        const totalSeconds = Math.floor(diffTimeMs / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMonths = (years * 12) + months;

        // --- Next Birthday ---
        const nextBirthday = new Date(y2, m1 - 1, d1);
        if (nextBirthday.getTime() < targetDate.getTime()) {
            nextBirthday.setFullYear(y2 + 1);
        }
        const diffNextMs = nextBirthday.getTime() - targetDate.getTime();
        const nextBirthdayDays = Math.ceil(diffNextMs / (1000 * 60 * 60 * 24));
        const nextBirthdayDate = nextBirthday.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        // --- Fun Stats (Estimates) ---
        // Heart rate avg ~80 bpm, Breath ~16/min, Sleep ~8h/day
        const heartbeats = totalMinutes * 80;
        const breaths = totalMinutes * 16;
        const sleepHours = totalDays * 8;
        const meals = totalDays * 3;

        // --- Planetary Ages (Orbital Period in Earth Years) ---
        const earthYears = totalDays / 365.25;
        const planets = [
            { name: "Mercury", ratio: 0.2408, icon: <Sun className="w-4 h-4 text-orange-400"/> },
            { name: "Venus", ratio: 0.6152, icon: <Globe className="w-4 h-4 text-yellow-600"/> },
            { name: "Mars", ratio: 1.8808, icon: <Globe className="w-4 h-4 text-red-500"/> },
            { name: "Jupiter", ratio: 11.862, icon: <Globe className="w-4 h-4 text-orange-700"/> },
            { name: "Saturn", ratio: 29.457, icon: <Globe className="w-4 h-4 text-yellow-400"/> },
        ];
        const planetaryAges = planets.map(p => ({
            name: p.name,
            age: (earthYears / p.ratio).toFixed(2),
            icon: p.icon
        }));

        setResult({
            years, months, days,
            totalMonths, totalWeeks, totalDays, totalHours, totalMinutes, totalSeconds,
            nextBirthdayDays, nextBirthdayDate,
            dayBorn: birthDate.toLocaleDateString('en-US', { weekday: 'long' }),
            zodiac: getZodiacSign(d1, m1),
            chineseZodiac: getChineseZodiac(y1),
            birthstone: getBirthstone(m1),
            heartbeats, breaths, sleepHours, meals,
            planetaryAges
        });
    };

    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Section */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary-500" /> Date Details
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Date of Birth</label>
                            <input 
                                type="date"
                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white transition-all appearance-none"
                                value={dob}
                                max={today}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Calculate Age At</label>
                            <input 
                                type="date"
                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white transition-all appearance-none"
                                value={today}
                                onChange={(e) => setToday(e.target.value)}
                            />
                        </div>
                        <button 
                            onClick={calculate}
                            disabled={!dob || !today}
                            className="w-full py-3 bg-gradient-to-r from-primary-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-primary-500/20 hover:from-primary-700 hover:to-indigo-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                           <Clock className="w-5 h-5" /> Calculate Age
                        </button>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4" /> Did you know?
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                        Age calculation is tricky because months have different number of days. We use the most precise method to ensure your age is 100% accurate down to the day.
                    </p>
                </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-8">
                {result ? (
                    <div className="animate-fade-in space-y-6">
                        {/* Main Age Card */}
                        <div className="bg-gradient-to-br from-primary-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="text-center md:text-left">
                                    <p className="text-primary-100 font-medium mb-1 uppercase tracking-wider text-sm">Exact Age</p>
                                    <div className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
                                        {result.years}<span className="text-2xl md:text-3xl opacity-60 font-medium">y</span>&nbsp;
                                        {result.months}<span className="text-2xl md:text-3xl opacity-60 font-medium">m</span>&nbsp;
                                        {result.days}<span className="text-2xl md:text-3xl opacity-60 font-medium">d</span>
                                    </div>
                                    <p className="text-primary-100 text-sm">
                                        Born on a <span className="font-bold text-white">{result.dayBorn}</span>
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[180px] text-center border border-white/20">
                                    <div className="text-xs uppercase font-bold text-primary-200 mb-2">Next Birthday</div>
                                    <Cake className="w-8 h-8 text-white mx-auto mb-2" />
                                    <div className="text-2xl font-bold">{result.nextBirthdayDays} Days</div>
                                    <div className="text-xs text-primary-100 mt-1">{result.nextBirthdayDate}</div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
                                {[
                                    { id: 'summary', label: 'Summary', icon: <Activity className="w-4 h-4"/> },
                                    { id: 'time', label: 'Time Units', icon: <Clock className="w-4 h-4"/> },
                                    { id: 'facts', label: 'Fun Facts', icon: <Star className="w-4 h-4"/> },
                                    { id: 'space', label: 'Galactic Age', icon: <Rocket className="w-4 h-4"/> },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`flex-1 py-4 px-4 text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-primary-600 border-b-2 border-primary-600 bg-slate-50 dark:bg-slate-800' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                                    >
                                        {tab.icon} {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 min-h-[300px]">
                                {activeTab === 'summary' && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                            <p className="text-xs font-bold text-indigo-500 uppercase mb-1">Zodiac Sign</p>
                                            <p className="text-xl font-bold text-slate-900 dark:text-white">{result.zodiac}</p>
                                        </div>
                                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800">
                                            <p className="text-xs font-bold text-orange-500 uppercase mb-1">Chinese Zodiac</p>
                                            <p className="text-xl font-bold text-slate-900 dark:text-white">{result.chineseZodiac}</p>
                                        </div>
                                        <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                                            <p className="text-xs font-bold text-teal-500 uppercase mb-1">Birthstone</p>
                                            <p className="text-xl font-bold text-slate-900 dark:text-white">{result.birthstone}</p>
                                        </div>
                                        <div className="col-span-1 sm:col-span-3 mt-2">
                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                You have lived for <b>{result.totalDays.toLocaleString()}</b> days. In that time, the Earth has traveled approximately <b>{(result.totalDays * 2.57).toLocaleString(undefined, {maximumFractionDigits:0})} million kilometers</b> around the Sun.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'time' && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                            { label: 'Total Years', val: result.years },
                                            { label: 'Total Months', val: result.totalMonths.toLocaleString() },
                                            { label: 'Total Weeks', val: result.totalWeeks.toLocaleString() },
                                            { label: 'Total Days', val: result.totalDays.toLocaleString() },
                                            { label: 'Total Hours', val: result.totalHours.toLocaleString() },
                                            { label: 'Total Minutes', val: result.totalMinutes.toLocaleString() },
                                        ].map((item, i) => (
                                            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <p className="text-xs font-bold text-slate-400 uppercase mb-1">{item.label}</p>
                                                <p className="text-xl font-bold text-slate-900 dark:text-white">{item.val}</p>
                                            </div>
                                        ))}
                                        <div className="col-span-2 md:col-span-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                             <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Seconds</p>
                                             <p className="text-3xl font-mono font-bold text-primary-600">{result.totalSeconds.toLocaleString()}</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'facts' && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-4 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800">
                                            <div className="p-3 bg-rose-100 dark:bg-rose-900/50 rounded-full text-rose-500">
                                                <Heart className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-rose-500 uppercase">Heartbeats (Approx)</p>
                                                <p className="text-lg font-bold text-slate-900 dark:text-white">{result.heartbeats.toLocaleString()}</p>
                                                <p className="text-xs text-rose-400">~80 bpm avg</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-xl border border-sky-100 dark:border-sky-800">
                                            <div className="p-3 bg-sky-100 dark:bg-sky-900/50 rounded-full text-sky-500">
                                                <Wind className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-sky-500 uppercase">Breaths Taken</p>
                                                <p className="text-lg font-bold text-slate-900 dark:text-white">{result.breaths.toLocaleString()}</p>
                                                <p className="text-xs text-sky-400">~16 per min</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-100 dark:border-violet-800">
                                            <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-full text-violet-500">
                                                <Moon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-violet-500 uppercase">Hours Slept</p>
                                                <p className="text-lg font-bold text-slate-900 dark:text-white">{result.sleepHours.toLocaleString()}</p>
                                                <p className="text-xs text-violet-400">~8 hrs/day</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800">
                                            <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-full text-amber-500">
                                                <Coffee className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-amber-500 uppercase">Meals Eaten</p>
                                                <p className="text-lg font-bold text-slate-900 dark:text-white">{result.meals.toLocaleString()}</p>
                                                <p className="text-xs text-amber-400">~3 meals/day</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'space' && (
                                    <div className="space-y-4">
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                            A year is defined by how long a planet takes to orbit the Sun. Since other planets have different orbits, your age would be different there!
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {result.planetaryAges.map((p: any) => (
                                                <div key={p.name} className="p-4 bg-slate-900 text-white rounded-xl border border-slate-700 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-white/10 rounded-full">
                                                            {p.icon}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-bold text-slate-400 uppercase">{p.name}</p>
                                                            <p className="text-xl font-bold">{p.age} <span className="text-sm font-normal text-slate-400">yrs</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-center p-8">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                            <Clock className="w-10 h-10 text-slate-300" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Waiting for your birthday</h4>
                        <p className="text-slate-500 mt-2 max-w-sm">
                            Enter your date of birth to reveal precise age metrics, astrological details, and fun life statistics.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Random Number Generator ---
export const RandomNumberTool: React.FC = () => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [count, setCount] = useState(1);
    const [allowDuplicates, setAllowDuplicates] = useState(false);
    const [sort, setSort] = useState<'none'|'asc'|'desc'>('none');
    const [results, setResults] = useState<number[]>([]);
    const [copied, setCopied] = useState(false);

    const generate = () => {
        if (min >= max) { alert("Min must be less than Max"); return; }
        if (!allowDuplicates && count > (max - min + 1)) { alert("Cannot generate unique numbers. Range is too small for the requested count."); return; }
        
        const nums: number[] = [];
        const uniqueSet = new Set<number>();

        while (nums.length < count) {
            const r = Math.floor(Math.random() * (max - min + 1)) + min;
            if (allowDuplicates) {
                nums.push(r);
            } else {
                if (!uniqueSet.has(r)) {
                    uniqueSet.add(r);
                    nums.push(r);
                }
            }
        }

        if (sort === 'asc') nums.sort((a,b) => a - b);
        if (sort === 'desc') nums.sort((a,b) => b - a);

        setResults(nums);
    };

    const copyResults = () => {
        navigator.clipboard.writeText(results.join(', '));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
             <div className="lg:col-span-5 space-y-6">
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                     <div className="grid grid-cols-2 gap-4 mb-4">
                         <div>
                             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Min</label>
                             <input type="number" value={min} onChange={e => setMin(parseInt(e.target.value))} className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" />
                         </div>
                         <div>
                             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Max</label>
                             <input type="number" value={max} onChange={e => setMax(parseInt(e.target.value))} className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" />
                         </div>
                     </div>
                     <div className="mb-4">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Quantity</label>
                        <input type="number" value={count} min="1" max="1000" onChange={e => setCount(parseInt(e.target.value))} className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" />
                     </div>
                     
                     <div className="space-y-3 mb-6">
                         <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                             <input type="checkbox" checked={allowDuplicates} onChange={e => setAllowDuplicates(e.target.checked)} className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"/>
                             Allow Duplicates
                         </label>
                         <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                             <span className="text-xs font-bold text-slate-500 uppercase">Sort:</span>
                             <div className="flex bg-slate-100 dark:bg-slate-800 rounded p-1">
                                 <button onClick={() => setSort('none')} className={`px-2 py-1 rounded text-xs ${sort === 'none' ? 'bg-white shadow text-black' : 'text-slate-500'}`}>None</button>
                                 <button onClick={() => setSort('asc')} className={`px-2 py-1 rounded text-xs ${sort === 'asc' ? 'bg-white shadow text-black' : 'text-slate-500'}`}>Asc</button>
                                 <button onClick={() => setSort('desc')} className={`px-2 py-1 rounded text-xs ${sort === 'desc' ? 'bg-white shadow text-black' : 'text-slate-500'}`}>Desc</button>
                             </div>
                         </div>
                     </div>

                     <button onClick={generate} className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all flex items-center justify-center gap-2">
                         <Shuffle className="w-4 h-4" /> Generate
                     </button>
                 </div>
             </div>

             <div className="lg:col-span-7">
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 min-h-[400px] flex flex-col">
                     <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                         <h4 className="font-bold text-slate-700 dark:text-slate-300">Results ({results.length})</h4>
                         {results.length > 0 && (
                             <button onClick={copyResults} className="text-xs flex items-center gap-1 text-slate-500 hover:text-primary-600">
                                 {copied ? <Check className="w-3 h-3"/> : <Copy className="w-3 h-3"/>} {copied ? 'Copied' : 'Copy All'}
                             </button>
                         )}
                     </div>
                     <div className="p-6 flex-1 overflow-auto max-h-[500px] custom-scrollbar">
                         {results.length > 0 ? (
                             <div className="flex flex-wrap gap-2">
                                 {results.map((n, i) => (
                                     <div key={i} className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full font-mono text-lg font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                                         {n}
                                     </div>
                                 ))}
                             </div>
                         ) : (
                             <div className="h-full flex flex-col items-center justify-center text-slate-400">
                                 <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                                     <Shuffle className="w-8 h-8 opacity-30" />
                                 </div>
                                 <p>Ready to generate</p>
                             </div>
                         )}
                     </div>
                 </div>
             </div>
        </div>
    );
};

// --- Percentage Calculator ---
export const PercentageCalculatorTool: React.FC = () => {
    const [mode, setMode] = useState(0); // 0: X% of Y, 1: X is what % of Y, 2: Increase/Decrease
    const [val1, setVal1] = useState<number>(0);
    const [val2, setVal2] = useState<number>(0);
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        let res = 0;
        let text = "";

        if (mode === 0) {
            // What is X% of Y?
            res = (val1 / 100) * val2;
            text = `${val1}% of ${val2} is ${res}`;
        } else if (mode === 1) {
            // X is what % of Y?
            if(val2 === 0) { setResult("Cannot divide by zero"); return; }
            res = (val1 / val2) * 100;
            text = `${val1} is ${res.toFixed(2)}% of ${val2}`;
        } else {
            // % change from X to Y
            if(val1 === 0) { setResult("Initial value cannot be zero"); return; }
            const diff = val2 - val1;
            res = (diff / val1) * 100;
            text = `${res > 0 ? 'Increase' : 'Decrease'} of ${Math.abs(res).toFixed(2)}%`;
        }
        setResult(text);
    };

    const MODES = [
        { label: 'What is X% of Y?', icon: ArrowRight },
        { label: 'X is what % of Y?', icon: Percent },
        { label: '% Change (X to Y)', icon: ArrowUpRight },
    ];

    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex gap-2 mb-8 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                {MODES.map((m, i) => (
                    <button
                        key={i}
                        onClick={() => { setMode(i); setResult(null); setVal1(0); setVal2(0); }}
                        className={`flex-1 py-3 px-2 rounded-lg text-sm font-medium flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${mode === i ? 'bg-white dark:bg-slate-700 shadow text-primary-600' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                        <m.icon className="w-4 h-4" />
                        <span className="text-center">{m.label}</span>
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                <div className="flex-1 w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                        {mode === 0 ? 'Percentage (X)' : mode === 1 ? 'Number (X)' : 'From Value (X)'}
                    </label>
                    <input 
                        type="number" 
                        value={val1 || ''} 
                        onChange={e => setVal1(parseFloat(e.target.value))} 
                        className="w-full p-4 text-xl rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white font-mono"
                        placeholder="0"
                    />
                </div>
                
                <div className="text-slate-400 font-bold text-xl pt-6">
                    {mode === 0 ? 'OF' : mode === 1 ? 'IN' : 'TO'}
                </div>

                <div className="flex-1 w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                         {mode === 0 ? 'Value (Y)' : mode === 1 ? 'Total (Y)' : 'To Value (Y)'}
                    </label>
                    <input 
                        type="number" 
                        value={val2 || ''} 
                        onChange={e => setVal2(parseFloat(e.target.value))} 
                        className="w-full p-4 text-xl rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white font-mono"
                        placeholder="0"
                    />
                </div>
            </div>

            <button onClick={calculate} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors mb-8">
                Calculate
            </button>

            {result && (
                <div className="bg-slate-900 text-white p-6 rounded-2xl text-center animate-fade-in">
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-2">Result</p>
                    <p className="text-3xl font-bold">{result}</p>
                </div>
            )}
        </div>
    );
};

// --- BMI Calculator ---
export const BmiCalculatorTool: React.FC = () => {
    const [system, setSystem] = useState<'metric'|'imperial'>('metric');
    const [weight, setWeight] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [heightFt, setHeightFt] = useState('');
    const [heightIn, setHeightIn] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);

    const calculate = () => {
        let h = 0; // in meters
        let w = parseFloat(weight);

        if (system === 'metric') {
            h = parseFloat(heightCm) / 100;
        } else {
            // Imperial: lbs and inches
            // Formula: 703 * lbs / (in^2)
            const totalInches = (parseFloat(heightFt || '0') * 12) + parseFloat(heightIn || '0');
            h = totalInches; // keep as inches for formula
        }

        if (!w || !h) return;

        let score = 0;
        if (system === 'metric') {
             score = w / (h * h);
        } else {
             score = 703 * w / (h * h);
        }
        
        setBmi(parseFloat(score.toFixed(1)));
    };

    const getCategory = (score: number) => {
        if (score < 18.5) return { label: 'Underweight', color: 'text-blue-500', bg: 'bg-blue-500' };
        if (score < 25) return { label: 'Normal weight', color: 'text-green-500', bg: 'bg-green-500' };
        if (score < 30) return { label: 'Overweight', color: 'text-yellow-500', bg: 'bg-yellow-500' };
        return { label: 'Obese', color: 'text-red-500', bg: 'bg-red-500' };
    };

    const cat = bmi ? getCategory(bmi) : null;

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
                    <button onClick={() => setSystem('metric')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${system === 'metric' ? 'bg-white dark:bg-slate-700 shadow' : 'text-slate-500'}`}>Metric (kg/cm)</button>
                    <button onClick={() => setSystem('imperial')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${system === 'imperial' ? 'bg-white dark:bg-slate-700 shadow' : 'text-slate-500'}`}>Imperial (lbs/ft)</button>
                </div>

                <div className="space-y-4">
                     <div>
                         <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2"><Ruler className="w-4 h-4"/> Height</label>
                         {system === 'metric' ? (
                             <input type="number" value={heightCm} onChange={e => setHeightCm(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" placeholder="cm" />
                         ) : (
                             <div className="flex gap-2">
                                 <input type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" placeholder="ft" />
                                 <input type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" placeholder="in" />
                             </div>
                         )}
                     </div>

                     <div>
                         <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2"><Weight className="w-4 h-4"/> Weight</label>
                         <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white" placeholder={system === 'metric' ? 'kg' : 'lbs'} />
                     </div>

                     <button onClick={calculate} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors mt-4">
                         Calculate BMI
                     </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center min-h-[400px]">
                {bmi ? (
                    <div className="text-center w-full animate-fade-in">
                        <p className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-2">Your BMI Score</p>
                        <div className="text-6xl font-extrabold text-slate-900 dark:text-white mb-2">{bmi}</div>
                        <div className={`text-xl font-bold mb-8 ${cat?.color}`}>{cat?.label}</div>

                        {/* Visual Bar */}
                        <div className="relative h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-full mb-2 overflow-hidden">
                             {/* Segments */}
                             <div className="absolute top-0 bottom-0 left-0 w-[18.5%] bg-blue-400"></div>
                             <div className="absolute top-0 bottom-0 left-[18.5%] w-[21.5%] bg-green-500"></div> {/* 18.5 to 25 */}
                             <div className="absolute top-0 bottom-0 left-[40%] w-[16%] bg-yellow-500"></div> {/* 25 to 30 */}
                             <div className="absolute top-0 bottom-0 left-[56%] right-0 bg-red-500"></div>

                             {/* Marker */}
                             <div 
                                className="absolute top-0 bottom-0 w-1 bg-black dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-all duration-1000"
                                style={{ left: `${Math.min(100, Math.max(0, (bmi / 40) * 100))}%` }}
                             />
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 font-bold">
                            <span>15</span>
                            <span>18.5</span>
                            <span>25</span>
                            <span>30</span>
                            <span>40+</span>
                        </div>

                        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-left text-sm text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                            <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <p>A BMI between 18.5 and 24.9 is considered normal. Keep in mind BMI is a general screening tool and does not account for muscle mass or body composition.</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-slate-400">
                        <Activity className="w-16 h-16 mx-auto mb-4 opacity-30" />
                        <h4 className="font-bold text-slate-600 dark:text-slate-300">No Result Yet</h4>
                        <p className="text-sm mt-2">Enter your height and weight to see your health score.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
