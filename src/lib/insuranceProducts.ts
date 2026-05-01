export type SupportedLang = "en" | "fa" | "ar";
export type InsuranceCategoryKey = "personal" | "corporate";

export type InsuranceProduct = {
  slug: string;
  title: Record<SupportedLang, string>;
};

type InsuranceCategory = {
  title: Record<SupportedLang, string>;
  description: Record<SupportedLang, string>;
  audience: Record<SupportedLang, string>;
  products: InsuranceProduct[];
};

function product(slug: string, en: string, fa: string, ar: string): InsuranceProduct {
  return {
    slug,
    title: { en, fa, ar },
  };
}

const personalProducts: InsuranceProduct[] = [
  product("motor-insurance", "Motor Insurance", "بیمه خودرو", "تأمين المركبات"),
  product("health-insurance", "Health Insurance", "بیمه درمان", "التأمين الصحي"),
  product("travel-insurance", "Travel Insurance", "بیمه مسافرتی", "تأمين السفر"),
  product("personal-accident", "Personal Accident", "بیمه حوادث شخصی", "تأمين الحوادث الشخصية"),
  product("home-insurance", "Home Insurance", "بیمه منزل", "تأمين المنزل"),
  product("life-insurance", "Life Insurance", "بیمه عمر", "تأمين الحياة"),
  product("domestic-worker-insurance", "Domestic Worker Insurance", "بیمه کارگر خانگی", "تأمين العمالة المنزلية"),
  product("yacht-and-pleasure-craft", "Yacht & Pleasure Craft", "بیمه قایق و شناور تفریحی", "تأمين اليخوت والقوارب الترفيهية"),
  product("critical-illness", "Critical Illness", "بیمه بیماری‌های خاص", "تأمين الأمراض الحرجة"),
  product("child-annuity", "Child Annuity", "مستمری کودک", "معاش الطفل"),
  product("golf-insurance", "Golf Insurance", "بیمه گلف", "تأمين الغولف"),
  product("livestock-insurance", "Livestock Insurance", "بیمه دام", "تأمين الثروة الحيوانية"),
  product("relocation-insurance", "Relocation Insurance", "بیمه جابه‌جایی", "تأمين الانتقال"),
  product("gap-insurance", "Gap Insurance", "بیمه گپ", "تأمين الفجوة"),
  product("medical-malpractice", "Medical Malpractice", "بیمه قصور پزشکی", "تأمين الأخطاء الطبية"),
  product("hull-and-machineries", "Hull & Machineries", "بیمه بدنه و ماشین‌آلات", "تأمين الهيكل والآلات"),
  product("ucl-coverage", "UCL Coverage", "پوشش UCL", "تغطية UCL"),
  product("uwc-coverage", "UWC Coverage", "پوشش UWC", "تغطية UWC"),
  product("protect-plus", "Protect Plus", "پروتکت پلاس", "بروتكت بلس"),
  product("family-health-insurance", "Family Health Insurance", "بیمه درمان خانواده", "تأمين صحي للعائلة"),
  product("third-party-liability", "Third Party Liability", "مسئولیت در قبال شخص ثالث", "مسؤولية الطرف الثالث"),
];

const corporateProducts: InsuranceProduct[] = [
  product("group-medical", "Group Medical", "بیمه درمان گروهی", "التأمين الطبي الجماعي"),
  product("group-life", "Group Life", "بیمه عمر گروهی", "تأمين الحياة الجماعي"),
  product("group-personal-accident", "Group Personal Accident", "بیمه حوادث گروهی", "تأمين الحوادث الجماعية"),
  product("group-travel", "Group Travel", "بیمه مسافرتی گروهی", "تأمين السفر الجماعي"),
  product("workmens-compensation", "Workmen's Compensation", "بیمه غرامت کارکنان", "تأمين تعويض العمال"),
  product("property-all-risk", "Property All Risk", "بیمه تمام خطر اموال", "تأمين جميع أخطار الممتلكات"),
  product("fire-and-allied-perils", "Fire & Allied Perils", "بیمه آتش‌سوزی و خطرات تبعی", "تأمين الحريق والأخطار التابعة"),
  product("marine-cargo", "Marine Cargo", "بیمه باربری دریایی", "تأمين البضائع البحرية"),
  product("marine-hull", "Marine Hull", "بیمه بدنه شناور", "تأمين هيكل السفن"),
  product("contractor-all-risks-car", "Contractor All Risks (CAR)", "بیمه تمام خطر پیمانکاران", "تأمين جميع أخطار المقاولين"),
  product("erection-all-risks-ear", "Erection All Risks (EAR)", "بیمه تمام خطر نصب", "تأمين جميع أخطار التركيب"),
  product("contractors-plant-and-machinery", "Contractors Plant & Machinery", "بیمه ماشین‌آلات و تجهیزات پیمانکاری", "تأمين آليات ومعدات المقاولين"),
  product("engineering-insurance", "Engineering Insurance", "بیمه مهندسی", "التأمين الهندسي"),
  product("machinery-breakdown", "Machinery Breakdown", "بیمه شکست ماشین‌آلات", "تأمين أعطال الآلات"),
  product("electronic-equipment", "Electronic Equipment", "بیمه تجهیزات الکترونیکی", "تأمين المعدات الإلكترونية"),
  product("boiler-and-plant", "Boiler & Plant", "بیمه دیگ و تأسیسات", "تأمين الغلايات والمعدات"),
  product("fleet-motor-insurance", "Fleet Motor Insurance", "بیمه ناوگان خودرو", "تأمين أسطول المركبات"),
  product("public-liability", "Public Liability", "بیمه مسئولیت عمومی", "تأمين المسؤولية العامة"),
  product("professional-indemnity", "Professional Indemnity", "بیمه مسئولیت حرفه‌ای", "تأمين المسؤولية المهنية"),
  product("products-liability", "Products Liability", "بیمه مسئولیت محصولات", "تأمين مسؤولية المنتجات"),
  product("employers-liability", "Employer's Liability", "بیمه مسئولیت کارفرما", "تأمين مسؤولية صاحب العمل"),
  product("directors-and-officers-liability", "Directors & Officers Liability", "بیمه مسئولیت مدیران و کارکنان ارشد", "تأمين مسؤولية المدراء والمسؤولين"),
  product("fidelity-guarantee", "Fidelity Guarantee", "بیمه تضمین امانت", "تأمين ضمان الأمانة"),
  product("money-insurance", "Money Insurance", "بیمه پول", "تأمين الأموال"),
  product("goods-in-transit", "Goods in Transit", "بیمه کالا در حمل", "تأمين البضائع أثناء النقل"),
  product("energy-insurance", "Energy Insurance", "بیمه انرژی", "تأمين الطاقة"),
  product("cyber-insurance", "Cyber Insurance", "بیمه سایبری", "التأمين السيبراني"),
  product("aviation-insurance", "Aviation Insurance", "بیمه هوانوردی", "تأمين الطيران"),
  product("trade-credit", "Trade Credit", "بیمه اعتبار تجاری", "تأمين الائتمان التجاري"),
  product("business-travel", "Business Travel", "بیمه سفر کاری", "تأمين سفر الأعمال"),
  product("sme-package", "SME Package", "بسته بیمه کسب‌وکارهای کوچک و متوسط", "باقة تأمين المنشآت الصغيرة والمتوسطة"),
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