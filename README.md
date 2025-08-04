# 🛍️ Product Showcase

Product Showcase adalah aplikasi demo yang menampilkan daftar produk dari Fake Store API. Fitur utama meliputi pencarian produk, filter kategori, dan halaman detail produk.

## 🚀 Demo Langsung

👉 [Demo online (jika ada link deployment)](https://your-app-url.vercel.app)

## 🧰 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API** (https://fakestoreapi.com)

---

## 📂 Struktur Proyek

```
/app
  /products
    /[id]
      /page.tsx→ Halaman detail produk
  globals.css     → Gaya global
  layout.tsx      → Layout utama
  page.tsx      → Halaman daftar produk

/components
  SearchBar.tsx
  FilterSidebar.tsx
  ProductCard.tsx

/lib
  api.ts          → Fetcher API utilitas
  types.api.ts    → Tipe data produk
```

---

## ✨ Fitur

- 🔍 Pencarian produk secara real-time
- 🧱 Filter berdasarkan kategori
- 📄 Halaman detail produk lengkap
- 💡 Dukungan dark mode (default)
- ⚡ UI responsif dan minimalis

---

## 📦 Instalasi & Menjalankan Lokal

1. **Clone repository:**

```bash
git clone https://github.com/your-username/product-showcase.git
cd product-showcase
```

2. **Install dependencies:**

```bash
yarn install
```

3. **Jalankan development server:**

```bash
yarn run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## ⚙️ Konfigurasi

Tidak memerlukan konfigurasi tambahan karena menggunakan public API dari [Fake Store API](https://fakestoreapi.com).

---

## 🤝 Kontribusi

Pull request dipersilakan. Untuk perubahan besar, buka issue terlebih dahulu.

---

## 📄 Lisensi

MIT License © 2025 – Firman Ramadhan
