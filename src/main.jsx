
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Cake, Coffee, Gift, Instagram, MapPin, MessageCircle, Search, ShoppingBag, Sparkles, Star, Truck, Settings } from "lucide-react";
import "./styles.css";

const swiggyUrl = "https://www.swiggy.com/menu/1341128?source=sharing";
const zomatoUrl = "https://zomato.onelink.me/xqzv/succ5c7v";
const whatsappUrl = "https://wa.me/917838140193?text=Hi%20Cream%20Cheese%20Bakery%2C%20I%20want%20to%20order";

const businessInfo = {
  name: "Cream Cheese Bakery",
  subtitle: "Premium Eggless Dessert Café",
  phone: "078381 40193",
  address: "Shop No.54, 55, Block JG 1, Vikaspuri, New Delhi, Delhi 110018",
  hours: "Open Daily • 10 AM – 9 PM",
  rating: "5.0",
  reviews: "34+ Google Reviews",
};

const festivalMode = {
  active: true,
  name: "Mother’s Day Collection",
  headline: "Made With Love For Mom",
  subtext: "Celebrate Mother’s Day with handcrafted luxury desserts, floral cakes and premium gift boxes.",
};

const products = [
  { name: "Lotus Biscoff Cheesecake Slice", price: "₹210", category: "Cheesecakes", tag: "Luxury Pick", desc: "Premium baked cheesecake with Lotus Biscoff richness.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop" },
  { name: "Tiramisu Pancakes", price: "₹179", category: "Pancakes", tag: "Chef Special", desc: "Café-style tiramisu pancakes with premium dessert finish.", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop" },
  { name: "Matcha Pancakes", price: "₹179", category: "Pancakes", tag: "Signature", desc: "Modern café-style matcha pancakes with luxury presentation.", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop" },
  { name: "Nutella Waffle", price: "₹149", category: "Waffles", tag: "Most Loved", desc: "Crispy waffle with indulgent Nutella finish.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop" },
  { name: "Chocolate Cheesecake Jar", price: "₹129", category: "Dessert Jars", tag: "Trending", desc: "Layered chocolate cheesecake jar crafted for delivery.", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop" },
  { name: "Chocolate Choco Chips Bento Cake", price: "₹389", category: "Bento Cakes", tag: "Celebration", desc: "Mini chocolate celebration cake with premium finish.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop" },
  { name: "Classic Maple Syrup Waffle", price: "₹99", category: "Waffles", tag: "Classic", desc: "Golden waffle with classic maple syrup." },
  { name: "Triple Chocolate Waffle", price: "₹110", category: "Waffles", tag: "Chocolate Lover", desc: "Triple chocolate indulgence for dessert cravings." },
  { name: "Lotus Biscoff Waffle", price: "₹149", category: "Waffles", tag: "Luxury Pick", desc: "Premium waffle with Lotus Biscoff finish." },
  { name: "Oreo Waffle", price: "₹159", category: "Waffles", tag: "Bestseller", desc: "Oreo-loaded crispy waffle." },
  { name: "Fresh Mango Cream Waffle", price: "₹149", category: "Seasonal", tag: "Limited", desc: "Seasonal mango waffle with cream." },
  { name: "Classic Maple Syrup Pancakes", price: "₹99", category: "Pancakes", tag: "Classic", desc: "Soft pancakes with classic maple syrup." },
  { name: "Nutella Pancakes", price: "₹139", category: "Pancakes", tag: "Most Loved", desc: "Nutella topped fluffy pancakes." },
  { name: "Lotus Biscoff Pancakes", price: "₹139", category: "Pancakes", tag: "Premium", desc: "Lotus Biscoff pancakes with café-style finish." },
  { name: "Fresh Fruit Cake Half Kg", price: "₹749", category: "Cakes", tag: "Fresh", desc: "Fresh fruit cake with premium cream finish." },
  { name: "Black Forest Cake Half Kg", price: "₹649", category: "Cakes", tag: "Classic", desc: "Classic Black Forest celebration cake." },
  { name: "Red Velvet Cake Half Kg", price: "₹800", category: "Cakes", tag: "Premium", desc: "Premium red velvet cake." },
  { name: "Rasmalai Cake Half Kg", price: "₹799", category: "Cakes", tag: "Indian Fusion", desc: "Luxury Indian fusion Rasmalai cake." },
  { name: "Tiramisu Cake Half Kg", price: "₹899", category: "Cakes", tag: "Signature", desc: "Premium tiramisu celebration cake." },
  { name: "Fruit Pastry", price: "₹89", category: "Pastries", tag: "Fresh", desc: "Fresh fruit cream pastry." },
  { name: "Chocolate Choco Chips Pastry", price: "₹75", category: "Pastries", tag: "Chocolate", desc: "Chocolate pastry with choco chips." },
  { name: "Red Velvet Pastry", price: "₹100", category: "Pastries", tag: "Premium", desc: "Premium red velvet pastry." },
  { name: "Pineapple Bento Cake", price: "₹385", category: "Bento Cakes", tag: "Mini Celebration", desc: "Mini pineapple celebration cake." },
  { name: "Fruit Bento Cake", price: "₹410", category: "Bento Cakes", tag: "Fresh", desc: "Fresh fruit mini celebration cake." },
  { name: "Black Forest Bento Cake", price: "₹385", category: "Bento Cakes", tag: "Classic", desc: "Mini Black Forest celebration cake." },
  { name: "Walnut Brownie", price: "₹99", category: "Brownies", tag: "Classic", desc: "Rich brownie with walnuts." },
  { name: "Classic Fudge Brownie", price: "₹109", category: "Brownies", tag: "Fudgy", desc: "Dense classic fudge brownie." },
  { name: "Lotus Biscoff Brownie", price: "₹149", category: "Brownies", tag: "Luxury Pick", desc: "Lotus Biscoff brownie indulgence." },
  { name: "Nutella Hazelnut Brownie", price: "₹139", category: "Brownies", tag: "Most Loved", desc: "Nutella hazelnut brownie." },
  { name: "Blueberry Cheesecake Jar", price: "₹149", category: "Dessert Jars", tag: "Fresh", desc: "Blueberry cheesecake dessert jar." },
  { name: "Lotus Biscoff Cheesecake Jar", price: "₹229", category: "Dessert Jars", tag: "Luxury Pick", desc: "Premium Lotus cheesecake jar." },
  { name: "Nutella Hazelnut Cheesecake Jar", price: "₹229", category: "Dessert Jars", tag: "Luxury Pick", desc: "Nutella hazelnut cheesecake jar." },
  { name: "Mud Cake Jar", price: "₹149", category: "Dessert Jars", tag: "Chocolate", desc: "Chocolate mud cake jar." },
];

const combos = [
  { title: "Signature Lotus Indulgence", items: "Lotus Biscoff Waffle + Belgian Hot Chocolate", price: "₹289", note: "Premium dessert café experience", icon: Sparkles },
  { title: "Tiramisu Café Experience", items: "Tiramisu Pancakes + Classic Cold Coffee", price: "₹329", note: "Chef special pairing", icon: Coffee },
  { title: "Birthday Celebration Box", items: "Bento Cake + 2 Premium Cupcakes", price: "₹549", note: "Perfect for gifting", icon: Gift },
];

const categories = ["All", "Cheesecakes", "Pancakes", "Waffles", "Brownies", "Bento Cakes", "Dessert Jars", "Pastries", "Cakes", "Seasonal"];

function Badge({ children }) {
  return <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur">{children}</span>;
}

function OrderButtons({ compact = false }) {
  const cls = compact ? "px-3 py-2 text-xs" : "px-5 py-3 text-sm";
  return <div className="flex flex-wrap gap-3">
    <a href={swiggyUrl} className={`${cls} rounded-full bg-orange-500 font-semibold text-white shadow-lg transition hover:-translate-y-0.5`}>Swiggy</a>
    <a href={zomatoUrl} className={`${cls} rounded-full bg-rose-600 font-semibold text-white shadow-lg transition hover:-translate-y-0.5`}>Zomato</a>
    <a href={whatsappUrl} className={`${cls} rounded-full bg-emerald-600 font-semibold text-white shadow-lg transition hover:-translate-y-0.5`}>WhatsApp</a>
  </div>;
}

function App() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(() => products.filter((p) => (active === "All" || p.category === active) && (p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()))), [active, query]);

  return <main className="min-h-screen bg-[#fff7ed] text-[#3b2116]">
    <section className="relative overflow-hidden px-5 pb-20 pt-8 md:px-10 lg:px-16">
      <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/50 px-5 py-3 shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b2116] text-white shadow-lg"><Cake size={21}/></div><div><p className="text-base font-black tracking-tight">{businessInfo.name}</p><p className="text-xs text-[#7a5947]">{businessInfo.subtitle}</p></div></div>
        <div className="hidden items-center gap-6 text-sm font-semibold text-[#6b4a38] md:flex"><a href="#signature">Signature</a><a href="#combos">Combos</a><a href="#custom">Custom Cakes</a></div>
        <a href={whatsappUrl} className="rounded-full bg-[#3b2116] px-5 py-2 text-sm font-semibold text-white shadow-lg">Order Now</a>
      </nav>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <Badge>{businessInfo.hours}</Badge>
          <h1 className="mt-7 font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">{festivalMode.active ? festivalMode.headline : "Delhi’s Premium Eggless Dessert Experience"}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b4a38]">{festivalMode.active ? festivalMode.subtext : "Luxury cheesecakes, waffles, pancakes, brownies and celebration cakes crafted for modern dessert lovers."}</p>
          <div className="mt-8"><OrderButtons /></div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">{["100% Eggless","5.0 Google Rated","Premium Packaging"].map(item=><div key={item} className="rounded-3xl border border-white/70 bg-white/60 p-4 text-center shadow-sm backdrop-blur"><Star className="mx-auto mb-2 h-5 w-5 fill-amber-500 text-amber-500"/><p className="text-sm font-bold">{item}</p></div>)}</div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.94}} animate={{opacity:1,scale:1}} transition={{duration:0.8}} className="relative floating">
          <div className="absolute -left-8 top-10 z-20 rounded-3xl bg-white/80 p-4 shadow-xl backdrop-blur"><p className="text-xs font-bold text-[#8a6048]">{festivalMode.name}</p><p className="text-lg font-black">Luxury Gift Cakes</p></div>
          <div className="absolute -bottom-7 right-6 z-20 rounded-3xl bg-[#3b2116] p-5 text-white shadow-2xl"><p className="text-xs opacity-80">Starts from</p><p className="text-3xl font-black">₹99</p></div>
          <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border-[10px] border-white bg-white shadow-2xl"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop" alt="Premium cake" className="h-full w-full object-cover"/></div>
        </motion.div>
      </div>
    </section>

    <section id="signature" className="px-5 py-16 md:px-10 lg:px-16"><div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Signature Creations</p><h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">Luxury picks customers remember</h2></div><div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm"><Search size={18} className="text-[#8a6048]"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search desserts" className="w-44 bg-transparent text-sm outline-none"/></div></div>
      <div className="mt-8 flex gap-3 overflow-x-auto pb-2">{categories.map(cat=><button key={cat} onClick={()=>setActive(cat)} className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${active===cat?"bg-[#3b2116] text-white shadow-lg":"bg-white text-[#6b4a38] shadow-sm"}`}>{cat}</button>)}</div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{filteredProducts.map((p,index)=><motion.article key={p.name} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*0.02}} className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#f6eadc]">{p.image?<img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110"/>:<div className="flex h-full items-center justify-center text-5xl">🍰</div>}<div className="absolute left-3 top-3"><Badge>{p.tag}</Badge></div></div><div className="p-4"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-black leading-tight">{p.name}</h3><p className="font-black text-amber-700">{p.price}</p></div><p className="mt-2 min-h-12 text-sm leading-6 text-[#7a5947]">{p.desc}</p><div className="mt-4"><OrderButtons compact/></div></div></motion.article>)}</div>
    </div></section>

    <section className="px-5 py-16 md:px-10 lg:px-16"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-[3rem] bg-white shadow-xl lg:grid-cols-2"><div className="p-8 md:p-12"><p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Our Story</p><h2 className="mt-4 font-serif text-4xl font-black md:text-5xl">Desserts crafted to create moments</h2><p className="mt-5 leading-8 text-[#7a5947]">At Cream Cheese Bakery, every dessert is crafted to feel like a special experience. Inspired by modern luxury dessert cafés, we create handcrafted eggless cheesecakes, waffles, pancakes, brownies and celebration cakes using premium ingredients, elegant presentation and freshly prepared recipes.</p><p className="mt-4 font-bold text-[#3b2116]">Crafted fresh. Served with love.</p></div><img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1400&auto=format&fit=crop" alt="Luxury dessert story" className="h-full min-h-[360px] w-full object-cover"/></div></section>

    <section id="combos" className="px-5 py-16 md:px-10 lg:px-16"><div className="mx-auto max-w-7xl rounded-[3rem] bg-[#3b2116] p-6 text-white shadow-2xl md:p-10"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Luxury Combo Collection</p><h2 className="mt-4 font-serif text-4xl font-black md:text-5xl">Not offers. Dessert experiences.</h2><p className="mt-5 leading-8 text-white/70">Curated pairings to increase order value while keeping the brand premium.</p></div><div className="grid gap-4 md:grid-cols-3">{combos.map(combo=>{const Icon=combo.icon; return <div key={combo.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur"><Icon className="mb-5 h-8 w-8 text-amber-300"/><h3 className="text-xl font-black">{combo.title}</h3><p className="mt-3 text-sm leading-6 text-white/70">{combo.items}</p><p className="mt-4 text-3xl font-black text-amber-200">{combo.price}</p><p className="mt-2 text-xs text-white/50">{combo.note}</p></div>})}</div></div></div></section>

    <section className="px-5 py-16 md:px-10 lg:px-16"><div className="mx-auto mb-8 max-w-7xl rounded-[2rem] bg-white/70 p-6 shadow-sm backdrop-blur"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Google Trust</p><h2 className="mt-2 text-3xl font-black">Rated {businessInfo.rating} by dessert lovers</h2><p className="mt-2 text-[#7a5947]">{businessInfo.reviews} • Beautiful presentation • Fresh cakes • Friendly service</p></div><div className="rounded-full bg-[#3b2116] px-6 py-3 text-center font-black text-white">5.0 ★</div></div></div><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{[{icon:Truck,title:"Fast Delivery",text:"Optimized for Swiggy and Zomato customers nearby."},{icon:Gift,title:"Luxury Packaging",text:"Every dessert packed to feel premium on arrival."},{icon:Sparkles,title:"Fresh Daily",text:"Handmade eggless desserts crafted in small batches."}].map(item=>{const Icon=item.icon; return <div key={item.title} className="rounded-[2rem] bg-white p-8 shadow-sm"><Icon className="h-10 w-10 text-amber-700"/><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-3 leading-7 text-[#7a5947]">{item.text}</p></div>})}</div></section>

    <section className="px-5 py-16 md:px-10 lg:px-16"><div className="mx-auto max-w-7xl rounded-[3rem] bg-white p-8 shadow-xl md:p-12"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Admin Ready</p><h2 className="mt-4 font-serif text-4xl font-black md:text-5xl">Change products, offers and festival themes anytime</h2><p className="mt-5 leading-8 text-[#7a5947]">The website can connect with an admin dashboard so prices, photos, products, offers, reels, festival banners and opening hours can be updated without coding.</p></div><div className="rounded-[2rem] bg-[#fff7ed] p-6"><Settings className="mb-4 h-8 w-8 text-amber-700"/><p className="font-black">Dashboard controls:</p><p className="mt-3 text-[#7a5947]">Products • Prices • Photos • Festival Mode • Reviews • Reels • Combos • Timings</p></div></div></div></section>

    <section id="custom" className="px-5 py-16 md:px-10 lg:px-16"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-[3rem] bg-white shadow-xl lg:grid-cols-2"><div className="p-8 md:p-12"><p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Custom Cakes</p><h2 className="mt-4 font-serif text-4xl font-black md:text-5xl">Design your dream celebration cake</h2><p className="mt-5 leading-8 text-[#7a5947]">Share your theme, flavor, weight and reference image. Our team will help you craft the perfect cake.</p><a href={whatsappUrl} className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg"><MessageCircle size={20}/> WhatsApp Custom Cake Inquiry</a></div><img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1400&auto=format&fit=crop" alt="Custom cake" className="h-full min-h-[360px] w-full object-cover"/></div></section>

    <footer className="px-5 pb-28 pt-12 md:px-10 lg:px-16"><div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/70 bg-white/60 p-8 backdrop-blur md:grid-cols-4"><div><h3 className="text-2xl font-black">{businessInfo.name}</h3><p className="mt-3 text-sm leading-6 text-[#7a5947]">Premium eggless desserts, cakes and café-style sweet experiences. Rated 5.0 on Google with luxury dessert presentation.</p></div><div><h4 className="font-black">Order</h4><div className="mt-3 flex flex-col gap-2 text-sm text-[#7a5947]"><a href={swiggyUrl}>Swiggy</a><a href={zomatoUrl}>Zomato</a><a href={whatsappUrl}>WhatsApp</a></div></div><div><h4 className="font-black">Visit</h4><p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#7a5947]"><MapPin size={16}/> {businessInfo.address}</p><p className="mt-2 text-sm font-bold text-[#3b2116]">{businessInfo.hours}</p></div><div><h4 className="font-black">Social</h4><p className="mt-3 flex items-center gap-2 text-sm text-[#7a5947]"><Instagram size={16}/> Instagram Reels + Customer Photos</p></div></div></footer>
    <div className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2 rounded-full border border-white/70 bg-white/80 p-2 shadow-2xl backdrop-blur-xl md:hidden"><div className="grid grid-cols-3 gap-2 text-center text-xs font-black"><a href={swiggyUrl} className="rounded-full bg-orange-500 px-3 py-3 text-white">Swiggy</a><a href={zomatoUrl} className="rounded-full bg-rose-600 px-3 py-3 text-white">Zomato</a><a href={whatsappUrl} className="rounded-full bg-emerald-600 px-3 py-3 text-white">WhatsApp</a></div></div>
    <a href={whatsappUrl} className="fixed bottom-6 right-6 hidden items-center gap-3 rounded-full bg-emerald-600 px-6 py-4 font-bold text-white shadow-2xl md:flex"><ShoppingBag size={20}/> Order Now</a>
  </main>;
}

createRoot(document.getElementById("root")).render(<App />);
