# CodExam Reader - Mobile Frontend
CodExam Reader, el yazısını algılamak için geliştirilen yazılımın mobil frontend repository'sidir. Bu proje, React Native, TypeScript ve Expo kullanılarak geliştirilmiş bir mobil uygulamadır. Basit bir mimari izlenmiş olup, backend ile etkileşimde controller ve service katmanları kullanılmıştır.

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [TypeScript](https://www.typescriptlang.org/)


# React Native Projesi (TypeScript ve Expo)

Bu proje, React Native, TypeScript ve Expo kullanılarak geliştirilmiş bir mobil uygulamadır. Basit bir mimari izlenmiş olup, backend etkileşimi için controller ve service katmanları kullanılmıştır.

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

```
Directory structure:
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



#Android Emülatöründe Çalıştırma

Android Studio'yu indirin ve kurun.
Android Virtual Device (AVD) oluşturun ve çalıştırın.
Expo sunucusunu başlattıktan sonra a tuşuna basarak projeyi Android emülatöründe açın.

## Lisans
Bu proje, [MIT Lisansı](LICENSE) altında lisanslanmıştır.

