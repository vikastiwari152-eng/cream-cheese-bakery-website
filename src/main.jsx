
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

const swiggyUrl = "https://www.swiggy.com/menu/1341128?source=sharing";
const zomatoUrl = "https://zomato.onelink.me/xqzv/succ5c7v";
const whatsappUrl = "https://wa.me/917838140193?text=Hi%20Cream%20Cheese%20Bakery%2C%20I%20want%20to%20order";

const imgs = {
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  biscoff: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  waffle: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop",
  pancake: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
  brownie: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  redvelvet: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200&auto=format&fit=crop",
  custom: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
  story: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop"
};

const products = [
  { name: "Lotus Biscoff Cheesecake", price: "₹210", category: "Cheesecakes", image: imgs.biscoff, tag: "Bestseller" },
  { name: "Nutella Cheesecake", price: "₹199", category: "Cheesecakes", image: imgs.cake, tag: "Luxury Pick" },
  { name: "Belgian Chocolate Waffle", price: "₹149", category: "Waffles", image: imgs.waffle, tag: "Most Loved" },
  { name: "Chocolate Pancakes", price: "₹99", category: "Pancakes", image: imgs.pancake, tag: "Cafe Special" },
  { name: "Fudgy Brownie", price: "₹109", category: "Brownies", image: imgs.brownie, tag: "Trending" },
  { name: "Red Velvet Cake", price: "₹800", category: "Cakes", image: imgs.redvelvet, tag: "Premium" }
];

const categories = ["All", "Cheesecakes", "Brownies", "Waffles", "Pancakes", "Cakes"];

const reviews = [
  ["Aarav Singh", "The chocolate waffle is out of this world. Absolutely loved it."],
  ["Priya Malhotra", "Lotus Biscoff cheesecake is my all-time favorite."],
  ["Rohan Verma", "Best brownies in Delhi. Super rich and fudgy."],
  ["Neha Gupta", "Custom cake was beyond perfect. Everyone loved it."]
];

function OrderButtons({ compact = false }) {
  return <div className={compact ? "order-buttons compact" : "order-buttons"}>
    <a className="swiggy" href={swiggyUrl}>Order on Swiggy</a>
    <a className="zomato" href={zomatoUrl}>Order on Zomato</a>
    <a className="whatsapp" href={whatsappUrl}>Order on WhatsApp</a>
  </div>;
}

