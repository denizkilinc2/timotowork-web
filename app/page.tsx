"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    aiWelcome: "Merhaba! Ben TTW Yapay Zeka Asistanı. Size fuar standı kurulumu, lojistik, uzman kadro tedariği veya ithalat/ihracat süreçlerimiz hakkında nasıl yardımcı olabilirim?",
    formSchool: "Okul / Üniversite *",
    formCity: "Şehir / Eyalet *",
    formStart: "Başlangıç *",
    formEnd: "Bitiş *",
    formStatus: "Mezuniyet Durumu *",
    formSelect: "Seçiniz",
    formDiploma: "Diploma Mevcut mu?",
    formDiplomaYes: "Evet",
    formDiplomaNo: "Hayır",
    mapLiveOps: "Mönchengladbach Merkez Ofisi - Canlı Operasyon",
    founderTitle: "Kurucumuzun Mesajı",
    founderRole: "Yönetim Kurulu Başkanı / Kurucu",
    founderText: "Timo to Work International B.V. olarak, Avrupa ve küresel pazarda fuar stand kurulumundan uluslararası lojistiğe kadar her alanda güven, kalite ve estetiği bir araya getiriyoruz. Sürdürülebilir başarıyı uzman kadromuzla inşa etmeye devam ediyoruz."
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
    aiWelcome: "Hallo! Ich bin der TTW KI-Assistent. Wie kann ich Ihnen bei Messebau, Logistik, Personalbereitstellung oder Import/Export-Prozessen helfen?",
    formSchool: "Schule / Universität *",
    formCity: "Stadt / Bundesland *",
    formStart: "Beginn *",
    formEnd: "Ende *",
    formStatus: "Abschlussstatus *",
    formSelect: "Bitte auswählen",
    formDiploma: "Diplom vorhanden?",
    formDiplomaYes: "Ja",
    formDiplomaNo: "Nein",
    mapLiveOps: "Hauptsitz Mönchengladbach - Live-Betrieb",
    founderTitle: "Botschaft des Gründers",
    founderRole: "Vorstandsvorsitzender / Gründer",
    founderText: "Als Timo to Work International B.V. vereinen wir im europäischen und globalen Markt Vertrauen, Qualität und Ästhetik in allen Bereichen, vom Ausstellungsstandbau bis zur internationalen Logistik. Gemeinsam mit unserem Expertenteam bauen wir weiterhin an nachhaltigem Erfolg."
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
    aiWelcome: "Hello! I am the TTW AI Assistant. How can I help you with exhibition stand design, logistics, personnel provision, or import/export processes?",
    formSchool: "School / University *",
    formCity: "City / State *",
    formStart: "Start Date *",
    formEnd: "End Date *",
    formStatus: "Graduation Status *",
    formSelect: "Please Select",
    formDiploma: "Diploma Available?",
    formDiplomaYes: "Yes",
    formDiplomaNo: "No",
    mapLiveOps: "HQ Mönchengladbach - Live Operations",
    founderTitle: "Founder's Message",
    founderRole: "Chairman of the Board / Founder",
    founderText: "As Timo to Work International B.V., we combine trust, quality, and aesthetics in every field from exhibition stand construction to international logistics in the European and global markets. We continue to build sustainable success with our expert team."
  }
};

// Ortak Animasyon Ayar Şablonu (Aşağıdan hafifçe kayarak belirme)
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

// Mobilde animasyon yok — içerik direkt görünür
const noAnimation = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 }
};

// 📊 GERÇEK ZAMANLI SAYAÇ MOTORU BİLEŞENİ
const AnimatedCounter = ({ target, duration = 1500, triggered }: { target: number; duration?: number; triggered: boolean }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    // Sayma hızını hedefe göre dinamik ayarlar (Toplam süre / Hedef değer)
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return <span>{count}</span>;
};

