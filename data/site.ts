export const business = {
  name: "AARAMBH CAREER ACADEMY",
  fullName: "Akshay Sir's AARAMBH CAREER ACADEMY & Physics IIT-NEET Group Tutions",
  city: "Nanded, Maharashtra",
  established: "2017",
  phone: "8483970019",
  phoneDisplay: "84839 70019",
  address:
    "1st Floor, OM Arcade, beside Rajarshi Shahu School, Vasant Nagar, Hyder Bagh, Dashmesh Nagar, Harsh Nagar, Nanded, Maharashtra 431602, India",
  mapUrl:
    "https://www.google.com/maps/place/Akshay+Sir's+AARAMBH+CAREER+ACADEMY+%26+Physics+IIT-NEET+Group+Tutions./@19.1709329,77.3160188,17z/data=!4m16!1m9!3m8!1s0x3bd1d7676e303635:0x2e04e8858e5dc10d!2sAkshay+Sir's+AARAMBH+CAREER+ACADEMY+%26+Physics+IIT-NEET+Group+Tutions.!8m2!3d19.1708034!4d77.3184837!9m1!1b1!16s%2Fg%2F11h_l295zr!3m5!1s0x3bd1d7676e303635:0x2e04e8858e5dc10d!8m2!3d19.1708034!4d77.3184837!16s%2Fg%2F11h_l295zr?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D",
  whatsappUrl: "https://wa.me/918483970019",
  callUrl: "tel:+918483970019"
} as const;

export const programs = [
  {
    eyebrow: "01",
    title: "IIT-JEE Preparation",
    description: "Focused preparation for engineering entrance pathways with concept-first classroom learning and problem solving.",
    accent: "yellow"
  },
  {
    eyebrow: "02",
    title: "NEET Preparation",
    description: "Structured science preparation for medical entrance aspirants, with emphasis on strong fundamentals and practice.",
    accent: "blue"
  },
  {
    eyebrow: "03",
    title: "CET Preparation",
    description: "Competitive exam support for students targeting CET alongside their higher-secondary academics.",
    accent: "orange"
  },
  {
    eyebrow: "04",
    title: "Foundation Programs",
    description: "Early concept building for school students, helping create a stronger base for future competitive exams.",
    accent: "navy"
  }
] as const;

export const supportPoints = [
  "Concept-focused classroom teaching",
  "Regular assessments and practice",
  "Doubt-clearing support",
  "Study material and academic guidance",
  "School-level foundation support",
  "Competitive exam oriented preparation"
];

export const testimonials = [
  {
    quote: "Students frequently praise the clarity of Physics explanations and the focus on conceptual understanding.",
    label: "Public review theme"
  },
  {
    quote: "Competitive exam preparation for IIT-JEE and NEET is repeatedly mentioned as a strength in public feedback.",
    label: "Public review theme"
  },
  {
    quote: "The academy combines classroom learning with regular practice and doubt support for exam preparation.",
    label: "Business information"
  }
] as const;

export const gallery = [
  { src: "/gallery/storefront.png", alt: "Aarambh Career Academy storefront in Nanded", span: "wide" },
  { src: "/gallery/classroom.png", alt: "Students attending a classroom session", span: "tall" },
  { src: "/gallery/students.png", alt: "Students with an Aarambh Career Academy teacher", span: "normal" },
  { src: "/gallery/felicitation.png", alt: "Student felicitation at Aarambh Career Academy", span: "normal" },
  { src: "/gallery/group.png", alt: "Group of students with faculty during an academy event", span: "wide" },
  { src: "/gallery/award.png", alt: "Academic achievement moment at an institutional event", span: "normal" }
] as const;
