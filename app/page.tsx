"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// TÜM SİTENİN ÇEVİRİ VERİSİ
const translations = {
  tr: {
    brand: "Timo to Work International B.V.",
    navHome: "Ana Sayfa",
    navAbout: "Hakkımızda",
    navServices: "Hizmetler",
    navGallery: "Galeri",
    navAppointment: "Randevu",
    navContact: "İletişim",
    navApplyForm: "Başvuru Formu",
    btnCallNow: "Şimdi Arayın",
    heroTitle: "Timo to Work International B.V.",
    heroSub: "Küresel pazarlarda güvenilir iş gücü çözümleri, sınır ötesi danışmanlık ve uluslararası ticaret entegrasyonu.",
    sectionTitle: "Faaliyet Alanlarımız & Hizmetlerimiz",
    sectionSub: "Timo to Work International B.V. çatısı altında sunduğumuz global çözümler",
    card1Title: "Fuar Standı Tasarımı & Proje Planlama",
    card1Desc: "Fuar standı tasarımı, kurulumu ve tüm proje süreçlerini baştan sona planlıyor; ilk fikirden anahtar teslim uygulamaya kadar profesyonel çözümler sunuyoruz.",
    card2Title: "Nitelikli İş Gücü Sağlama",
    card2Desc: "Fuar süreçleri, lojistik operasyonlar, kurulum ve söküm işleri için ihtiyaç duyduğunuz nitelikli ve uzman iş gücünü profesyonelce sağlıyoruz.",
    card3Title: "Lojistik & Konaklama Yönetimi",
    card3Desc: "Konaklama organizasyonlarından saha operasyonlarına kadar tüm süreçlerin yerinde, pürüzsüz ve kusursuz bir şekilde yürütülmesini yönetiyoruz.",
    card4Title: "Uluslararası İthalat Operasyonları",
    card4Desc: "Dünya genelindeki üreticilerden en kaliteli ürün ve ham maddelerin tedarik süreçlerini, yasal mevzuatlara tam uyumlu olarak sınır ötesi operasyonlarla yönetiyoruz.",
    card5Title: "Küresel İhracat Çözümleri",
    card5Desc: "Ürün ve hizmetleri uluslararası pazarlarla buluşturuyor, gümrükleme, hedef pazar analizi og lojistik ağ yönetimini uçtan uca organize ediyoruz.",
    formTitle: "Bizimle İletişime Geçin",
    formSub: "Küresel ticaret ve hizmet çözümlerimiz için formu doldurabilirsiniz.",
    formLabelName: "Şirket / Ad Soyad",
    formLabelEmail: "E-Posta Adresi",
    formLabelMsg: "Mesajınız",
    formBtn: "Mesaj Gönder",
    footerText: "© 2026 Timo to Work International B.V. Tüm Hakları Saklıdır.",
    companyDesc: "Almanya ve Hollanda merkezli operasyonlarımızla, fuar lojistiğinden uluslararası ithalat ve ihracat süreçlerine kadar her alanda yanınızdayız.",
    galleryTitle: "Kurumsal Galeri",
    gallerySub: "Operasyonlarımızdan, fuar kurulumlarımızdan ve küresel lojistik ağımızdan kareler",
    aptTitle: "Online Randevu Talebi",
    aptSub: "Uzman kadromuzla görüşmek ve projelerinizi planlamak için uygun bir zaman dilimi seçin.",
    aptTopic: "Görüşme Konusu",
    aptDate: "Tarih Seçimi",
    aptTime: "Saat Dilimi",
    aptBtn: "Randevu Talebi Oluştur",
    jobTitle: "Detaylı İş Başvuru Formu",
    jobSub: "Almanya ve Hollanda operasyonlarımız için lütfen aşağıdaki formu eksiksiz doldurun.",
    secPersonal: "1. Kişisel Bilgiler",
    lblFullName: "Tam Adınız *",
    lblDate: "Tarih / Doğum Tarihi *",
    lblEmail: "E-Posta Adresi *",
    lblPhone: "Mobil Telefon Numarası *",
    lblAddress: "Tam Adresiniz *",
    lblGender: "Cinsiyet *",
    lblGender1: "Erkek",
    lblGender2: "Kadın",
    lblGender3: "Belirtmek İstemiyorum",
    lblSvNum: "Sosyal Güvenlik Numarası (SV-Nummer)",
    lblJobType: "İstenen Çalışma Türü",
    lblJobType1: "Tam Zamanlı",
    lblJobType2: "Yarı Zamanlı",
    lblSalary: "Maaş Beklentisi (€)",
    lblPosition: "Başvurulan Pozisyon",
    secPermit: "2. Çalışma İzni & Deneyim",
    lblExperience: "Mesleki deneyiminiz var mı?",
    lblExpDates: "Cevabınız evet ise, iş başlangıç ve bitiş tarihlerini belirtin",
    secEducation: "3. Eğitim Bilgileri",
    lblSchool: "Okul / Üniversite *",
    lblCity: "Şehir / Eyalet *",
    lblVon: "Başlangıç *",
    lblBis: "Bitiş *",
    lblAbschluss: "Mezuniyet Durumu *",
    lblAbschluss1: "Lise / Dengi",
    lblAbschluss2: "Lisans / Üniversite",
    lblAbschluss3: "Yüksek Lisans / Doktora",
    lblDiplom: "Diploma Mevcut mu?",
    optSelect: "Seçiniz",
    optYes: "Evet",
    optNo: "Hayır",
    jobBtn: "Şimdi Başvur",
    stayInTouch: "İletişimde Kalın",
    galCard1Title: "Messebau Projeleri",
    galCard1Sub: "Stand Tasarım & Kurulum",
    galCard2Title: "Nitelikli İş Gücü",
    galCard2Sub: "Uzman Kadro Tedariği",
    galCard3Title: "Uluslararası Lojistik",
    galCard3Sub: "Sınır Ötesi Taşıma & Depolama",
    galCard4Title: "Küresel İthalat Operasyonları",
    galCard4Sub: "Tedarik Zinciri Yönetimi",
    galCard5Title: "Uluslararası İhracat",
    galCard5Sub: "Global Pazar Entegrasyonu",
    galCard6Title: "Avrupa Operasyon Merkezleri",
    galCard6Sub: "Amsterdam & Almanya Koordinasyon",
    statCard1: "Tamamlanan Fuar Standı",
    statCard2: "Aktif Uzman Personel",
    statCard3: "Uluslararası Ticaret Ülkesi",
    statCard4: "Müşteri Memnuniyeti",
    stepTitle: "Operasyonel Süreç Adımları",
    card1Steps: ["Konsept ve 3D Stand Tasarımı", "Malzeme Seçimi ve Üretim", "Lojistik ve Fuar Alanına Nakliye", "Yerinde Kurulum ve Anahtar Teslim", "Fuar Sonrası Söküm ve Depolama"],
    card2Steps: ["Uzman Montaj Kadrosu Tedariği", "Sertifikalı Forklift ve Ekipman Operatörleri", "Çok Dilli Fuar Host ve Hostesleri", "Yasal Mevzuat ve AÜG Sözleşme Yönetimi"],
    card3Steps: ["Avrupa Genelinde Otel ve Konaklama Organizasyonu", "VIP Transfer ve Ekip Lojistiği", "Saha Koordinasyon ve Süreç Yönetimi", "7/24 Yerinde Destek ve Asistanlık"],
    card4Steps: ["Global Üretici ve Tedarikçi Analizi", "Gümrükleme ve Uluslararası Mevzuat Yönetimi", "Kalite Kontrol ve Teslimat Takibi", "Sınır Ötesi Lojistik Organizasyonu"],
    card5Steps: ["Hedef Pazar Analizi ve Müşteri Bulma", "Uluslararası Sözleşme ve Hukuki Danışmanlık", "Gümrük ve İhracat Beyanname İşlemleri", "Uçtan Uca Lojistik ve Dağıtım Ağı"],
    badgeTitle: "Yasal Uyumluluk & Sertifikalar",
    badgeSub: "Avrupa Birliği ve Almanya standartlarında tam yasal güvence ve regülasyon uyumluluğu",
    badge1Name: "AÜG Uyumluluğu",
    badge1Desc: "Alman İş Gücü Sağlama Kanunu standartlarına tam uyumlu operasyon yönetimi",
    badge2Name: "GDPR Güvencesi",
    badge2Desc: "Avrupa Birliği Genel Veri Koruma Regülasyonu'na uygun veri güvenliği altyapısı",
    badge3Name: "ISO 9001 Standartları",
    badge3Desc: "Uluslararası kalite yönetim ve sınır ötesi hizmet standardizasyonu",
    badge4Name: "AB Çalışma İzni",
    badge4Desc: "Sınır ötesi projelerde tam donanımlı ve yasal iş gücü mobilizasyonu",
    heroTag: "⚡ GLOBAL OPERASYONEL GÜÇ",
    heroBtnSecondary: "Hizmetlerimizi İnceleyin",
    visionTitle: "Vizyon & Değerlerimiz",
    vision1Name: "Küresel Güven",
    vision1Desc: "Sınır ötesi tüm operasyonlarda %100 yasal uyumluluk.",
    vision2Name: "Hız & Esneklik",
    vision2Desc: "İhtiyaç duyulan iş gücünü ve lojistiği anında mobilize etme.",
    vision3Name: "Sürdürülebilir Ortaklık",
    vision3Desc: "Avrupa pazarında uzun vadeli, köklü ticari ilişkiler.",
    aiTitle: "TTW Yapay Zeka Asistanı",
    aiSub: "Şirketimiz ve hizmetlerimiz hakkında her şeyi sorabilirsiniz.",
    aiPlaceholder: "Bir soru yazın...",
    aiWelcome: "Merhaba! Ben TTW Yapay Zeka Asistanı. Size fuar standı kurulumu, lojistik, uzman kadro tedariği veya ithalat/ihracat süreçlerimiz hakkında nasıl yardımcı olabilirim?"
  },
  de: {
    brand: "Timo to Work",
    navHome: "Startseite",
    navAbout: "Über uns",
    navServices: "Dienstleistungen",
    navGallery: "Galerie",
    navAppointment: "Termin",
    navContact: "Kontakt",
    navApplyForm: "Bewerbungsformular",
    btnCallNow: "Jetzt anrufen",
    heroTitle: "Timo to Work International B.V.",
    heroSub: "Zuverlässige Arbeitskraftlösungen, grenzüberschreitende Beratung und internationale Handelsintegration auf globalen Märkten.",
    sectionTitle: "Unsere Tätigkeitsbereiche & Dienstleistungen",
    sectionSub: "Globale Lösungen, die wir unter dem Dach von Timo to Work International B.V. anbieten",
    card1Title: "Messebau & Projektplanung",
    card1Desc: "Wir planen, gestalten und realisieren Messestände – von der ersten Idee bis zur fertigen Umsetzung professionell aus einer Hand.",
    card2Title: "Personalbereitstellung",
    card2Desc: "Qualifizierte Fachkräfte für Aufbau, Abbau, Logistik, Betreuung und alle Messeprozesse stellen wir Ihnen professionell zur Verfügung.",
    card3Title: "Logistik & Hotelmanagement",
    card3Desc: "Reibungslose Organisation von Unterkünften, Logistik vor Ort und Abläufen vor Ort wird von uns perfekt gesteuert.",
    card4Title: "Internationaler Import",
    card4Desc: "Wir verwalten die Beschaffungsprozesse der hochwertigsten Produkte und Rohstoffe von globalen Herstellern in voller Übereinstimmung mit den gesetzlichen Vorschriften.",
    card5Title: "Globaler Export",
    card5Desc: "Wir bringen Produkte und Dienstleistungen auf internationale Märkte und organisieren Zollabwicklung, Zielmarktanalyse und Logistiknetzwerkmanagement von Ende zu Ende.",
    formTitle: "Kontaktieren Sie uns",
    formSub: "Füllen Sie das Formular aus, um Informationen über unsere globalen Handels- und Servicelösungen zu erhalten.",
    formLabelName: "Unternehmen / Name Nachname",
    formLabelEmail: "E-Mail-Adresse",
    formLabelMsg: "Ihre Nachricht",
    formBtn: "Nachricht senden",
    footerText: "© 2026 Timo to Work International B.V. Alle Rechte vorbehalten.",
    companyDesc: "Mit unseren Aktivitäten in Deutschland und den Niederlanden stehen wir Ihnen in jedem Bereich zur Seite, von der Messelogistik bis hin zu Import- und Exportprozessen.",
    galleryTitle: "Unternehmensgalerie",
    gallerySub: "Impressionen aus unseren Aktivitäten, Messebauten und unserem globalen Logistiknetzwerk",
    aptTitle: "Online-Terminanfrage",
    aptSub: "Wählen Sie ein passendes Zeitfenster, um sich mit unserem Expertenteam zu beraten und Ihre Projekte zu planen.",
    aptTopic: "Besprechungsthema",
    aptDate: "Datum auswählen",
    aptTime: "Uhrzeit auswählen",
    aptBtn: "Terminanfrage senden",
    jobTitle: "Bewerbungsformular",
    jobSub: "Bitte füllen Sie das folgende Formular für unsere Aktivitäten in Deutschland und den Niederlanden vollständig aus.",
    secPersonal: "1. Persönliche Informationen",
    lblFullName: "Vollständiger Name *",
    lblDate: "Datum *",
    lblEmail: "E-Mail-Adresse *",
    lblPhone: "Mobilnummer *",
    lblAddress: "Komplette Adresse *",
    lblGender: "Geschlecht *",
    lblGender1: "Männlich",
    lblGender2: "Weiblich",
    lblGender3: "Keine Angabe",
    lblSvNum: "Sozialversicherungsnummer (SV-Nummer)",
    lblJobType: "Art der gewünschten Beschäftigung",
    lblJobType1: "Vollzeit",
    lblJobType2: "Teilzeit",
    lblSalary: "Gehaltsvorstellung: €",
    lblPosition: "Beworbene Position",
    secPermit: "2. Arbeitserlaubnis",
    lblExperience: "Verfügen Sie über Berufserfahrung?",
    lblExpDates: "Falls ja, Start- und Enddatum angeben.",
    secEducation: "3. Ausbildung",
    lblSchool: "Schule *",
    lblCity: "Stadt / Bundesland *",
    lblVon: "Von *",
    lblBis: "Bis *",
    lblAbschluss: "Abschluss? *",
    lblAbschluss1: "Abitur / Schule",
    lblAbschluss2: "Bachelor",
    lblAbschluss3: "Master / Promotion",
    lblDiplom: "Diplom?",
    optSelect: "Bitte auswählen",
    optYes: "Ja",
    optNo: "Nein",
    jobBtn: "Jetzt bewerben",
    stayInTouch: "Bleiben Sie in Kontakt",
    galCard1Title: "Messebau-Projekte",
    galCard1Sub: "Standdesign & Installation",
    galCard2Title: "Qualifizierte Arbeitskräfte",
    galCard2Sub: "Experten-Personalbereitstellung",
    galCard3Title: "Internationale Logistik",
    galCard3Sub: "Grenzüberschreitender Transport & Lagerung",
    galCard4Title: "Globale Importgeschäfte",
    galCard4Sub: "Lieferkettenmanagement",
    galCard5Title: "Internationaler Export",
    galCard5Sub: "Globale Marktintegration",
    galCard6Title: "Europäische Betriebsleiter",
    galCard6Sub: "Amsterdam & Deutschland Koordination",
    statCard1: "Abgeschlossene Messestände",
    statCard2: "Aktive Fachkräfte",
    statCard3: "Internationale Handelsländer",
    statCard4: "Kundenzufriedenheit",
    stepTitle: "Operative Prozessschritte",
    card1Steps: ["Konzept & 3D-Standdesign", "Materialauswahl & Produktion", "Logistik & Transport zum Messegelände", "Montage vor Ort & Schlüsselfertige Übergabe", "Demontage & Einlagerung nach der Messe"],
    card2Steps: ["Bereitstellung von erfahrenen Monteuren", "Zertifizierte Stapler- & Gerätefahrer", "Mehrsprachiges Messepersonal (Hostessen/Hosts)", "Rechtliche Absicherung & AÜG-Konformität"],
    card3Steps: ["Hotel- & Unterkunftsmanagement in Europa", "VIP-Transfer & Teamlogistik", "Koordination vor Ort & Prozessleitung", "7/24 Support & Assistenz vor Ort"],
    card4Steps: ["Globale Hersteller- & Lieferantenanalyse", "Zollabwicklung & Außenhandelsrecht", "Qualitätskontrolle & Lieferantenüberwachung", "Grenzüberschreitende Logistikorganisation"],
    card5Steps: ["Zielmarktanalyse & Kundenakquise", "Internationale Verträge & Rechtsberatung", "Zoll- & Exportanmeldungen", "End-to-End Logistik & Vertriebsnetzwerk"],
    badgeTitle: "Rechtliche Konformität & Zertifikate",
    badgeSub: "Volle rechtliche Absicherung und Einhaltung der Standards der Europäischen Union und Deutschlands",
    badge1Name: "AÜG-Konformität",
    badge1Desc: "Volle Übereinstimmung mit den Standards des Arbeitnehmerüberlassungsgesetzes (AÜG)",
    badge2Name: "DSGVO-Garantie",
    badge2Desc: "Datensicherheitsinfrastruktur gemäß der Allgemeinen Datenschutzverordnung der EU",
    badge3Name: "ISO 9001 Standards",
    badge3Desc: "Internationale Qualitätsmanagement- und grenzüberschreitende Dienstleistungsstandardisierung",
    badge4Name: "EU-Arbeitserlaubnis",
    badge4Desc: "Volle rechtliche und ausgestattete Arbeitskraftmobilisierung bei grenzüberschreitenden Projekten",
    heroTag: "⚡ GLOBALE OPERATIVE KRAFT",
    heroBtnSecondary: "Unsere Dienstleistungen",
    visionTitle: "Vision & Werte",
    vision1Name: "Globales Vertrauen",
    vision1Desc: "100% rechtliche Konformität bei allen grenzüberschreitenden Aktivitäten.",
    vision2Name: "Geschwindigkeit & Flexibilität",
    vision2Desc: "Sofortige Mobilisierung von benötigten Arbeitskräften und Logistik.",
    vision3Name: "Nachhaltige Partnerschaft",
    vision3Desc: "Langfristige, tief verwurzelte Handelsbeziehungen auf dem europäischen Markt.",
    aiTitle: "TTW KI-Assistent",
    aiSub: "Fragen Sie alles über unser Unternehmen und unsere Dienstleistungen.",
    aiPlaceholder: "Schreiben Sie eine Frage...",
    aiWelcome: "Hallo! Ich bin der TTW KI-Assistent. Wie kann ich Ihnen bei Messebau, Logistik, Personalbereitstellung oder Import/Export-Prozessen helfen?"
  },
  en: {
    brand: "Timo to Work",
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navGallery: "Gallery",
    navAppointment: "Appointment",
    navContact: "Contact",
    navApplyForm: "Application Form",
    btnCallNow: "Call Now",
    heroTitle: "Timo to Work International B.V.",
    heroSub: "Reliable workforce solutions, cross-border consultancy, and international trade integration in global markets.",
    sectionTitle: "Our Fields of Activity & Services",
    sectionSub: "Global solutions we offer under the umbrella of Timo to Work International B.V.",
    card1Title: "Exhibition Stand Design & Project Planning",
    card1Desc: "We plan, design, and realize exhibition stands – providing professional solutions from the initial idea to final implementation.",
    card2Title: "Personnel Provision & Workforce Solutions",
    card2Desc: "We professionally provide the qualified and expert workforce you need for exhibition processes, logistics, installation, and dismantling.",
    card3Title: "Logistics & Accommodation Management",
    card3Desc: "We seamlessly manage everything from accommodation organizations to on-site operations smoothly and flawlessly.",
    card4Title: "International Import Operations",
    card4Desc: "We manage the procurement processes of top-quality products and raw materials from global manufacturers, fully complying with international legal regulations.",
    card5Title: "Global Export Solutions",
    card5Desc: "We connect products and services with international markets, organizing customs clearance, target market analysis, and end-to-end logistics network management.",
    formTitle: "Contact Us",
    formSub: "Fill out the form for our global trade and service solutions.",
    formLabelName: "Company / Full Name",
    formLabelEmail: "Email Address",
    formLabelMsg: "Your Message",
    formBtn: "Send Message",
    footerText: "© 2026 Timo to Work International B.V. All Rights Reserved.",
    companyDesc: "With our operations based in Germany and the Netherlands, we stand by your side in every field from exhibition logistics to international import and export processes.",
    galleryTitle: "Corporate Gallery",
    gallerySub: "Moments from our operations, exhibition installations, and global logistics network",
    aptTitle: "Online Appointment Request",
    aptSub: "Choose a suitable time slot to consult with our expert team and plan your projects.",
    aptTopic: "Meeting Topic",
    aptDate: "Select Date",
    aptTime: "Select Time Slot",
    aptBtn: "Request Appointment",
    jobTitle: "Application Form",
    jobSub: "Please fill out the form completely for our operations in Germany and the Netherlands.",
    secPersonal: "1. Personal Information",
    lblFullName: "Full Name *",
    lblDate: "Date *",
    lblEmail: "Email Address *",
    lblPhone: "Mobile Number *",
    lblAddress: "Complete Address *",
    lblGender: "Gender *",
    lblGender1: "Male",
    lblGender2: "Female",
    lblGender3: "Not Specified",
    lblSvNum: "Social Security Number (SV-Nummer)",
    lblJobType: "Type of Employment Desired",
    lblJobType1: "Full-Time",
    lblJobType2: "Part-Time",
    lblSalary: "Salary Expectation: €",
    lblPosition: "Position Applied For",
    secPermit: "2. Work Permit & Experience",
    lblExperience: "Do you have professional experience?",
    lblExpDates: "If yes, specify start and end dates.",
    secEducation: "3. Education",
    lblSchool: "School *",
    lblCity: "City / State *",
    lblVon: "From *",
    lblBis: "To *",
    lblAbschluss: "Graduation Status? *",
    lblAbschluss1: "High School",
    lblAbschluss2: "Bachelor",
    lblAbschluss3: "Master / PhD",
    lblDiplom: "Diploma Available?",
    optSelect: "Select",
    optYes: "Yes",
    optNo: "No",
    jobBtn: "Apply Now",
    stayInTouch: "Stay in Touch",
    galCard1Title: "Messebau Projects",
    galCard1Sub: "Stand Design & Installation",
    galCard2Title: "Qualified Workforce",
    galCard2Sub: "Expert Personnel Provision",
    galCard3Title: "International Logistics",
    galCard3Sub: "Cross-Border Transport & Storage",
    galCard4Title: "Global Import Operations",
    galCard4Sub: "Supply Chain Management",
    galCard5Title: "International Export",
    galCard5Sub: "Global Market Integration",
    galCard6Title: "European Operation Centers",
    galCard6Sub: "Amsterdam & Germany Coordination",
    statCard1: "Completed Exhibition Stands",
    statCard2: "Active Specialist Personnel",
    statCard3: "International Trade Countries",
    statCard4: "Customer Satisfaction",
    stepTitle: "Operational Process Steps",
    card1Steps: ["Concept & 3D Stand Design", "Material Selection & Production", "Logistics & Transport to Exhibition Ground", "On-site Installation & Turnkey Delivery", "Dismantling & Storage Post-Exhibition"],
    card2Steps: ["Provision of Expert Installation Crews", "Certified Forklift & Equipment Operators", "Multilingual Exhibition Hosts & Hostesses", "Legal Compliance & AÜG Contract Management"],
    card3Steps: ["Hotel & Accommodation Management Across Europe", "VIP Transfer & Team Logistics", "On-site Coordination & Process Management", "24/7 On-site Support & Assistance"],
    card4Steps: ["Global Manufacturer & Supplier Analysis", "Customs Clearance & Trade Regulation Management", "Quality Control & Delivery Tracking", "Cross-Border Logistics Organization"],
    card5Steps: ["Target Market Analysis & Client Acquisition", "International Contracts & Legal Consultancy", "Customs & Export Declarations", "End-to-End Logistics & Distribution Network"],
    badgeTitle: "Legal Compliance & Certificates",
    badgeSub: "Full legal assurance and compliance with European Union and German regulations",
    badge1Name: "AÜG Compliance",
    badge1Desc: "Operation management in full compliance with the German Temporary Agency Work Act",
    badge2Name: "GDPR Compliant",
    badge2Desc: "Data security infrastructure aligned with the EU General Data Protection Regulation",
    badge3Name: "ISO 9001 Standards",
    badge3Desc: "International quality management and cross-border service standardization",
    badge4Name: "EU Work Permit",
    badge4Desc: "Fully equipped and legal workforce mobilization in cross-border projects",
    heroTag: "⚡ GLOBAL OPERATIONAL POWER",
    heroBtnSecondary: "Explore Services",
    visionTitle: "Vision & Values",
    vision1Name: "Global Trust",
    vision1Desc: "100% legal compliance in all all cross-border operations.",
    vision2Name: "Speed & Flexibility",
    vision2Desc: "Instant mobilization of required workforce and logistics.",
    vision3Name: "Sustainable Partnership",
    vision3Desc: "Long-term, deep-rooted commercial relationships in the European market.",
    aiTitle: "TTW AI Assistant",
    aiSub: "Ask anything about our company and services.",
    aiPlaceholder: "Type a question...",
    aiWelcome: "Hello! I am the TTW AI Assistant. How can I help you with exhibition stand design, logistics, personnel provision, or import/export processes?"
  }
};

