const villagesData = {
    "tichou": {
        name: "قرية تيشؤ",
        population: 150,
        description: "تقع شمال البلدية وتشتهر بالزراعة الجبلية وتربية النحل.",
        images: ["images/villages/tichy/az.jpg"]
    },
    "ahfir": {
        name: "قرية احفير",
        population: 980,
        description: "معروفة بينابيع المياه العذبة والصناعات التقليدية.",
        images: []
    },
    "agmoun": {
        name: "قرية اڨمون",
        population: 1450,
        description: "أكبر قرى البلدية من حيث المساحة.",
        images: []
    },
    "agni-foughal": {
        name: "قرية أڨني فوغال",
        population: 760,
        description: "قرية سياحية بإطلالة على الوادي.",
        images: []
    },
    "bousaada": {
        name: "قرية بوسعادة",
        population: 1100,
        description: "تضم المدرسة الابتدائية المركزية.",
        images: []
    },
    "amezzoug": {
        name: "قرية امزوڨ",
        population: 890,
        description: "تشتهر بزراعة الزيتون.",
        images: []
    },
    "guentija": {
        name: "قرية قنطيجة",
        population: 650,
        description: "قرية هادئة ذات طابع ريفي.",
        images: []
    },
    "ait-khettal": {
        name: "قرية أيت الختال",
        population: 1020,
        description: "بها منبع مائي تاريخي.",
        images: []
    },
    "taddart-ougmat": {
        name: "قرية تدارث اوقماط",
        population: 720,
        description: "معروفة بحرف الخشب.",
        images: []
    },
    "beni-mouhli": {
        name: "مركز بني موحلي",
        population: 3200,
        description: "المركز الإداري للبلدية ويضم مقر البلدية والعيادة.",
        images: []
    }
};

const associationsData = {
    "amal": {
        name: "جمعية الأمل الثقافية",
        type: "ثقافية",
        president: "محمد أوعمارة",
        members: 45,
        description: "تنظيم النشاطات الثقافية والمسرحية للشباب.",
        images: []
    },
    "khadra": {
        name: "جمعية البيئة الخضراء",
        type: "بيئية",
        president: "فاطمة بن صالح",
        members: 30,
        description: "حملات التشجير والنظافة على مستوى البلدية.",
        images: []
    },
    "takaful": {
        name: "جمعية التكافل الاجتماعي",
        type: "خيرية",
        president: "أحمد بوزيد",
        members: 60,
        description: "مساعدة العائلات المعوزة وتوزيع القفف الرمضانية.",
        images: []
    }
};

const sportsData = {
    "jsbm": {
        name: "شباب بني موحلي JSBM",
        type: "كرة القدم",
        founded: 1998,
        stadium: "الملعب البلدي بني موحلي",
        coach: "كريم بلقاسم",
        description: "الفريق الأول للبلدية ينشط في القسم الجهوي الثاني.",
        images: []
    },
    "academy": {
        name: "الأكاديمية الرياضية لبني موحلي",
        type: "تكوين الفئات الشبانية",
        founded: 2015,
        categories: "U13, U15, U17",
        description: "تكوين المواهب الشابة في كرة القدم والسلة.",
        images: []
    }
};

const servicesData = [
    {name: "الحالة المدنية", description: "استخراج شهادات الميلاد، الوفاة، عقود الزواج."},
    {name: "رخص البناء", description: "إيداع ومتابعة ملفات رخص البناء والتعمير."},
    {name: "النظافة العمومية", description: "رفع القمامة المنزلية وتنظيف الأحياء."},
    {name: "الإنارة العمومية", description: "صيانة وتصليح أعطاب الإنارة."},
    {name: "السكن الريفي", description: "استقبال ملفات الإعانة المالية للسكن الريفي."}
];
