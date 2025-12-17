# Broken FinTech API – Week 1

Bu proje, Web Uygulama Güvenliği dersi kapsamında geliştirilen
örnek bir **FinTech API** uygulamasıdır. Projenin amacı, modern
bir API mimarisi üzerinde temel güvenlik prensiplerini uygulamak
ve yaygın web güvenlik zafiyetlerini analiz etmektir.

Proje, Docker ortamında çalışan bir backend servisinden oluşur
ve JWT tabanlı kimlik doğrulama mekanizması içermektedir.

---

## Kullanılan Teknolojiler

- Node.js
- Express.js
- MongoDB
- Mongoose ORM
- JWT (JSON Web Token)
- Docker & Docker Compose
- Postman

---

## Proje Amacı

Bu projenin temel amaçları şunlardır:

- Güvenli API geliştirme prensiplerini uygulamak
- Kimlik doğrulama ve yetkilendirme mekanizmalarını kurmak
- Korumalı endpoint yapısını oluşturmak
- Yaygın web güvenlik zafiyetlerini analiz etmek
- Güvenli ve zafiyetli uygulamaları karşılaştırmalı olarak incelemek

---

## Mimari Genel Bakış

- API, **Docker Compose** ile ayağa kaldırılmaktadır.
- MongoDB veritabanı ayrı bir container içinde çalışır.
- JWT middleware kullanılarak yetkisiz erişimler engellenmiştir.
- Transfer ve rapor endpoint’leri token gerektirmektedir.
- API yalnızca JSON response üretmektedir.

---

## Kurulum ve Çalıştırma

Projeyi çalıştırmak için Docker kurulu olmalıdır.

```bash
docker compose up -d --build
