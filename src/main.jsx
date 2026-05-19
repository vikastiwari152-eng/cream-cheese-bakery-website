import React, { useMemo, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import "./styles.css";

/* ─── Brand URLs ─────────────────────────────────────────────── */
const SWIGGY  = "https://www.swiggy.com/menu/1341128?source=sharing";
const ZOMATO  = "https://zomato.onelink.me/xqzv/succ5c7v";
const WA      = "https://wa.me/917838140193?text=Hi%20Cream%20Cheese%20Bakery%2C%20I%20want%20to%20order";
const INSTA   = "https://www.instagram.com/officialcreamcheesebakery/";

/* ─── Images ─────────────────────────────────────────────────── */
const imgs = {
  cake:      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  biscoff:   "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  waffle:    "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop",
  pancake:   "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
  brownie:   "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  redvelvet: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200&auto=format&fit=crop",
  custom:    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
  story:     "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
  mango:     "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
  jar:       "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
  chocolate: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop",
  drink:     "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
  macaron:   "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1200&auto=format&fit=crop",
  cookie:    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
  cheesecake:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  tiramisu:  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop",
};

/* ─── Full Product Data ──────────────────────────────────────── */
const allProducts = [
  // WAFFLES
  { name:"Classic Maple Syrup Waffle",     price:"₹99",  category:"Waffles",   tag:"Classic",        imgKey:"waffle",    desc:"Crispy golden waffle with warm maple drizzle." },
  { name:"Chocolate Waffle",               price:"₹99",  category:"Waffles",   tag:"Classic",        imgKey:"waffle",    desc:"Rich chocolate-dipped premium waffle." },
  { name:"White Chocolate Waffle",         price:"₹99",  category:"Waffles",   tag:"Classic",        imgKey:"waffle",    desc:"Smooth white chocolate topped waffle." },
  { name:"Milk Chocolate Waffle",          price:"₹99",  category:"Waffles",   tag:"Classic",        imgKey:"waffle",    desc:"Velvety milk chocolate waffle delight." },
  { name:"Triple Chocolate Waffle",        price:"₹110", category:"Waffles",   tag:"Choco Lover",    imgKey:"waffle",    desc:"Dark, milk & white chocolate in every bite." },
  { name:"Blueberry Compote Waffle",       price:"₹129", category:"Waffles",   tag:"Fruity",         imgKey:"waffle",    desc:"Bursting with fresh blueberry compote." },
  { name:"Peanut Butter Waffle",           price:"₹149", category:"Waffles",   tag:"Rich",           imgKey:"waffle",    desc:"Thick peanut butter drizzle on crispy waffle." },
  { name:"Nutella Waffle",                 price:"₹149", category:"Waffles",   tag:"Most Loved",     imgKey:"waffle",    desc:"Generous Nutella spread on airy waffle." },
  { name:"Lotus Biscoff Waffle",           price:"₹149", category:"Waffles",   tag:"Luxury Pick",    imgKey:"biscoff",   desc:"Signature Lotus Biscoff spread & crumble." },
  { name:"KitKat Waffle",                  price:"₹159", category:"Waffles",   tag:"Crunchy",        imgKey:"waffle",    desc:"KitKat shards on a warm crispy waffle." },
  { name:"Oreo Waffle",                    price:"₹159", category:"Waffles",   tag:"Bestseller",     imgKey:"waffle",    desc:"Oreo crumble with cream on golden waffle." },
  { name:"Fresh Mango Cream Waffle",       price:"₹149", category:"Waffles",   tag:"Seasonal",       imgKey:"mango",     desc:"Fresh seasonal mango cream topping." },
  // PANCAKES
  { name:"Classic Maple Syrup Pancakes",   price:"₹99",  category:"Pancakes",  tag:"Classic",        imgKey:"pancake",   desc:"Fluffy stacked pancakes with warm maple." },
  { name:"Chocolate Pancakes",             price:"₹99",  category:"Pancakes",  tag:"Classic",        imgKey:"pancake",   desc:"Chocolate-drizzled fluffy café pancakes." },
  { name:"White Chocolate Pancakes",       price:"₹99",  category:"Pancakes",  tag:"Classic",        imgKey:"pancake",   desc:"Smooth white choco ganache on fluffy stack." },
  { name:"Milk Chocolate Pancakes",        price:"₹99",  category:"Pancakes",  tag:"Classic",        imgKey:"pancake",   desc:"Milk chocolate drizzle & soft pancakes." },
  { name:"Blueberry Compote Pancakes",     price:"₹129", category:"Pancakes",  tag:"Fruity",         imgKey:"pancake",   desc:"House-made blueberry compote & cream." },
  { name:"Peanut Butter Pancakes",         price:"₹139", category:"Pancakes",  tag:"Rich",           imgKey:"pancake",   desc:"Generous peanut butter on soft stacks." },
  { name:"Nutella Pancakes",               price:"₹139", category:"Pancakes",  tag:"Most Loved",     imgKey:"pancake",   desc:"Classic Nutella-loaded pancake tower." },
  { name:"Lotus Biscoff Pancakes",         price:"₹139", category:"Pancakes",  tag:"Premium",        imgKey:"biscoff",   desc:"Biscoff butter with caramelised crumble." },
  { name:"KitKat Pancakes",               price:"₹139", category:"Pancakes",  tag:"Crunchy",        imgKey:"pancake",   desc:"Crunchy KitKat pieces on fluffy pancakes." },
  { name:"Oreo Pancakes",                  price:"₹139", category:"Pancakes",  tag:"Bestseller",     imgKey:"pancake",   desc:"Oreo dust & cream on tower pancakes." },
  { name:"Mango Pancakes (Seasonal)",      price:"₹149", category:"Pancakes",  tag:"Limited",        imgKey:"mango",     desc:"Fresh mango slices & cream. Seasonal only." },
  { name:"Matcha Pancakes",                price:"₹179", category:"Pancakes",  tag:"Signature",      imgKey:"pancake",   desc:"Japanese matcha batter, premium & earthy." },
  { name:"Tiramisu Pancakes",              price:"₹179", category:"Pancakes",  tag:"Chef Special",   imgKey:"tiramisu",  desc:"Espresso mascarpone & cocoa dusted stack." },
  // DRINKS
  { name:"Hot Chocolate",                  price:"₹135", category:"Drinks",    tag:"Warm",           imgKey:"drink",     desc:"Premium Belgian hot chocolate, rich & silky." },
  { name:"Classic Cold Coffee",            price:"₹150", category:"Drinks",    tag:"Refreshing",     imgKey:"drink",     desc:"Creamy chilled cold coffee, café style." },
  // CAKES
  { name:"Fresh Fruit Cake",               price:"₹749 / ₹1449", category:"Cakes", tag:"Fresh",     imgKey:"cake",      desc:"Seasonal fruits on light cream sponge." },
  { name:"Black Forest Cake",              price:"₹649 / ₹1249", category:"Cakes", tag:"Classic",   imgKey:"cake",      desc:"Cherries, cream & chocolate sponge layers." },
  { name:"Chocolate Chocochips Cake",      price:"₹600 / ₹1200", category:"Cakes", tag:"Choco",     imgKey:"cake",      desc:"Decadent chocolate sponge with chocochips." },
  { name:"Chocolate KitKat Cake",          price:"₹699 / ₹1299", category:"Cakes", tag:"Trending",  imgKey:"cake",      desc:"Surrounded by KitKat fingers, chocolate inside." },
  { name:"White Forest Cake",              price:"₹650 / ₹1250", category:"Cakes", tag:"Elegant",   imgKey:"cake",      desc:"White chocolate layers with whipped cream." },
  { name:"Pineapple Cake",                 price:"₹650 / ₹1250", category:"Cakes", tag:"Classic",   imgKey:"cake",      desc:"Tropical pineapple on soft vanilla sponge." },
  { name:"Butterscotch Cake",              price:"₹600 / ₹1199", category:"Cakes", tag:"Caramel",   imgKey:"cake",      desc:"Rich butterscotch cream & praline crunch." },
  { name:"Red Velvet Cake",                price:"₹800 / ₹1599", category:"Cakes", tag:"Luxury",    imgKey:"redvelvet", desc:"Velvety red sponge with cream cheese frosting." },
  { name:"Blueberry Cake",                 price:"₹699 / ₹1399", category:"Cakes", tag:"Fruity",    imgKey:"cake",      desc:"Blueberry compote layered in cream sponge." },
  { name:"Strawberry Cake",                price:"₹699 / ₹1399", category:"Cakes", tag:"Fruity",    imgKey:"cake",      desc:"Fresh strawberry layers, light & refreshing." },
  { name:"Rasmalai Cake",                  price:"₹799 / ₹1499", category:"Cakes", tag:"Desi Luxury",imgKey:"cake",     desc:"Rasmalai cream with rose & cardamom." },
  { name:"Gulab Jamun Cake",               price:"₹799 / ₹1499", category:"Cakes", tag:"Fusion",    imgKey:"cake",      desc:"Gulab jamun fusion with rose cream sponge." },
  { name:"Tiramisu Cake",                  price:"₹899 / ₹1599", category:"Cakes", tag:"Premium",   imgKey:"tiramisu",  desc:"Authentic tiramisu layered cake, rich & bold." },
  // PASTRIES
  { name:"Fruit Pastry",        price:"₹89",  category:"Pastries", tag:"Fresh",    imgKey:"cake",   desc:"Light cream pastry with fresh fruit topping." },
  { name:"Black Forest Pastry", price:"₹79",  category:"Pastries", tag:"Classic",  imgKey:"cake",   desc:"Cherry & cream layered chocolate pastry." },
  { name:"Chocochips Pastry",   price:"₹75",  category:"Pastries", tag:"Choco",    imgKey:"cake",   desc:"Chocolate sponge loaded with chocochips." },
  { name:"KitKat Pastry",       price:"₹87",  category:"Pastries", tag:"Trending", imgKey:"cake",   desc:"KitKat topped chocolate pastry slice." },
  { name:"White Forest Pastry", price:"₹80",  category:"Pastries", tag:"Elegant",  imgKey:"cake",   desc:"White chocolate & cream pastry slice." },
  { name:"Pineapple Pastry",    price:"₹80",  category:"Pastries", tag:"Classic",  imgKey:"cake",   desc:"Tropical pineapple pastry with cream." },
  { name:"Butterscotch Pastry", price:"₹75",  category:"Pastries", tag:"Caramel",  imgKey:"cake",   desc:"Butterscotch cream & praline pastry." },
  { name:"Red Velvet Pastry",   price:"₹100", category:"Pastries", tag:"Premium",  imgKey:"redvelvet", desc:"Red velvet slice with cream cheese." },
  { name:"Blueberry Pastry",    price:"₹89",  category:"Pastries", tag:"Fruity",   imgKey:"cake",   desc:"Blueberry compote topped cream pastry." },
  { name:"Strawberry Pastry",   price:"₹89",  category:"Pastries", tag:"Fruity",   imgKey:"cake",   desc:"Fresh strawberry cream pastry slice." },
  // BENTO CAKES
  { name:"Pineapple Bento Cake",    price:"₹385", category:"Bento Cakes", tag:"Mini",    imgKey:"cake", desc:"Personal-sized pineapple celebration cake." },
  { name:"Fruit Bento Cake",        price:"₹410", category:"Bento Cakes", tag:"Mini",    imgKey:"cake", desc:"Fresh fruit on a mini layered bento cake." },
  { name:"Black Forest Bento Cake", price:"₹385", category:"Bento Cakes", tag:"Mini",    imgKey:"cake", desc:"Classic black forest in personal box size." },
  { name:"Chocochips Bento Cake",   price:"₹389", category:"Bento Cakes", tag:"Mini",    imgKey:"cake", desc:"Chocolate chocochips mini bento cake." },
  { name:"KitKat Bento Cake",       price:"₹410", category:"Bento Cakes", tag:"Trending",imgKey:"cake", desc:"KitKat topped personal bento cake." },
  { name:"White Forest Bento Cake", price:"₹385", category:"Bento Cakes", tag:"Mini",    imgKey:"cake", desc:"White forest flavour in mini bento style." },
  { name:"Butterscotch Bento Cake", price:"₹385", category:"Bento Cakes", tag:"Mini",    imgKey:"cake", desc:"Butterscotch bento cake with praline crunch." },
  { name:"Blueberry Bento Cake",    price:"₹410", category:"Bento Cakes", tag:"Fruity",  imgKey:"cake", desc:"Blueberry cream bento celebration cake." },
  { name:"Strawberry Bento Cake",   price:"₹410", category:"Bento Cakes", tag:"Fruity",  imgKey:"cake", desc:"Fresh strawberry bento layered cake." },
  // CHEESECAKE SLICES
  { name:"Baked New York Cheesecake Slice",    price:"₹210", category:"Cheesecake Slices", tag:"Signature",  imgKey:"cheesecake", desc:"Classic dense New York baked cheesecake." },
  { name:"Baked Blueberry Cheesecake Slice",   price:"₹180", category:"Cheesecake Slices", tag:"Fruity",     imgKey:"cheesecake", desc:"Blueberry compote on smooth baked cheesecake." },
  { name:"Baked Caramel Cheesecake Slice",     price:"₹199", category:"Cheesecake Slices", tag:"Caramel",    imgKey:"cheesecake", desc:"Salted caramel drizzle on baked cheesecake." },
  { name:"Baked Strawberry Cheesecake Slice",  price:"₹190", category:"Cheesecake Slices", tag:"Fruity",     imgKey:"cheesecake", desc:"Fresh strawberry on silky baked cheesecake." },
  { name:"Baked Lotus Biscoff Cheesecake Slice",price:"₹210",category:"Cheesecake Slices", tag:"Luxury Pick",imgKey:"biscoff",    desc:"Biscoff butter on premium baked cheesecake." },
  { name:"Baked Nutella Cheesecake Slice",     price:"₹199", category:"Cheesecake Slices", tag:"Most Loved", imgKey:"cheesecake", desc:"Nutella-swirled silky baked cheesecake slice." },
  // CHEESECAKE CAKES
  { name:"New York Cheesecake",      price:"₹799 / ₹1599",  category:"Cheesecake Cakes", tag:"Signature",   imgKey:"cheesecake", desc:"Classic dense baked New York cheesecake." },
  { name:"Blueberry Cheesecake",     price:"₹829 / ₹1569",  category:"Cheesecake Cakes", tag:"Fruity",      imgKey:"cheesecake", desc:"Blueberry compote on creamy baked cheesecake." },
  { name:"Caramel Cheesecake",       price:"₹869 / ₹1530",  category:"Cheesecake Cakes", tag:"Caramel",     imgKey:"cheesecake", desc:"Salted caramel layered premium cheesecake." },
  { name:"Strawberry Cheesecake",    price:"₹849 / ₹1550",  category:"Cheesecake Cakes", tag:"Fruity",      imgKey:"cheesecake", desc:"Fresh strawberry compote cheesecake." },
  { name:"Lotus Biscoff Cheesecake", price:"₹979 / ₹1869",  category:"Cheesecake Cakes", tag:"Bestseller",  imgKey:"biscoff",    desc:"Biscoff base and butter swirl cheesecake." },
  { name:"Nutella Cheesecake",       price:"₹929 / ₹1829",  category:"Cheesecake Cakes", tag:"Most Loved",  imgKey:"cheesecake", desc:"Rich Nutella-swirled baked cheesecake." },
  // SPECIAL CAKES
  { name:"Classic Opera Cake",               price:"₹1199 / ₹2399", category:"Special Cakes", tag:"Chef's Pride",  imgKey:"cake", desc:"French opera cake — almond, coffee, ganache." },
  { name:"Sacher Cake",                      price:"₹1399 / ₹2799", category:"Special Cakes", tag:"Viennese",      imgKey:"cake", desc:"Austrian classic — dark chocolate & apricot." },
  { name:"Belgium Truffle Chocolate Cake",   price:"₹799 / ₹1799",  category:"Special Cakes", tag:"Luxury",        imgKey:"cake", desc:"Premium Belgian truffle chocolate showstopper." },
  { name:"Flourless Cake",                   price:"₹1299 / ₹2599", category:"Special Cakes", tag:"Gluten Free",   imgKey:"cake", desc:"Decadent flourless chocolate indulgence." },
  { name:"Japanese Cheese Cake",             price:"₹899 / ₹1799",  category:"Special Cakes", tag:"Light & Airy",  imgKey:"cake", desc:"Cottony soft Japanese-style soufflé cheesecake." },
  // DESSERTS
  { name:"French Vanilla Panna Cotta",  price:"₹149", category:"Desserts", tag:"Italian",  imgKey:"story",     desc:"Silky French vanilla Italian panna cotta tub." },
  { name:"Blueberry Panna Cotta",       price:"₹149", category:"Desserts", tag:"Fruity",   imgKey:"story",     desc:"Blueberry topped creamy panna cotta tub." },
  { name:"Chocolate Panna Cotta",       price:"₹149", category:"Desserts", tag:"Choco",    imgKey:"story",     desc:"Rich chocolate panna cotta, smooth & indulgent." },
  { name:"Classic Tiramisu Tub",        price:"₹249", category:"Desserts", tag:"Signature",imgKey:"tiramisu",  desc:"Classic espresso tiramisu tub, authentic recipe." },
  { name:"Blueberry Baked Yoghurt Tub", price:"₹249", category:"Desserts", tag:"Healthy",  imgKey:"story",     desc:"Baked yoghurt with blueberry compote on top." },
  { name:"Cream Caramel",               price:"₹249", category:"Desserts", tag:"French",   imgKey:"story",     desc:"Classic French cream caramel custard dessert." },
  // CAKE JARS
  { name:"Chocolate Cheesecake Jar",         price:"₹129", category:"Cake Jars", tag:"Popular",     imgKey:"jar", desc:"Layered chocolate cheesecake in a portable jar." },
  { name:"Blueberry Cheesecake Jar",         price:"₹149", category:"Cake Jars", tag:"Fruity",      imgKey:"jar", desc:"Blueberry compote cheesecake jar, fresh & tangy." },
  { name:"Strawberry Cheesecake Jar",        price:"₹149", category:"Cake Jars", tag:"Fruity",      imgKey:"jar", desc:"Strawberry cheesecake layered jar dessert." },
  { name:"Lotus Biscoff Cheesecake Jar",     price:"₹229", category:"Cake Jars", tag:"Luxury Pick", imgKey:"biscoff", desc:"Biscoff cheesecake jar — a cult favourite." },
  { name:"Nutella Hazelnut Cheesecake Jar",  price:"₹229", category:"Cake Jars", tag:"Most Loved",  imgKey:"jar", desc:"Nutella hazelnut cheesecake in a jar." },
  { name:"Banoffee Jar",                     price:"₹149", category:"Cake Jars", tag:"Classic",     imgKey:"jar", desc:"Banana & toffee cream banoffee jar." },
  { name:"Mud Cake Jar",                     price:"₹149", category:"Cake Jars", tag:"Choco",       imgKey:"jar", desc:"Dense chocolate mud cake in a jar." },
  // BROWNIES
  { name:"Walnut Brownie",                      price:"₹99",  category:"Brownies", tag:"Classic",    imgKey:"brownie", desc:"Fudgy brownie with roasted walnut chunks." },
  { name:"Classic Fudge Brownie",               price:"₹109", category:"Brownies", tag:"Bestseller", imgKey:"brownie", desc:"Dense fudgy classic chocolate brownie." },
  { name:"Dark & White Chocochips Brownie",     price:"₹129", category:"Brownies", tag:"Double Choc",imgKey:"brownie", desc:"Dark & white chocochips melted in rich brownie." },
  { name:"Lotus Biscoff Brownie",               price:"₹149", category:"Brownies", tag:"Luxury",     imgKey:"biscoff", desc:"Biscoff swirl fudge brownie, rich & indulgent." },
  { name:"Nutella Hazelnut Brownie",            price:"₹139", category:"Brownies", tag:"Most Loved", imgKey:"brownie", desc:"Nutella hazelnut swirl brownie, gooey centre." },
  { name:"Red Velvet Cheesecake Brownie",       price:"₹159", category:"Brownies", tag:"Premium",    imgKey:"redvelvet", desc:"Red velvet & cream cheese swirl brownie." },
  // CHOCOLATES
  { name:"Sea Salt Caramel Chocolate Box",   price:"₹299", category:"Chocolates", tag:"Gift Pick",   imgKey:"chocolate", desc:"Handcrafted sea salt caramel chocolates." },
  { name:"Blueberry Chocolate Box",          price:"₹299", category:"Chocolates", tag:"Fruity",      imgKey:"chocolate", desc:"Blueberry-infused artisan chocolate box." },
  { name:"Almond Rocks",                     price:"₹399", category:"Chocolates", tag:"Crunchy",     imgKey:"chocolate", desc:"Premium almond encased in rich chocolate." },
  { name:"Cashew Raisin Rocks",              price:"₹399", category:"Chocolates", tag:"Nutty",       imgKey:"chocolate", desc:"Cashew & raisin in premium chocolate rocks." },
  { name:"Peanut Rocks",                     price:"₹399", category:"Chocolates", tag:"Peanut",      imgKey:"chocolate", desc:"Roasted peanut rocks in dark chocolate." },
  { name:"Hazelnut Chocolate",               price:"₹599", category:"Chocolates", tag:"Premium",     imgKey:"chocolate", desc:"Roasted hazelnut premium artisan chocolates." },
  { name:"Rum Chocolates",                   price:"₹350", category:"Chocolates", tag:"Adults",      imgKey:"chocolate", desc:"Rum-infused artisan chocolate collection." },
  { name:"Rum Balls",                        price:"₹599", category:"Chocolates", tag:"Adults",      imgKey:"chocolate", desc:"Premium rum balls, handrolled & indulgent." },
  { name:"Chili Truffle Balls",              price:"₹299", category:"Chocolates", tag:"Bold",        imgKey:"chocolate", desc:"Dark chocolate truffles with a chili kick." },
  { name:"Classic Cocoa Truffle Balls",      price:"₹299", category:"Chocolates", tag:"Classic",     imgKey:"chocolate", desc:"Classic handrolled cocoa truffle balls." },
  { name:"Coconut Truffle Balls",            price:"₹399", category:"Chocolates", tag:"Coconut",     imgKey:"chocolate", desc:"Coconut-dusted smooth chocolate truffles." },
  { name:"Dates Cashew Chocolates",          price:"₹599", category:"Chocolates", tag:"Healthy",     imgKey:"chocolate", desc:"Natural dates & cashew in dark chocolate." },
  { name:"Dried Fruits & Nuts Mendiant",     price:"₹599", category:"Chocolates", tag:"Gift",        imgKey:"chocolate", desc:"French mendiant with dried fruits & nuts." },
  { name:"Saffron Cardamom Chocolates",      price:"₹599", category:"Chocolates", tag:"Royal",       imgKey:"chocolate", desc:"Saffron & cardamom artisan Indian chocolates." },
  { name:"Relief Palette",                   price:"₹299", category:"Chocolates", tag:"Gift",        imgKey:"chocolate", desc:"A curated palette of premium chocolate flavours." },
  { name:"Kunafa Chocolates",                price:"₹499", category:"Chocolates", tag:"Trending",    imgKey:"chocolate", desc:"Middle Eastern kunafa-inspired chocolate bites." },
  // TEA CAKES
  { name:"Tutti Frutti Tea Cake",       price:"₹249", category:"Tea Cakes", tag:"Classic",   imgKey:"cake", desc:"Tutti frutti dotted moist tea cake loaf." },
  { name:"Marble Tea Cake",             price:"₹247", category:"Tea Cakes", tag:"Classic",   imgKey:"cake", desc:"Swirled marble vanilla-chocolate tea cake." },
  { name:"Banana Walnut Tea Cake",      price:"₹289", category:"Tea Cakes", tag:"Healthy",   imgKey:"cake", desc:"Moist banana walnut loaf, hearty & warm." },
  { name:"Chocolate Tea Cake",          price:"₹249", category:"Tea Cakes", tag:"Choco",     imgKey:"cake", desc:"Rich chocolate tea cake loaf." },
  { name:"Butter Tea Cake",             price:"₹249", category:"Tea Cakes", tag:"Classic",   imgKey:"cake", desc:"Classic buttery golden tea cake." },
  { name:"Carrot Tea Cake",             price:"₹249", category:"Tea Cakes", tag:"Spiced",    imgKey:"cake", desc:"Moist carrot cake with warm spice blend." },
  { name:"Lemon Blueberry Tea Cake",    price:"₹289", category:"Tea Cakes", tag:"Fruity",    imgKey:"cake", desc:"Tangy lemon blueberry loaf tea cake." },
  // MACARONS
  { name:"Coffee Macaron",        price:"₹90",  category:"Macarons", tag:"Espresso",  imgKey:"macaron", desc:"French coffee buttercream macaron shell." },
  { name:"Blueberry Macaron",     price:"₹110", category:"Macarons", tag:"Fruity",    imgKey:"macaron", desc:"Blueberry ganache macaron, airy & light." },
  { name:"Chocolate Macaron",     price:"₹90",  category:"Macarons", tag:"Classic",   imgKey:"macaron", desc:"Dark chocolate ganache French macaron." },
  { name:"Nutella Macaron",       price:"₹110", category:"Macarons", tag:"Most Loved",imgKey:"macaron", desc:"Nutella cream filled premium macaron." },
  { name:"Salted Caramel Macaron",price:"₹90",  category:"Macarons", tag:"Caramel",   imgKey:"macaron", desc:"Salted caramel French macaron, perfectly crisp." },
  // CUPCAKES
  { name:"Black Forest Cupcake",         price:"₹89", category:"Cupcakes", tag:"Classic",    imgKey:"cake", desc:"Black forest cream & cherry cupcake." },
  { name:"White Forest Cupcake",         price:"₹89", category:"Cupcakes", tag:"Classic",    imgKey:"cake", desc:"White chocolate cream topped cupcake." },
  { name:"Blueberry Cupcake",            price:"₹89", category:"Cupcakes", tag:"Fruity",     imgKey:"cake", desc:"Blueberry frosted moist cupcake." },
  { name:"Vanilla Cupcake",              price:"₹89", category:"Cupcakes", tag:"Classic",    imgKey:"cake", desc:"Classic vanilla buttercream cupcake." },
  { name:"Red Velvet Cupcake",           price:"₹89", category:"Cupcakes", tag:"Premium",    imgKey:"redvelvet", desc:"Red velvet with cream cheese frosting." },
  { name:"Chocolate Cupcake",            price:"₹89", category:"Cupcakes", tag:"Choco",      imgKey:"cake", desc:"Moist chocolate ganache frosted cupcake." },
  { name:"Mocha Cupcake",               price:"₹89", category:"Cupcakes", tag:"Café",        imgKey:"cake", desc:"Coffee-chocolate mocha frosted cupcake." },
  { name:"Strawberry Cupcake",           price:"₹89", category:"Cupcakes", tag:"Fruity",     imgKey:"cake", desc:"Fresh strawberry cream frosted cupcake." },
  { name:"Oreo Cupcake",                 price:"₹89", category:"Cupcakes", tag:"Bestseller", imgKey:"cake", desc:"Oreo cream topped chocolate cupcake." },
  { name:"Dark Choc Belgium Cupcake",    price:"₹89", category:"Cupcakes", tag:"Luxury",     imgKey:"cake", desc:"Belgian dark chocolate premium cupcake." },
  { name:"Biscoff Cupcake",              price:"₹99", category:"Cupcakes", tag:"Luxury Pick", imgKey:"biscoff", desc:"Lotus Biscoff frosted signature cupcake." },
  { name:"Nutella Cupcake",              price:"₹99", category:"Cupcakes", tag:"Luxury Pick", imgKey:"cake", desc:"Nutella swirl frosted premium cupcake." },
  { name:"Ferrero Cupcake",              price:"₹99", category:"Cupcakes", tag:"Luxury Pick", imgKey:"cake", desc:"Ferrero Rocher topped luxury cupcake." },
  // COOKIES
  { name:"Multigrain Cookies 250g",        price:"₹299", category:"Cookies", tag:"250g",     imgKey:"cookie", desc:"Healthy multigrain premium cookie pack." },
  { name:"Coconut Cookies 250g",           price:"₹299", category:"Cookies", tag:"250g",     imgKey:"cookie", desc:"Toasted coconut crispy cookie pack." },
  { name:"Oats & Raisins Cookies 250g",    price:"₹310", category:"Cookies", tag:"250g",     imgKey:"cookie", desc:"Wholesome oats & raisins baked cookies." },
  { name:"Jeera Cookies 250g",             price:"₹250", category:"Cookies", tag:"250g",     imgKey:"cookie", desc:"Desi jeera spiced tea-time cookies." },
  { name:"Choco Chips Cookies 250g",       price:"₹288", category:"Cookies", tag:"250g",     imgKey:"cookie", desc:"Classic chocochip loaded premium cookies." },
  { name:"Peanut Butter Cookies 250g",     price:"₹299", category:"Cookies", tag:"250g",     imgKey:"cookie", desc:"Rich peanut butter cookie pack 250g." },
  { name:"Desi Ghee Nankhatai 250g",       price:"₹310", category:"Cookies", tag:"Desi",     imgKey:"cookie", desc:"Traditional ghee besan nankhatai, 250g box." },
];

const HERO_PRODUCTS = ["Baked Lotus Biscoff Cheesecake Slice","Baked Nutella Cheesecake Slice","Belgian Chocolate Waffle","Tiramisu Pancakes","Classic Fudge Brownie","Red Velvet Cake"];
const heroProducts  = allProducts.filter(p => HERO_PRODUCTS.includes(p.name));
const categories    = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];

