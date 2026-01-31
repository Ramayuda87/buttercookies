Buatkan saya sebuah landing page modern untuk brand butter cookies bernama "Markonah" dengan ketentuan berikut:

🧱 Tech Stack

Gunakan ReactJS terbaru

Gunakan Vite (JavaScript, bukan TypeScript)

Gunakan struktur komponen yang clean dan scalable

Gunakan CSS modern dengan pendekatan flat design

Gunakan FontAwesome untuk icon (jangan gunakan emoji)

Pastikan design responsive (mobile first)

🎨 Design & Branding

Brand bernama Markonah adalah brand butter cookies premium yang memiliki keunikan rasa dan kualitas homemade yang berbeda dari kompetitor.

Gunakan konsep visual:

Flat design

Dominan warna coklat dan turunannya

Gunakan color palette yang harmonis dan elegan

Tampilan harus modern, clean, dan friendly untuk produk makanan

✍ Copywriting

Gunakan teknik AIDA (Attention, Interest, Desire, Action) dalam struktur konten website.

Copywriting harus:

Persuasif

Friendly

Menimbulkan rasa ingin membeli

Tidak terlalu panjang

Fokus pada value produk yang unik

📐 Struktur Section Website

Gunakan maksimal 6–7 section saja agar tidak membingungkan pengunjung.

Urutan section:

1️⃣ Hero Section (Attention)

Berisi:

Headline kuat

Tagline brand Markonah

Penjelasan singkat keunikan butter cookies

Tombol CTA utama (Beli Sekarang)

2️⃣ Why Markonah (Interest)

Menjelaskan:

Keunikan produk

Kualitas bahan

Homemade premium feel

Diferensiasi dari cookies lain

Gunakan icon FontAwesome untuk highlight poin.

3️⃣ Product List (Desire)

Section ini harus:

👉 Mengambil data dari Contentful CMS
👉 Gunakan library resmi contentful npm package
👉 Jangan membuat fetch manual

Gunakan credentials berikut:

Space ID: qzzzxounvc79

Access Token: XH7jNzuCAjxlBaSnZ-lVVGXNl5GuRF0kyHUTwsGBu6o

Content Type: Butter Cookies

Ambil hanya field berikut:

name

description

price

category

image

featured

Tampilkan produk dalam bentuk card modern.

Produk yang featured harus memiliki highlight visual khusus.

4️⃣ CTA Section (Action)

Buat section yang mendorong pembelian.

Tombol CTA harus mengarah ke WhatsApp dengan prefilled text:

Halo saya tertarik membeli Butter Cookies Markonah


Nomor tujuan:

085643210123

5️⃣ Social Proof

Tampilkan:

Testimoni pelanggan

Review singkat

Atau rating produk

Gunakan desain card sederhana.

6️⃣ Brand Story / Closing Reinforcement

Ceritakan secara singkat:

Filosofi Markonah

Komitmen kualitas

Emotional connection dengan pelanggan

⚙ Functional Requirement

Gunakan component-based architecture

Gunakan reusable product card component

Gunakan loading state saat fetch data Contentful

Gunakan clean folder structure

📱 UX Requirement

Navigasi smooth scroll

Animasi ringan (tidak berlebihan)

Fokus pada conversion CTA

📦 Output Yang Diharapkan

Struktur project React + Vite

Component modular

Styling flat modern

Sudah terintegrasi Contentful

Siap dijalankan