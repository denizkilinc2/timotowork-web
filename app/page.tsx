"use client";

import { useState } from 'react';

// TÜM SİTENİN ÇEVİRİ VERİSİ (TR / DE / EN)
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
    card1Title: "Messebau & Projektplanung",
    card1Desc: "Fuar standı tasarımı, kurulumu ve tüm proje süreçlerini baştan sona planlıyor; ilk fikirden anahtar teslim uygulamaya kadar profesyonel çözümler sunuyoruz.",
    card2Title: "Personalbereitstellung",
    card2Desc: "Fuar süreçleri, lojistik operasyonlar, kurulum ve söküm işleri için ihtiyaç duyduğunuz nitelikli ve uzman iş gücünü profesyonelce sağlıyoruz.",
    card3Title: "Logistik & Hotelmanagement",
    card3Desc: "Konaklama organizasyonlarından saha operasyonlarına kadar tüm süreçlerin yerinde, pürüzsüz ve kusursuz bir şekilde yürütülmesini yönetiyoruz.",
    card4Title: "Uluslararası İthalat (Import)",
    card4Desc: "Dünya genelindeki üreticilerden en kaliteli ürün ve ham maddelerin tedarik süreçlerini, yasal mevzuatlara tam uyumlu olarak sınır ötesi operasyonlarla yönetiyoruz.",
    card5Title: "Küresel İhracat (Export)",
    card5Desc: "Ürün ve hizmetleri uluslararası pazarlarla buluşturuyor, gümrükleme, hedef pazar analizi ve lojistik ağ yönetimini uçtan uca organize ediyoruz.",
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
    
    // GÜNCELLENEN TEMİZ TÜRKÇE BAŞVURU ALANLARI
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
    jobBtn: "Şimdi Başvur"
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
    card1Desc: "Wir planen, gestalten und realisieren Messestände – von der ersten Idee bis zur fertigen Umsetzung profesyonelce.",
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
    jobBtn: "Jetzt bewerben"
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
    card1Title: "Messebau & Projektplanung",
    card1Desc: "We plan, design, and realize exhibition stands – providing professional solutions from the initial idea to final implementation.",
    card2Title: "Personalbereitstellung",
    card2Desc: "We professionally provide the qualified and expert workforce you need for exhibition processes, logistics, installation, and dismantling.",
    card3Title: "Logistik & Hotelmanagement",
    card3Desc: "We seamlessly manage everything from accommodation organizations to on-site operations smoothly and flawlessly.",
    card4Title: "International Import",
    card4Desc: "We manage the procurement processes of top-quality products and raw materials from global manufacturers, fully complying with international legal regulations.",
    card5Title: "Global Export",
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
    jobBtn: "Apply Now"
  }
};