export default function Home() {
  const [lang, setLang] = useState<'tr' | 'de' | 'en'>('de');

  // Next.js Hydration hatasını önlemek için Client-Side kontrol state'i
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') return window.innerWidth <= 968;
    return false;
  });

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 968);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [aiOpen, setAiOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai', text: string }>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [statsTriggered, setStatsTriggered] = useState<boolean>(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 🌟 TOAST BİLDİRİM STATE ALTYAPISI
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  // Toast gösteren yardımcı fonksiyon
  const showToastNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000); // 4 saniye sonra kendi kendine pürüzsüzce kapanır
  };

  // --- FORM GÖNDERİM FONKSİYONLARI ---
  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      showToastNotification(lang === 'tr' ? 'Lütfen zorunlu alanları eksiksiz doldurunuz.' : lang === 'de' ? 'Bitte füllen Sie die Pflichtfelder aus.' : 'Please fill in all required fields.', 'error');
      return;
    }
    showToastNotification(lang === 'tr' ? 'Talebiniz başarıyla alındı. En kısa sürede dönüş sağlanacaktır.' : lang === 'de' ? 'Ihre Anfrage wurde erfolgreich entgegengenommen.' : 'Your request has been successfully received.', 'success');
    e.currentTarget.reset();
  };

  const handleApplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      showToastNotification(lang === 'tr' ? 'Lütfen zorunlu alanları eksiksiz doldurunuz.' : lang === 'de' ? 'Bitte füllen Sie die Pflichtfelder aus.' : 'Please fill in all required fields.', 'error');
      return;
    }
    showToastNotification(lang === 'tr' ? 'Başvurunuz başarıyla alındı. En kısa sürede dönüş sağlanacaktır.' : lang === 'de' ? 'Ihre Bewerbung wurde erfolgreich entgegengenommen.' : 'Your application has been successfully received.', 'success');
    e.currentTarget.reset();
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      showToastNotification(lang === 'tr' ? 'Lütfen zorunlu alanları eksiksiz doldurunuz.' : lang === 'de' ? 'Bitte füllen Sie die Pflichtfelder aus.' : 'Please fill in all required fields.', 'error');
      return;
    }
    showToastNotification(lang === 'tr' ? 'Mesajınız başarıyla iletildi.' : lang === 'de' ? 'Ihre Nachricht wurde erfolgreich gesendet.' : 'Your message has been successfully sent.', 'success');
    e.currentTarget.reset();
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  ];

  useEffect(() => {
    // 🎯 MOBİL KİLİTLENME KORUMASI: Ekran mobildeyse preloader'ı anında kapatır, render bile ettirmez
    if (typeof window !== 'undefined' && window.innerWidth < 991) {
      setLoading(false);
      return;
    }

    // Bilgisayarda (PC) ise o şık kurumsal gecikme efekti aynen çalışmaya devam eder
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);
  const t = translations[lang];

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Sayfa kaydırıldıkça hangi bölümde olunduğunu otomatik tespit eden mekanizma
  useEffect(() => {
    const handleScroll = () => {
      // Scroll durumu
      setScrolled(window.scrollY > 80);

      const sections = ['home', 'about', 'services', 'gallery', 'appointment', 'apply', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section === 'home' ? 'navbar-top' : section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hızlı soru balonlarına tıklandığında çalışacak motor
  const handleQuickReplyClick = (questionText: string) => {
    // Kullanıcının sorusunu ekrana bas
    const newMessages = [...messages, { sender: 'user' as const, text: questionText }];
    setMessages(newMessages);

    // handleAiSubmit içindeki yapay zeka analiz motorunu tetiklemesi için simüle et
    setTimeout(() => {
      const lowerText = questionText.toLowerCase().trim();
      let reply = "";
      
      // (Daha önce kurduğumuz o devasa akıllı bilgi havuzu burayı otomatik analiz edecek)
      // Kolaylık olsun diye mevcut handleAiSubmit mantığından gelen eşleşmeyi tetikliyoruz:
      const isTurkish = /[çğıöşü]/i.test(lowerText) || lowerText.includes('ne is') || lowerText.includes('kim') || lowerText.includes('neler') || lowerText.includes('adres') || lowerText.includes('iletisim');
      
      if (isTurkish) {
        if (lowerText.includes('kurucu') || lowerText.includes('gavas')) {
          reply = "Timo to Work International B.V., Eyüp Gavas tarafından kurulmuştur. Kendisi şirketimizin kurucusu ve üst düzey yöneticisidir.";
        } else if (lowerText.includes('fuar') || lowerText.includes('süreç')) {
          reply = "Fuar süreçlerimiz 5 adından oluşur: Konsept ve 3D stand tasarımı, malzeme seçimi/üretim, lojistik nakliye, yerinde anahtar teslim kurulum ve fuar sonrası söküm/depolama. Tüm süreci Eyüp Gavas güvencesiyle tek elden yönetiyoruz.";
        } else if (lowerText.includes('iş') || lowerText.includes('başvuru')) {
          reply = "Almanya ve Hollanda operasyonlarımızda görevlendirilmek üzere sürekli yeni ekip arkadaşları arıyoruz. Sitemizdeki 'Detaylı İş Başvuru Formu' üzerinden bilgilerinizi ileterek başvurabilirsiniz.";
        } else {
          reply = "Şirketimiz hakkında fuar stand kurulumu (Messebau), AÜG iş gücü tedariği ve lojistik konularında size detaylı bilgi verebilirim.";
        }
      } else {
        // Almanca / İngilizce varsayılan yedek havuz
        reply = "Unter der Leitung unseres Gründers Eyüp Gavas helfen wir Ihnen gerne bei Fragen zu Messebau, Personalüberlassung (AÜG) und Logistik weiter.";
      }

      setMessages(prev => [...prev, { sender: 'ai' as const, text: reply }]);
    }, 600);
  };

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
    
    // 🌟 YENİ EKLEYECEĞİMİZ OKUNABİLİRLİK RENKLERİ:
    inputBg: darkMode ? '#1e293b' : '#ffffff', // Kutuların içi artık kapkaranlık olmayacak
    inputText: darkMode ? '#ffffff' : '#0f172a', // Kullanıcının yazdığı yazı rengi
    inputPlaceholder: darkMode ? '#94a3b8' : '#64748b', // Örnek yazı (placeholder) rengi
  };

  return (
    <div style={{ backgroundColor: theme.bgPrimary, color: theme.textPrimary, minHeight: '100vh', width: '100%', overflowX: 'hidden', fontFamily: 'sans-serif', margin: 0, padding: 0, transition: 'background-color 0.3s, color 0.3s' }}>
      
      {/* 🌐 NAVBAR */}
      <nav style={{ 
        backgroundColor: darkMode ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)', 
        borderBottom: `1px solid ${theme.border}`, 
        padding: isMobile ? '12px 16px' : '15px 40px', 
        position: 'fixed', 
        top: 0, 
        left: 0,
        right: 0,
        zIndex: 1000, 
        overflow: 'visible',
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/logo.png" alt="Timo to Work Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain', backgroundColor: '#ffffff', padding: '4px 8px', borderRadius: '6px' }} />
          </a>

          {/* MASAÜSTÜ: Orta linkler — isMobile false ise göster */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              {[
                { id: 'home', text: t.navHome, href: '#' },
                { id: 'about', text: t.navAbout, href: '#about' },
                { id: 'services', text: t.navServices, href: '#services' },
                { id: 'gallery', text: t.navGallery, href: '#gallery' },
                { id: 'appointment', text: t.navAppointment, href: '#appointment' },
                { id: 'apply', text: t.navApplyForm, href: '#apply' },
                { id: 'contact', text: t.navContact, href: '#contact' }
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a key={item.id} href={item.href} style={{ color: isActive ? '#38bdf8' : (darkMode ? '#94a3b8' : '#475569'), textDecoration: 'none', fontSize: '14px', fontWeight: isActive ? 700 : 500, position: 'relative', padding: '8px 0', transition: 'all 0.3s' }}>
                    {item.text}
                    {isActive && (
                      <motion.div layoutId="activeIndicator" style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #38bdf8 0%, #7c3aed 100%)', borderRadius: '2px', boxShadow: '0 2px 10px rgba(56, 189, 248, 0.5)' }} transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                    )}
                  </a>
                );
              })}
            </div>
          )}

          {/* MASAÜSTÜ: Sağ alan */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <select value={lang} onChange={(e) => setLang(e.target.value as 'tr' | 'de' | 'en')} style={{ backgroundColor: darkMode ? '#2a2a2a' : '#e2e8f0', color: theme.textPrimary, border: `1px solid ${theme.border}`, padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', outline: 'none' }}>
                <option value="de">🇩🇪 DE</option>
                <option value="en">🇺🇸 EN</option>
                <option value="tr">🇹🇷 TR</option>
              </select>
              <a href="tel:+491636090266" style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #ef4444 100%)', color: '#ffffff', textDecoration: 'none', padding: '10px 24px', borderRadius: '25px', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)' }}>
                {t.btnCallNow}
              </a>
              <button onClick={() => setDarkMode(!darkMode)} style={{ backgroundColor: darkMode ? '#f97316' : '#1e1b4b', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#ffffff', fontSize: '18px' }}>
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          )}

          {/* MOBİL: Sağ alan — lang seçici + hamburger */}
          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as 'tr' | 'de' | 'en')} 
                style={{ backgroundColor: darkMode ? '#2a2a2a' : '#e2e8f0', color: theme.textPrimary, border: `1px solid ${theme.border}`, padding: '6px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', outline: 'none' }}
              >
                <option value="de">🇩🇪</option>
                <option value="en">🇺🇸</option>
                <option value="tr">🇹🇷</option>
              </select>
              <button 
                onClick={() => setMobileMenuOpen(prev => !prev)}
                style={{ 
                  background: 'none', 
                  border: `1px solid ${theme.border}`,
                  borderRadius: '8px',
                  color: theme.textPrimary, 
                  fontSize: '22px', 
                  cursor: 'pointer', 
                  padding: '6px 10px',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  WebkitTapHighlightColor: 'transparent' as any,
                  touchAction: 'manipulation' as any,
                  minWidth: '44px',
                  minHeight: '44px',
                }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          )}

        </div>

        {/* 📱 MOBİL MENÜ */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ position: 'fixed', top: '65px', left: 0, right: 0, backgroundColor: theme.bgSecondary, borderBottom: `1px solid ${theme.border}`, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 20px 30px rgba(0,0,0,0.15)', zIndex: 999 }}
            >
              {[
                { text: t.navHome, href: '#' },
                { text: t.navAbout, href: '#about' },
                { text: t.navServices, href: '#services' },
                { text: t.navGallery, href: '#gallery' },
                { text: t.navAppointment, href: '#appointment' },
                { text: t.navApplyForm, href: '#apply' },
                { text: t.navContact, href: '#contact' }
              ].map((link, lIdx) => (
                <a key={lIdx} href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ color: theme.textPrimary, textDecoration: 'none', fontSize: '16px', fontWeight: 600, paddingBottom: '8px', borderBottom: `1px solid ${theme.border}` }}>
                  {link.text}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                <select value={lang} onChange={(e) => { setLang(e.target.value as any); setMobileMenuOpen(false); }} style={{ backgroundColor: theme.inputBg, color: theme.textPrimary, border: `1px solid ${theme.border}`, padding: '8px 16px', borderRadius: '8px', fontSize: '14px', outline: 'none' }}>
                  <option value="de">Deutsch</option>
                  <option value="en">English</option>
                  <option value="tr">Türkçe</option>
                </select>
                <button onClick={() => { setDarkMode(!darkMode); setMobileMenuOpen(false); }} style={{ padding: '8px 16px', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: 'transparent', color: theme.textPrimary, fontWeight: 'bold', cursor: 'pointer' }}>
                  {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobil menü açıkken arka plan karartması */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998, background: 'transparent' }}
        />
      )}

      {/* ----------------- GÖSTERİŞLİ BÖLÜNMÜŞ EKRAN HERO (ANA SAYFA) ----------------- */}
      <header id="navbar-top" className="hero-container-main" style={{ 
        background: theme.bgHeader, 
        padding: '120px 40px', 
        borderBottom: `1px solid ${theme.border}`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style>{`
          @media (max-width: 768px) {
            .hero-container-main { padding: 100px 16px 50px 16px !important; }
            .hero-grid-wrapper { grid-template-columns: 1fr !important; gap: 30px !important; }
            .hero-grid-wrapper h1 { font-size: 28px !important; letter-spacing: -0.5px !important; text-align: center !important; }
            .hero-grid-wrapper p { font-size: 15px !important; text-align: center !important; max-width: 100% !important; }
            .hero-grid-wrapper span { display: block !important; margin: 0 auto !important; text-align: center !important; }
            .hero-btn-row { flex-direction: column !important; align-items: center !important; }
            .hero-btn-row a { width: 100% !important; max-width: 300px !important; text-align: center !important; box-sizing: border-box !important; }
            .hero-img-box { height: 220px !important; }
            .hero-img-badge { bottom: 12px !important; right: 12px !important; left: 12px !important; padding: 10px 14px !important; }
            .hero-img-badge h3 { font-size: 16px !important; }
            .hero-text-col { align-items: center !important; }
          }
        `}</style>
        {/* Arka Plan Parlama Efektleri */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(56, 189, 248, 0.08)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(124, 58, 237, 0.05)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="hero-grid-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Sol Sütun: Yazılar ve Etkileyici Butonlar */}
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} className="hero-text-col" style={{ display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'left' }}>
            <span style={{ display: 'inline-block', width: 'fit-content', backgroundColor: 'rgba(56,189,248,0.1)', color: '#38bdf8', padding: '8px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', border: '1px solid rgba(56,189,248,0.2)' }}>
              {t.heroTag}
            </span>
            <h1 style={{ fontSize: '54px', fontWeight: 800, color: theme.textPrimary, letterSpacing: '-1.5px', lineHeight: '1.15', margin: 0 }}>
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: '18px', color: theme.textSecondary, lineHeight: '1.65', margin: 0, maxWidth: '600px' }}>
              {t.heroSub}
            </p>
            <div className="hero-btn-row" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
              <a href="#apply" style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #ef4444 100%)', color: '#ffffff', textDecoration: 'none', padding: '15px 35px', borderRadius: '30px', fontWeight: 'bold', fontSize: '15px', boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)', transition: '0.3s' }}>
                {t.navApplyForm}
              </a>
              {/* 🎯 image_c70afe.png AYDINLIK MOD OKUNABİLİRLİK GÜNCELLEMESİ */}
              <a
                href="#services"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  borderRadius: '30px',
                  backgroundColor: 'transparent',
                  // Aydınlık modda koyu lacivert, koyu modda beyaz yazı rengi
                  color: darkMode ? '#ffffff' : '#0f172a', 
                  // Çerçeve rengini de yazı rengiyle senkronize ediyoruz
                  border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 23, 42, 0.4)'}`,
                  fontWeight: 'bold',
                  fontSize: '15px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                // Üzerine gelindiğinde (hover) arka planı hafifçe doldurarak derinlik katabiliriz
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {lang === 'tr' ? 'Hizmetlerimizi İnceleyin' : lang === 'de' ? 'Dienstleistungen' : 'Explore Services'}
              </a>
            </div>
          </motion.div>

          {/* Sağ Sütun: Önünde Yer Tabelası Olan Modern Holding Binası (image_f3a759.jpg yerine) */}
          <motion.div 
            initial={{ opacity: 1, scale: 1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="hero-img-box"
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
            <div className="hero-img-badge" style={{
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

      {/* 🏢 HAKKIMIZDA & KURUCUMUZ BÖLÜMÜ */}
      <section id="about" className="about-section-main" style={{ padding: '100px 20px', backgroundColor: darkMode ? '#0b0f19' : '#f8fafc', transition: 'all 0.3s' }}>
        <div className="about-flex-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Sol Sütun: Şirket Hikayesi */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            <span style={{ color: '#38bdf8', textTransform: 'uppercase', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>
              {lang === 'tr' ? 'BİZ KİMİZ?' : lang === 'de' ? 'WER WIR SIND?' : 'WHO WE ARE?'}
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: theme.textPrimary, marginBottom: '24px', lineHeight: '1.2' }}>
              Timo to Work International B.V.
            </h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              {(t as any).aboutText || "Avrupa operasyonlarımızla fuar lojistiğinden uluslararası iş gücü tedariğine kadar küresel standartlarda hizmet sunuyoruz."}
            </p>
          </div>

          {/* Sağ Sütun: Premium Kurucu Alanı (profil.png Entegrasyonu) */}
          <div style={{ flex: '1', minWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center', backgroundColor: darkMode ? '#111827' : '#ffffff', padding: '30px', borderRadius: '24px', border: `1px solid ${theme.border}`, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', maxWidth: '550px', width: '100%' }}>
              
              {/* profil.png Dikey Fotoğraf Kartı */}
              <div style={{ width: '150px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', border: `1px solid ${theme.border}`, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                <img 
                  src="/profil.png" 
                  alt="Eyüp Gavas" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                />
              </div>

              {/* Kurucu Bilgileri ve İmzası */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', margin: 0, letterSpacing: '1px' }}>
                  {t.founderTitle}
                </h4>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: theme.textPrimary, margin: 0 }}>
                  Eyüp Gavas
                </h3>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', fontStyle: 'italic' }}>
                  {t.founderRole}
                </span>
                <p style={{ color: theme.textSecondary, fontSize: '13px', lineHeight: '1.6', margin: '8px 0 0 0' }}>
                  "{t.founderText}"
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ----------------- BAŞARI İSTATİSTİKLERİ SAYACI (ANIMASYONLU) ----------------- */}
      {/* 📈 İSTATİSTİK BÖLÜMÜ ANA KAPSAYICI */}
      <motion.section
        id="stats-section"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setStatsTriggered(true)} // Ekrana girdiği an sayaçları tetikler
        style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          
          {/* Kart 1: +150 */}
          <div style={{ backgroundColor: darkMode ? '#111827' : '#ffffff', border: `1px solid ${theme.border}`, padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#38bdf8', marginBottom: '10px' }}>
              +{statsTriggered ? <AnimatedCounter target={150} triggered={statsTriggered} /> : '0'}
            </div>
            <div style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>
              {lang === 'tr' ? 'Tamamlanan Fuar Standı' : lang === 'de' ? 'Abgeschlossene Messestände' : 'Completed Exhibition Stands'}
            </div>
          </div>

          {/* Kart 2: +500 */}
          <div style={{ backgroundColor: darkMode ? '#111827' : '#ffffff', border: `1px solid ${theme.border}`, padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#38bdf8', marginBottom: '10px' }}>
              +{statsTriggered ? <AnimatedCounter target={500} triggered={statsTriggered} /> : '0'}
            </div>
            <div style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>
              {lang === 'tr' ? 'Aktif Uzman Kadro' : lang === 'de' ? 'Aktive Fachkräfte' : 'Active Specialists'}
            </div>
          </div>

          {/* Kart 3: 12 */}
          <div style={{ backgroundColor: darkMode ? '#111827' : '#ffffff', border: `1px solid ${theme.border}`, padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#38bdf8', marginBottom: '10px' }}>
              {statsTriggered ? <AnimatedCounter target={12} duration={1000} triggered={statsTriggered} /> : '0'}
            </div>
            <div style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>
              {lang === 'tr' ? 'Uluslararası Ticaret Ülkesi' : lang === 'de' ? 'Internationale Handelsländer' : 'International Trading Countries'}
            </div>
          </div>

          {/* Kart 4: 100% */}
          <div style={{ backgroundColor: darkMode ? '#111827' : '#ffffff', border: `1px solid ${theme.border}`, padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: '#ea580c', marginBottom: '10px' }}>
              {statsTriggered ? <AnimatedCounter target={100} triggered={statsTriggered} /> : '0'}%
            </div>
            <div style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>
              {lang === 'tr' ? 'Müşteri Memnuniyeti' : lang === 'de' ? 'Kundenzufriedenheit' : 'Customer Satisfaction'}
            </div>
          </div>

        </div>
      </motion.section>

      {/* HİZMETLER BÖLÜMÜ (AKILLI AKORDEON SİSTEMİ) */}
      <motion.main 
        id="services" 
        initial={{ opacity: 1, y: 0 }} 
        animate={{ opacity: 1, y: 0 }} 
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
                  className="service-card-header"
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
                      <div className="service-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
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
        initial={{ opacity: 1, y: 0 }} 
        animate={{ opacity: 1, y: 0 }} 
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
      <motion.section id="gallery" initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} style={{ backgroundColor: theme.bgPrimary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.galleryTitle}</h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.gallerySub}</p>
          </div>
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            {galleryImages.map((url, index) => {
              const idx = index + 1;
              return (
                <div key={index} onClick={() => setLightboxIndex(index)} className="gallery-card" style={{ cursor: 'pointer', position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '25px', backgroundImage: `linear-gradient(to top, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.2) 100%), url("${url}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>{(t as any)[`galCard${idx}Title`]}</h4>
                  <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 500 }}>{(t as any)[`galCard${idx}Sub`]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* RANDEVU BÖLÜMÜ (ANIMASYONLU) */}
      <motion.section id="appointment" initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} style={{ backgroundColor: theme.bgSecondary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.aptTitle}</h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.aptSub}</p>
          </div>
          <div style={{ backgroundColor: theme.bgPrimary, padding: '40px', borderRadius: '24px', border: `1px solid ${theme.border}` }}>
        <form noValidate onSubmit={handleAppointmentSubmit}>
              {/* Görüşme Konusu Satırı */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: theme.textSecondary, fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>
                  {t.aptTopic}
                </label>
                <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                  <option value="messebau">{t.card1Title}</option>
                  <option value="personal">{t.card2Title}</option>
                  <option value="logistics">{t.card3Title}</option>
                  <option value="import">{t.card4Title}</option>
                </select>
              </div>

              {/* İKİLİ SATIR: Tarih Seçimi & Saat Dilimi (image_c792f8.png Birleşiklik Çözümü) */}
              <div className="appt-date-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', color: theme.textSecondary, fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>
                    {t.aptDate}
                  </label>
                  <input 
                    required
                    type="date" 
                    style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: theme.textSecondary, fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>
                    {t.aptTime}
                  </label>
                  <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                    <option>09:00 - 11:00</option>
                    <option>11:00 - 13:00</option>
                    <option>14:00 - 16:00</option>
                    <option>16:00 - 18:00</option>
                  </select>
                </div>
              </div>

              {/* Buton Alanı */}
              <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#38bdf8', color: '#0b0f19', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
                {t.aptBtn}
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* BAŞVURU FORMU BÖLÜMÜ (ANIMASYONLU) */}
      <motion.section id="apply" initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} style={{ backgroundColor: theme.bgPrimary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.jobTitle}</h2>
            <p style={{ color: theme.textSecondary, fontSize: '16px' }}>{t.jobSub}</p>
          </div>
          <div className="form-inner" style={{ backgroundColor: theme.bgFormBlack, padding: '50px 40px', borderRadius: '24px', border: `1px solid ${theme.border}` }}>
        <form noValidate onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              <div>
                {/* 1. Kişisel Bilgiler Başlığı */}
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: theme.textPrimary, textAlign: 'center', marginBottom: '30px' }}>
                  {t.secPersonal}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  
                  {/* Satır 1: Tam Adınız & Doğum Tarihi */}
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblFullName}</label>
                      <input required type="text" placeholder="Anderson Mikoo" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblDate}</label>
                      <input required type="date" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Satır 2: E-Posta & Telefon */}
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblEmail}</label>
                      <input required type="email" placeholder="user@website.com" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblPhone}</label>
                      <input required type="tel" placeholder="+1 212-695-1962" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Satır 3: Tam Adresiniz (Tekli Geniş Alan) */}
                  <div style={{ marginBottom: '24px', width: '100%' }}>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblAddress}</label>
                    <input required type="text" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                  </div>

                  {/* Satır 4: Cinsiyet & Sosyal Güvenlik Numarası */}
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblGender}</label>
                      <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                        <option value="">{t.formSelect}</option>
                        <option value="male">{t.lblGender1}</option>
                        <option value="female">{t.lblGender2}</option>
                        <option value="other">{t.lblGender3}</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblSvNum}</label>
                      <input type="text" placeholder="SV-Nummer" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                    </div>
                  </div>

                  {/* Satır 5: Çalışma Türü & Maaş Beklentisi */}
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblJobType}</label>
                      <select style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                        <option value="">{t.formSelect}</option>
                        <option value="full">{t.lblJobType1}</option>
                        <option value="part">{t.lblJobType2}</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblSalary}</label>
                      <select style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                        <option value="">{t.formSelect}</option>
                        <option value="2000-3000">2000€ - 3000€</option>
                        <option value="3000-4000">3000€ - 4000€</option>
                        <option value="4000+">4000€+</option>
                      </select>
                    </div>
                  </div>

                  {/* Satır 6: Başvurulan Pozisyon (Tekli Geniş Alan) */}
                  <div style={{ marginBottom: '32px', width: '100%' }}>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{t.lblPosition}</label>
                    <input type="text" placeholder="..." style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }} />
                  </div>
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '25px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, textAlign: 'center', marginBottom: '25px' }}>{t.secPermit}</h3>
                
                {/* Yan Yana Duran Kutuların Kapsayıcısı */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', width: '100%', marginBottom: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblExperience}</label>
                    <select style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '14px', outline: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                      <option value="">{t.formSelect}</option>
                      <option value="yes">{t.formDiplomaYes}</option>
                      <option value="no">{t.formDiplomaNo}</option>
                    </select>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: theme.textPrimary, marginBottom: '8px' }}>{t.lblExpDates}</label>
                    <input type="text" placeholder="..." style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '14px', outline: 'none', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '25px' }}>
                {/* 3. Eğitim Bilgileri Başlığı */}
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: theme.textPrimary, textAlign: 'center', marginBottom: '30px', marginTop: '40px' }}>
                  {t.secEducation}
                </h3>
    
                {/* Satır 1: Okul / Şehir */}
                <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.formSchool}
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="Alex High School"
                      style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.formCity}
                    </label>
                    <input 
                      required
                      type="text" 
                      style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>
    
                {/* Satır 2: Başlangıç / Bitiş */}
                <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.formStart}
                    </label>
                    <input 
                      required
                      type="date" 
                      style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.formEnd}
                    </label>
                    <input 
                      required
                      type="date" 
                      style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>
    
                {/* Satır 3: Mezuniyet Durumu / Diploma */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', marginBottom: '32px' }}>
                  <div>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.formStatus}
                    </label>
                    <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.formSelect}</option>
                      <option value="highschool">{t.lblAbschluss1}</option>
                      <option value="bachelor">{t.lblAbschluss2}</option>
                      <option value="master">{t.lblAbschluss3}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: theme.textPrimary, fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                      {t.formDiploma}
                    </label>
                    <select style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '12px', fontSize: '14px', outline: 'none', cursor: 'pointer' }}>
                      <option value="">{t.formSelect}</option>
                      <option value="yes">{t.formDiplomaYes}</option>
                      <option value="no">{t.formDiplomaNo}</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Formun en altındaki buton satırı */}
              <div style={{ marginTop: '30px' }}>
                <button 
                  type="submit" 
                  style={{ 
                    backgroundColor: '#2563eb', 
                    color: '#ffffff', 
                    padding: '14px 28px', 
                    borderRadius: '10px', 
                    border: 'none', 
                    fontWeight: 'bold', 
                    cursor: 'pointer',
                    fontSize: '15px'
                  }}
                >
                  {t.btnSubmit || "Şimdi Başvur"}
                </button>
              </div>

            </form> {/* FORM BURADA DÜZGÜNCE KAPANMALI */}
          </div> {/* Formu saran iç siyah/gri kutunun div kapanışı */}

        </div> {/* Section içindeki maksimum genişliği (maxWidth) belirleyen ana div kapanışı */}
      </motion.section> {/* BAŞVURU FORMU BÖLÜMÜNÜN KAPANIŞI */}

      {/* İLETİŞİM BÖLÜMÜ */}
      <section id="contact" style={{ backgroundColor: theme.bgSecondary, padding: '80px 20px', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div style={{ backgroundColor: theme.bgPrimary, padding: '40px', borderRadius: '24px', border: `1px solid ${theme.border}` }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: theme.textPrimary, marginBottom: '10px' }}>{t.formTitle}</h3>
            <p style={{ color: theme.textSecondary, fontSize: '14px', marginBottom: '30px' }}>{t.formSub}</p>
        <form noValidate onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: theme.textSecondary, marginBottom: '8px', fontWeight: 500 }}>{t.formLabelName}</label>
            <input required type="text" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '14px', outline: 'none', transition: 'all 0.3s ease' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: theme.textSecondary, marginBottom: '8px', fontWeight: 500 }}>{t.formLabelEmail}</label>
            <input required type="email" style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '14px', outline: 'none', transition: 'all 0.3s ease' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: theme.textSecondary, marginBottom: '8px', fontWeight: 500 }}>{t.formLabelMsg}</label>
            <textarea required rows={4} style={{ width: '100%', padding: '14px 16px', backgroundColor: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '14px', outline: 'none', resize: 'none', transition: 'all 0.3s ease' }}></textarea>
              </div>
          <button type="submit" style={{ backgroundColor: '#38bdf8', color: '#0b0f19', fontWeight: 'bold', padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer', transition: '0.3s' }}>{t.formBtn}</button>
            </form>
          </div>
          
          {/* Sağ Sütun: Kurumsal Bilgiler ve Şık Tıklanabilir Harita (image_c8dcd4.png Alanı) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>{t.brand}</h3>
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>{t.companyDesc}</p>
              
              {/* İletişim Detay Listesi */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#f8fafc', fontSize: '15px', marginBottom: '30px' }}>
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

            {/* 🗺️ PREMİUM, TIKLANABİLİR GOOGLE HARİTALAR ENTEGRASYONU */}
            <motion.a 
              href="https://maps.google.com/?q=Hindenburgstr.+236,+41061+Mönchengladbach,+Germany"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01, borderColor: '#38bdf8' }}
              style={{ 
                display: 'block',
                width: '100%',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                border: `1px solid ${theme.border}`,
                boxShadow: '0 15px 30px -10px rgba(0,0,0,0.5)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease'
              }}
              title={lang === 'tr' ? 'Google Haritalar\'da Aç' : lang === 'de' ? 'In Google Maps öffnen' : 'Open in Google Maps'}
            >
              {/* Google Maps Embed Iframe (Koyu Mod Efektli / Saturation Ayarlı) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.2206775986423!2d6.435773277085731!3d51.19655633390314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8abc0b70eb209%3A0x9d90ecfe821869e9!2sHindenburgstraße%20236%2C%2041061%20Mönchengladbach%2C%20Almanya!5e0!3m2!1str!2str!4v1717012345678!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: darkMode ? 'invert(90%) hue-rotate(180deg) saturate(60%) contrast(90%)' : 'none',
                  pointerEvents: 'none' // Tıklamanın doğrudan iframe yerine üstteki 'a' linkine düşmesi için
                }}
                allowFullScreen={false}
                loading="lazy"
              />

              {/* Harita Üzerindeki Lüks "Konumu Haritada Aç" Dijital Rozeti */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(8px)',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e' }}></span>
                <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
                  {lang === 'tr' ? 'Haritada Yol Tarifi Al ➔' : lang === 'de' ? 'Auf der Karte anzeigen ➔' : 'Get Directions ➔'}
                </span>
              </div>
              
              {/* 🟢 CANLI RADAR VE RADAR METNİ KATMANI */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '8px 14px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {/* Parlayan Yeşil Radar Halkası Efekti */}
                <div style={{ position: 'relative', width: '8px', height: '8px' }}>
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#22c55e',
                    borderRadius: '50%'
                  }} />
                  <motion.div 
                    animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#22c55e',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: 600, letterSpacing: '0.3px' }}>
                  {t.mapLiveOps}
                </span>
              </div>
            </motion.a>
          {/* Sağ Sütun Bitişi */}
          </div>

        {/* İletişim İç Kapsayıcı Div Bitişi */}
        </div>
      </section> {/* İLETİŞİM BÖLÜMÜ TAM BURADA DÜZGÜNCE KAPANMALI */}

      {/* Alt Bilgi / Footer Bar */}
      <footer style={{ backgroundColor: '#0b0f19', color: '#64748b', padding: '30px 20px', textAlign: 'center', fontSize: '14px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ margin: 0 }}>{t.footerText}</p>
        </div>
      </footer>

      {/*  HOLDING STANDARTLARINDA PREMIUM CANLI DESTEK PANELI (SAĞ ALT KÖŞE) */}
      <div className="floating-panel" style={{ position: 'fixed', bottom: '35px', right: '35px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'end', fontFamily: 'sans-serif' }}>
        
        {/* --- 1. YAPAY ZEKA ASİSTANI BÖLÜMÜ --- */}
        {aiOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{
              width: 'calc(100vw - 40px)',
              maxWidth: '360px',
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

              {/* 🏢 PREMIUM HIZLI SORU BALONLARI (QUICK REPLIES) */}
              {messages.length === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px', maxWidth: '90%' }}>
                  {[
                    { text: lang === 'tr' ? '🏢 Kurucumuz Kim?' : lang === 'de' ? '🏢 Wer ist der Gründer?' : '🏢 Who is our Founder?', query: lang === 'tr' ? 'Şirket kurucusu Eyüp Gavas kimdir?' : lang === 'de' ? 'Wer ist der Gründer Eyüp Gavas?' : 'Who is the founder Eyüp Gavas?' },
                    { text: lang === 'tr' ? '🛠️ Fuar Süreçleri' : lang === 'de' ? '🛠️ Messebau-Prozess' : '🛠️ Exhibition Processes', query: lang === 'tr' ? 'Fuar standı kurulum süreçleriniz nelerdir?' : lang === 'de' ? 'Wie läuft der Messebau-Prozess ab?' : 'What are your exhibition stand installation processes?' },
                    { text: lang === 'tr' ? '💼 İş Başvurusu Nasıl Yapılır?' : lang === 'de' ? '💼 Wie bewerben?' : '💼 How to Apply?', query: lang === 'tr' ? 'Nasıl iş başvurusu yapabilirim?' : lang === 'de' ? 'Wie kann ich mich bewerben?' : 'How can I apply for a job?' }
                  ].map((btn, bIdx) => (
                    <motion.button
                      key={bIdx}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(56, 189, 248, 0.12)', borderColor: '#38bdf8' }}
                      onClick={() => handleQuickReplyClick(btn.query)}
                      style={{
                        textAlign: 'left',
                        padding: '10px 14px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '10px',
                        color: darkMode ? '#38bdf8' : '#0369a1',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {btn.text}
                    </motion.button>
                  ))}
                </div>
              )}

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
          className="floating-btn"
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
          className="floating-btn"
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

      {/* 🌌 ULTRA-MODERN SINEMATIK LIGHTBOX MODÜLÜ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(3, 7, 18, 0.95)',
              backdropFilter: 'blur(15px)',
              zIndex: 1100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Kapatma Butonu */}
            <button 
              onClick={() => setLightboxIndex(null)}
              style={{ position: 'absolute', top: '30px', right: '40px', background: 'none', border: 'none', color: '#ffffff', fontSize: '35px', cursor: 'pointer', opacity: 0.7 }}
            >
              ×
            </button>

            {/* Sol Ok Butonu */}
            <button 
              onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
              style={{ position: 'absolute', left: '40px', background: 'none', border: 'none', color: '#ffffff', fontSize: '40px', cursor: 'pointer', opacity: 0.7 }}
            >
              ‹
            </button>

            {/* Devasa Görsel Kartı */}
            <motion.img 
              key={lightboxIndex}
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              src={galleryImages[lightboxIndex]} 
              alt="Project Detail" 
              style={{ 
                maxWidth: '85%', 
                maxHeight: '80vh', 
                borderRadius: '16px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />

            {/* Sağ Ok Butonu */}
            <button 
              onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
              style={{ position: 'absolute', right: '40px', background: 'none', border: 'none', color: '#ffffff', fontSize: '40px', cursor: 'pointer', opacity: 0.7 }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔔 PREMIUM TOAST BİLDİRİM PANELİ */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            className="toast-panel"
            initial={{ opacity: 0, y: -20, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              zIndex: 9999,
              backgroundColor: toast.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              backdropFilter: 'blur(15px)',
              border: `1px solid ${toast.type === 'success' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
              padding: '16px 24px',
              borderRadius: '14px',
              boxShadow: toast.type === 'success' ? '0 10px 40px rgba(16, 185, 129, 0.2)' : '0 10px 40px rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              maxWidth: '350px'
            }}
          >
            <span style={{ fontSize: '18px' }}>{toast.type === 'success' ? '🟢' : '🔴'}</span>
            <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600, lineHeight: '1.4', fontFamily: 'sans-serif' }}>
              {toast.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📱 MOBİL RESPONSIVE CSS */}
      <style>{`
        html, body {
          margin: 0; padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        * { box-sizing: border-box; }

        @media (max-width: 768px) {

          /* ── GENEL ── */
          html, body { overflow-x: hidden; }

          /* ── NAVBAR ── */
          nav { padding: 12px 16px !important; }

          /* ── HERO ── */
          .hero-container-main { padding: 90px 16px 40px 16px !important; }
          .hero-grid-wrapper {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .hero-text-col { align-items: center !important; text-align: center !important; }
          .hero-text-col h1 { font-size: 26px !important; line-height: 1.3 !important; }
          .hero-text-col p { font-size: 14px !important; }
          .hero-text-col span { margin: 0 auto !important; }
          .hero-btn-row {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .hero-btn-row a {
            width: 100% !important;
            text-align: center !important;
          }
          .hero-img-box { height: 220px !important; }
          .hero-img-badge {
            bottom: 10px !important;
            right: 10px !important;
            left: 10px !important;
            padding: 10px 14px !important;
          }
          .hero-img-badge h3 { font-size: 15px !important; }

          /* ── HAKKIMIZDA ── */
          .about-section-main { padding: 60px 16px 40px 16px !important; }
          .about-flex-wrapper {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .about-flex-wrapper > div { min-width: unset !important; width: 100% !important; }

          /* ── SAYAÇLAR ── */
          #stats-section { padding: 40px 16px !important; }
          #stats-section > div {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }

          /* ── HİZMETLER ── */
          #services { padding: 60px 16px !important; }
          .service-card-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            padding: 20px 16px !important;
          }
          .service-card-header > div:first-child {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 12px !important;
            width: 100% !important;
          }
          .service-card-header > div:first-child > div:last-child {
            text-align: left !important;
          }
          .service-card-header h3 { font-size: 16px !important; }
          .service-card-header p { font-size: 13px !important; }
          .service-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          /* ── GALERİ ── */
          #gallery { padding: 60px 16px !important; }
          #gallery .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          #gallery .gallery-card { height: 200px !important; }

          /* ── RANDEVU ── */
          #appointment { padding: 60px 16px !important; }
          #appointment .appt-date-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* ── BAŞVURU FORMU ── */
          #apply { padding: 60px 16px !important; }
          #apply .form-inner { padding: 24px 16px !important; }
          #apply .form-row-2col {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          input, select, textarea {
            width: 100% !important;
          }

          /* ── İLETİŞİM ── */
          #contact { padding: 60px 16px !important; }
          #contact > div {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          #contact .map-iframe { height: 180px !important; }

          /* ── FOOTER ── */
          footer { padding: 20px 16px !important; }
          footer > div { flex-direction: column !important; text-align: center !important; }

          /* ── FLOATING BUTONLAR (KI + WHATSAPP) ── */
          .floating-panel {
            right: 12px !important;
            bottom: 12px !important;
            left: auto !important;
            align-items: flex-end !important;
          }
          .floating-panel > div { /* AI chat penceresi */
            width: calc(100vw - 24px) !important;
            max-width: 360px !important;
            height: 420px !important;
            right: 0 !important;
          }
          .floating-btn {
            padding: 10px 16px !important;
            border-radius: 24px !important;
          }

          /* ── TOAST ── */
          .toast-panel {
            top: 16px !important;
            right: 12px !important;
            left: 12px !important;
            max-width: unset !important;
          }

          /* ── ROZET BÖLÜMÜ ── */
          .badge-section { padding: 60px 16px !important; }
          .badge-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }

          /* ── GENEL YAZI ── */
          h2 { font-size: 22px !important; line-height: 1.3 !important; }
          h3 { font-size: 18px !important; }
        }
      `}</style>
    </div>
  );
}