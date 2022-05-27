const mongoose = require('mongoose');
const db = require('../db');
const Product = require('../Models/product.model');


const products = [
  {
    id: 1,
    description: "Just when you thought you'd seen it all, Nike wows with an all-new way to quickly and easily get into your shoes. Great for people with limited mobility seeking ease of entry, or anyone wanting a quicker way to get in and go! The entire heel (including the sole) of the Nike Go FlyEase pivots open for a totally hands-free entry.",
    name: "Nike ZoomX Vaporfly NEXT",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1ff6ffc1-6c25-4a1f-8461-517308954d62/zoomx-vaporfly-next-2-zapatillas-de-competicion-asfalto-821S4F.png",
    price: "87.00"
  },
  {
    "id": 2,
    "description": "Just when you thought you'd seen it all, Nike wows with an all-new way to quickly and easily get into your shoes. Great for people with limited mobility seeking ease of entry, or anyone wanting a quicker way to get in and go! The entire heel (including the sole) of the Nike Go FlyEase pivots open for a totally hands-free entry.",
    "name": "Nike Go FlyEase",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c6a63ebd-8ddf-4ba4-ac0a-54e7b72557f1/go-flyease-shoes-V7n8cS.png",
    "price": "249.00"
  },
  {
    "id": 3,
    "description": "They say, “Don’t fix what works.” We say, “Perfect it.” A jumbo-sized Swoosh design updates this hoops original for style that’s hard to ignore. A low-profile silhouette and durable design harness the old-school look you love, while visible foam on the tongue and plush collar details add tried-and-true comfort—it’s a no-brainer.",
    "name": "Nike Blazer Low Jumbo",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/870d23e3-1704-43c5-ab3f-b92d9e013564/blazer-low-jumbo-mens-shoes-Z1xc3G.png",
    "price": "99.99"
  },
  {
    "id": 4,
    "description": "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    "name": "Nike Air Max 270",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png",
    "price": "160.00"
  },
  {
    "id": 5,
    "description": "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using a responsive foam that gives you an extra bounce. Breathable mesh in the upper combines comfort and durability with a wider fit at the toes. It's geared for everyday runs, long and short, with plenty of support and cushioning to help you get to your next PR. Bold images courtesy of artist Jordan Moss feature flowery graphics celebrating the art of movement.",
    "name": "Nike Air Zoom Pegasus 38",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b4f37e03-cd2c-419b-93db-0912cb1cb4da/air-zoom-pegasus-38-air-jordan-moss-mens-road-running-shoes-lq7PZZ.png",
    "price": "87.00"
  },
  {
    "id": 6,
    "description": "Kevin Durant lurks on the wing, waiting for the right time to strike before slicing his way through defenses. The KD14 is designed to help versatile, relentless players like KD feel fresh all game. Multilayer mesh and a midfoot strap help reduce your foot's movements inside the shoe. Full-length Zoom Air cushioning plus Cushlon foam give back energy for lasting performance.",
    "name": "KD14",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7d7d0451-7b3a-4657-bb83-0684c7cc160f/kd14-basketball-shoe-4Kckqs.png",
    "price": "160.00"
  },
  {
    "id": 7,
    "description": "LeBron thrives when stakes are high and the pressure’s on. The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. The snug inner sleeve is pulled together by a sculpted overlay that the laces feed through to help prevent the foot from moving inside the shoe. Embedded pods in the tongue and around the collar help reduce weight, keep the ankle aligned, and give players the secure feel and confidence to go all out when the game is on the line.",
    "name": "LeBron 19",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/52a6d0c1-c0fc-4c79-a1ea-76d44f3f12f4/lebron-19-basketball-shoes-VkqHgW.png",
    "price": "200.00"
  },
  {
    "id": 8,
    "description": "With its vibrant, tropical theme, this LeBron brings a fresh twist to the classic, thirst-quenching combination of iced tea and lemonade. Celebrating the famed refreshment, it mixes fresh colors, airy materials and lavish ornamental graphics fit for a king. Drink it up with your eyes while you give your feet a vacation.",
    "name": "Nike LeBron 9 Low",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/34d61392-dedc-4de5-a04b-0b204b6ab75c/lebron-9-low-mens-shoes-rMWhdV.png",
    "price": "200.00"
  },
  {
    "id": 9,
    "description": "Enjoy the sleek design of the Nike Air Max 270 in fiery colors. An extra-large Max Air unit provides ultra-plush cushioning under every step, while the stretchy inner sleeve provides a snug, socklike fit to help keep you comfortable all day, every day.",
    "name": "Nike Air Max 270",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b2947b89-0cbb-468c-b4c8-037fbf1b6cde/air-max-270-mens-shoes-KkLcGR.png",
    "price": "170.00"
  },
  {
    "id": 10,
    "description": "Let your attitude have the edge with flame-like caging that adds heat to the streets while airy mesh keeps you cool. The Nike Air Max Plus gives you a tuned Nike Air experience that offers premium stability and unbelievable cushioning.",
    "name": "Nike Air Max Plus",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e573b02b-253e-4464-a3bd-1d57d382c9bc/air-max-plus-shoes-x9G2xF.png",
    "price": "175.00"
  },
  {
    "id": 11,
    "description": "The Nike Air VaporMax Plus looks to the past to propel you into the future. Nodding to the '98 Air Max Plus with its floating cage, padded upper and heel logo, we've kept the running look you love while adding revolutionary VaporMax Air to ramp up the comfort and embolden your style.",
    "name": "Nike Air VaporMax Plus",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5c0f5083-2fd2-4e0e-b1d9-b2180712659d/air-vapormax-plus-mens-shoes-nC0dzF.png",
    "price": "210.00"
  },
  {
    "id": 12,
    "description": "Kyrie twists defenders into knots using his footwork and ball handling, creating the space he needs to make the play. Designed for his quick, crafty game, the Kyrie Low 5 enables players who utilize their speed and multidirectional ability to stay in control while taking advantage of the separation they create.",
    "name": "Kyrie Low 5",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f52fd22c-2bb2-4c94-be25-c7c600461c9a/kyrie-low-5-basketball-shoes-ZdZQfZ.png",
    "price": "110.00"
  },
  {
    "id": 13,
    "description": "Just when you thought you'd seen it all, Nike wows with an all-new way to quickly and easily get into your shoes. Great for people with limited mobility seeking ease of entry, or anyone wanting a quicker way to get in and go! The entire heel (including the sole) of the Nike Go FlyEase pivots open for a totally hands-free entry.",
    "name": "Nike Go FlyEase",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c6a63ebd-8ddf-4ba4-ac0a-54e7b72557f1/go-flyease-shoes-V7n8cS.png",
    "price": "87.00"
  },
  {
    "id": 14,
    "description": "The faster Kyrie slows down, the quicker he can speed up or change direction. His ability to control his movement keeps defenders guessing—and him in control. The Kyrie Infinity provides a tight custom fit, enhanced responsiveness in the forefoot and traction up the sides, allowing players to accelerate and decelerate on demand and take advantage of the separation they create.",
    "name": "Kyrie Infinity",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b4ff2df6-7adb-4d59-b3f6-99dbba246972/kyrie-infinity-basketball-shoes-LvzsVp.png",
    "price": "130.00"
  },
  {
    "id": 15,
    "description": "Nothing as comfortable. Nothing as proven. The Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays, and TPU accents on the eyestays. Clashing colors give it a fresh look and feel.",
    "name": "Nike Air Max 90",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d39fdd4c-6f98-447a-87b6-31ebadf208ef/air-max-90-mens-shoes-J8Mbst.png",
    "price": "140.00"
  }
]

const productsDocument = products.map(item => new Product(item));

db.connectDB
  .then(async () => {
    const allProducts = await Product.find();

    if (allProducts.length > 0) {
      await Product.collection.drop();
    }
  })
  .catch(err => console.error(`Error eliminado información de la DB: ${err}`))
  .then(async () => {
    await Product.insertMany(productsDocument);
  })
  .catch(err => console.error(`Error creando documentos en DB: ${err}`))
  .finally(() => mongoose.disconnect())