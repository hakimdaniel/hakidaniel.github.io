---
layout: post 
title: "Responsible Disclosure (experience)"
date: 2025-07-29 06:30:30 +0800
categories: cybersesurity 
author: hakimdaniel 
---


> Responsible Disclosure bermakna pendedahan bertanggungjawab

Suatu ketika dulu, saya suka kaji banyak website. Dari website corporate biasa hingga ke website kerajaan. Saya kaji tentang design dan tahap keselamatan umum pada website tersebut, kadangkala saya menemui beberapa kelemahan pada website mereka dan saya terus melaporkan kepada pemilik halaman tersebut. 

Disini saya kongsi berkaitan IT dan pengalaman saya.

Saya kerap menjelajahi website-website di malaysia untuk mengkaji dari segi keselamatan (security researching). Tetapi perlu berhati-hati kerana ia boleh salah disisi undang-undang jika menceroboh ke dalam sistem mereka. Jadi cukup menjalankan ujian keselamatan luaran sahaja.

Antara yang pernah saya temui, website yang menggunakan kata laluan **default credentials** dan mudah diteka dan juga kelemahan **SQL Injection** yang risikonya boleh mengakibatkan kebocoran data oleh pihak tidak bertanggungjawab. Selain daripada itu, saya juga pernah menemukan kelemahan **Stored XSS** boleh disalahguna untuk memanipulasi halaman web bahkan mencuri akses admin, **session hijacking**. 

Bagi para developer, jangan lah fikir orang awam takkan berani cuba menceroboh sistem. Di dunia ini ada pelbagai jenis manusia, nasib baik ada yang jenis **Responsible Disclosure & Ethics**, bagaimana jika yang mengekploitasi sistem suka-suka? Berhati-hati dan perkukuhkan lagi sistem keselamatan web, sanitize semua bahagian input bagi mengelakkan code berniat jahat (malicious code) disuntikkan pada input tersebut.

Regards<br>
~ hakim