function App() {
  const [active, setActive] = useState("All");
  const filteredProducts = useMemo(() => active === "All" ? products : products.filter((p) => p.category === active), [active]);

  return <main>
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <nav className="navbar">
        <div className="brand"><div className="brand-mark">CC</div><div><h3>Cream Cheese Bakery</h3><p>Crafted with Love, Served with Happiness</p></div></div>
        <div className="navlinks"><a href="#home">Home</a><a href="#about">About Us</a><a href="#menu">Menu</a><a href="#custom">Custom Cakes</a><a href="#reviews">Reviews</a><a href="#gallery">Gallery</a></div>
        <a className="nav-order" href={whatsappUrl}>Order Now 🛍️</a>
      </nav>
      <div className="hero-content">
        <motion.div className="hero-copy" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
          <p className="eyebrow">♡ Indulge in happiness</p>
          <h1>Delhi’s Premium Dessert <em>Experience</em></h1>
          <p className="hero-text">Handcrafted eggless desserts made with premium ingredients, modern presentation and lots of love.</p>
          <OrderButtons />
          <div className="feature-row"><div>🏆<b>Premium Ingredients</b><span>Finest quality</span></div><div>✨<b>Handcrafted Daily</b><span>Made with love</span></div><div>🛡️<b>Fresh & Hygienic</b><span>100% safe</span></div><div>🚚<b>On-time Delivery</b><span>Right to your door</span></div></div>
        </motion.div>
        <motion.div className="hero-cake" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}}>
          <div className="badge">🔥 Bestselling<br/>Belgian Chocolate Cake</div>
          <img src={imgs.cake} alt="Chocolate cake" />
          <div className="price-badge">Starting at<br/><strong>₹699</strong></div>
        </motion.div>
      </div>
    </section>

    <section className="menu-section" id="menu">
      <div className="section-title"><div><p>Our signature delights</p><h2>Luxury picks customers remember</h2></div><a href={zomatoUrl}>View Full Menu →</a></div>
      <div className="tabs">{categories.map((cat)=><button key={cat} onClick={()=>setActive(cat)} className={active===cat ? "active" : ""}>{cat}</button>)}</div>
      <div className="product-grid">{filteredProducts.map((p,index)=><motion.article key={p.name} className="product-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}}>
        <div className="product-image"><img src={p.image} alt={p.name}/><span>{p.tag}</span></div>
        <div className="product-body"><h3>{p.name}</h3><p>⭐ 4.9</p><div><strong>{p.price}</strong><a href={zomatoUrl}>🛒</a></div></div>
      </motion.article>)}</div>
      <div className="story-grid" id="about">
        <div className="story-card dark-card"><p>Crafted to perfection</p><h2>Desserts crafted to create moments</h2><span>Every dessert is a masterpiece, handcrafted with love, premium ingredients and a passion for perfection.</span><a href="#custom">Know Our Story →</a></div>
        <div className="story-card combo-card"><p>Exclusive combos</p><h2>Not offers. Dessert experiences.</h2><div className="mini-combos"><div><b>Signature Love</b><strong>₹289</strong></div><div><b>Tiramisu Café</b><strong>₹329</strong></div><div><b>Birthday Box</b><strong>₹549</strong></div></div></div>
        <div className="story-card custom-card" id="custom"><div><p>Custom cakes</p><h2>Design your dream celebration cake</h2><span>From concept to creation, we make your special moments unforgettable.</span><a href={whatsappUrl}>Start Custom Order →</a></div><img src={imgs.custom} alt="Custom cake"/></div>
      </div>
    </section>

    <section className="icon-strip">{["Live Order Tracking","WhatsApp Ordering","Custom Cake Designer","Easy & Secure Payments","Google Reviews 5.0★","Premium Ingredients","Hygienic Environment"].map((item)=><div key={item}>♡<span>{item}</span></div>)}</section>

    <section className="reviews" id="reviews"><div className="section-title"><div><p>What our customers say</p><h2>Rated 5.0 by dessert lovers</h2></div><a href="#">View All Reviews →</a></div><div className="review-grid">{reviews.map(([name,text])=><div className="review-card" key={name}><div className="avatar">{name[0]}</div><b>{name}</b><span>★★★★★</span><p>{text}</p></div>)}</div></section>

    <section className="gallery" id="gallery"><div><p>Follow us @creamcheesebakery</p><h2>Sweet moments, captured for you</h2><span>Follow us on Instagram for updates, offers and behind the scenes.</span><a href="#">Follow on Instagram</a></div>{[imgs.brownie,imgs.cake,imgs.waffle,imgs.biscoff,imgs.pancake,imgs.story].map((img)=><img src={img} key={img} alt="Dessert gallery"/>)}</section>

    <footer><div><div className="footer-logo">CC</div><p>Indulge in the finest desserts crafted with love and the best ingredients.</p></div><div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#menu">Menu</a><a href="#custom">Custom Cakes</a></div><div><h4>Our Menu</h4><a>Cakes</a><a>Cheesecakes</a><a>Brownies</a><a>Waffles</a></div><div><h4>Contact Us</h4><p>📍 Shop No.54, 55, Block JG 1, Vikaspuri, New Delhi, Delhi 110018</p><p>📞 078381 40193</p><p>🕒 Mon–Sun: 10:00 AM - 9:00 PM</p></div><div><h4>Order Now</h4><OrderButtons compact /></div></footer>
    <a className="floating-whatsapp" href={whatsappUrl}>💬</a>
  </main>;
}

createRoot(document.getElementById("root")).render(<App />);
