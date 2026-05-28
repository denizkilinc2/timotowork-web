export default function Home() {
  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* Üst Menü / Navbar */}
      <nav style={{ backgroundColor: '#111827', borderBottom: '1px solid #1f2937', padding: '20px 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '-0.5px' }}>
              Timo to Work International B.V.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '25px', fontWeight: 500 }}>
            <a href="#about" style={{ color: '#9ca3af', textDecoration: 'none', transition: '0.2s' }}>Hakkımızda</a>
            <a href="#services" style={{ color: '#f8fafc', textDecoration: 'none', transition: '0.2s' }}>Hizmetlerimiz</a>
            <a href="#contact" style={{ color: '#9ca3af', textDecoration: 'none', transition: '0.2s' }}>İletişim</a>
          </div>
        </div>
      </nav>

      {/* Karşılama Alanı / Hero Section */}
      <header style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '100px 20px', textAlign: 'center', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', color: '#ffffff', letterSpacing: '-1px' }}>
            Timo to Work International B.V.
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Küresel pazarlarda güvenilir iş gücü çözümleri, sınır ötesi danışmanlık ve uluslararası ticaret entegrasyonu.
          </p>
        </div>
      </header>

      {/* Hizmetler Bölümü */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }} id="services">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Faaliyet Alanlarımız & Hizmetlerimiz</h2>
          <p style={{ color: '#64748b', fontSize: '16px' }}>Timo to Work International B.V. çatısı altında sunduğumuz global çözümler</p>
        </div>

        {/* 5'li Kart Grid Düzeni */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Kart 1: Messebau */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937', transition: '0.3s' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(56,189,248,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(56,189,248,0.2)' }}>📉</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>Messebau & Projektplanung</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Fuar standı tasarımı, kurulumu ve tüm proje süreçlerini baştan sona planlıyor; ilk fikirden anahtar teslim uygulamaya kadar profesyonel çözümler sunuyoruz.
            </p>
          </div>

          {/* Kart 2: Personalbereitstellung */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937', transition: '0.3s' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(249,115,22,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(249,115,22,0.2)' }}>👥</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>Personalbereitstellung</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Fuar süreçleri, lojistik operasyonlar, kurulum ve söküm işleri için ihtiyaç duyduğunuz nitelikli ve uzman iş gücünü profesyonelce sağlıyoruz.
            </p>
          </div>

          {/* Kart 3: Logistik & Hotelmanagement */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937', transition: '0.3s' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(168,85,247,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(168,85,247,0.2)' }}>🗺️</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>Logistik & Hotelmanagement</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Konaklama organizasyonlarından saha operasyonlarına kadar tüm süreçlerin yerinde, pürüzsüz ve kusursuz bir şekilde yürütülmesini yönetiyoruz.
            </p>
          </div>

          {/* Kart 4: İthalat */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937', transition: '0.3s' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(34,197,94,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(34,197,94,0.2)' }}>📥</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>Uluslararası İthalat (Import)</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Dünya genelindeki üreticilerden en kaliteli ürün ve ham maddelerin tedarik süreçlerini, yasal mevzuatlara tam uyumlu olarak sınır ötesi operasyonlarla yönetiyoruz.
            </p>
          </div>

          {/* Kart 5: İhracat */}
          <div style={{ backgroundColor: '#111827', padding: '35px', borderRadius: '16px', border: '1px solid #1f2937', transition: '0.3s' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: 'rgba(99,102,241,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>📤</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>Küresel İhracat (Export)</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Ürün ve hizmetleri uluslararası pazarlarla buluşturuyor, gümrükleme, hedef pazar analizi ve lojistik ağ yönetimini uçtan uca organize ediyoruz.
            </p>
          </div>

        </div>
      </main>

      {/* Alt Bilgi / Footer */}
      <footer style={{ backgroundColor: '#111827', color: '#64748b', padding: '30px 20px', textAlign: 'center', fontSize: '14px', borderTop: '1px solid #1f2937' }}>
        <p>© 2026 Time to Work International B.V. Tüm Hakları Saklıdır.</p>
      </footer>

    </div>
  );
}