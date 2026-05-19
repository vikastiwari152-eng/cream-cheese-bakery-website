import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";
const swiggyUrl="https://www.swiggy.com/menu/1341128?source=sharing";
const zomatoUrl="https://zomato.onelink.me/xqzv/succ5c7v";
const whatsappUrl="https://wa.me/917838140193?text=Hi%20Cream%20Cheese%20Bakery%2C%20I%20want%20to%20order";
const imgs={cake:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",biscoff:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",waffle:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop",pancake:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",brownie:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",redvelvet:"https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200&auto=format&fit=crop",custom:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",story:"https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",mango:"https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",jar:"https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",chocolate:"https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop",drink:"https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",macaron:"https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1200&auto=format&fit=crop",cookie:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"};
const allProducts=[
  {
    "name": "Classic Maple Syrup Waffle",
    "price": "₹99",
    "category": "Waffles",
    "tag": "Classic",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Chocolate Waffle",
    "price": "₹99",
    "category": "Waffles",
    "tag": "Classic",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "White Chocolate Waffle",
    "price": "₹99",
    "category": "Waffles",
    "tag": "Classic",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Milk Chocolate Waffle",
    "price": "₹99",
    "category": "Waffles",
    "tag": "Classic",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Triple Chocolate Waffle",
    "price": "₹110",
    "category": "Waffles",
    "tag": "Chocolate Lover",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Blueberry Compote Waffle",
    "price": "₹129",
    "category": "Waffles",
    "tag": "Fruity",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Peanut Butter Waffle",
    "price": "₹149",
    "category": "Waffles",
    "tag": "Rich",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Nutella Waffle",
    "price": "₹149",
    "category": "Waffles",
    "tag": "Most Loved",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Lotus Biscoff Waffle",
    "price": "₹149",
    "category": "Waffles",
    "tag": "Luxury Pick",
    "desc": "Premium crispy waffle.",
    "imgKey": "biscoff"
  },
  {
    "name": "KitKat Waffle",
    "price": "₹159",
    "category": "Waffles",
    "tag": "Crunchy",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Oreo Waffle",
    "price": "₹159",
    "category": "Waffles",
    "tag": "Bestseller",
    "desc": "Premium crispy waffle.",
    "imgKey": "waffle"
  },
  {
    "name": "Fresh Mango Cream Waffle",
    "price": "₹149",
    "category": "Seasonal",
    "tag": "Limited",
    "desc": "Premium crispy waffle.",
    "imgKey": "mango"
  },
  {
    "name": "Classic Maple Syrup Pancakes",
    "price": "₹99",
    "category": "Pancakes",
    "tag": "Classic",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Chocolate Pancakes",
    "price": "₹99",
    "category": "Pancakes",
    "tag": "Classic",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "White Chocolate Pancakes",
    "price": "₹99",
    "category": "Pancakes",
    "tag": "Classic",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Milk Chocolate Pancakes",
    "price": "₹99",
    "category": "Pancakes",
    "tag": "Classic",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Blueberry Compote Pancakes",
    "price": "₹129",
    "category": "Pancakes",
    "tag": "Fruity",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Peanut Butter Pancakes",
    "price": "₹139",
    "category": "Pancakes",
    "tag": "Rich",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Nutella Pancakes",
    "price": "₹139",
    "category": "Pancakes",
    "tag": "Most Loved",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Lotus Biscoff Pancakes",
    "price": "₹139",
    "category": "Pancakes",
    "tag": "Premium",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "biscoff"
  },
  {
    "name": "KitKat Pancakes",
    "price": "₹139",
    "category": "Pancakes",
    "tag": "Crunchy",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Oreo Pancakes",
    "price": "₹139",
    "category": "Pancakes",
    "tag": "Bestseller",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Mango Pancakes",
    "price": "₹149",
    "category": "Seasonal",
    "tag": "Limited",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "mango"
  },
  {
    "name": "Matcha Pancakes",
    "price": "₹179",
    "category": "Pancakes",
    "tag": "Our Special",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Tiramisu Pancakes",
    "price": "₹179",
    "category": "Pancakes",
    "tag": "Our Special",
    "desc": "Fluffy café-style pancakes.",
    "imgKey": "pancake"
  },
  {
    "name": "Hot Chocolate",
    "price": "₹135",
    "category": "Drinks",
    "tag": "Warm",
    "desc": "Rich hot chocolate.",
    "imgKey": "drink"
  },
  {
    "name": "Classic Cold Coffee",
    "price": "₹150",
    "category": "Drinks",
    "tag": "Cafe",
    "desc": "Classic cold coffee.",
    "imgKey": "drink"
  },
  {
    "name": "Fresh Fruit Cake",
    "price": "₹749 / ₹1449",
    "category": "Cakes",
    "tag": "Fresh",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Black Forest Cake",
    "price": "₹649 / ₹1249",
    "category": "Cakes",
    "tag": "Classic",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate Choco Chips Cake",
    "price": "₹600 / ₹1200",
    "category": "Cakes",
    "tag": "Chocolate",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate KitKat Cake",
    "price": "₹699 / ₹1299",
    "category": "Cakes",
    "tag": "Crunchy",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "White Forest Cake",
    "price": "₹650 / ₹1250",
    "category": "Cakes",
    "tag": "Classic",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Pineapple Cake",
    "price": "₹650 / ₹1250",
    "category": "Cakes",
    "tag": "Classic",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Butterscotch Cake",
    "price": "₹600 / ₹1199",
    "category": "Cakes",
    "tag": "Classic",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Red Velvet Cake",
    "price": "₹800 / ₹1599",
    "category": "Cakes",
    "tag": "Premium",
    "desc": "Half kg / Full kg.",
    "imgKey": "redvelvet"
  },
  {
    "name": "Blueberry Cake",
    "price": "₹699 / ₹1399",
    "category": "Cakes",
    "tag": "Fruity",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Strawberry Cake",
    "price": "₹699 / ₹1399",
    "category": "Cakes",
    "tag": "Fruity",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Rasmalai Cake",
    "price": "₹799 / ₹1499",
    "category": "Cakes",
    "tag": "Indian Fusion",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Gulab Jamun Cake",
    "price": "₹799 / ₹1499",
    "category": "Cakes",
    "tag": "Indian Fusion",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Tiramisu Cake",
    "price": "₹899 / ₹1599",
    "category": "Cakes",
    "tag": "Signature",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Fruit Pastry",
    "price": "₹89",
    "category": "Pastries",
    "tag": "Fresh",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Black Forest Pastry",
    "price": "₹79",
    "category": "Pastries",
    "tag": "Classic",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate Choco Chips Pastry",
    "price": "₹75",
    "category": "Pastries",
    "tag": "Chocolate",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate KitKat Pastry",
    "price": "₹87",
    "category": "Pastries",
    "tag": "Crunchy",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "White Forest Pastry",
    "price": "₹80",
    "category": "Pastries",
    "tag": "Classic",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Pineapple Pastry",
    "price": "₹80",
    "category": "Pastries",
    "tag": "Classic",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Butterscotch Pastry",
    "price": "₹75",
    "category": "Pastries",
    "tag": "Classic",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Red Velvet Pastry",
    "price": "₹100",
    "category": "Pastries",
    "tag": "Premium",
    "desc": "Fresh pastry slice.",
    "imgKey": "redvelvet"
  },
  {
    "name": "Blueberry Pastry",
    "price": "₹89",
    "category": "Pastries",
    "tag": "Fruity",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Strawberry Pastry",
    "price": "₹89",
    "category": "Pastries",
    "tag": "Fruity",
    "desc": "Fresh pastry slice.",
    "imgKey": "cake"
  },
  {
    "name": "Pineapple Bento Cake",
    "price": "₹385",
    "category": "Bento Cakes",
    "tag": "Mini Celebration",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Fruit Bento Cake",
    "price": "₹410",
    "category": "Bento Cakes",
    "tag": "Fresh",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Black Forest Bento Cake",
    "price": "₹385",
    "category": "Bento Cakes",
    "tag": "Classic",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate Choco Chips Bento Cake",
    "price": "₹389",
    "category": "Bento Cakes",
    "tag": "Chocolate",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate KitKat Bento Cake",
    "price": "₹410",
    "category": "Bento Cakes",
    "tag": "Crunchy",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "White Forest Bento Cake",
    "price": "₹385",
    "category": "Bento Cakes",
    "tag": "Classic",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Butterscotch Bento Cake",
    "price": "₹385",
    "category": "Bento Cakes",
    "tag": "Classic",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Blueberry Bento Cake",
    "price": "₹410",
    "category": "Bento Cakes",
    "tag": "Premium",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Strawberry Bento Cake",
    "price": "₹410",
    "category": "Bento Cakes",
    "tag": "Premium",
    "desc": "Mini celebration cake.",
    "imgKey": "cake"
  },
  {
    "name": "Baked New York Cheesecake Slice",
    "price": "₹210",
    "category": "Cheesecake Slices",
    "tag": "Classic",
    "desc": "Creamy baked cheesecake slice.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Blueberry Cheesecake Slice",
    "price": "₹180",
    "category": "Cheesecake Slices",
    "tag": "Fruity",
    "desc": "Creamy baked cheesecake slice.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Caramel Cheesecake Slice",
    "price": "₹199",
    "category": "Cheesecake Slices",
    "tag": "Caramel",
    "desc": "Creamy baked cheesecake slice.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Strawberry Cheesecake Slice",
    "price": "₹190",
    "category": "Cheesecake Slices",
    "tag": "Fruity",
    "desc": "Creamy baked cheesecake slice.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Lotus Biscoff Cheesecake Slice",
    "price": "₹210",
    "category": "Cheesecake Slices",
    "tag": "Luxury Pick",
    "desc": "Creamy baked cheesecake slice.",
    "imgKey": "biscoff"
  },
  {
    "name": "Baked Nutella Cheesecake Slice",
    "price": "₹199",
    "category": "Cheesecake Slices",
    "tag": "Luxury Pick",
    "desc": "Creamy baked cheesecake slice.",
    "imgKey": "cake"
  },
  {
    "name": "Baked New York Cheesecake",
    "price": "₹799 / ₹1599",
    "category": "Cheesecake Cakes",
    "tag": "Classic",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Blueberry Cheesecake",
    "price": "₹829 / ₹1569",
    "category": "Cheesecake Cakes",
    "tag": "Fruity",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Caramel Cheesecake",
    "price": "₹869 / ₹1530",
    "category": "Cheesecake Cakes",
    "tag": "Caramel",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Strawberry Cheesecake",
    "price": "₹849 / ₹1550",
    "category": "Cheesecake Cakes",
    "tag": "Fruity",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Baked Lotus Biscoff Cheesecake",
    "price": "₹979 / ₹1869",
    "category": "Cheesecake Cakes",
    "tag": "Luxury Pick",
    "desc": "Half kg / Full kg.",
    "imgKey": "biscoff"
  },
  {
    "name": "Baked Nutella Cheesecake",
    "price": "₹929 / ₹1829",
    "category": "Cheesecake Cakes",
    "tag": "Luxury Pick",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Classic Opera Cake",
    "price": "₹1199 / ₹2399",
    "category": "Special Cakes",
    "tag": "Luxury",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Sacher Cake",
    "price": "₹1399 / ₹2799",
    "category": "Special Cakes",
    "tag": "Luxury",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Belgium Truffle Chocolate Cake",
    "price": "₹799 / ₹1799",
    "category": "Special Cakes",
    "tag": "Chocolate",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Flourless Cake",
    "price": "₹1299 / ₹2599",
    "category": "Special Cakes",
    "tag": "Luxury",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "Japanese Cheese Cake",
    "price": "₹899 / ₹1799",
    "category": "Special Cakes",
    "tag": "Premium",
    "desc": "Half kg / Full kg.",
    "imgKey": "cake"
  },
  {
    "name": "French Vanilla Panna Cotta Tub",
    "price": "₹149",
    "category": "Desserts",
    "tag": "Creamy",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Blueberry Panna Cotta Tub",
    "price": "₹149",
    "category": "Desserts",
    "tag": "Fruity",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Chocolate Panna Cotta",
    "price": "₹149",
    "category": "Desserts",
    "tag": "Chocolate",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Classic Tiramisu Tub",
    "price": "₹249",
    "category": "Desserts",
    "tag": "Signature",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Blueberry Baked Yoghurt Tub",
    "price": "₹249",
    "category": "Desserts",
    "tag": "Fruity",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Cream Caramel",
    "price": "₹249",
    "category": "Desserts",
    "tag": "Classic",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Chocolate Cheesecake Jar",
    "price": "₹129",
    "category": "Cake Jars",
    "tag": "Chocolate",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Blueberry Cheesecake Jar",
    "price": "₹149",
    "category": "Cake Jars",
    "tag": "Fruity",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Strawberry Cheesecake Jar",
    "price": "₹149",
    "category": "Cake Jars",
    "tag": "Fruity",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Lotus Biscoff Cheesecake Jar",
    "price": "₹229",
    "category": "Cake Jars",
    "tag": "Luxury Pick",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "biscoff"
  },
  {
    "name": "Nutella Hazelnut Cheesecake Jar",
    "price": "₹229",
    "category": "Cake Jars",
    "tag": "Luxury Pick",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Banoffee Jar",
    "price": "₹149",
    "category": "Cake Jars",
    "tag": "Trending",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Mud Cake Jar",
    "price": "₹149",
    "category": "Cake Jars",
    "tag": "Chocolate",
    "desc": "Premium dessert jar/tub.",
    "imgKey": "jar"
  },
  {
    "name": "Walnut Brownie",
    "price": "₹99",
    "category": "Brownies",
    "tag": "Classic",
    "desc": "Rich premium brownie.",
    "imgKey": "brownie"
  },
  {
    "name": "Classic Fudge Brownie",
    "price": "₹109",
    "category": "Brownies",
    "tag": "Fudgy",
    "desc": "Rich premium brownie.",
    "imgKey": "brownie"
  },
  {
    "name": "Dark & White Choco Chips Brownie",
    "price": "₹129",
    "category": "Brownies",
    "tag": "Chocolate",
    "desc": "Rich premium brownie.",
    "imgKey": "brownie"
  },
  {
    "name": "Lotus Biscoff Brownie",
    "price": "₹149",
    "category": "Brownies",
    "tag": "Luxury Pick",
    "desc": "Rich premium brownie.",
    "imgKey": "biscoff"
  },
  {
    "name": "Nutella Hazelnut Brownie",
    "price": "₹139",
    "category": "Brownies",
    "tag": "Most Loved",
    "desc": "Rich premium brownie.",
    "imgKey": "brownie"
  },
  {
    "name": "Red Velvet Cheesecake Brownie",
    "price": "₹159",
    "category": "Brownies",
    "tag": "Signature",
    "desc": "Rich premium brownie.",
    "imgKey": "redvelvet"
  },
  {
    "name": "Sea Salt Caramel Chocolate Box",
    "price": "₹299",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Blueberry Chocolate Box",
    "price": "₹299",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Almond Rocks Box",
    "price": "₹399",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Cashew & Raisin Rocks Box",
    "price": "₹399",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Peanut Rocks Box",
    "price": "₹399",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Hazelnut Chocolate Box",
    "price": "₹599",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Rum Chocolates Box",
    "price": "₹350",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Rum Balls Box",
    "price": "₹599",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Chili Truffle Balls Box",
    "price": "₹299",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Classic Cocoa Truffle Balls Box",
    "price": "₹299",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Coconut Truffle Balls Box",
    "price": "₹399",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Dates Cashews Chocolates Box",
    "price": "₹599",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Dried Fruits & Nuts Mendiant Box",
    "price": "₹599",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Saffron & Cardamom Chocolates Box",
    "price": "₹599",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Relief Palette Box",
    "price": "₹299",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Kunafa Chocolates Box",
    "price": "₹499",
    "category": "Chocolates",
    "tag": "12 Cavity Box",
    "desc": "Handmade chocolate box.",
    "imgKey": "chocolate"
  },
  {
    "name": "Tutti Frutti Tea Cake",
    "price": "₹249",
    "category": "Tea Cakes",
    "tag": "Classic",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Marble Tea Cake",
    "price": "₹247",
    "category": "Tea Cakes",
    "tag": "Classic",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Banana & Walnut Tea Cake",
    "price": "₹289",
    "category": "Tea Cakes",
    "tag": "Premium",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Chocolate Tea Cake",
    "price": "₹249",
    "category": "Tea Cakes",
    "tag": "Chocolate",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Butter Cake",
    "price": "₹249",
    "category": "Tea Cakes",
    "tag": "Classic",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Carrot Tea Cake",
    "price": "₹249",
    "category": "Tea Cakes",
    "tag": "Classic",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Lemon Blueberry Tea Cake",
    "price": "₹289",
    "category": "Tea Cakes",
    "tag": "Premium",
    "desc": "Premium bakery item.",
    "imgKey": "cake"
  },
  {
    "name": "Coffee Macaron",
    "price": "₹90",
    "category": "Macarons",
    "tag": "Classic",
    "desc": "Premium bakery item.",
    "imgKey": "macaron"
  },
  {
    "name": "Blueberry Macaron",
    "price": "₹110",
    "category": "Macarons",
    "tag": "Fruity",
    "desc": "Premium bakery item.",
    "imgKey": "macaron"
  },
  {
    "name": "Chocolate Macaron",
    "price": "₹90",
    "category": "Macarons",
    "tag": "Chocolate",
    "desc": "Premium bakery item.",
    "imgKey": "macaron"
  },
  {
    "name": "Nutella Macaron",
    "price": "₹110",
    "category": "Macarons",
    "tag": "Luxury Pick",
    "desc": "Premium bakery item.",
    "imgKey": "macaron"
  },
  {
    "name": "Salted Caramel Macaron",
    "price": "₹90",
    "category": "Macarons",
    "tag": "Caramel",
    "desc": "Premium bakery item.",
    "imgKey": "macaron"
  },
  {
    "name": "Black Forest Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Classic",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "White Forest Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Classic",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Blueberry Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Fruity",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Vanilla Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Classic",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Red Velvet Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Premium",
    "desc": "Premium cupcake.",
    "imgKey": "redvelvet"
  },
  {
    "name": "Chocolate Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Chocolate",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Mocha Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Cafe",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Strawberry Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Fruity",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Oreo Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Bestseller",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Dark Chocolate Belgium Cupcake",
    "price": "₹89",
    "category": "Cupcakes",
    "tag": "Chocolate",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Biscoff Cupcake",
    "price": "₹99",
    "category": "Cupcakes",
    "tag": "Luxury Pick",
    "desc": "Premium cupcake.",
    "imgKey": "biscoff"
  },
  {
    "name": "Nutella Cupcake",
    "price": "₹99",
    "category": "Cupcakes",
    "tag": "Luxury Pick",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Ferrero Cupcake",
    "price": "₹99",
    "category": "Cupcakes",
    "tag": "Luxury Pick",
    "desc": "Premium cupcake.",
    "imgKey": "cake"
  },
  {
    "name": "Multigrain Cookies 250g",
    "price": "₹299",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  },
  {
    "name": "Coconut Cookies 250g",
    "price": "₹299",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  },
  {
    "name": "Oats & Raisins Cookies 250g",
    "price": "₹310",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  },
  {
    "name": "Jeera Cookies 250g",
    "price": "₹250",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  },
  {
    "name": "Choco Chips Cookies 250g",
    "price": "₹288",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  },
  {
    "name": "Peanut Butter Cookies 250g",
    "price": "₹299",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  },
  {
    "name": "Desi Ghee Besan Nankhatai 250g",
    "price": "₹310",
    "category": "Cookies",
    "tag": "250g",
    "desc": "Premium cookies pack.",
    "imgKey": "cookie"
  }
];
const heroNames=["Baked Lotus Biscoff Cheesecake Slice","Baked Nutella Cheesecake Slice","Belgian Chocolate Waffle","Chocolate Pancakes","Classic Fudge Brownie","Red Velvet Cake"];
const heroProducts=allProducts.filter(p=>heroNames.includes(p.name));
const categories=["All",...Array.from(new Set(allProducts.map(p=>p.category)))];
function OrderButtons({compact=false}){return <div className={compact?"order-buttons compact":"order-buttons"}><a className="swiggy" href={swiggyUrl}>Order on Swiggy</a><a className="zomato" href={zomatoUrl}>Order on Zomato</a><a className="whatsapp" href={whatsappUrl}>Order on WhatsApp</a></div>}
function ProductCard({p,index}){return <motion.article className="product-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:Math.min(index*.02,.24)}}><div className="product-image"><img src={imgs[p.imgKey]||imgs.cake} alt={p.name}/><span>{p.tag}</span></div><div className="product-body"><h3>{p.name}</h3><p>{p.desc}</p><div><strong>{p.price}</strong><a href={zomatoUrl}>🛒</a></div></div></motion.article>}
function App(){const[active,setActive]=useState("All");const[query,setQuery]=useState("");const fullMenu=useMemo(()=>allProducts.filter(p=>(active==="All"||p.category===active)&&(p.name.toLowerCase().includes(query.toLowerCase())||p.category.toLowerCase().includes(query.toLowerCase())||p.desc.toLowerCase().includes(query.toLowerCase()))),[active,query]);return <main><section className="hero" id="home"><div className="hero-bg"></div><nav className="navbar"><div className="brand"><div className="brand-mark">CC</div><div><h3>Cream Cheese Bakery</h3><p>Crafted with Love, Served with Happiness</p></div></div><div className="navlinks"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#fullmenu">Full Menu</a><a href="#custom">Custom Cakes</a><a href="#reviews">Reviews</a></div><a className="nav-order" href={whatsappUrl}>Order Now 🛍️</a></nav><div className="hero-content"><motion.div className="hero-copy" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}><p className="eyebrow">♡ Indulge in happiness</p><h1>Delhi’s Premium Dessert <em>Experience</em></h1><p className="hero-text">Handcrafted eggless desserts made with premium ingredients, modern presentation and lots of love.</p><OrderButtons/><div className="feature-row"><div>🏆<b>Premium Ingredients</b><span>Finest quality</span></div><div>✨<b>Handcrafted Daily</b><span>Made with love</span></div><div>🛡️<b>Fresh & Hygienic</b><span>100% safe</span></div><div>🚚<b>On-time Delivery</b><span>Right to your door</span></div></div></motion.div><motion.div className="hero-cake" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}}><div className="badge">🔥 Bestselling<br/>Belgian Chocolate Cake</div><img src={imgs.cake} alt="Chocolate cake"/><div className="price-badge">Starting at<br/><strong>₹699</strong></div></motion.div></div></section><section className="menu-section" id="menu"><div className="section-title"><div><p>Our signature delights</p><h2>Luxury picks customers remember</h2></div><a href="#fullmenu">View Full Menu →</a></div><div className="product-grid hero-grid-products">{heroProducts.map((p,i)=><ProductCard key={p.name} p={p} index={i}/>)}</div><div className="story-grid"><div className="story-card dark-card"><p>Crafted to perfection</p><h2>Desserts crafted to create moments</h2><span>Every dessert is a masterpiece, handcrafted with love, premium ingredients and a passion for perfection.</span><a href="#custom">Know Our Story →</a></div><div className="story-card combo-card"><p>Exclusive combos</p><h2>Not offers. Dessert experiences.</h2><div className="mini-combos"><div><b>Signature Love</b><strong>₹289</strong></div><div><b>Tiramisu Café</b><strong>₹329</strong></div><div><b>Birthday Box</b><strong>₹549</strong></div></div></div><div className="story-card custom-card" id="custom"><div><p>Custom cakes</p><h2>Design your dream celebration cake</h2><span>From concept to creation, we make your special moments unforgettable.</span><a href={whatsappUrl}>Start Custom Order →</a></div><img src={imgs.custom} alt="Custom cake"/></div></div></section><section className="full-menu" id="fullmenu"><div className="section-title"><div><p>Complete menu with prices</p><h2>Explore the full Cream Cheese Bakery menu</h2></div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search item or category..."/></div><div className="tabs">{categories.map(cat=><button key={cat} onClick={()=>setActive(cat)} className={active===cat?"active":""}>{cat}</button>)}</div><div className="menu-count">{fullMenu.length} items showing</div><div className="product-grid full-grid">{fullMenu.map((p,i)=><ProductCard key={p.name} p={p} index={i}/>)}</div></section><section className="icon-strip">{["Live Order Tracking","WhatsApp Ordering","Custom Cake Designer","Easy & Secure Payments","Google Reviews 5.0★","Premium Ingredients","Hygienic Environment"].map(item=><div key={item}>♡<span>{item}</span></div>)}</section><section className="reviews" id="reviews"><div className="section-title"><div><p>What our customers say</p><h2>Rated 5.0 by dessert lovers</h2></div><a href="#">View All Reviews →</a></div><div className="review-grid">{[["Aarav Singh","The chocolate waffle is out of this world."],["Priya Malhotra","Lotus cheesecake is my favorite."],["Rohan Verma","Best brownies in Delhi."],["Neha Gupta","Custom cake was beyond perfect."]].map(([name,text])=><div className="review-card" key={name}><div className="avatar">{name[0]}</div><b>{name}</b><span>★★★★★</span><p>{text}</p></div>)}</div></section><section className="gallery"><div><p>Follow us @creamcheesebakery</p><h2>Sweet moments, captured for you</h2><span>Follow us on Instagram for updates, offers and behind the scenes.</span><a href="#">Follow on Instagram</a></div>{[imgs.brownie,imgs.cake,imgs.waffle,imgs.biscoff,imgs.pancake,imgs.story].map(img=><img src={img} key={img} alt="Dessert gallery"/>)}</section><footer><div><div className="footer-logo">CC</div><p>Indulge in the finest desserts crafted with love and the best ingredients.</p></div><div><h4>Quick Links</h4><a href="#home">Home</a><a href="#menu">Menu</a><a href="#fullmenu">Full Menu</a><a href="#custom">Custom Cakes</a></div><div><h4>Our Menu</h4><a>Cakes</a><a>Cheesecakes</a><a>Brownies</a><a>Waffles</a></div><div><h4>Contact Us</h4><p>📍 Shop No.54, 55, Block JG 1, Vikaspuri, New Delhi, Delhi 110018</p><p>📞 078381 40193</p><p>🕒 Mon–Sun: 10:00 AM - 9:00 PM</p></div><div><h4>Order Now</h4><OrderButtons compact/></div></footer><a className="floating-whatsapp" href={whatsappUrl}>💬</a></main>}
createRoot(document.getElementById("root")).render(<App/>);
