/* ─── Brand URLs ─────────────────────────────────────────────── */
export const SWIGGY = "https://www.swiggy.com/menu/1341128?source=sharing";
export const ZOMATO = "https://zomato.onelink.me/xqzv/succ5c7v";
export const WA     = "https://wa.me/917838140193?text=Hi%20Cream%20Cheese%20Bakery%2C%20I%20want%20to%20order";
export const INSTA   = "https://www.instagram.com/officialcreamcheesebakery/";
export const TWITTER = "https://x.com/BakeWithCC";

/* ─── Images ─────────────────────────────────────────────────── */
export const imgs = {
  cake:       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  biscoff:    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  waffle:     "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop",
  pancake:    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
  brownie:    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
  redvelvet:  "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200&auto=format&fit=crop",
  custom:     "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
  story:      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
  mango:      "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
  jar:        "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
  chocolate:  "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop",
  drink:      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
  macaron:    "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1200&auto=format&fit=crop",
  cookie:     "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
  cheesecake: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  tiramisu:   "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop",
  pastry:     "https://images.unsplash.com/photo-1509365390695-33aee754301f?q=80&w=1200&auto=format&fit=crop",
  dessert:    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
};

/* ─── Tag Colors ─────────────────────────────────────────────── */
export function tagColor(tag) {
  const map = {
    "Bestseller":   "#c2622e",
    "Most Loved":   "#b85a2a",
    "Luxury Pick":  "#a07040",
    "Chef Special": "#8a5e38",
    "Signature":    "#c06040",
    "Limited":      "#9a5040",
    "Trending":     "#b86838",
    "Premium":      "#a05838",
    "Luxury":       "#c06040",
    "Seasonal":     "#6a7a30",
    "Gluten Free":  "#4a7050",
    "Adults":       "#5a4060",
    "Chef's Pride": "#8a5e38",
  };
  return map[tag] || "#8a6242";
}

