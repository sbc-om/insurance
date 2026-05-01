export type SupportedLang = "en" | "fa" | "ar";
export type InsuranceCategoryKey = "personal" | "corporate";

export type InsuranceProduct = {
  slug: string;
  title: string;
};

type InsuranceCategory = {
  title: Record<SupportedLang, string>;
  description: Record<SupportedLang, string>;
  audience: Record<SupportedLang, string>;
  products: InsuranceProduct[];
};

const personalProducts: InsuranceProduct[] = [
  { slug: "motor-insurance", title: "Motor Insurance" },
  { slug: "health-insurance", title: "Health Insurance" },
  { slug: "travel-insurance", title: "Travel Insurance" },
  { slug: "personal-accident", title: "Personal Accident" },
  { slug: "home-insurance", title: "Home Insurance" },
  { slug: "life-insurance", title: "Life Insurance" },
  { slug: "domestic-worker-insurance", title: "Domestic Worker Insurance" },
  { slug: "yacht-and-pleasure-craft", title: "Yacht & Pleasure Craft" },
  { slug: "critical-illness", title: "Critical Illness" },
  { slug: "child-annuity", title: "Child Annuity" },
  { slug: "golf-insurance", title: "Golf Insurance" },
  { slug: "livestock-insurance", title: "Livestock Insurance" },
  { slug: "relocation-insurance", title: "Relocation Insurance" },
  { slug: "gap-insurance", title: "Gap Insurance" },
  { slug: "medical-malpractice", title: "Medical Malpractice" },
  { slug: "hull-and-machineries", title: "Hull & Machineries" },
  { slug: "ucl-coverage", title: "UCL Coverage" },
  { slug: "uwc-coverage", title: "UWC Coverage" },
  { slug: "protect-plus", title: "Protect Plus" },
  { slug: "family-health-insurance", title: "Family Health Insurance" },
  { slug: "third-party-liability", title: "Third Party Liability" },
];

const corporateProducts: InsuranceProduct[] = [
  { slug: "group-medical", title: "Group Medical" },
  { slug: "group-life", title: "Group Life" },
  { slug: "group-personal-accident", title: "Group Personal Accident" },
  { slug: "group-travel", title: "Group Travel" },
  { slug: "workmens-compensation", title: "Workmen's Compensation" },
  { slug: "property-all-risk", title: "Property All Risk" },
  { slug: "fire-and-allied-perils", title: "Fire & Allied Perils" },
  { slug: "marine-cargo", title: "Marine Cargo" },
  { slug: "marine-hull", title: "Marine Hull" },
  { slug: "contractor-all-risks-car", title: "Contractor All Risks (CAR)" },
  { slug: "erection-all-risks-ear", title: "Erection All Risks (EAR)" },
  { slug: "contractors-plant-and-machinery", title: "Contractors Plant & Machinery" },
  { slug: "engineering-insurance", title: "Engineering Insurance" },
  { slug: "machinery-breakdown", title: "Machinery Breakdown" },
  { slug: "electronic-equipment", title: "Electronic Equipment" },
  { slug: "boiler-and-plant", title: "Boiler & Plant" },
  { slug: "fleet-motor-insurance", title: "Fleet Motor Insurance" },
  { slug: "public-liability", title: "Public Liability" },
  { slug: "professional-indemnity", title: "Professional Indemnity" },
  { slug: "products-liability", title: "Products Liability" },
  { slug: "employers-liability", title: "Employer's Liability" },
  { slug: "directors-and-officers-liability", title: "Directors & Officers Liability" },
  { slug: "fidelity-guarantee", title: "Fidelity Guarantee" },
  { slug: "money-insurance", title: "Money Insurance" },
  { slug: "goods-in-transit", title: "Goods in Transit" },
  { slug: "energy-insurance", title: "Energy Insurance" },
  { slug: "cyber-insurance", title: "Cyber Insurance" },
  { slug: "aviation-insurance", title: "Aviation Insurance" },
  { slug: "trade-credit", title: "Trade Credit" },
  { slug: "business-travel", title: "Business Travel" },
  { slug: "sme-package", title: "SME Package" },
];

export const insuranceCategories: Record<InsuranceCategoryKey, InsuranceCategory> = {
  personal: {
    title: {
      en: "Personal Insurance",
      fa: "بیمه شخصی",
      ar: "التأمين الشخصي",
    },
    description: {
      en: "A structured directory of retail insurance products for individuals, families, homes, travel, health, and personal assets.",
      fa: "فهرستی ساختاریافته از محصولات بیمه خرده‌فروشی برای افراد، خانواده‌ها، خانه، سفر، سلامت و دارایی‌های شخصی.",
      ar: "دليل منظم لمنتجات التأمين المخصصة للأفراد والعائلات والمنازل والسفر والصحة والأصول الشخصية.",
    },
    audience: {
      en: "Retail",
      fa: "خرده‌فروشی",
      ar: "تجزئة",
    },
    products: personalProducts,
  },
  corporate: {
    title: {
      en: "Commercial Insurance",
      fa: "بیمه شرکتی",
      ar: "التأمين التجاري",
    },
    description: {
      en: "A structured directory of business insurance products covering employee benefits, property, liability, transport, engineering, and specialty risks.",
      fa: "فهرستی ساختاریافته از محصولات بیمه کسب‌وکار شامل مزایای کارکنان، اموال، مسئولیت، حمل‌ونقل، مهندسی و ریسک‌های تخصصی.",
      ar: "دليل منظم لمنتجات تأمين الأعمال يشمل مزايا الموظفين والممتلكات والمسؤوليات والنقل والهندسة والمخاطر المتخصصة.",
    },
    audience: {
      en: "Corporate",
      fa: "شرکتی",
      ar: "شركات",
    },
    products: corporateProducts,
  },
};

export function getInsuranceCategory(categoryKey: InsuranceCategoryKey) {
  return insuranceCategories[categoryKey];
}

export function getInsuranceProduct(categoryKey: InsuranceCategoryKey, slug: string) {
  return insuranceCategories[categoryKey].products.find((product) => product.slug === slug);
}