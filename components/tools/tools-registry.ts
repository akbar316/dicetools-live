
import PercentageCalculatorTool from "./specific/PercentageCalculatorTool";
import CurrencyConverterTool from "./specific/CurrencyConverterTool";
import UnitConverterTool from "./specific/UnitConverterTool";
import TimeDateConverterTool from "./specific/TimeDateConverterTool";
import LoanEmiCalculatorTool from "./specific/LoanEmiCalculatorTool";
import DiscountCalculatorTool from "./specific/DiscountCalculatorTool";
import GstTaxCalculatorTool from "./specific/GstTaxCalculatorTool";
import ScientificCalculatorTool from "./specific/ScientificCalculatorTool";
import SimpleInterestCalculatorTool from "./specific/SimpleInterestCalculatorTool";
import CompoundInterestCalculatorTool from "./specific/CompoundInterestCalculatorTool";
import RoiProfitCalculatorTool from "./specific/RoiProfitCalculatorTool";
import CalorieBmrHealthCalculatorsTool from "./specific/CalorieBmrHealthCalculatorsTool";
import UnitsConverterForBytesDataTool from "./specific/UnitsConverterForBytesDataTool";
import SpeedDistanceTimeConverterTool from "./specific/SpeedDistanceTimeConverterTool";

export const TOOLS_REGISTRY = {
  "Calculators & Converters": [
    {
      name: "Percentage Calculator",
      description: "Calculate percentages of numbers.",
      component: PercentageCalculatorTool,
    },
    {
      name: "Currency Converter",
      description: "Convert between different currencies.",
      component: CurrencyConverterTool,
    },
    {
      name: "Unit Converter",
      description: "Convert between different units of measurement.",
      component: UnitConverterTool,
    },
    {
      name: "Time / Date Converter",
      description: "Convert between different timezones and formats.",
      component: TimeDateConverterTool,
    },
    {
      name: "Loan / EMI Calculator",
      description: "Calculate loan payments and amortization schedules.",
      component: LoanEmiCalculatorTool,
    },
    {
      name: "Discount Calculator",
      description: "Calculate discounts on prices.",
      component: DiscountCalculatorTool,
    },
    {
      name: "GST / Tax Calculator",
      description: "Calculate GST and other taxes.",
      component: GstTaxCalculatorTool,
    },
    {
      name: "Scientific Calculator",
      description: "Perform advanced mathematical calculations.",
      component: ScientificCalculatorTool,
    },
    {
      name: "Simple Interest Calculator",
      description: "Calculate simple interest on a principal amount.",
      component: SimpleInterestCalculatorTool,
    },
    {
      name: "Compound Interest Calculator",
      description: "Calculate compound interest on a principal amount.",
      component: CompoundInterestCalculatorTool,
    },
    {
      name: "ROI / Profit Calculator",
      description: "Calculate return on investment and profit margins.",
      component: RoiProfitCalculatorTool,
    },
    {
      name: "Calorie / BMR / Health-related calculators",
      description: "Calculate calories, BMR, and other health metrics.",
      component: CalorieBmrHealthCalculatorsTool,
    },
    {
      name: "Units converter for bytes/data",
      description: "Convert between different units of data.",
      component: UnitsConverterForBytesDataTool,
    },
    {
      name: "Speed / Distance / Time converter",
      description: "Convert between speed, distance, and time.",
      component: SpeedDistanceTimeConverterTool,
    },
  ],
};
