\# Hafta 1 – İstemci ve Veritabanı Güvenliği Raporu



Bu rapor, Web Uygulama Güvenliği dersi kapsamında geliştirilen

Broken FinTech API projesinin \*\*Hafta 1\*\* çalışmaları doğrultusunda

yapılan güvenlik analizlerini içermektedir.



Amaç; yaygın web güvenlik zafiyetlerini tanımak, bu zafiyetlerin

nasıl ortaya çıktığını gözlemlemek ve geliştirilen API üzerinde

hangi önlemlerin alındığını teknik olarak açıklamaktır.



---



\## 1. SQL Injection Analizi



SQL Injection zafiyeti, eğitim amaçlı olarak bilerek zafiyetli

bir uygulama olan \*\*DVWA (Damn Vulnerable Web Application)\*\*

üzerinde incelenmiştir.



DVWA’nın SQL Injection modülünde, kullanıcıdan alınan parametrelerin

herhangi bir input doğrulaması veya parametreli sorgu kullanılmadan

doğrudan SQL sorgularına eklendiği gözlemlenmiştir. Bu durum,

veritabanı sorgularının manipüle edilebilmesine ve beklenenden

fazla verinin döndürülmesine neden olmaktadır.



\### Gözlem

\- Kullanıcı girdisi filtrelenmemektedir

\- Parametreli sorgu kullanılmamaktadır

\- Hatalı veya beklenmeyen sorgu sonuçları alınabilmektedir



\### Bu Projede Alınan Önlemler

\- Veritabanı olarak \*\*MongoDB\*\* kullanılmıştır

\- \*\*Mongoose ORM\*\* sayesinde sorgular parametreli olarak

&nbsp; çalışmaktadır

\- Kullanıcıdan alınan veriler doğrudan sorgu string’i

&nbsp; birleştirilerek kullanılmamaktadır



Bu nedenle geliştirilen API’de SQL Injection zafiyeti

bulunmamaktadır.



---



\## 2. XSS (Cross-Site Scripting – Reflected) Analizi



XSS zafiyeti, yine DVWA uygulaması üzerinde

\*\*XSS (Reflected)\*\* modülü kullanılarak analiz edilmiştir.



Bu modülde, kullanıcıdan alınan inputun herhangi bir HTML encoding

veya filtreleme yapılmadan doğrudan sayfa çıktısında kullanıldığı

gözlemlenmiştir. Bu durum, istemci tarafında JavaScript kodlarının

çalıştırılabilmesine olanak tanımaktadır.



\### Gözlem

\- Kullanıcı girdisi HTML encode edilmemektedir

\- Input, doğrudan tarayıcıya yansıtılmaktadır

\- Reflected XSS zafiyeti mevcuttur



\### Bu Projede Alınan Önlemler

\- Geliştirilen API yalnızca \*\*JSON response\*\* üretmektedir

\- HTML render edilmemektedir

\- Sunucu tarafında input doğrulama yapılmaktadır



Bu nedenlerle projede XSS zafiyeti bulunmamaktadır.



---



\## 3. Genel Güvenlik Değerlendirmesi



Hafta 1 kapsamında yapılan çalışmalar sonucunda:



\- Yaygın web güvenlik zafiyetleri tanımlanmış

\- Zafiyetlerin nasıl ortaya çıktığı gözlemlenmiş

\- Güvenli API geliştirme prensipleri uygulanmıştır



Geliştirilen API, kimlik doğrulama ve yetkilendirme mekanizmaları,

veritabanı erişim yöntemleri ve response yapısı açısından

güvenli bir mimari sunmaktadır.



---



\## 4. Sonuç



Bu raporda, SQL Injection ve XSS zafiyetleri eğitim amaçlı

zafiyetli uygulamalar üzerinde analiz edilmiş ve geliştirilen

Broken FinTech API projesinde bu zafiyetlere karşı alınan

önlemler açıklanmıştır.



Hafta 1 hedefleri başarıyla tamamlanmıştır.



