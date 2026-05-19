@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, sans-serif; background: #fff7ed; color: #351b12; }
a { text-decoration: none; color: inherit; }

main {
  overflow: hidden;
  background:
    radial-gradient(circle at top right, #ffd7c2 0, transparent 30%),
    radial-gradient(circle at bottom left, #f8b4c4 0, transparent 25%),
    #fff7ed;
}

.hero {
  min-height: 100vh;
  padding: 28px 6vw 80px;
  position: relative;
}

.glass {
  background: rgba(255,255,255,.62);
  border: 1px solid rgba(255,255,255,.78);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 70px rgba(65, 31, 18, .12);
}

.nav {
  max-width: 1250px;
  margin: auto;
  border-radius: 999px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand { display: flex; align-items: center; gap: 12px; }
.logo {
  width: 48px; height: 48px; border-radius: 50%;
  display: grid; place-items: center;
  background: #3b2116; color: white; font-size: 24px;
}
.brand h3 { margin: 0; font-weight: 900; }
.brand p { margin: 2px 0 0; font-size: 12px; color: #7a5947; }
.navlinks { display: flex; gap: 26px; font-weight: 800; color: #6b4a38; }
.navbtn, .bigbtn {
  background: #3b2116; color: white; padding: 13px 22px;
  border-radius: 999px; font-weight: 900; box-shadow: 0 14px 30px rgba(59,33,22,.25);
}

.hero-grid {
  max-width: 1250px;
  margin: 90px auto 0;
  display: grid;
  grid-template-columns: 1.02fr .98fr;
  gap: 70px;
  align-items: center;
}

.pill {
  display: inline-flex;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.7);
  font-weight: 900;
  font-size: 13px;
  color: #9b5b20;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
}

h1, h2 {
  font-family: "Playfair Display", serif;
  letter-spacing: -0.04em;
  margin: 18px 0;
}

h1 {
  font-size: clamp(52px, 8vw, 104px);
  line-height: .88;
}

h2 {
  font-size: clamp(38px, 5vw, 70px);
  line-height: .95;
}

.hero p, .section p {
  color: #6b4a38;
  font-size: 18px;
  line-height: 1.8;
  max-width: 680px;
}

.order-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.order-buttons a {
  padding: 14px 22px;
  border-radius: 999px;
  color: white;
  font-weight: 900;
  box-shadow: 0 14px 34px rgba(0,0,0,.14);
}
.order-buttons a:nth-child(1){ background:#fc8019; }
.order-buttons a:nth-child(2){ background:#e23744; }
.order-buttons a:nth-child(3){ background:#16a34a; }

.trust-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 38px;
}
.trust-row div {
  padding: 18px;
  border-radius: 28px;
  background: rgba(255,255,255,.58);
  font-weight: 900;
  text-align: center;
}

.hero-visual {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
}

.dessert-orbit {
  width: min(520px, 90vw);
  height: min(520px, 90vw);
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0 30%, #f3d6bd 31% 60%, #3b2116 61%);
  position: relative;
  display: grid;
  place-items: center;
  box-shadow: 0 40px 120px rgba(59,33,22,.28);
  animation: float 5s ease-in-out infinite;
}
.dessert-main { font-size: 150px; filter: drop-shadow(0 25px 35px rgba(0,0,0,.25)); }
.dessert-orbit span {
  position: absolute;
  font-size: 54px;
  background: white;
  border-radius: 50%;
  width: 92px; height: 92px;
  display: grid; place-items: center;
  box-shadow: 0 18px 55px rgba(0,0,0,.18);
}
.dessert-orbit span:nth-child(2){ top: 20px; left: 70px; }
.dessert-orbit span:nth-child(3){ top: 90px; right: 20px; }
.dessert-orbit span:nth-child(4){ bottom: 50px; left: 20px; }
.dessert-orbit span:nth-child(5){ bottom: 20px; right: 80px; }

.floating-card {
  position: absolute;
  z-index: 5;
  background: rgba(255,255,255,.78);
  backdrop-filter: blur(16px);
  border-radius: 28px;
  padding: 18px 22px;
  font-weight: 900;
  box-shadow: 0 20px 55px rgba(0,0,0,.14);
}
.card-one { left: 0; top: 80px; }
.card-two { right: 20px; bottom: 80px; background: #3b2116; color: white; }

.section {
  max-width: 1250px;
  margin: 0 auto;
  padding: 85px 6vw;
}

.festival {
  border-radius: 46px;
  background: linear-gradient(135deg, #ffe4ea, #fff5df, #fbd1dc);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 28px 80px rgba(96, 35, 56, .12);
}

.rose { color:#be315d; }
.gold { color:#f8d987; background:rgba(255,255,255,.12); }

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.tabs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 20px 0 8px;
}
.tabs button {
  border: 0;
  border-radius: 999px;
  padding: 13px 20px;
  background: white;
  color: #6b4a38;
  font-weight: 900;
  cursor: pointer;
  white-space: nowrap;
}
.tabs button.active {
  background: #3b2116;
  color: white;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 30px;
}
.product-card {
  border-radius: 34px;
  padding: 16px;
  position: relative;
  transition: .3s;
}
.product-card:hover { transform: translateY(-8px) rotateX(2deg); }
.product-img {
  height: 190px;
  display: grid;
  place-items: center;
  font-size: 92px;
  border-radius: 28px;
  background: linear-gradient(135deg, #fff1dc, #f5cdb7);
}
.tag {
  display: inline-flex;
  margin-top: 16px;
  padding: 8px 12px;
  border-radius: 999px;
  background: #fff7ed;
  color: #9b5b20;
  font-size: 12px;
  font-weight: 900;
}
.product-card h3 { font-size: 20px; margin: 14px 0 5px; }
.product-card p { font-size: 14px; margin: 0; }
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
}
.price-row strong { font-size: 22px; color:#9b5b20; }
.price-row a {
  padding: 10px 16px;
  background: #3b2116;
  color: white;
  border-radius: 999px;
  font-weight: 900;
}

.story {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 28px;
  align-items: center;
}
.story-card {
  border-radius: 46px;
  padding: 48px;
}
.story-visual, .custom-visual {
  min-height: 420px;
  border-radius: 46px;
  display: grid;
  place-items: center;
  font-size: 160px;
  background: radial-gradient(circle, #fff, #f2c7a8, #3b2116);
  box-shadow: 0 28px 80px rgba(59,33,22,.18);
}

.dark {
  border-radius: 48px;
  background: #2a140d;
  color: white;
}
.dark p { color: rgba(255,255,255,.7); }
.combo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 34px;
}
.combo-card {
  padding: 28px;
  border-radius: 34px;
  background: rgba(255,255,255,.09);
  border: 1px solid rgba(255,255,255,.12);
}
.combo-card div { font-size: 34px; }
.combo-card strong { color:#f8d987; font-size: 34px; }

.custom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
  align-items: center;
  border-radius: 48px;
  background: rgba(255,255,255,.55);
}

footer {
  max-width: 1250px;
  margin: 40px auto 120px;
  padding: 46px;
  border-radius: 42px;
  background: rgba(255,255,255,.65);
  text-align: center;
}

.mobile-bar {
  display: none;
  position: fixed;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  z-index: 20;
  padding: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,.85);
  box-shadow: 0 20px 70px rgba(0,0,0,.18);
}
.mobile-bar a {
  flex: 1;
  text-align: center;
  padding: 13px 10px;
  border-radius: 999px;
  color: white;
  font-weight: 900;
}
.mobile-bar a:nth-child(1){ background:#fc8019; }
.mobile-bar a:nth-child(2){ background:#e23744; }
.mobile-bar a:nth-child(3){ background:#16a34a; }

@keyframes float {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(2deg); }
}

@media (max-width: 900px) {
  .navlinks, .navbtn { display: none; }
  .hero-grid, .story, .custom { grid-template-columns: 1fr; }
  .hero-grid { margin-top: 55px; }
  .product-grid, .combo-grid { grid-template-columns: 1fr; }
  .trust-row { grid-template-columns: 1fr; }
  .festival { flex-direction: column; align-items: flex-start; }
  .hero-visual { min-height: 420px; }
  .dessert-main { font-size: 110px; }
  .dessert-orbit span { width: 70px; height: 70px; font-size: 38px; }
  .mobile-bar { display: flex; gap: 8px; }
  h1 { font-size: 54px; }
  .section { padding: 60px 5vw; }
}
