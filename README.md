# Lalidana – prototype

14 màn từ Figma (file `KCwfBXkwKHvaLPf598T0X4`), React + Vite + Tailwind v4 + GSAP.

```bash
npm install
npm run dev      # http://localhost:5173  (mở thẳng một màn: /#home, /#explore, /#booking…)
npm run build
```

- `raw/` – mã gốc Figma trả về (get_design_context), giữ để đối chiếu.
- `scripts/convert.py raw .` – chuyển `raw/` thành `src/screens/*` và tải ảnh về `public/assets/`.
  Chạy lại sẽ ghi đè `src/screens/S19_393.tsx` (màn Đặt tour có thêm bộ đếm người/giá).
- `src/App.tsx` – luồng điều hướng theo prototype Figma (bảng `LINKS`, khoá theo node id).
- `src/motion.ts` – chuyển động GSAP: chuyển màn, lướt thẻ Khám phá (Draggable), confetti, Lali nhún.