// Ortak Animasyon Ayar Şablonu (Aşağıdan hafifçe kayarak belirme)
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Home() {
  const [lang, setLang] = useState<'tr' | 'de' | 'en'>('de');
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [aiOpen, setAiOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai', text: string }>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const t = translations[lang];

  const [scrolled, setScrolled] = useState<boolean>(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }

  const handleAiSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (!inputValue.trim()) return;

     const userText = inputValue.trim();
     const newMessages = [...messages, { sender: 'user' as const, text: userText }];
     setMessages(newMessages);
     setInputValue('');

     setTimeout(() => {
       const lowerText = userText.toLowerCase().trim();
       let reply = "";

       // Gelişmiş Dil Algılama Motoru
       const isTurkish = /[çğıöşü]/i.test(lowerText) || lowerText.includes('ne is') || lowerText.includes('kim') || lowerText.includes('neler') || lowerText.includes('adres') || lowerText.includes('iletisim') || lowerText.includes('sirket') || lowerText.includes('tamam') || lowerText.includes('tesekkur');
       const isGerman = lowerText.includes('was macht') || lowerText.includes('wer ist') || lowerText.includes('gründer') || lowerText.includes('adresse') || lowerText.includes('kontakt') || lowerText.includes('danke') || lowerText.includes('tschüss');
       
       const replyLang = isTurkish ? 'tr' : (isGerman ? 'de' : lang);

       if (replyLang === 'tr') {
         // --- TÜRKÇE GELİŞMİŞ BİLGİ HAVUZU & SOHBET SONLANDIRMA ---
         
         // Nezaket ve Sohbet Sonlandırma Kökleri (image_f326d7.png Çözümü)
         if (lowerText === 'tamam' || lowerText === 'ok' || lowerText.includes('anladım') || lowerText.includes('Harika') || lowerText.includes('süper')) {
           reply = "Harika! Başka bir sorunuz olursa kurucumuz Eyüp Gavas liderliğindeki TTW ekibi olarak her zaman buradayız. Yardımcı olabileceğim başka bir konu var mı?";
         }
         else if (lowerText.includes('teşekkür') || lowerText.includes('sağol') || lowerText.includes('tesekkur')) {
           reply = "Rica ederim! Timo to Work International B.V. adına size yardımcı olmaktan mutluluk duydum. İyi günler dilerim!";
         }
         else if (lowerText.includes('görüşürüz') || lowerText.includes('hoşça kal') || lowerText.includes('baybay') || lowerText.includes('kapat')) {
           reply = "Görüşmek üzere! İhtiyacınız olduğunda sağ üstteki 'Şimdi Arayın' butonundan veya sol alttaki WhatsApp hattımızdan bize her zaman ulaşabilirsiniz. Kendinize iyi bakın!";
         }
         else if (lowerText.includes('merhaba') || lowerText.includes('selam')) {
           reply = "Merhaba! TTW Yapay Zeka Asistanı'na hoş geldiniz. Şirketimiz, fuar stand kurulum süreçlerimiz (Messebau), AÜG iş gücü tedariğimiz veya iş başvurularınız hakkında size nasıl yardımcı olabilirim?";
         }
         
         // Kurumsal ve Stratejik Bilgiler
         else if (lowerText.includes('kurucu') || lowerText.includes('sahibi') || lowerText.includes('eyüp') || lowerText.includes('gavas') || lowerText.includes('kim kurdu') || lowerText.includes('yönetici')) {
           reply = "Timo to Work International B.V., kurucumuz ve üst düzey yöneticimiz Eyüp Gavas tarafından yönetilmektedir. Kendisi Avrupa pazarında fuar lojistiği, AÜG iş gücü mobilizasyonu ve uluslararası ticaret entegrasyonu süreçlerine liderlik etmektedir.";
         }
         else if (lowerText.includes('ne iş') || lowerText.includes('hizmet') || lowerText.includes('neler yapıyor') || lowerText.includes('faaliyet') || lowerText.includes('şirket nedir')) {
           reply = "Şirketimiz 5 ana uzmanlık alanında faaliyet gösterir: 1) Fuar Standı Tasarımı & Proje Planlama (Messebau), 2) AÜG yasal mevzuatına uygun Nitelikli İş Gücü Sağlama, 3) Lojistik & Konaklama Yönetimi (Avrupa genelinde transfer/otel), 4) Uluslararası İthalat Operasyonları, 5) Küresel İhracat Çözümleri.";
         }
         else if (lowerText.includes('fuar') || lowerText.includes('stand') || lowerText.includes('messebau') || lowerText.includes('tasarım')) {
           reply = "Fuar süreçlerimiz 5 adımdan oluşur: Konsept ve 3D stand tasarımı, malzeme seçimi/üretim, lojistik nakliye, yerinde anahtar teslim kurulum ve fuar sonrası söküm/depolama. Tüm süreci Eyüp Gavas güvencesiyle tek elden yönetiyoruz.";
         }
         else if (lowerText.includes('personel') || lowerText.includes('iş gücü') || lowerText.includes('kadro') || lowerText.includes('tedarik')) {
           reply = "Avrupa'daki fuar, kurulum ve lojistik projeleriniz için uzman montaj kadrosu, sertifikalı forklift operatörleri ve çok dilli fuar host/hostesleri sağlıyoruz. Tüm kadromuz Alman İş Gücü Sağlama Kanunu (AÜG) ile tam uyumludur.";
         }
         else if (lowerText.includes('vizyon') || lowerText.includes('misyon') || lowerText.includes('değer') || lowerText.includes('hedef')) {
           reply = "Şirketimizin 3 temel kurumsal değeri vardır: 1) Küresel Güven (%100 yasal yasal uyumluluk), 2) Hız ve Esneklik (İş gücü ve lojistiği anında mobilize etme), 3) Sürdürülebilir Ortaklık (Avrupa pazarında uzun vadeli köklü ticari ilişkiler).";
         }
         else if (lowerText.includes('yasal') || lowerText.includes('aüg') || lowerText.includes('sertifika') || lowerText.includes('uyumluluk') || lowerText.includes('kanun') || lowerText.includes('gdpr') || lowerText.includes('iso')) {
           reply = "TTW International, en üst düzey kurumsal uyumluluğa sahiptir: Almanya AÜG standartlarına tam uyum, Avrupa Birliği GDPR (DSGVO) veri güvencesi, ISO 9001 uluslararası kalite standartları ve sınır ötesi projeler için tam donanımlı AB Çalışma İzni süreçleri yasallığımızın tescilidir.";
         }
         else if (lowerText.includes('randevu') || lowerText.includes('görüşme') || lowerText.includes('toplantı')) {
           reply = "Projelerinizi planlamak için sitemizdeki 'Online Randevu Talebi' alanını kullanabilirsiniz. Görüşme konusunu (Messebau, Personalbereitstellung vb.), tarih ve saat dilimini seçerek saniyeler içinde talep oluşturabilirsiniz.";
         }
         else if (lowerText.includes('iş arıyorum') || lowerText.includes('başvuru') || lowerText.includes('çalışmak') || lowerText.includes('form') || lowerText.includes('cv')) {
           reply = "Almanya ve Hollanda operasyonlarımızda görevlendirilmek üzere sürekli yeni ekip arkadaşları arıyoruz. Sitemizdeki 'Detaylı İş Başvuru Formu' üzerinden kişisel bilgilerinizi, SV-Nummer (Sosyal Güvenlik No), çalışma türü tercihinizi ve eğitim durumunuzu eksiksiz doldurarak bize iletebilirsiniz.";
         }
         else if (lowerText.includes('adres') || lowerText.includes('nerede') || lowerText.includes('konum') || lowerText.includes('merkez') || lowerText.includes('hollanda') || lowerText.includes('almanya')) {
           reply = "Şirketimizin ana operasyon merkezi Almanya'dadır. Resmi Adresimiz: Hindenburgstr. 236, 41061 Mönchengladbach, Deutschland. Ayrıca Amsterdam ve Almanya koordinasyon merkezlerimiz aktiftir.";
         }
         else if (lowerText.includes('iletişim') || lowerText.includes('telefon') || lowerText.includes('e-posta') || lowerText.includes('mail') || lowerText.includes('numara')) {
           reply = "Bize doğrudan +49 (0) 163 6090266 numaralı telefondan ulaşabilir, info@mge-dienstleistungen.de adresine e-posta gönderebilir veya sol alttaki parlayan WhatsApp Canlı Destek butonunu kullanabilirsiniz.";
         }
         else {
           reply = "Sorunuzu tam olarak eşleştiremedim. Ancak Kurucumuz Eyüp Gavas yönetimindeki TTW International hakkında; Fuar Stand Kurulumu (Messebau), AÜG İş Gücü Tedariği, Lojistik, Randevu Planlama veya İş Başvurusu konularında spesifik sorular sorarak bilgi alabilirsiniz.";
         }
       } 
       else if (replyLang === 'de') {
         // --- ALMANCA GELİŞMİŞ BİLGİ HAVUZU & SOHBET SONLANDIRMA ---
         if (lowerText === 'tamam' || lowerText === 'ok' || lowerText.includes('verstanden') || lowerText.includes('alles klar') || lowerText.includes('super')) {
           reply = "Wunderbar! Wenn Sie weitere Fragen haben, ist das TTW-Team unter der Leitung unseres Gründers Eyüp Gavas jederzeit für Sie da. Kann ich Ihnen noch bei etwas anderem helfen?";
         }
         else if (lowerText.includes('danke') || lowerText.includes('vielen dank')) {
           reply = "Gern geschehen! Im Namen von Timo to Work International B.V. freue ich mich, Ihnen geholfen zu haben. Ich wünsche Ihnen einen schönen Tag!";
         }
         else if (lowerText.includes('tschüss') || lowerText.includes('auf wiedersehen') || lowerText.includes('bye')) {
           reply = "Auf Wiedersehen! Sie können uns jederzeit über den 'Jetzt anrufen'-Button oben rechts oder über unseren WhatsApp-Support unten links erreichen. Machen Sie es gut!";
         }
         else if (lowerText.includes('gründer') || lowerText.includes('inhaber') || lowerText.includes('eyüp') || lowerText.includes('gavas')) {
           reply = "Timo to Work International B.V. wird von Gründer und Geschäftsführer Eyüp Gavas geleitet. Er führt die Prozesse in den Bereichen Messelogistik, AÜG-Personalbereitstellung und internationalen Handel in Europa an.";
         }
         else if (lowerText.includes('was macht') || lowerText.includes('dienstleistung') || lowerText.includes('tätigkeit') || lowerText.includes('unternehmen')) {
           reply = "Wir bieten High-End-Lösungen in 5 Bereichen: 1) Messebau & Projektplanung, 2) Rechtssichere Personalbereitstellung (nach AÜG), 3) Logistik- & Hotelmanagement (Europa-Transfers), 4) Internationaler Import, 5) Globaler Export.";
         }
         else if (lowerText.includes('messe') || lowerText.includes('stand') || lowerText.includes('messebau')) {
           reply = "Unser Messebau-Prozess umfasst Konzept & 3D-Design, Materialauswahl, Logistik/Transport, Montage vor Ort und schlüsselfertige Übergabe sowie anschließende Demontage und Einlagerung.";
         }
         else if (lowerText.includes('bewerbung') || lowerText.includes('job') || lowerText.includes('arbeit')) {
           reply = "Für unsere Aktivitäten in Deutschland und den Niederlanden suchen wir stets qualifizierte Mitarbeiter. Nutzen Sie unser Online-Bewerbungsformular, um Ihre Daten direkt an unser Team zu übermitteln.";
         }
         else if (lowerText.includes('aüg') || lowerText.includes('recht') || lowerText.includes('konformität') || lowerText.includes('dsgvo')) {
           reply = "Wir garantieren höchste Konformität: Volle Einhaltung des Arbeitnehmerüberlassungsgesetzes (AÜG), DSGVO-Datensicherheit, ISO 9001 Qualitätsstandards und voll ausgestattete EU-Arbeitserlaubnis-Prozesse.";
         }
         else if (lowerText.includes('adresse') || lowerText.includes('wo') || lowerText.includes('standort')) {
           reply = "Unser Hauptsitz liegt in Deutschland: Hindenburgstr. 236, 41061 Mönchengladbach, Deutschland. Wir koordinieren auch Standorte in Amsterdam.";
         }
         else if (lowerText.includes('kontakt') || lowerText.includes('telefon') || lowerText.includes('e-mail')) {
           reply = "Sie erreichen uns direkt unter +49 (0) 163 6090266, per E-Mail an info@mge-dienstleistungen.de oder über den integrierten WhatsApp-Button.";
         }
         else {
           reply = "Ich konnte Ihre Anfrage nicht exakt zuordnen. Unter der Leitung von Eyüp Gavas helfen wir Ihnen jedoch gerne bei Fragen zu Messebau, Personalüberlassung (AÜG), Logistik oder Bewerbungen weiter.";
         }
       } 
       else {
         // --- İNGİLİZCE GELİŞMİŞ BİLGİ HAVUZU & SOHBET SONLANDIRMA ---
         if (lowerText === 'ok' || lowerText === 'okay' || lowerText.includes('understand') || lowerText.includes('great') || lowerText.includes('perfect')) {
           reply = "Perfect! If you have any more questions, the TTW team under founder Eyüp Gavas is always here to help. Is there anything else I can assist you with?";
         }
         else if (lowerText.includes('thank')) {
           reply = "You're welcome! On behalf of Timo to Work International B.V., it was a pleasure helping you. Have a great day!";
         }
         else if (lowerText.includes('bye') || lowerText.includes('goodbye')) {
           reply = "Goodbye! Feel free to reach out anytime using the 'Call Now' button or our live WhatsApp link. Take care!";
         }
         if (lowerText.includes('founder') || lowerText.includes('owner') || lowerText.includes('eyüp') || lowerText.includes('gavas')) {
           reply = "TTW International B.V. was founded and is led by senior executive Eyüp Gavas, pioneering exhibition logistics, temporary staffing (AÜG), and global cross-border trade.";
         }
         else if (lowerText.includes('service') || lowerText.includes('what do') || lowerText.includes('business')) {
           reply = "We specialize in 5 global fields: Exhibition Stand Design & Build (Messebau), Qualified Personnel Provision (AÜG compliant), Logistics & Accommodation Management, International Import, and Global Export Solutions.";
         }
         else if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('email') || lowerText.includes('address')) {
           reply = "Reach us at +49 (0) 163 6090266, info@mge-dienstleistungen.de, or visit our headquarters at Hindenburgstr. 236, 41061 Mönchengladbach, Germany.";
         }
         else {
           reply = "I couldn't match your exact request. However, under our founder Eyüp Gavas, I can guide you thoroughly regarding exhibition stands, AÜG temporary staffing, European logistics, or job applications.";
         }
       }

       setMessages(prev => [...prev, { sender: 'ai' as const, text: reply }]);
     }, 600);
   };

  const theme = {
    bgPrimary: darkMode ? '#0b0f19' : '#f8fafc',
    bgSecondary: darkMode ? '#111827' : '#ffffff',
    bgHeader: darkMode ? 'radial-gradient(circle at top right, rgba(30, 27, 75, 0.4) 0%, #0f172a 100%)' : 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.05) 0%, #f1f5f9 100%)',
    bgCardInner: darkMode ? '#0b0f19' : '#f1f5f9',
    bgFormBlack: darkMode ? '#000000' : '#ffffff',
    textPrimary: darkMode ? '#ffffff' : '#0f172a',
    textSecondary: darkMode ? '#94a3b8' : '#475569',
    border: darkMode ? '#1f2937' : '#e2e8f0',
  };

  return (
    <div style={{ backgroundColor: theme.bgPrimary, color: theme.textPrimary, minHeight: '100vh', width: '100%', overflowX: 'hidden', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* Üst Menü / Navbar */}
      <nav style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #2d2d2d', padding: '15px 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '35px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/logo.png" alt="Timo to Work Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain', backgroundColor: '#ffffff', padding: '4px 8px', borderRadius: '6px' }} />
            </a>
            <div style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
              <a href="#" style={{ color: darkMode ? '#ffffff' : '#0f172a', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navHome}</a>
              <a href="#about" style={{ color: darkMode ? '#a0a0a0' : '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navAbout}</a>
              <a href="#services" style={{ color: darkMode ? '#a0a0a0' : '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navServices}</a>
              <a href="#gallery" style={{ color: darkMode ? '#a0a0a0' : '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navGallery}</a>
              <a href="#appointment" style={{ color: darkMode ? '#a0a0a0' : '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navAppointment}</a>
              <a href="#contact" style={{ color: darkMode ? '#a0a0a0' : '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navContact}</a>
              <a href="#apply" style={{ color: darkMode ? '#a0a0a0' : '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navApplyForm}</a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <select value={lang} onChange={(e) => setLang(e.target.value as 'tr' | 'de' | 'en')} style={{ backgroundColor: '#2a2a2a', color: '#ffffff', border: '1px solid #444', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', outline: 'none' }}>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="en">🇺🇸 English</option>
              <option value="tr">🇹🇷 Turkish</option>
            </select>
            <a href="tel:+491636090266" style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #ef4444 100%)', color: '#ffffff', textDecoration: 'none', padding: '10px 24px', borderRadius: '25px', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)' }}>
              {t.btnCallNow}
            </a>
            {/* image_1ba3a7.png görselindeki buton dinamik hale getirildi */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              style={{ 
                backgroundColor: darkMode ? '#f97316' : '#1e1b4b', 
                border: 'none', 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                cursor: 'pointer', 
                color: '#ffffff', 
                fontSize: '18px',
                transition: 'all 0.3s ease'
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* ----------------- GÖSTERİŞLİ BÖLÜNMÜŞ EKRAN HERO (ANA SAYFA) ----------------- */}
      <header style={{ 
        background: theme.bgHeader, 
        padding: '120px 40px', 
        borderBottom: `1px solid ${theme.border}`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Arka Plan Parlama Efektleri */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(56, 189, 248, 0.08)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(124, 58, 237, 0.05)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Sol Sütun: Yazılar ve Etkileyici Butonlar */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUpVariants} style={{ display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'left' }}>
            <span style={{ display: 'inline-block', width: 'fit-content', backgroundColor: 'rgba(56,189,248,0.1)', color: '#38bdf8', padding: '8px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', border: '1px solid rgba(56,189,248,0.2)' }}>
              {t.heroTag}
            </span>
            <h1 style={{ fontSize: '54px', fontWeight: 800, color: theme.textPrimary, letterSpacing: '-1.5px', lineHeight: '1.15', margin: 0 }}>
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: '18px', color: theme.textSecondary, lineHeight: '1.65', margin: 0, maxWidth: '600px' }}>
              {t.heroSub}
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
              <a href="#apply" style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #ef4444 100%)', color: '#ffffff', textDecoration: 'none', padding: '15px 35px', borderRadius: '30px', fontWeight: 'bold', fontSize: '15px', boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)', transition: '0.3s' }}>
                {t.navApplyForm}
              </a>
              <a href="#services" style={{ backgroundColor: 'transparent', color: '#ffffff', textDecoration: 'none', padding: '15px 35px', borderRadius: '30px', fontWeight: 'bold', fontSize: '15px', border: '1px solid #334155', transition: '0.3s' }}>
                {t.heroBtnSecondary}
              </a>
            </div>
          </motion.div>

          {/* Sağ Sütun: Önünde Yer Tabelası Olan Modern Holding Binası (image_f3a759.jpg yerine) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '420px', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: `1px solid ${theme.border}`, 
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' 
            }}
          >
            {/* Sol taraftaki şık koyu geçiş gradyanı */}
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${darkMode ? '#0f172a' : '#f1f5f9'} 0%, rgba(15,23,42,0) 40%)`, zIndex: 1, pointerEvents: 'none' }}></div>
            
            {/* Lüks Holding Genel Merkez Binası */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Timo to Work Head Office" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* 🏢 BİNANIN ÖNÜNDEKİ MİNİMALİST VE MODERN DİJİTAL PANEL */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(20px)', // Daha derin bir cam efekti
              border: '1px solid rgba(255, 255, 255, 0.1)', // İnce lüks beyaz çizgi
              borderRadius: '16px',
              padding: '20px 28px',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255,255,255,0.1)',
              zIndex: 2,
              textAlign: 'left'
            }}>
              {/* Canlı Sinyal Noktası (Modern Operasyon Göstergesi) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#38bdf8', 
                  borderRadius: '50%', 
                  display: 'inline-block',
                  boxShadow: '0 0 10px #38bdf8'
                }}></span>
                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>
                  Live Operations
                </span>
              </div>
              
              {/* Şirket Adı Baş Harfleri ve Kısaltması */}
              <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', lineHeight: '1' }}>
                TTW <span style={{ color: '#38bdf8', fontWeight: 300 }}>International</span>
              </h3>
              
              {/* Lokasyon Alt Bilgisi */}
              <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#64748b', fontWeight: 500, letterSpacing: '0.5px' }}>
                Germany & Netherlands Hub
              </p>
            </div>
          </motion.div>

        </div>
      </header>

      {/* ----------------- LÜKS BENTO-STYLE HAKKIMIZDA BÖLÜMÜ ----------------- */}
      <motion.section 
        id="about" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUpVariants} 
        style={{ backgroundColor: theme.bgSecondary, padding: '100px 40px', borderBottom: `1px solid ${theme.border}` }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px', alignItems: 'start' }}>
          
          {/* Sol Taraf: Şirket Hikayesi ve Büyük Logo Kartı */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <span style={{ color: '#38bdf8', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '10px' }}>{t.aboutTitle}</span>
              <h2 style={{ fontSize: '38px', fontWeight: 700, color: theme.textPrimary, marginBottom: '0', lineHeight: '1.25' }}>{t.aboutSub}</h2>
            </div>
            
            <p style={{ color: theme.textSecondary, fontSize: '16px', lineHeight: '1.8', margin: 0 }}>{t.aboutText1}</p>
            <p style={{ color: theme.textSecondary, fontSize: '16px', lineHeight: '1.8', margin: 0 }}>{t.aboutText2}</p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: theme.bgPrimary, padding: '25px', borderRadius: '16px', border: `1px solid ${theme.border}` }}>
              <img src="/logo.png" alt="Timo to Work Logo" style={{ height: '50px', width: 'auto', backgroundColor: '#ffffff', padding: '4px 8px', borderRadius: '6px' }} />
              <div>
                <h4 style={{ color: theme.textPrimary, margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700 }}>Timo to Work International B.V.</h4>
                <p style={{ color: theme.textSecondary, fontSize: '13px', margin: 0, fontStyle: 'italic' }}>{t.aboutText3}</p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Vizyon & Misyon Bento Hücreleri (Boşluğu Tamamen Dolduran Alan) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', width: '100%' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: theme.textPrimary, margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🎯 {t.visionTitle}
            </h3>

            {/* Hücre 1 */}
            <div style={{ padding: '25px', backgroundColor: theme.bgPrimary, borderRadius: '16px', border: `1px solid ${theme.border}`, transition: '0.3s' }}>
              <h4 style={{ color: '#38bdf8', fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>01. {t.vision1Name}</h4>
              <p style={{ color: theme.textSecondary, fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{t.vision1Desc}</p>
            </div>

            {/* Hücre 2 */}
            <div style={{ padding: '25px', backgroundColor: theme.bgPrimary, borderRadius: '16px', border: `1px solid ${theme.border}`, transition: '0.3s' }}>
              <h4 style={{ color: '#f97316', fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>02. {t.vision2Name}</h4>
              <p style={{ color: theme.textSecondary, fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{t.vision2Desc}</p>
            </div>

            {/* Hücre 3 */}
            <div style={{ padding: '25px', backgroundColor: theme.bgPrimary, borderRadius: '16px', border: `1px solid ${theme.border}`, transition: '0.3s' }}>
              <h4 style={{ color: '#a855f7', fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>03. {t.vision3Name}</h4>
              <p style={{ color: theme.textSecondary, fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{t.vision3Desc}</p>
            </div>
          </div>

        </div>
      </motion.section>

      {/* ----------------- BAŞARI İSTATİSTİKLERİ SAYACI (ANIMASYONLU) ----------------- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={fadeInUpVariants} 
        style={{ backgroundColor: '#0f172a', padding: '60px 20px', borderBottom: '1px solid #1f2937' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', textAlign: 'center' }}>
          
          {/* İstatistik 1 - Fuar Standı */}
          <div style={{ padding: '20px', backgroundColor: '#0b0f19', borderRadius: '16px', border: '1px solid #1f2937', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#38bdf8', marginBottom: '8px', letterSpacing: '-1px' }}>+150</div>
            <div style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>{t.statCard1}</div>
          </div>

          {/* İstatistik 2 - Personel */}
          <div style={{ padding: '20px', backgroundColor: '#0b0f19', borderRadius: '16px', border: '1px solid #1f2937', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#38bdf8', marginBottom: '8px', letterSpacing: '-1px' }}>+500</div>
            <div style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>{t.statCard2}</div>
          </div>

          {/* İstatistik 3 - Ülke */}
          <div style={{ padding: '20px', backgroundColor: '#0b0f19', borderRadius: '16px', border: '1px solid #1f2937', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#38bdf8', marginBottom: '8px', letterSpacing: '-1px' }}>12</div>
            <div style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>{t.statCard3}</div>
          </div>

          {/* İstatistik 4 - Memnuniyet */}
          <div style={{ padding: '20px', backgroundColor: '#0b0f19', borderRadius: '16px', border: '1px solid #1f2937', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '42px', fontWeight: 800, color: '#f97316', marginBottom: '8px', letterSpacing: '-1px' }}>100%</div>
            <div style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>{t.statCard4}</div>
          </div>

        </div>
      </motion.section>

      {/* HİZMETLER BÖLÜMÜ (AKILLI AKORDEON SİSTEMİ) */}
      <motion.main 
        id="services" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={fadeInUpVariants} 
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.sectionTitle}</h2>
          <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.sectionSub}</p>
        </div>

        {/* 5'li Gelişmiş Etkileşimli Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[1, 2, 3, 4, 5].map((num) => {
            const isOpen = activeCard === num;
            const steps = (t as any)[`card${num}Steps`] || [];

            return (
              <div 
                key={num} 
                style={{ 
                  backgroundColor: theme.bgSecondary, 
                  borderRadius: '16px', 
                  border: isOpen ? '1px solid #38bdf8' : `1px solid ${theme.border}`, 
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                  boxShadow: isOpen ? '0 10px 30px -10px rgba(56,189,248,0.2)' : 'none'
                }}
              >
                {/* Tıklanabilir Üst Başlık Alanı */}
                <div 
                  onClick={() => setActiveCard(isOpen ? null : num)}
                  style={{ 
                    padding: '30px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: isOpen ? 'rgba(56,189,248,0.15)' : 'rgba(56,189,248,0.05)', 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '24px',
                      transition: '0.3s'
                    }}>
                      {num === 1 ? '📉' : num === 2 ? '👥' : num === 3 ? '🗺️' : num === 4 ? '📥' : '📤'}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: theme.textPrimary, margin: '0 0 6px 0' }}>
                        {(t as any)[`card${num}Title`]}
                      </h3>
                      <p style={{ color: theme.textSecondary, fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                        {(t as any)[`card${num}Desc`]}
                      </p>
                    </div>
                  </div>

                  {/* Sağdaki Açma/Kapama Oku */}
                  <div style={{ 
                    fontSize: '18px', 
                    color: isOpen ? '#38bdf8' : '#64748b',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    ▼
                  </div>
                </div>

                {/* Aşağı Doğru Açılan Şık Süreç Detayları */}
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ backgroundColor: theme.bgPrimary, borderTop: `1px solid ${theme.border}` }}
                  >
                    <div style={{ padding: '30px 40px' }}>
                      <h4 style={{ color: '#38bdf8', fontSize: '15px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                        📋 {t.stepTitle}
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                        {steps.map((step: string, sIdx: number) => (
                          <div 
                            key={sIdx} 
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '12px', 
                              backgroundColor: theme.bgSecondary, 
                              padding: '14px 18px', 
                              borderRadius: '10px',
                              border: `1px solid ${theme.border}`
                            }}
                          >
                            <span style={{ color: '#f97316', fontWeight: 'bold', fontSize: '14px' }}>
                              0{sIdx + 1}.
                            </span>
                            <span style={{ color: theme.textPrimary, fontSize: '14px', fontWeight: 500 }}>
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </motion.main>

      {/* ----------------- YASAL UYUMLULUK & ROZETLER (ANIMASYONLU) ----------------- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeInUpVariants} 
        style={{ backgroundColor: '#111827', padding: '80px 20px', borderTop: '1px solid #1f2937', borderBottom: '1px solid #1f2937' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Bölüm Başlığı */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{t.badgeTitle}</h2>
            <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>{t.badgeSub}</p>
          </div>

          {/* 4'lü Parlayan Rozet Grid Yapısı */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
            
            {/* Rozet 1 - AÜG */}
            <div style={{ padding: '30px 20px', backgroundColor: '#0b0f19', borderRadius: '20px', border: '1px solid rgba(56,189,248,0.2)', textAlign: 'center', boxShadow: '0 0 20px rgba(56,189,248,0.05)', transition: '0.3s' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(56,189,248,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px', border: '1px solid #38bdf8' }}>
                ⚖️
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{t.badge1Name}</h4>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{t.badge1Desc}</p>
            </div>

            {/* Rozet 2 - GDPR */}
            <div style={{ padding: '30px 20px', backgroundColor: '#0b0f19', borderRadius: '20px', border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center', boxShadow: '0 0 20px rgba(34,197,94,0.05)', transition: '0.3s' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(34,197,94,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px', border: '1px solid #22c55e' }}>
                🛡️
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{t.badge2Name}</h4>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{t.badge2Desc}</p>
            </div>

            {/* Rozet 3 - ISO 9001 */}
            <div style={{ padding: '30px 20px', backgroundColor: '#0b0f19', borderRadius: '20px', border: '1px solid rgba(249,115,22,0.2)', textAlign: 'center', boxShadow: '0 0 20px rgba(249,115,22,0.05)', transition: '0.3s' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(249,115,22,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px', border: '1px solid #f97316' }}>
                📜
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{t.badge3Name}</h4>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{t.badge3Desc}</p>
            </div>

            {/* Rozet 4 - AB Çalışma İzni */}
            <div style={{ padding: '30px 20px', backgroundColor: '#0b0f19', borderRadius: '20px', border: '1px solid rgba(168,85,247,0.2)', textAlign: 'center', boxShadow: '0 0 20px rgba(168,85,247,0.05)', transition: '0.3s' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(168,85,247,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px', border: '1px solid #a855f7' }}>
                🇪🇺
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{t.badge4Name}</h4>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{t.badge4Desc}</p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* GALERİ BÖLÜMÜ (ANIMASYONLU) */}
      <motion.section id="gallery" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInUpVariants} style={{ backgroundColor: theme.bgPrimary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.galleryTitle}</h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.gallerySub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            {[1, 2, 3, 4, 5, 6].map((idx) => {
              const urls = [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              ];
              return (
                <div key={idx} style={{ position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '25px', backgroundImage: `linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.2) 100%), url("${urls[idx-1]}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>{(t as any)[`galCard${idx}Title`]}</h4>
                  <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 500 }}>{(t as any)[`galCard${idx}Sub`]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* RANDEVU BÖLÜMÜ (ANIMASYONLU) */}
      <motion.section id="appointment" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUpVariants} style={{ backgroundColor: theme.bgSecondary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.aptTitle}</h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.aptSub}</p>
          </div>
          <div style={{ backgroundColor: theme.bgPrimary, padding: '40px', borderRadius: '24px', border: `1px solid ${theme.border}` }}>
            <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'tr' ? 'Randevu talebiniz alındı!' : lang === 'de' ? 'Terminanfrage eingegangen!' : 'Appointment request received!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: theme.textSecondary, marginBottom: '10px', fontWeight: 500 }}>{t.aptTopic}</label>
                <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.textPrimary, outline: 'none', cursor: 'pointer' }}>
                  <option value="messebau">Messebau & Projektplanung</option>
                  <option value="personal">Personalbereitstellung</option>
                  <option value="logistik">Logistik & Hotelmanagement</option>
                  <option value="import-export">Import & Export Consultancy</option>
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', color: theme.textSecondary, marginBottom: '10px', fontWeight: 500 }}>{t.aptDate}</label>
                  <input required type="date" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.textPrimary, outline: 'none', cursor: 'pointer' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', color: theme.textSecondary, marginBottom: '10px', fontWeight: 500 }}>{t.aptTime}</label>
                  <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.textPrimary, outline: 'none', cursor: 'pointer' }}>
                    <option value="09:00">09:00 - 11:00</option>
                    <option value="11:00">11:00 - 13:00</option>
                    <option value="14:00">14:00 - 16:00</option>
                    <option value="16:00">16:00 - 18:00</option>
                  </select>
                </div>
              </div>
              <button type="submit" style={{ backgroundColor: '#38bdf8', color: '#0b0f19', fontWeight: 'bold', padding: '16px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '16px' }}>{t.aptBtn}</button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* BAŞVURU FORMU BÖLÜMÜ (ANIMASYONLU) */}
      <motion.section id="apply" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUpVariants} style={{ backgroundColor: theme.bgPrimary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.jobTitle}</h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.jobSub}</p>
          </div>
          <div style={{ backgroundColor: theme.bgFormBlack, padding: '50px 40px', borderRadius: '24px', border: `1px solid ${theme.border}` }}>
            <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'tr' ? 'Başvurunuz başarıyla iletildi!' : lang === 'de' ? 'Bewerbung erfolgreich abgesendet!' : 'Application successfully submitted!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, textAlign: 'center', marginBottom: '25px' }}>{t.secPersonal}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblFullName}</label>
                    <input required type="text" placeholder="Anderson Mikoo" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblDate}</label>
                    <input required type="date" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblEmail}</label>
                    <input required type="email" placeholder="user@website.com" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblPhone}</label>
                    <input required type="tel" placeholder="+1 212-695-1962" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblAddress}</label>
                    <input required type="text" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblGender}</label>
                    <select required style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.optSelect}</option>
                      <option value="male">{t.lblGender1}</option>
                      <option value="female">{t.lblGender2}</option>
                      <option value="other">{t.lblGender3}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblSvNum}</label>
                    <input type="text" placeholder="SV-Nummer" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblJobType}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.optSelect}</option>
                      <option value="full">{t.lblJobType1}</option>
                      <option value="part">{t.lblJobType2}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblSalary}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.optSelect}</option>
                      <option value="2000-3000">2000€ - 3000€</option>
                      <option value="3000-4000">3000€ - 4000€</option>
                      <option value="4000+">4000€+</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblPosition}</label>
                    <input type="text" placeholder="..." style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '25px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, textAlign: 'center', marginBottom: '25px' }}>{t.secPermit}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblExperience}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.optSelect}</option>
                      <option value="yes">{t.optYes}</option>
                      <option value="no">{t.optNo}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblExpDates}</label>
                    <input type="text" placeholder="..." style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '25px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, textAlign: 'center', marginBottom: '25px' }}>{t.secEducation}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblSchool}</label>
                    <input required type="text" placeholder="Alex High School" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblCity}</label>
                    <input required type="text" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblVon}</label>
                    <input required type="date" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblBis}</label>
                    <input required type="date" style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblAbschluss}</label>
                    <select required style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.optSelect}</option>
                      <option value="highschool">{t.lblAbschluss1}</option>
                      <option value="bachelor">{t.lblAbschluss2}</option>
                      <option value="master">{t.lblAbschluss3}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblDiplom}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: theme.bgCardInner, border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.optSelect}</option>
                      <option value="yes">{t.optYes}</option>
                      <option value="no">{t.optNo}</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px', width: 'fit-content' }}>{t.jobBtn}</button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* İLETİŞİM BÖLÜMÜ */}
      <section id="contact" style={{ backgroundColor: theme.bgSecondary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div style={{ backgroundColor: theme.bgPrimary, padding: '40px', borderRadius: '24px', border: `1px solid ${theme.border}` }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.formTitle}</h3>
            <p style={{ color: theme.textSecondary, fontSize: '14px', marginBottom: '30px' }}>{t.formSub}</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: theme.textSecondary, marginBottom: '8px', fontWeight: 500 }}>{t.formLabelName}</label>
                <input type="text" style={{ width: '100%', padding: '12px 16px', backgroundColor: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '10px', color: theme.textPrimary, outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: theme.textSecondary, marginBottom: '8px', fontWeight: 500 }}>{t.formLabelEmail}</label>
                <input type="email" style={{ width: '100%', padding: '12px 16px', backgroundColor: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '10px', color: theme.textPrimary, outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: theme.textSecondary, marginBottom: '8px', fontWeight: 500 }}>{t.formLabelMsg}</label>
                <textarea rows={4} style={{ width: '100%', padding: '12px 16px', backgroundColor: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '10px', color: theme.textPrimary, outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button type="button" style={{ backgroundColor: '#38bdf8', color: '#0b0f19', fontWeight: 'bold', padding: '14px', borderRadius: '10px', border: 'none' }}>{t.formBtn}</button>
            </form>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, marginBottom: '20px' }}>{t.brand}</h3>
              <p style={{ color: theme.textSecondary, fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>{t.companyDesc}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#f8fafc', fontSize: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <div>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>{lang === 'tr' ? 'Adres' : lang === 'de' ? 'Adresse' : 'Address'}</strong>
                  <span style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>Hindenburgstr. 236,<br />41061 Mönchengladbach,<br />{lang === 'tr' ? 'Almanya' : lang === 'de' ? 'Deutschland' : 'Germany'}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <span style={{ fontSize: '20px' }}>📞</span>
                <div>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>{lang === 'tr' ? 'Şimdi Arayın' : lang === 'de' ? 'Jetzt anrufen' : 'Call Now'}</strong>
                  <a href="tel:+491636090266" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>+49 (0) 163 6090266</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
                <div>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>{t.stayInTouch}</strong>
                  <a href="mailto:info@mge-dienstleistungen.de" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>info@mge-dienstleistungen.de</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Bilgi / Footer Bar */}
      <footer style={{ backgroundColor: '#0b0f19', color: '#64748b', padding: '30px 20px', textAlign: 'center', fontSize: '14px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ margin: 0 }}>{t.footerText}</p>
        </div>
      </footer>

      {/*  HOLDING STANDARTLARINDA PREMIUM CANLI DESTEK PANELI (SAĞ ALT KÖŞE) */}
      <div style={{ position: 'fixed', bottom: '35px', right: '35px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'end', fontFamily: 'sans-serif' }}>
        
        {/* --- 1. YAPAY ZEKA ASİSTANI BÖLÜMÜ --- */}
        {aiOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{
              width: '380px',
              height: '500px',
              backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.85)' : 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(25px)',
              border: `1px solid ${darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
              borderRadius: '24px',
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              marginBottom: '10px'
            }}
          >
            {/* Asistan Üst Barı */}
            <div style={{ padding: '24px', backgroundColor: darkMode ? 'rgba(11, 15, 25, 0.6)' : 'rgba(241, 245, 249, 0.6)', borderBottom: `1px solid ${theme.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: theme.textPrimary, letterSpacing: '-0.3px' }}>{t.aiTitle}</h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{t.aiSub}</p>
              </div>
              <button onClick={() => setAiOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '22px', cursor: 'pointer', lineHeight: '1' }}>×</button>
            </div>

            {/* Mesaj Alanı */}
            <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ alignSelf: 'start', backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.5)' : '#e2e8f0', color: theme.textPrimary, padding: '14px 18px', borderRadius: '16px', borderTopLeftRadius: '0', fontSize: '13px', lineHeight: '1.6', maxWidth: '85%', border: `1px solid ${theme.border}` }}>
                {t.aiWelcome}
              </div>
              {messages.map((msg, index) => (
                <div key={index} style={{ alignSelf: msg.sender === 'user' ? 'end' : 'start', backgroundColor: msg.sender === 'user' ? '#38bdf8' : (darkMode ? 'rgba(31, 41, 55, 0.5)' : '#e2e8f0'), color: msg.sender === 'user' ? '#0b0f19' : theme.textPrimary, padding: '14px 18px', borderRadius: '16px', fontSize: '13px', lineHeight: '1.6', maxWidth: '85%', fontWeight: msg.sender === 'user' ? 600 : 500, border: msg.sender === 'user' ? 'none' : `1px solid ${theme.border}` }}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Girdi Alanı */}
            <form onSubmit={handleAiSubmit} style={{ padding: '18px', backgroundColor: darkMode ? 'rgba(11, 15, 25, 0.6)' : 'rgba(241, 245, 249, 0.6)', borderTop: `1px solid ${theme.border}`, display: 'flex', gap: '10px' }}>
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={t.aiPlaceholder} style={{ flex: 1, padding: '12px 18px', backgroundColor: darkMode ? 'rgba(0,0,0,0.2)' : '#ffffff', border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.textPrimary, fontSize: '13px', outline: 'none' }} />
              <button type="submit" style={{ backgroundColor: '#38bdf8', border: 'none', borderRadius: '12px', width: '42px', height: '42px', color: '#0b0f19', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>➔</button>
            </form>
          </motion.div>
        )}

        {/* LÜKS YAPAY ZEKA BUTONU */}
        <motion.button
          onClick={() => setAiOpen(!aiOpen)}
          whileHover={{ scale: 1.02, backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.9)' : '#ffffff' }}
          style={{
            backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.75)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(15px)',
            border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            padding: scrolled ? '15px' : '12px 24px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Geometrik Akıllı Asistan İkonu */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justify: 'center' }}>
            <span style={{ fontSize: '18px', color: '#38bdf8', animation: 'spin 8s linear infinite' }}>✦</span>
          </div>
          {!scrolled && (
            <span style={{ fontSize: '13px', fontWeight: 700, color: theme.textPrimary, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {lang === 'tr' ? 'Yapay Zeka Asistanı' : lang === 'de' ? 'KI-Assistent' : 'AI Assistant'}
            </span>
          )}
        </motion.button>

        {/* --- 2. LÜKS WHATSAPP DESTEK BUTONU --- */}
        <motion.a
          href="https://wa.me/491636090266"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 197, 94, 0.15)' }}
          style={{
            backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.75)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            padding: scrolled ? '15px' : '12px 24px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* İnce ve Minimalist İletişim İkonu */}
          <span style={{ fontSize: '16px', color: '#22c55e' }}>🟢</span>
          {!scrolled && (
            <span style={{ fontSize: '13px', fontWeight: 700, color: theme.textPrimary, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {lang === 'tr' ? 'WhatsApp İletişim' : lang === 'de' ? 'WhatsApp Support' : 'WhatsApp Support'}
            </span>
          )}
        </motion.a>

      </div>
    </div>
  );
}