/* ─── Full Product Data ──────────────────────────────────────── */
export const allProducts = [
  // WAFFLES
  { name:"Classic Maple Syrup Waffle",        price:"₹99",  category:"Waffles",          tag:"Classic",       imgKey:"waffle",    desc:"Crispy golden waffle with warm maple drizzle." },
  { name:"Chocolate Waffle",                  price:"₹99",  category:"Waffles",          tag:"Classic",       imgKey:"waffle",    desc:"Rich chocolate-dipped premium waffle." },
  { name:"Triple Chocolate Waffle",           price:"₹110", category:"Waffles",          tag:"Choco Lover",   imgKey:"waffle",    desc:"Dark, milk & white chocolate in every bite." },
  { name:"Blueberry Compote Waffle",          price:"₹129", category:"Waffles",          tag:"Fruity",        imgKey:"waffle",    desc:"Bursting with fresh blueberry compote." },
  { name:"Peanut Butter Waffle",              price:"₹149", category:"Waffles",          tag:"Rich",          imgKey:"waffle",    desc:"Thick peanut butter drizzle on crispy waffle." },
  { name:"Nutella Waffle",                    price:"₹149", category:"Waffles",          tag:"Most Loved",    imgKey:"waffle",    desc:"Generous Nutella spread on airy waffle." },
  { name:"Lotus Biscoff Waffle",              price:"₹149", category:"Waffles",          tag:"Luxury Pick",   imgKey:"biscoff",   desc:"Signature Lotus Biscoff spread & crumble." },
  { name:"Oreo Waffle",                       price:"₹159", category:"Waffles",          tag:"Bestseller",    imgKey:"waffle",    desc:"Oreo crumble with cream on golden waffle." },
  { name:"Fresh Mango Cream Waffle",          price:"₹149", category:"Waffles",          tag:"Seasonal",      imgKey:"mango",     desc:"Fresh seasonal mango cream topping." },
  // PANCAKES
  { name:"Classic Maple Syrup Pancakes",      price:"₹99",  category:"Pancakes",         tag:"Classic",       imgKey:"pancake",   desc:"Fluffy stacked pancakes with warm maple." },
  { name:"Blueberry Compote Pancakes",        price:"₹129", category:"Pancakes",         tag:"Fruity",        imgKey:"pancake",   desc:"House-made blueberry compote & cream." },
  { name:"Nutella Pancakes",                  price:"₹139", category:"Pancakes",         tag:"Most Loved",    imgKey:"pancake",   desc:"Classic Nutella-loaded pancake tower." },
  { name:"Lotus Biscoff Pancakes",            price:"₹139", category:"Pancakes",         tag:"Premium",       imgKey:"biscoff",   desc:"Biscoff butter with caramelised crumble." },
  { name:"Oreo Pancakes",                     price:"₹139", category:"Pancakes",         tag:"Bestseller",    imgKey:"pancake",   desc:"Oreo dust & cream on tower pancakes." },
  { name:"Mango Pancakes",                    price:"₹149", category:"Pancakes",         tag:"Limited",       imgKey:"mango",     desc:"Fresh mango slices & cream. Seasonal only." },
  { name:"Matcha Pancakes",                   price:"₹179", category:"Pancakes",         tag:"Signature",     imgKey:"pancake",   desc:"Japanese matcha batter, premium & earthy." },
  { name:"Tiramisu Pancakes",                 price:"₹179", category:"Pancakes",         tag:"Chef Special",  imgKey:"tiramisu",  desc:"Espresso mascarpone & cocoa dusted stack." },
  // DRINKS
  { name:"Hot Chocolate",                     price:"₹135", category:"Drinks",           tag:"Warm",          imgKey:"drink",     desc:"Premium Belgian hot chocolate, rich & silky." },
  { name:"Classic Cold Coffee",               price:"₹150", category:"Drinks",           tag:"Refreshing",    imgKey:"drink",     desc:"Creamy chilled cold coffee, café style." },
  // CAKES
  { name:"Fresh Fruit Cake",                  price:"₹749 / ₹1449", category:"Cakes",   tag:"Fresh",         imgKey:"cake",      desc:"Seasonal fruits on light cream sponge." },
  { name:"Black Forest Cake",                 price:"₹649 / ₹1249", category:"Cakes",   tag:"Classic",       imgKey:"cake",      desc:"Cherries, cream & chocolate sponge layers." },
  { name:"Red Velvet Cake",                   price:"₹800 / ₹1599", category:"Cakes",   tag:"Luxury",        imgKey:"redvelvet", desc:"Velvety red sponge with cream cheese frosting." },
  { name:"Tiramisu Cake",                     price:"₹899 / ₹1599", category:"Cakes",   tag:"Premium",       imgKey:"tiramisu",  desc:"Authentic tiramisu layered cake, rich & bold." },
  { name:"Rasmalai Cake",                     price:"₹799 / ₹1499", category:"Cakes",   tag:"Desi Luxury",   imgKey:"cake",      desc:"Rasmalai cream with rose & cardamom." },
  { name:"Gulab Jamun Cake",                  price:"₹799 / ₹1499", category:"Cakes",   tag:"Fusion",        imgKey:"cake",      desc:"Gulab jamun fusion with rose cream sponge." },
  { name:"Butterscotch Cake",                 price:"₹600 / ₹1199", category:"Cakes",   tag:"Caramel",       imgKey:"cake",      desc:"Rich butterscotch cream & praline crunch." },
  { name:"Chocolate KitKat Cake",             price:"₹699 / ₹1299", category:"Cakes",   tag:"Trending",      imgKey:"cake",      desc:"Surrounded by KitKat fingers, chocolate inside." },
  { name:"Blueberry Cake",                    price:"₹699 / ₹1399", category:"Cakes",   tag:"Fruity",        imgKey:"cake",      desc:"Blueberry compote layered in cream sponge." },
  { name:"Strawberry Cake",                   price:"₹699 / ₹1399", category:"Cakes",   tag:"Fruity",        imgKey:"cake",      desc:"Fresh strawberry layers, light & refreshing." },
  // PASTRIES
  { name:"Fruit Pastry",                      price:"₹89",  category:"Pastries",         tag:"Fresh",         imgKey:"pastry",    desc:"Light cream pastry with fresh fruit topping." },
  { name:"Red Velvet Pastry",                 price:"₹100", category:"Pastries",         tag:"Premium",       imgKey:"redvelvet", desc:"Red velvet slice with cream cheese." },
  { name:"Black Forest Pastry",               price:"₹79",  category:"Pastries",         tag:"Classic",       imgKey:"cake",      desc:"Cherry & cream layered chocolate pastry." },
  { name:"KitKat Pastry",                     price:"₹87",  category:"Pastries",         tag:"Trending",      imgKey:"cake",      desc:"KitKat topped chocolate pastry slice." },
  { name:"Butterscotch Pastry",               price:"₹75",  category:"Pastries",         tag:"Caramel",       imgKey:"pastry",    desc:"Butterscotch cream & praline pastry." },
  { name:"Blueberry Pastry",                  price:"₹89",  category:"Pastries",         tag:"Fruity",        imgKey:"pastry",    desc:"Blueberry compote topped cream pastry." },
  // BENTO CAKES
  { name:"Pineapple Bento Cake",              price:"₹385", category:"Bento Cakes",      tag:"Mini",          imgKey:"cake",      desc:"Personal-sized pineapple celebration cake." },
  { name:"Fruit Bento Cake",                  price:"₹410", category:"Bento Cakes",      tag:"Mini",          imgKey:"cake",      desc:"Fresh fruit on a mini layered bento cake." },
  { name:"KitKat Bento Cake",                 price:"₹410", category:"Bento Cakes",      tag:"Trending",      imgKey:"cake",      desc:"KitKat topped personal bento cake." },
  { name:"Blueberry Bento Cake",              price:"₹410", category:"Bento Cakes",      tag:"Fruity",        imgKey:"cake",      desc:"Blueberry cream bento celebration cake." },
  { name:"Strawberry Bento Cake",             price:"₹410", category:"Bento Cakes",      tag:"Fruity",        imgKey:"cake",      desc:"Fresh strawberry bento layered cake." },
  { name:"Butterscotch Bento Cake",           price:"₹385", category:"Bento Cakes",      tag:"Caramel",       imgKey:"cake",      desc:"Butterscotch bento cake with praline crunch." },
  // CHEESECAKE SLICES
  { name:"Baked New York Cheesecake",         price:"₹210", category:"Cheesecake Slices",tag:"Signature",     imgKey:"cheesecake",desc:"Classic dense New York baked cheesecake." },
  { name:"Baked Blueberry Cheesecake",        price:"₹180", category:"Cheesecake Slices",tag:"Fruity",        imgKey:"cheesecake",desc:"Blueberry compote on smooth baked cheesecake." },
  { name:"Baked Caramel Cheesecake",          price:"₹199", category:"Cheesecake Slices",tag:"Caramel",       imgKey:"cheesecake",desc:"Salted caramel drizzle on baked cheesecake." },
  { name:"Baked Strawberry Cheesecake",       price:"₹190", category:"Cheesecake Slices",tag:"Fruity",        imgKey:"cheesecake",desc:"Fresh strawberry on silky baked cheesecake." },
  { name:"Baked Lotus Biscoff Cheesecake",    price:"₹210", category:"Cheesecake Slices",tag:"Luxury Pick",   imgKey:"biscoff",   desc:"Biscoff butter on premium baked cheesecake." },
  { name:"Baked Nutella Cheesecake",          price:"₹199", category:"Cheesecake Slices",tag:"Most Loved",    imgKey:"cheesecake",desc:"Nutella-swirled silky baked cheesecake slice." },
  // CHEESECAKE CAKES
  { name:"New York Cheesecake (Whole)",       price:"₹799 / ₹1599",  category:"Cheesecake Cakes",tag:"Signature", imgKey:"cheesecake",desc:"Classic dense baked New York cheesecake." },
  { name:"Lotus Biscoff Cheesecake (Whole)",  price:"₹979 / ₹1869",  category:"Cheesecake Cakes",tag:"Bestseller",imgKey:"biscoff",   desc:"Biscoff base and butter swirl cheesecake." },
  { name:"Nutella Cheesecake (Whole)",        price:"₹929 / ₹1829",  category:"Cheesecake Cakes",tag:"Most Loved",imgKey:"cheesecake",desc:"Rich Nutella-swirled baked cheesecake." },
  { name:"Blueberry Cheesecake (Whole)",      price:"₹829 / ₹1569",  category:"Cheesecake Cakes",tag:"Fruity",    imgKey:"cheesecake",desc:"Blueberry compote on creamy baked cheesecake." },
  { name:"Caramel Cheesecake (Whole)",        price:"₹869 / ₹1530",  category:"Cheesecake Cakes",tag:"Caramel",   imgKey:"cheesecake",desc:"Salted caramel layered premium cheesecake." },
  // SPECIAL CAKES
  { name:"Classic Opera Cake",               price:"₹1199 / ₹2399", category:"Special Cakes",   tag:"Chef's Pride",imgKey:"cake",     desc:"French opera cake — almond, coffee, ganache." },
  { name:"Belgium Truffle Chocolate Cake",   price:"₹799 / ₹1799",  category:"Special Cakes",   tag:"Luxury",      imgKey:"cake",     desc:"Premium Belgian truffle chocolate showstopper." },
  { name:"Japanese Cheese Cake",             price:"₹899 / ₹1799",  category:"Special Cakes",   tag:"Light & Airy",imgKey:"cake",     desc:"Cottony soft Japanese-style soufflé cheesecake." },
  { name:"Flourless Cake",                   price:"₹1299 / ₹2599", category:"Special Cakes",   tag:"Gluten Free", imgKey:"cake",     desc:"Decadent flourless chocolate indulgence." },
  // DESSERTS
  { name:"French Vanilla Panna Cotta",       price:"₹149", category:"Desserts",         tag:"Italian",       imgKey:"dessert",   desc:"Silky French vanilla Italian panna cotta tub." },
  { name:"Classic Tiramisu Tub",             price:"₹249", category:"Desserts",         tag:"Signature",     imgKey:"tiramisu",  desc:"Classic espresso tiramisu tub, authentic recipe." },
  { name:"Blueberry Baked Yoghurt Tub",      price:"₹249", category:"Desserts",         tag:"Healthy",       imgKey:"dessert",   desc:"Baked yoghurt with blueberry compote on top." },
  { name:"Cream Caramel",                    price:"₹249", category:"Desserts",         tag:"French",        imgKey:"dessert",   desc:"Classic French cream caramel custard dessert." },
  { name:"Chocolate Panna Cotta",            price:"₹149", category:"Desserts",         tag:"Choco",         imgKey:"chocolate", desc:"Rich chocolate panna cotta, smooth & indulgent." },
  { name:"Blueberry Panna Cotta",            price:"₹149", category:"Desserts",         tag:"Fruity",        imgKey:"dessert",   desc:"Blueberry topped creamy panna cotta tub." },
  // CAKE JARS
  { name:"Chocolate Cheesecake Jar",         price:"₹129", category:"Cake Jars",        tag:"Popular",       imgKey:"jar",       desc:"Layered chocolate cheesecake in a portable jar." },
  { name:"Lotus Biscoff Cheesecake Jar",     price:"₹229", category:"Cake Jars",        tag:"Luxury Pick",   imgKey:"biscoff",   desc:"Biscoff cheesecake jar — a cult favourite." },
  { name:"Nutella Hazelnut Cheesecake Jar",  price:"₹229", category:"Cake Jars",        tag:"Most Loved",    imgKey:"jar",       desc:"Nutella hazelnut cheesecake in a jar." },
  { name:"Blueberry Cheesecake Jar",         price:"₹149", category:"Cake Jars",        tag:"Fruity",        imgKey:"jar",       desc:"Blueberry compote cheesecake jar, fresh & tangy." },
  { name:"Banoffee Jar",                     price:"₹149", category:"Cake Jars",        tag:"Classic",       imgKey:"jar",       desc:"Banana & toffee cream banoffee jar." },
  { name:"Mud Cake Jar",                     price:"₹149", category:"Cake Jars",        tag:"Choco",         imgKey:"jar",       desc:"Dense chocolate mud cake in a jar." },
  // BROWNIES
  { name:"Classic Fudge Brownie",            price:"₹109", category:"Brownies",         tag:"Bestseller",    imgKey:"brownie",   desc:"Dense fudgy classic chocolate brownie." },
  { name:"Walnut Brownie",                   price:"₹99",  category:"Brownies",         tag:"Classic",       imgKey:"brownie",   desc:"Fudgy brownie with roasted walnut chunks." },
  { name:"Lotus Biscoff Brownie",            price:"₹149", category:"Brownies",         tag:"Luxury",        imgKey:"biscoff",   desc:"Biscoff swirl fudge brownie, rich & indulgent." },
  { name:"Nutella Hazelnut Brownie",         price:"₹139", category:"Brownies",         tag:"Most Loved",    imgKey:"brownie",   desc:"Nutella hazelnut swirl brownie, gooey centre." },
  { name:"Red Velvet Cheesecake Brownie",    price:"₹159", category:"Brownies",         tag:"Premium",       imgKey:"redvelvet", desc:"Red velvet & cream cheese swirl brownie." },
  { name:"Dark & White Chocochips Brownie",  price:"₹129", category:"Brownies",         tag:"Double Choc",   imgKey:"brownie",   desc:"Dark & white chocochips melted in rich brownie." },
  // CHOCOLATES
  { name:"Lotus Biscoff Chocolate Box",      price:"₹399", category:"Chocolates",       tag:"Gift Pick",     imgKey:"chocolate", desc:"Artisan Lotus Biscoff chocolate collection." },
  { name:"Hazelnut Chocolate",               price:"₹599", category:"Chocolates",       tag:"Premium",       imgKey:"chocolate", desc:"Roasted hazelnut premium artisan chocolates." },
  { name:"Rum Balls",                        price:"₹599", category:"Chocolates",       tag:"Adults",        imgKey:"chocolate", desc:"Premium rum balls, handrolled & indulgent." },
  { name:"Saffron Cardamom Chocolates",      price:"₹599", category:"Chocolates",       tag:"Royal",         imgKey:"chocolate", desc:"Saffron & cardamom artisan Indian chocolates." },
  { name:"Kunafa Chocolates",                price:"₹499", category:"Chocolates",       tag:"Trending",      imgKey:"chocolate", desc:"Middle Eastern kunafa-inspired chocolate bites." },
  { name:"Almond Rocks",                     price:"₹399", category:"Chocolates",       tag:"Crunchy",       imgKey:"chocolate", desc:"Premium almond encased in rich chocolate." },
  { name:"Sea Salt Caramel Chocolate Box",   price:"₹299", category:"Chocolates",       tag:"Classic",       imgKey:"chocolate", desc:"Handcrafted sea salt caramel chocolates." },
  { name:"Chili Truffle Balls",              price:"₹299", category:"Chocolates",       tag:"Bold",          imgKey:"chocolate", desc:"Dark chocolate truffles with a chili kick." },
  // TEA CAKES
  { name:"Banana Walnut Tea Cake",           price:"₹289", category:"Tea Cakes",        tag:"Healthy",       imgKey:"cake",      desc:"Moist banana walnut loaf, hearty & warm." },
  { name:"Lemon Blueberry Tea Cake",         price:"₹289", category:"Tea Cakes",        tag:"Fruity",        imgKey:"cake",      desc:"Tangy lemon blueberry loaf tea cake." },
  { name:"Marble Tea Cake",                  price:"₹247", category:"Tea Cakes",        tag:"Classic",       imgKey:"cake",      desc:"Swirled marble vanilla-chocolate tea cake." },
  { name:"Carrot Tea Cake",                  price:"₹249", category:"Tea Cakes",        tag:"Spiced",        imgKey:"cake",      desc:"Moist carrot cake with warm spice blend." },
  { name:"Chocolate Tea Cake",               price:"₹249", category:"Tea Cakes",        tag:"Choco",         imgKey:"cake",      desc:"Rich chocolate tea cake loaf." },
  // MACARONS
  { name:"Coffee Macaron",                   price:"₹90",  category:"Macarons",         tag:"Espresso",      imgKey:"macaron",   desc:"French coffee buttercream macaron shell." },
  { name:"Nutella Macaron",                  price:"₹110", category:"Macarons",         tag:"Most Loved",    imgKey:"macaron",   desc:"Nutella cream filled premium macaron." },
  { name:"Blueberry Macaron",                price:"₹110", category:"Macarons",         tag:"Fruity",        imgKey:"macaron",   desc:"Blueberry ganache macaron, airy & light." },
  { name:"Chocolate Macaron",                price:"₹90",  category:"Macarons",         tag:"Classic",       imgKey:"macaron",   desc:"Dark chocolate ganache French macaron." },
  { name:"Salted Caramel Macaron",           price:"₹90",  category:"Macarons",         tag:"Caramel",       imgKey:"macaron",   desc:"Salted caramel French macaron, perfectly crisp." },
  // CUPCAKES
  { name:"Biscoff Cupcake",                  price:"₹99",  category:"Cupcakes",         tag:"Luxury Pick",   imgKey:"biscoff",   desc:"Lotus Biscoff frosted signature cupcake." },
  { name:"Red Velvet Cupcake",               price:"₹89",  category:"Cupcakes",         tag:"Premium",       imgKey:"redvelvet", desc:"Red velvet with cream cheese frosting." },
  { name:"Ferrero Cupcake",                  price:"₹99",  category:"Cupcakes",         tag:"Luxury Pick",   imgKey:"cake",      desc:"Ferrero Rocher topped luxury cupcake." },
  { name:"Oreo Cupcake",                     price:"₹89",  category:"Cupcakes",         tag:"Bestseller",    imgKey:"cake",      desc:"Oreo cream topped chocolate cupcake." },
  { name:"Nutella Cupcake",                  price:"₹99",  category:"Cupcakes",         tag:"Luxury Pick",   imgKey:"cake",      desc:"Nutella swirl frosted premium cupcake." },
  { name:"Black Forest Cupcake",             price:"₹89",  category:"Cupcakes",         tag:"Classic",       imgKey:"cake",      desc:"Black forest cream & cherry cupcake." },
  { name:"Chocolate Cupcake",                price:"₹89",  category:"Cupcakes",         tag:"Choco",         imgKey:"cake",      desc:"Moist chocolate ganache frosted cupcake." },
  { name:"Mocha Cupcake",                    price:"₹89",  category:"Cupcakes",         tag:"Café",          imgKey:"cake",      desc:"Coffee-chocolate mocha frosted cupcake." },
  // COOKIES
  { name:"Choco Chips Cookies 250g",         price:"₹288", category:"Cookies",          tag:"250g",          imgKey:"cookie",    desc:"Classic chocochip loaded premium cookies." },
  { name:"Oats & Raisins Cookies 250g",      price:"₹310", category:"Cookies",          tag:"250g",          imgKey:"cookie",    desc:"Wholesome oats & raisins baked cookies." },
  { name:"Desi Ghee Nankhatai 250g",         price:"₹310", category:"Cookies",          tag:"Desi",          imgKey:"cookie",    desc:"Traditional ghee besan nankhatai, 250g box." },
  { name:"Peanut Butter Cookies 250g",       price:"₹299", category:"Cookies",          tag:"250g",          imgKey:"cookie",    desc:"Rich peanut butter cookie pack 250g." },
  { name:"Coconut Cookies 250g",             price:"₹299", category:"Cookies",          tag:"250g",          imgKey:"cookie",    desc:"Toasted coconut crispy cookie pack." },
  { name:"Multigrain Cookies 250g",          price:"₹299", category:"Cookies",          tag:"250g",          imgKey:"cookie",    desc:"Healthy multigrain premium cookie pack." },
];

export const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];

export const FEATURED_NAMES = [
  "Baked Lotus Biscoff Cheesecake",
  "Baked Nutella Cheesecake",
  "Tiramisu Pancakes",
  "Classic Fudge Brownie",
  "Red Velvet Cake",
  "Lotus Biscoff Waffle",
];
