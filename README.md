# 🧮 React Real-Time Calculator

A fully functional **Android-style calculator** built using **React.js**.  
This calculator supports real-time input, operator precedence, brackets, decimals, and **implicit multiplication with brackets** (e.g. `2(3+4)`).

---

## ✨ Features

- Real-time expression evaluation
- Supports:
  - Addition, subtraction, multiplication, division
  - Brackets `( )`
  - Decimal values
  - Implicit multiplication:
    - `2(3)` → `6`
    - `(2+3)(4)` → `20`
- Operator precedence handling (BODMAS)
- Clean, modern UI inspired by Android calculator
- Error handling for invalid expressions
- Fully responsive and lightweight

---

## 🛠️ Tech Stack

- **React.js** (useState hooks)
- **CSS Grid & Animations**
- Custom **Shunting Yard Algorithm** (no `eval()` used)

---

