# ספר הצ'יטים הסודי - מכבי נתניה

פרויקט React לספר הצ'יטים הסודי של קבוצת מכבי נתניה - טרום ג'.

## התקנה

1. התקן את התלויות:
```bash
npm install
```

2. הפעל את הפרויקט במצב פיתוח:
```bash
npm run dev
```

3. פתח את הדפדפן בכתובת: `http://localhost:5173`

## בנייה לפרודקשן

```bash
npm run build
```

## מבנה הפרויקט

```
src/
├── components/          # רכיבי React
│   ├── ui/             # רכיבי ממשק משתמש בסיסיים
│   ├── CheatTemplate.jsx  # תבנית לצ'יטים
│   └── Layout.jsx      # תבנית כללית
├── pages/              # דפי האתר
│   ├── Home.jsx        # דף הבית
│   ├── Cheat1.jsx      # צ'יט 1
│   ├── Cheat2.jsx      # צ'יט 2
│   └── ...             # שאר הצ'יטים
├── utils.js            # פונקציות עזר
├── App.jsx             # רכיב ראשי
└── main.jsx            # נקודת כניסה
```

## הוספת צ'יט חדש

1. צור קובץ חדש ב-`src/pages/` (למשל `Cheat11.jsx`)
2. השתמש בתבנית `CheatTemplate`
3. הוסף את הנתיב ב-`src/App.jsx`
4. הוסף את הנתיב ב-`src/utils.js`

## טכנולוגיות

- React 18
- React Router
- Framer Motion (אנימציות)
- Tailwind CSS (עיצוב)
- Lucide React (אייקונים)
- Vite (בנייה ופיתוח)

## תמיכה בדפדפנים

- Chrome (מומלץ)
- Firefox
- Safari
- Edge