export default function Home() {
  // Varsayılan dili 'de' (Almanca) yapıyoruz (Avrupa odaklı olduğu için). İsteyen TR veya EN seçebilir.
  const [lang, setLang] = useState<'tr' | 'de' | 'en'>('de');
  const t = translations[lang];

  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* Üst Menü / Navbar */}
      <nav style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #2d2d2d', padding: '15px 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Sol Taraf: Kategoriler (Görseldeki Sıralama) */}
          <div style={{ display: 'flex', gap: '22px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navHome}</a>
            <a href="#about" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navAbout}</a>
            <a href="#services" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navServices}</a>
            <a href="#gallery" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navGallery}</a>
            <a href="#appointment" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navAppointment}</a>
            <a href="#contact" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navContact}</a>
            <a href="#apply" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{t.navApplyForm}</a>
          </div>
          
          {/* Sağ Taraf: Dil Seçimi, Şimdi Arayın Butonu ve Tema İkonu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            
            {/* Dil Seçici (Açılır Seçim Kutusu Şeklinde - Görseldeki Uyum İçin) */}
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as 'tr' | 'de' | 'en')}
              style={{ backgroundColor: '#2a2a2a', color: '#ffffff', border: '1px solid #444', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', outline: 'none' }}
            >
              <option value="de">🇩🇪 Deutsch</option>
              <option value="en">🇺🇸 English</option>
              <option value="tr">🇹🇷 Turkish</option>
            </select>

            {/* Gradyan Geçişli "Şimdi Arayın" Butonu (Görseldeki Renk Tonu) */}
            <a href="tel:+4900000000" style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #ef4444 100%)', color: '#ffffff', textDecoration: 'none', padding: '10px 24px', borderRadius: '25px', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)', transition: '0.3s' }}>
              {t.btnCallNow}
            </a>

            {/* Tema İkonu (Görseldeki Turuncu Daire İçindeki Güneş) */}
            <button style={{ backgroundColor: '#f97316', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justify: 'center', cursor: 'pointer', color: '#ffffff', fontSize: '18px' }}>
              ☀️
            </button>
          </div>

        </div>
      </nav>

      {/* Karşılama Alanı / Hero Section */}
      <header style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '100px 20px', textAlign: 'center', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', color: '#ffffff', letterSpacing: '-1px' }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            {t.heroSub}
          </p>
        </div>
      </header>

      {/* Hizmetler Bölümü */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }} id="services">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{t.sectionTitle}</h2>
          <p style={{ color: '#64748b', fontSize: '16px' }}>{t.sectionSub}</p>
        </div>

        {/* 5'li Kart Grid Düzeni */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Kart 1: Messebau */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(56,189,248,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(56,189,248,0.2)' }}>📉</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>{t.card1Title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{t.card1Desc}</p>
          </div>

          {/* Kart 2: Personalbereitstellung */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(249,115,22,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(249,115,22,0.2)' }}>👥</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>{t.card2Title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{t.card2Desc}</p>
          </div>

          {/* Kart 3: Logistik & Hotelmanagement */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(168,85,247,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(168,85,247,0.2)' }}>🗺️</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>{t.card3Title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{t.card3Desc}</p>
          </div>

          {/* Kart 4: İthalat */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(34,197,94,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(34,197,94,0.2)' }}>📥</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>{t.card4Title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{t.card4Desc}</p>
          </div>

          {/* Kart 5: İhracat */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(99,102,241,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>📤</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>{t.card5Title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{t.card5Desc}</p>
          </div>

        </div>
      </main>

      {/* ----------------- GALERİ BÖLÜMÜ ----------------- */}
      <section id="gallery" style={{ backgroundColor: '#0b0f19', padding: '80px 20px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Başlık Alanı */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{t.galleryTitle}</h2>
            <p style={{ color: '#64748b', fontSize: '16px' }}>{t.gallerySub}</p>
          </div>

          {/* 6'lı Modern Fotoğraf Grid Düzeni */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            
            {/* Görsel 1 - Messebau */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#111827', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px', backgroundImage: 'linear-gradient(to top, rgba(11,15,25,0.9), rgba(11,15,25,0.3))' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🏗️</div>
              <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>Messebau Projeleri</h4>
              <span style={{ color: '#64748b', fontSize: '13px' }}>Stand Tasarım & Kurulum</span>
            </div>

            {/* Görsel 2 - Personalbereitstellung */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#111827', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px', backgroundImage: 'linear-gradient(to top, rgba(11,15,25,0.9), rgba(11,15,25,0.3))' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>👔</div>
              <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>Nitelikli İş Gücü</h4>
              <span style={{ color: '#64748b', fontSize: '13px' }}>Uzman Kadro Tedariği</span>
            </div>

            {/* Görsel 3 - Logistik */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#111827', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px', backgroundImage: 'linear-gradient(to top, rgba(11,15,25,0.9), rgba(11,15,25,0.3))' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🚛</div>
              <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>Uluslararası Lojistik</h4>
              <span style={{ color: '#64748b', fontSize: '13px' }}>Sınır Ötesi Taşıma & Depolama</span>
            </div>

            {/* Görsel 4 - Import */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#111827', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px', backgroundImage: 'linear-gradient(to top, rgba(11,15,25,0.9), rgba(11,15,25,0.3))' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🛳️</div>
              <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>Küresel İthalat Operasyonları</h4>
              <span style={{ color: '#64748b', fontSize: '13px' }}>Tedarik Zinciri Yönetimi</span>
            </div>

            {/* Görsel 5 - Export */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#111827', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px', backgroundImage: 'linear-gradient(to top, rgba(11,15,25,0.9), rgba(11,15,25,0.3))' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>✈️</div>
              <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>Uluslararası İhracat</h4>
              <span style={{ color: '#64748b', fontSize: '13px' }}>Global Pazar Entegrasyonu</span>
            </div>

            {/* Görsel 6 - Merkez Ofis / Almanya & Hollanda */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#111827', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1f2937', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px', backgroundImage: 'linear-gradient(to top, rgba(11,15,25,0.9), rgba(11,15,25,0.3))' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🏢</div>
              <h4 style={{ color: '#ffffff', margin: '0 0 5px 0', fontSize: '18px', fontWeight: 600 }}>Avrupa Operasyon Merkezleri</h4>
              <span style={{ color: '#64748b', fontSize: '13px' }}>Amsterdam & Almanya Koordinasyon</span>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- RANDEVU BÖLÜMÜ ----------------- */}
      <section id="appointment" style={{ backgroundColor: '#111827', padding: '80px 20px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Başlık Alanı */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{t.aptTitle}</h2>
            <p style={{ color: '#64748b', fontSize: '16px' }}>{t.aptSub}</p>
          </div>

          {/* Şık Randevu Talep Formu */}
          <div style={{ backgroundColor: '#0b0f19', padding: '40px', borderRadius: '24px', border: '1px solid #1f2937', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)' }}>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert(lang === 'tr' ? 'Randevu talebiniz alındı!' : lang === 'de' ? 'Terminanfrage eingegangen!' : 'Appointment request received!');
            }} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              
              {/* Kategori / Konu Seçimi */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '10px', fontWeight: 500 }}>{t.aptTopic}</label>
                <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '12px', color: '#ffffff', outline: 'none', cursor: 'pointer' }}>
                  <option value="messebau">Messebau & Projektplanung</option>
                  <option value="personal">Personalbereitstellung</option>
                  <option value="logistik">Logistik & Hotelmanagement</option>
                  <option value="import-export">Import & Export Consultancy</option>
                </select>
              </div>

              {/* Tarih ve Saat Yan Yana */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '10px', fontWeight: 500 }}>{t.aptDate}</label>
                  <input required type="date" style={{ width: '100%', padding: '14px 16px', backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '12px', color: '#ffffff', outline: 'none', cursor: 'pointer' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '10px', fontWeight: 500 }}>{t.aptTime}</label>
                  <select required style={{ width: '100%', padding: '14px 16px', backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '12px', color: '#ffffff', outline: 'none', cursor: 'pointer' }}>
                    <option value="09:00">09:00 - 11:00</option>
                    <option value="11:00">11:00 - 13:00</option>
                    <option value="14:00">14:00 - 16:00</option>
                    <option value="16:00">16:00 - 18:00</option>
                  </select>
                </div>
              </div>

              {/* Gönderim Butonu */}
              <button type="submit" style={{ backgroundColor: '#38bdf8', color: '#0b0f19', fontWeight: 'bold', padding: '16px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '16px', transition: '0.2s', marginTop: '10px' }}>
                {t.aptBtn}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ----------------- BAŞVURU FORMU BÖLÜMÜ (TAM DİNAMİK DİL DESTEKLİ) ----------------- */}
      <section id="apply" style={{ backgroundColor: '#0b0f19', padding: '80px 20px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Başlık Alanı */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{t.jobTitle}</h2>
            <p style={{ color: '#64748b', fontSize: '16px' }}>{t.jobSub}</p>
          </div>

          {/* Form Paneli */}
          <div style={{ backgroundColor: '#000000', padding: '50px 40px', borderRadius: '24px', border: '1px solid #1f2937' }}>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert(lang === 'tr' ? 'Başvurunuz başarıyla iletildi!' : lang === 'de' ? 'Bewerbung erfolgreich abgesendet!' : 'Application successfully submitted!');
            }} style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              
              {/* KISIM 1: KİŞİSEL BİLGİLER */}
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', textAlign: 'center', marginBottom: '25px' }}>{t.secPersonal}</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblFullName}</label>
                    <input required type="text" placeholder="Anderson Mikoo" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblDate}</label>
                    <input required type="date" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblEmail}</label>
                    <input required type="email" placeholder="user@website.com" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblPhone}</label>
                    <input required type="tel" placeholder="+1 212-695-1962" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblAddress}</label>
                    <input required type="text" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblGender}</label>
                    <select required style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                  <option value="">{t.optSelect}</option>
                      <option value="male">{t.lblGender1}</option>
                      <option value="female">{t.lblGender2}</option>
                      <option value="other">{t.lblGender3}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblSvNum}</label>
                    <input type="text" placeholder="SV-Nummer" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblJobType}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                  <option value="">{t.optSelect}</option>
                      <option value="full">{t.lblJobType1}</option>
                      <option value="part">{t.lblJobType2}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblSalary}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                  <option value="">{t.optSelect}</option>
                      <option value="2000-3000">2000€ - 3000€</option>
                      <option value="3000-4000">3000€ - 4000€</option>
                      <option value="4000+">4000€+</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblPosition}</label>
                    <input type="text" placeholder="..." style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                </div>
              </div>

              {/* KISIM 2: ÇALIŞMA İZNİ VE DENEYİM */}
              <div style={{ borderTop: '1px solid #1f2937', paddingTop: '25px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', textAlign: 'center', marginBottom: '25px' }}>{t.secPermit}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblExperience}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                  <option value="">{t.optSelect}</option>
                  <option value="yes">{t.optYes}</option>
                  <option value="no">{t.optNo}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblExpDates}</label>
                    <input type="text" placeholder="..." style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                </div>
              </div>

              {/* KISIM 3: EĞİTİM BİLGİLERİ */}
              <div style={{ borderTop: '1px solid #1f2937', paddingTop: '25px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', textAlign: 'center', marginBottom: '25px' }}>{t.secEducation}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '25px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblSchool}</label>
                    <input required type="text" placeholder="Alex High School" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblCity}</label>
                    <input required type="text" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblVon}</label>
                    <input required type="date" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblBis}</label>
                    <input required type="date" style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblAbschluss}</label>
                    <select required style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                  <option value="">{t.optSelect}</option>
                  <option value="highschool">{t.lblAbschluss1}</option>
                  <option value="bachelor">{t.lblAbschluss2}</option>
                  <option value="master">{t.lblAbschluss3}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>{t.lblDiplom}</label>
                    <select style={{ width: '100%', padding: '14px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#000000', outline: 'none', cursor: 'pointer' }}>
                  <option value="">{t.optSelect}</option>
                  <option value="yes">{t.optYes}</option>
                  <option value="no">{t.optNo}</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px', transition: '0.2s', marginTop: '15px', width: 'fit-content' }}>
                {t.jobBtn}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* İletişim & Şirket Bilgileri Bölümü */}
      <section id="contact" style={{ backgroundColor: '#111827', padding: '80px 20px', borderTop: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          
          {/* Sol Sütun: Hızlı İletişim Formu */}
          <div style={{ backgroundColor: '#0b0f19', padding: '40px', borderRadius: '24px', border: '1px solid #1f2937' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{t.formTitle}</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>{t.formSub}</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '8px', fontWeight: 500 }}>{t.formLabelName}</label>
                <input type="text" style={{ width: '100%', padding: '12px 16px', backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '10px', color: '#ffffff', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '8px', fontWeight: 500 }}>{t.formLabelEmail}</label>
                <input type="email" style={{ width: '100%', padding: '12px 16px', backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '10px', color: '#ffffff', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '8px', fontWeight: 500 }}>{t.formLabelMsg}</label>
                <textarea rows={4} style={{ width: '100%', padding: '12px 16px', backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '10px', color: '#ffffff', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button type="button" style={{ backgroundColor: '#38bdf8', color: '#0b0f19', fontWeight: 'bold', padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer', transition: '0.2s' }}>
                {t.formBtn}
              </button>
            </form>
          </div>

          {/* Sağ Sütun: Şirket Lokasyon & Resmi Bilgiler */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>{t.brand}</h3>
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
                {t.companyDesc}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#f8fafc', fontSize: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <div>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>Merkez Ofis Adresi</strong>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>Timo to Work International B.V.[cite: 1]<br />Amsterdam / Netherlands</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <span style={{ fontSize: '20px' }}>📞</span>
                <div>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>Telefon & İletişim</strong>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>+31 (0) XX XXX XX XX / +49 (0) XX XXX XX XX</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
                <div>
                  <strong style={{ display: 'block', color: '#38bdf8' }}>E-Posta</strong>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>info@timotowork.com</span>
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
          <div style={{ display: 'flex', gap: '20px' }}>
            <button onClick={() => { const el = document.getElementById('impressum-modal'); if(el) el.style.display = 'flex'; }} style={{ color: '#64748b', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px', padding: 0 }}>Impressum</button>
            <button onClick={() => { const el = document.getElementById('datenschutz-modal'); if(el) el.style.display = 'flex'; }} style={{ color: '#64748b', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px', padding: 0 }}>Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* YASAL MODALLAR */}
      <div id="impressum-modal" style={{ display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '24px', padding: '40px', maxWidth: '600px', width: '100%', maxHeight: '80vh', overflowY: 'auto', position: 'relative' }}>
          <button onClick={() => { const el = document.getElementById('impressum-modal'); if(el) el.style.display = 'none'; }} style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'transparent', border: 'none', color: '#64748b', fontSize: '24px', cursor: 'pointer' }}>×</button>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '20px', borderBottom: '1px solid #1f2937', paddingBottom: '10px' }}>Impressum</h2>
          <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.8' }}>
            <p><strong>Timo to Work International B.V.</strong> Imprint details...</p>[cite: 1]
          </div>
        </div>
      </div>

      <div id="datenschutz-modal" style={{ display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: '#111827', border: '1px solid #1f2937', borderRadius: '24px', padding: '40px', maxWidth: '700px', width: '100%', maxHeight: '80vh', overflowY: 'auto', position: 'relative' }}>
          <button onClick={() => { const el = document.getElementById('datenschutz-modal'); if(el) el.style.display = 'none'; }} style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'transparent', border: 'none', color: '#64748b', fontSize: '24px', cursor: 'pointer' }}>×</button>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '20px', borderBottom: '1px solid #1f2937', paddingBottom: '10px' }}>Datenschutz</h2>
          <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.8' }}>
            <p>Privacy Policy GDPR compliant details...</p>
          </div>
        </div>
      </div>

    </div>
  );
}