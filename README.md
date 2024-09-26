# Netflix Clone

Harita üzerinde mevcut tüm uçuşlar görüntülenir.<br />
Liste görünümü seçeneği ile uçuşlar sayfalandırılmış şekilde listelenir.<br />
Uçuşların ne zaman, nereden nereye gibi detaylı bilgilere erişilebilir.<br />

React ile geliştirildi. </br>
Bootstrap ile arayüz tasarlandı. </br>
Redux Toolkit kullanıldı. Daha az kod ile performansı yüksek bir yapı sundu.<br />
Api'ye [buradan](https://rapidapi.com/apidojo/api/flight-radar1) ulaşabilirsiniz.

## Gif

![](/public/toolkit-radar-app.gif)

## Projenin Çalıştırılması

Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız.

```
git clone https://github.com/evinoguz/radar-app.git
```

Proje dizininde .env adında dosya oluşturunuz. Bu dosyada ortam değişkenlerini tanımlayınız.

```
VITE_API_KEY = yourApiKey
VITE_API_URL = https://flight-radar1.p.rapidapi.com
```

Terminalde;

```
npm install

```

komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından

```
npm run dev
```

komutu ile proje ayağa kaldırılır.