/* ─── Shared helpers ─────────────────────────────────────────── */
function tagColor(tag) {
  const map = { "Bestseller":"#c9956c","Most Loved":"#e8b08a","Luxury Pick":"#d4af7a","Chef Special":"#a87d5e","Signature":"#c9956c","Limited":"#b5876f","Trending":"#e8a87c","Premium":"#c2835d","Luxury":"#c9956c" };
  return map[tag] || "#8a6242";
}

/* ─── Order Buttons ──────────────────────────────────────────── */
function OrderButtons({ compact = false }) {
  return (
    <div className={compact ? "order-btns compact" : "order-btns"}>
      <a className="btn-swiggy" href={SWIGGY} target="_blank" rel="noreferrer">
        <span className="btn-icon">🛵</span> Order on Swiggy
      </a>
      <a className="btn-zomato" href={ZOMATO} target="_blank" rel="noreferrer">
        <span className="btn-icon">🍽</span> Order on Zomato
      </a>
      <a className="btn-wa" href={WA} target="_blank" rel="noreferrer">
        <span className="btn-icon">💬</span> WhatsApp Order
      </a>
    </div>
  );
}

/* ─── Product Card ───────────────────────────────────────────── */
function ProductCard({ p, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14;
    setTilt({ x, y });
  }

  return (
    <motion.article
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.04, 0.3), duration: 0.5 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(700px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)` }}
    >
      <div className="pc-img">
        <img src={imgs[p.imgKey] || imgs.cake} alt={p.name} loading="lazy" />
        <span className="pc-tag" style={{ background: tagColor(p.tag) }}>{p.tag}</span>
        <div className="pc-overlay" />
      </div>
      <div className="pc-body">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <div className="pc-footer">
          <strong className="pc-price">{p.price}</strong>
          <a className="pc-order" href={ZOMATO} target="_blank" rel="noreferrer">Order 🛒</a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section header ─────────────────────────────────────────── */
function SectionHead({ eye, title, link, linkText }) {
  return (
    <div className="sec-head">
      <div>
        <p className="eye">{eye}</p>
        <h2>{title}</h2>
      </div>
      {link && <a className="view-link" href={link}>{linkText} →</a>}
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
function Hero() {
  const [tick, setTick] = useState(0);
  const taglines = ["100% Eggless", "Fresh Daily", "Premium Ingredients", "Delhi's Favourite"];
  useEffect(() => { const t = setInterval(() => setTick(n => (n + 1) % taglines.length), 2200); return () => clearInterval(t); }, []);

  return (
    <section className="hero" id="home">
      {/* ambient blobs */}
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />
      <div className="hero-blob b3" />

      {/* Navbar */}
      <nav className="navbar">
        <a className="brand" href="#home">
          <div className="brand-mark">
            <span>CC</span>
          </div>
          <div className="brand-text">
            <strong>Cream Cheese Bakery</strong>
            <small>Crafted with Love, Served with Happiness</small>
          </div>
        </a>
        <div className="navlinks">
          {[["#home","Home"],["#menu","Menu"],["#fullmenu","Full Menu"],["#custom","Custom Cakes"],["#reviews","Reviews"],["#gallery","Gallery"]].map(([h,l]) =>
            <a href={h} key={l}>{l}</a>)}
        </div>
        <a className="nav-cta" href={WA} target="_blank" rel="noreferrer">Order Now 🛍️</a>
      </nav>

      {/* Content */}
      <div className="hero-body">
        <motion.div className="hero-left" initial={{ opacity:0, x:-40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8, ease:"easeOut" }}>
          <div className="hero-eyebrow">
            <span className="star">✦</span>
            <AnimatePresence mode="wait">
              <motion.span key={tick} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.3}}>
                {taglines[tick]}
              </motion.span>
            </AnimatePresence>
          </div>
          <h1 className="hero-h1">
            Delhi's Premium<br />
            Eggless Dessert<br />
            <em>Experience</em>
          </h1>
          <p className="hero-sub">Handcrafted cakes, cheesecakes, waffles, pancakes, brownies and desserts made fresh daily in Vikaspuri, New Delhi.</p>
          <OrderButtons />
          <div className="hero-stats">
            {[["5.0★","Google Rating"],["50+","Menu Items"],["1000+","Happy Orders"],["Daily","Fresh Baked"]].map(([n,l])=>
              <div key={l} className="stat"><strong>{n}</strong><span>{l}</span></div>)}
          </div>
        </motion.div>

        <motion.div className="hero-right" initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.9, delay:0.15 }}>
          <div className="hero-cake-wrap">
            <div className="cake-glow" />
            <motion.img
              className="hero-cake-img"
              src={imgs.cake}
              alt="Premium chocolate cake"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />
            <div className="hero-badge top-badge">
              <span>🔥</span>
              <div><b>Bestseller</b><small>Belgian Chocolate Cake</small></div>
            </div>
            <div className="hero-badge price-badge">
              <small>Starting at</small>
              <b>₹699</b>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature strip */}
      <div className="feature-strip">
        {["Premium Ingredients","Freshly Baked Daily","Hygienic Kitchen","Fast Delivery","100% Eggless","Custom Cake Studio","5★ Experience"].map(f =>
          <div key={f} className="feature-pill">
            <span className="fp-dot" />
            {f}
          </div>)}
      </div>
    </section>
  );
}

/* ─── Signature Section ──────────────────────────────────────── */
const sigTabs = ["All","Cheesecakes","Brownies","Waffles","Pastries","Chocolates","Pancakes","Cakes"];
function SignatureSection() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() =>
    active === "All" ? heroProducts : allProducts.filter(p => p.category === active).slice(0,6),
  [active]);

  return (
    <section className="sig-section" id="menu">
      <SectionHead eye="Our signature delights" title="Luxury picks customers remember" link="#fullmenu" linkText="View Full Menu" />
      <div className="tabs-row">
        {sigTabs.map(t => <button key={t} className={active===t?"tab active":"tab"} onClick={()=>setActive(t)}>{t}</button>)}
      </div>
      <div className="product-grid">
        {filtered.map((p,i) => <ProductCard key={p.name} p={p} index={i} />)}
      </div>
    </section>
  );
}

/* ─── Story Grid ─────────────────────────────────────────────── */
function StoryGrid() {
  return (
    <section className="story-section">
      <div className="story-grid">

        <motion.div className="story-card dark-story" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="story-img-wrap">
            <img src={imgs.story} alt="Desserts" />
            <div className="story-img-overlay" />
          </div>
          <div className="story-content">
            <p className="eye light">Crafted to perfection</p>
            <h2>Desserts crafted to create moments</h2>
            <p>Every dessert is a masterpiece, handcrafted with love, premium ingredients and a passion for perfection.</p>
            <a className="story-link" href={WA} target="_blank" rel="noreferrer">Know Our Story →</a>
          </div>
        </motion.div>

        <motion.div className="story-card combo-story" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}>
          <p className="eye">Exclusive combos</p>
          <h2>Not offers.<br/>Dessert experiences.</h2>
          <p>Curated combos that make every celebration extra special.</p>
          <div className="combo-grid">
            {[["Signature Love Indulgence","₹289","Save ₹60"],["Tiramisu Café Experience","₹329","Save ₹70"],["Birthday Celebration Box","₹549","Save ₹100"]].map(([n,p,s])=>
              <div key={n} className="combo-item">
                <b>{n}</b>
                <strong>{p}</strong>
                <span>{s}</span>
              </div>)}
          </div>
        </motion.div>

        <motion.div className="story-card custom-story" id="custom" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}>
          <div className="custom-content">
            <p className="eye">Custom Cakes</p>
            <h2>Design your dream celebration cake</h2>
            <p>From concept to creation, we make your special moments unforgettable.</p>
            <a className="cta-pill" href={WA} target="_blank" rel="noreferrer">Start Custom Order →</a>
          </div>
          <img className="custom-img" src={imgs.custom} alt="Custom cake" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Full Menu ──────────────────────────────────────────────── */
function FullMenu() {
  const [active, setActive] = useState("All");
  const [query, setQuery]   = useState("");

  const filtered = useMemo(() =>
    allProducts.filter(p =>
      (active === "All" || p.category === active) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) ||
       p.category.toLowerCase().includes(query.toLowerCase()) ||
       p.tag.toLowerCase().includes(query.toLowerCase()))
    ), [active, query]);

  return (
    <section className="fullmenu-section" id="fullmenu">
      <div className="fm-head">
        <div>
          <p className="eye">Complete menu with prices</p>
          <h2>Explore the Full Menu</h2>
        </div>
        <div className="fm-search-wrap">
          <span className="search-icon">🔍</span>
          <input className="fm-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search item, category or tag…" />
        </div>
      </div>
      <div className="cats-row">
        {categories.map(c => <button key={c} className={active===c?"cat-btn active":"cat-btn"} onClick={()=>setActive(c)}>{c}</button>)}
      </div>
      <div className="menu-count"><strong>{filtered.length}</strong> items</div>
      <div className="product-grid full-grid">
        {filtered.map((p,i) => <ProductCard key={p.name+i} p={p} index={i} />)}
      </div>
    </section>
  );
}

/* ─── Custom Cake Studio ─────────────────────────────────────── */
function CustomCakeStudio() {
  const [form, setForm] = useState({ flavour:"", weight:"", theme:"", note:"" });
  const waLink = () => {
    const msg = encodeURIComponent(`Hi Cream Cheese Bakery! I want a custom cake.\nFlavour: ${form.flavour || "-"}\nWeight: ${form.weight || "-"}\nTheme: ${form.theme || "-"}\nNote: ${form.note || "-"}`);
    return `https://wa.me/917838140193?text=${msg}`;
  };

  const inp = (field) => ({ value: form[field], onChange: e => setForm(f=>({...f,[field]:e.target.value})) });

  return (
    <section className="studio-section" id="studio">
      <div className="studio-inner">
        <div className="studio-left">
          <p className="eye light">Custom Cake Studio</p>
          <h2>Design Your Dream Cake</h2>
          <p>Birthday, wedding, anniversary or just because — we craft cakes that become memories.</p>
          <div className="theme-tags">
            {["Birthday Cakes","Wedding Cakes","Korean Style","Bento Cakes","Minimal Cakes","Kids Cakes"].map(t=>
              <span key={t} className="theme-tag" onClick={()=>setForm(f=>({...f,theme:t}))} style={form.theme===t?{background:"#c9956c",color:"#fff",borderColor:"#c9956c"}:{}}>{t}</span>
            )}
          </div>
          <img src={imgs.custom} alt="Custom cake" className="studio-img" />
        </div>
        <div className="studio-right">
          <div className="studio-form">
            <h3>Build Your Cake</h3>
            <label>Flavour / Base</label>
            <select {...inp("flavour")}>
              <option value="">Select flavour…</option>
              {["Chocolate","Red Velvet","Vanilla","Black Forest","Lotus Biscoff","Nutella","Strawberry","Tiramisu","Blueberry","Rasmalai"].map(f=><option key={f}>{f}</option>)}
            </select>
            <label>Weight</label>
            <select {...inp("weight")}>
              <option value="">Select weight…</option>
              {["500g (½ kg)","1 kg","1.5 kg","2 kg","3 kg","4 kg+"].map(w=><option key={w}>{w}</option>)}
            </select>
            <label>Theme / Style</label>
            <input type="text" placeholder="e.g. Korean, Floral, Minimal…" {...inp("theme")} />
            <label>Additional Notes</label>
            <textarea rows={3} placeholder="Name on cake, colours, reference images, delivery date…" {...inp("note")} />
            <a className="wa-submit" href={waLink()} target="_blank" rel="noreferrer">
              💬 Send on WhatsApp
            </a>
            <p className="studio-note">We'll reply within 30 minutes • Free consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Icon Strip ─────────────────────────────────────────────── */
function IconStrip() {
  const items = [
    { icon:"📍", label:"Live Tracking" },
    { icon:"💬", label:"WhatsApp Orders" },
    { icon:"🎂", label:"Custom Cakes" },
    { icon:"🔒", label:"Secure Payment" },
    { icon:"⭐", label:"5.0 Google Rating" },
    { icon:"🌿", label:"Premium Ingredients" },
    { icon:"🧼", label:"Hygienic Kitchen" },
    { icon:"❤️", label:"Loved by Thousands" },
  ];
  return (
    <div className="icon-strip">
      {items.map(({ icon, label }) => (
        <div key={label} className="icon-item">
          <span>{icon}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Reviews ────────────────────────────────────────────────── */
const reviews = [
  { name:"Aarav Singh",    text:"The chocolate waffle is out of this world! Absolutely love it.",  img:imgs.waffle   },
  { name:"Priya Malhotra", text:"Lotus Biscoff cheesecake is my all-time favourite. Perfection.",   img:imgs.biscoff  },
  { name:"Rohan Verma",    text:"Best brownies in Delhi! Super rich and fudgy. 10/10.",              img:imgs.brownie  },
  { name:"Neha Gupta",     text:"The custom cake was beyond perfect. Everyone loved it!",            img:imgs.custom   },
  { name:"Simran Kaur",    text:"Tiramisu pancakes are heavenly. A must-try for every dessert lover!",img:imgs.tiramisu},
  { name:"Karan Mehta",    text:"Red velvet cake from here is the best I've ever had in Delhi.",     img:imgs.redvelvet},
];

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <SectionHead eye="What our customers say" title="Rated 5.0 by dessert lovers" link="https://g.page/r/" linkText="View All Reviews" />
      <p className="reviews-sub">Join thousands of happy customers who trust us for life's sweetest moments.</p>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <motion.div key={r.name} className="review-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}>
            <div className="rv-top">
              <div className="rv-avatar">{r.name[0]}</div>
              <div>
                <b>{r.name}</b>
                <div className="stars">★★★★★</div>
              </div>
              <img className="rv-img" src={r.img} alt="" />
            </div>
            <p>"{r.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Gallery ────────────────────────────────────────────────── */
const galleryImgs = [imgs.brownie, imgs.cake, imgs.waffle, imgs.biscoff, imgs.pancake, imgs.tiramisu, imgs.redvelvet, imgs.macaron];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-left">
        <p className="eye light">Follow us @creamcheesebakery</p>
        <h2>Sweet moments,<br />captured for you</h2>
        <p>Follow us on Instagram for updates, offers & behind the scenes.</p>
        <a className="insta-btn" href={INSTA} target="_blank" rel="noreferrer">
          <span>📸</span> Follow on Instagram
        </a>
      </div>
      <div className="gallery-grid">
        {galleryImgs.map((src, i) => (
          <motion.a key={i} className="gallery-item" href={INSTA} target="_blank" rel="noreferrer"
            initial={{opacity:0,scale:0.92}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.06}}
            whileHover={{scale:1.04}}>
            <img src={src} alt="Gallery" loading="lazy" />
            <div className="gal-overlay"><span>📸</span></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">CC</div>
          <p>Indulge in the finest eggless desserts crafted with love and the best ingredients.</p>
          <div className="social-row">
            <a href={INSTA} target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
            <a href={WA}    target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
            <a href={SWIGGY} target="_blank" rel="noreferrer" aria-label="Swiggy">🛵</a>
            <a href={ZOMATO} target="_blank" rel="noreferrer" aria-label="Zomato">🍽</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          {[["#home","Home"],["#menu","Menu"],["#fullmenu","Full Menu"],["#custom","Custom Cakes"],["#reviews","Reviews"],["#gallery","Gallery"]].map(([h,l])=>
            <a key={l} href={h}>{l}</a>)}
        </div>

        <div className="footer-col">
          <h4>Our Menu</h4>
          {["Cakes","Cheesecakes","Brownies","Waffles","Pancakes","Pastries","Chocolates","Macarons"].map(m=>
            <a key={m} href="#fullmenu">{m}</a>)}
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Shop No.54, 55, Block JG 1, Vikaspuri, New Delhi, Delhi 110018</p>
          <p>📞 <a href="tel:07838140193">078381 40193</a></p>
          <p>🕒 Daily: 10:00 AM – 9:00 PM</p>
        </div>

        <div className="footer-col">
          <h4>Order Now</h4>
          <a className="fo-btn swiggy" href={SWIGGY} target="_blank" rel="noreferrer">🛵 Order on Swiggy</a>
          <a className="fo-btn zomato" href={ZOMATO} target="_blank" rel="noreferrer">🍽 Order on Zomato</a>
          <a className="fo-btn wa"     href={WA}     target="_blank" rel="noreferrer">💬 Order on WhatsApp</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cream Cheese Bakery. All Rights Reserved.</p>
        <p className="footer-tagline">Crafted with Love, Served with Happiness ♡</p>
        <div>
          <a href="#">Privacy Policy</a>
          <span> | </span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Floating WhatsApp Button ───────────────────────────────── */
function FloatingWA() {
  return (
    <motion.a className="float-wa" href={WA} target="_blank" rel="noreferrer"
      initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:1.5, type:"spring" }}
      whileHover={{ scale:1.1 }}>
      💬
    </motion.a>
  );
}

/* ─── App ────────────────────────────────────────────────────── */
function App() {
  return (
    <main>
      <Hero />
      <SignatureSection />
      <StoryGrid />
      <FullMenu />
      <CustomCakeStudio />
      <IconStrip />
      <Reviews />
      <Gallery />
      <Footer />
      <FloatingWA />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
