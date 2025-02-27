# CodExam Reader - Mobile Frontend

CodExam Reader, el yazısını algılamak için geliştirilen yazılımın mobil frontend repository'sidir. Bu proje, React Native, TypeScript ve Expo kullanılarak geliştirilen modern ve kullanıcı dostu bir mobil uygulamadır. Basit ve verimli bir mimari izlenmiş olup, backend ile etkileşimde controller ve service katmanları kullanılmıştır.

🚨 **Detaylı rapor en aşağıya yerleştirilmiştir.** 🚨

## Gereksinimler
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [TypeScript](https://www.typescriptlang.org/)
- [Java JDK](https://www.oracle.com/tr/java/technologies/downloads/) (Android emülatörü için gereklidir)

## Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/huseyingulyol/codeaxam-rn-app.git
cd codeaxam-rn-app
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Expo sunucusunu başlatın:

```bash
npx expo start
```

## Proje Yapısı

Directory structure:
```
└── codexam-rn-app/
    ├── assets/
    ├── components/
    ├── navigators/
    ├── screens/
    └── services/
    ├── App.tsx
    ├── app.json
    ├── babel.config.js
    ├── env.d.ts
    ├── index.ts
    ├── package.json
    ├── tsconfig.json
```

## Kullanım

- Expo Developer Tools'u açın ve cihazınızdaki Expo Go uygulamasıyla QR kodunu taratın.
- Uygulama, cihazınızda geliştirme için yüklenecektir.

## Android Emülatöründe Çalıştırma

- Android Studio'yu indirin ve kurun.
- Android Virtual Device (AVD) oluşturun ve çalıştırın.
- Expo sunucusunu başlattıktan sonra `a` tuşuna basarak projeyi Android emülatöründe açın.

## Lisans

Bu proje, [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

# CodExam Reader - Rapor

## 1. Giriş

Bu proje, React Native kullanarak Android Studio üzerinde çalışan bir mobil uygulama geliştirmeyi amaçlamaktadır. Uygulama, öğretmenlerin programlama sınav kağıtlarını OCR teknolojisi ile okuyarak değerlendirmesine yardımcı olacaktır. Projenin temel amacı, sınav değerlendirme sürecini hızlandırmak ve OCR teknolojisini optimize ederek daha doğru metin çıktıları elde etmektir.

## 2. Proje Kapsamı ve Hedefler

- Akademisyenden çözümsüz sınav kağıdı, cevap anahtarı ve öğrencilerin çözdüğü sınav kağıtlarını almak.
- Sınav kağıtlarının OCR teknolojisi ile dijital ortama aktarılması.
- Öğrenci kimlik bilgilerinin algılanarak kaydedilmesi.
- Öğrencinin programlama sınavlarında yaptığı sözdizimsel hataların akademisyenin inisiyatifine bağlı olarak tercihe bırakılması.
- Boşluk doldurma ve çoktan seçmeli soruların, öğretmenin yüklediği cevap anahtarı ile karşılaştırılarak otomatik puanlandırılması.
- Nerelerden ve neden puan kırıldığı bilgisine akademisyenin ulaşabilmesi.
- Küçük yazım hataları veya eş anlamlı kelimeler için tolerans mekanizması uygulanması.
- Kesin ve tek cevapları olan soruların doğru yanıtlarla karşılaştırılarak puanlanması.
- Açık uçlu ve kodlama sorularının Gemini AI ile doğruluk analizine tabi tutularak değerlendirilmesi.
- Kullanıcı dostu bir arayüz ile öğretmenlerin sınav değerlendirme sürecinin kolaylaştırılması.

### 2.1. Ulaşılan Hedefler

- Güçlü bir OCR ile metinler görsel içinde algılanıyor. Algılanan metin, katı kurallara sahip bir prompt ile dil modeline gönderilerek işleniyor ve istenen çıktı elde ediliyor.
- Veritabanı kurgusu başarıyla tamamlandı. Ancak kısıtlı zamanda çözülemeyen bir hatadan dolayı etkin şekilde çalışmıyor.

### 2.2. Ulaşılamayan Hedefler

Çözümlerin analizi ve puanlandırma işlemleri hedeflendi ancak gerçekleştirilemedi. Bu hedeflerin gerçekleşememesinin sebebi plansal ve tekniksel hatalar değil, zamanın kısıtlı olmasıdır.

## 3. Kullanılan Teknolojiler

### Frontend:
- **React Native:** Mobil uygulamanın geliştirilmesi için kullanılan framework.
- **TypeScript (TSX):** React Native bileşenlerinin daha güvenli kodlanması için kullanılmıştır.

### Backend:
- **C# ASP.NET Core 8 Web API**
- **EntityFramework ORM**
- **Azure OCR:** Görüntüleri metne çevirmek için Microsoft’un bulut tabanlı OCR hizmeti.
- **Gemini AI:** Açık uçlu soruların değerlendirilmesi ve doğruluk analizinin yapılması için kullanılan yapay zeka servisi.
- **SQLite:** Öğrenci, sınav ve değerlendirme verilerinin saklanması için kullanılan, hafif ve yerel bir veritabanı çözümü.

## 4. İşleyiş ve Geliştirme Süreci

### 4.1. İşleyiş

- Öğretmen, çözümsüz sınav kağıdını ve ardından çözülmüş sınav kağıdını sisteme yükler.
- Sınav kağıtları OCR teknolojisi ile dijital ortama aktarılır ve gerekli bilgileri çeker.
- Öğrenci sayfaları sırasıyla eklenir ve öğrenci kimlik bilgileri OCR ile algılanarak veritabanına kaydedilir.
- Kesin cevaplı sorular, öğretmenin belirttiği cevaplarla karşılaştırılarak puanlanır.
- Açık uçlu ve kodlama soruları, OCR ile metne çevrilip Gemini AI tarafından analiz edilerek puanlandırılır.

### 4.2. Geliştirme Süreci

- **Planlama:** Proje gereksinimleri belirlendi, hedefler oluşturuldu.
- **Tasarım:** Kullanıcı arayüzü ve sistem mimarisi tasarlandı.
- **Kodlama:** React Native ile frontend, ASP.NET Core ile backend geliştirildi. OCR ve AI entegrasyonları yapıldı.
- **Test ve Optimizasyon:** OCR doğruluğu test edildi, AI değerlendirme süreçleri optimize edildi ve performans iyileştirmeleri yapıldı.

### 4.3. Eklenecekler

- Öğrenci no veya ismi hatalı girildiğinde okulun veritabanında fuzzy matching yapılarak tahmin yapılması.
- En yüksek benzerlik oranına sahip eşleşmelerin öneri olarak sunulması.

## 5. Geliştirilebilirlik

- Öğrencilerin kendi yazdığı kodların doğruluğunu kontrol edebilmesi.
- Öğrencilerin sınav sonuçlarına uygulama aracılığıyla bakabilmesi.
- Gelişmiş OCR eğitimi, dil modeli ve yapay zeka teknolojilerinden yararlanılarak sorunsuz çalışan bir uygulama haline getirilebilir.

## 6. Sonuçlar ve Değerlendirme

Bu proje sayesinde sınav değerlendirme süreçleri daha hızlı ve hatasız hale getirilmesi amaçladık ama sonuçlandıramadık.
Azure OCR ve Gemini AI entegrasyonunu başarıyla sağladık ve yapay zeka desteğiyle etkili sonuçlar elde ettik.

### Kaynaklar

- [Handwritten Code Recognition for Pen-and-Paper CS Education](https://stanford.edu/~cpiech/bio/papers/handwrittencode.pdf)
- [React Native Introduction](https://reactnative.dev/docs/getting-started)
- [Quickstart: Azure AI Vision v3.2 GA Read](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/quickstarts-sdk/client-library)
- [Gemini API reference](https://ai.google.dev/api?lang=python)
