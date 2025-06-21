
# 🅻 Lexora - Harf Tabanlı Soru-Cevap Uygulaması

Lexora, Türk alfabesindeki harflere dayalı bir şekilde çalışan interaktif bir React uygulamasıdır. Kullanıcı, ister rastgele bir harf seçerek ister manuel seçimle oyuna başlayabilir. Her harf için özel sorular sorulur ve kullanıcıdan bu harfle başlayan doğru cevabı vermesi beklenir.

## 🎯 Amaç

Bu uygulama, kullanıcıların kelime dağarcığını geliştirmeyi, eğlenerek öğrenmelerini sağlamayı ve bilgiyi oyunlaştırma yoluyla sunmayı hedefler.

---

## 🖼️ Ekran Görüntüleri

| Ana Sayfa | Harf Seçimi | Soru-Cevap Alanı |
|----------|-------------|------------------|
| ![main](./screenshots/main.png) | ![alphabet](./screenshots/alphabet.png) | ![question](./screenshots/question.png) |

> Görseller `./screenshots/` klasörüne eklenmelidir.

---

## 🚀 Özellikler

- 🔤 Türk alfabesine göre harf seçimi veya rastgele seçim
- ❓ Her harfe özel tanımlı soru bileşenleri
- ✅ Cevap kontrolü (doğru/yanlış/pas)
- 🌑 Dark/Light tema desteği
- 📊 Sonuçların özet gösterimi
- 🔁 Modüler yapı sayesinde kolay geliştirme imkânı

---

## 🛠️ Teknolojiler

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- HTML5 / CSS3
- Modern JavaScript (ES6+)

---

## 📁 Proje Yapısı

```
src/
│
├── Components/
│   ├── Alphabet.jsx
│   ├── Main.jsx
│   ├── Navbar.jsx
│   ├── LetterPage.jsx
│   ├── Letters/
│   │   ├── A.jsx
│   │   ├── B.jsx
│   │   └── ...
│   ├── QuestionArea.jsx
│   ├── QuestionCircle.jsx
│   └── ResultModal.jsx
│
├── App.js
├── App.css
└── index.js
```

---

## 🔧 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/kullanici-adiniz/lexora.git
cd lexora
```

### 2. Bağımlılıkları Kurun

```bash
npm install
```

### 3. Uygulamayı Başlatın

```bash
npm start
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresinden uygulamayı görebilirsiniz.

---

## 📌 Gelecek Geliştirmeler

- 🔄 Zamanlayıcılı mod
- 🧠 Zorluk seviyesi seçimi
- 🔊 Sesli soru ve cevap entegrasyonu
- 📈 İstatistik ekranları

---

## 🤝 Katkıda Bulun

Katkılar memnuniyetle karşılanır! Lütfen önce bir [issue](https://github.com/kullanici-adiniz/lexora/issues) açın ve ardından fork ederek PR gönderin.

---

## 📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.

---

## 👤 Geliştirici

**Mete İspirli**  
[LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
