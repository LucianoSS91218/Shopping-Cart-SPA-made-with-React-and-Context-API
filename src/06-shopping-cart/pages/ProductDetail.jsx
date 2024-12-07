import { useParams } from "react-router";
import { useState } from "react";
import { productos } from "../mocks/products.json";
import { AddToCartIcon, RemoveFromCartIcon } from "../components/Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import CartPage from "../pages/CartPage.jsx";
import Home from "../assets/home-icon-transparent-free.png";
import StarRating from "../components/StarRating.jsx";
import "./ProductDetail.css";
import { productos as OtherProducts } from "../mocks/products.json";
import { useNavigate } from "react-router-dom";

import { Carousel } from "../components/SimilarProducts.jsx";

export function ProductDetail() {
  const [value, setValue] = useState(0);
  const navigte = useNavigate();
  const pid = useParams();
  const pidDetail = productos.filter((x) => x.id === parseInt(pid.id));

  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    const checked = cart.some((item) => item.id === product.id);
    return checked;
  };

  const slices = OtherProducts.slice(30, 57);

  /*
  el tema que como esto es un supermercado no podemos hacer la logica de poner cheto 
  las caracteristicas porque no es una pagina como Naldo o Fravega,
  como aca tenemos alimentos y bebidas por eso te digo
   */

  //el carrefour por ej tiene las 3 img abajo y dos flechitas para cambiar de indice
  // esta bien lo que yo hice de elegir que productos y cuanta cantidad de imagenes
  // porque el carrefour y el chango son asi dependiendo del producto

  // hace eso entonces en las especificaciones copiate del carrefour

  /* el mock de abajo es con localhost por las dudas si el dia de mañana se mueren los links
  de las imagenes

  {
  "productos": [
    {
      "id": 30,
      "title": "Key Holder",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "price": 30,
      "discountPercentage": 2.92,
      "rating": 4.92,
      "stock": 54,
      "brand": "Golden",
      "category": "home-decoration",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/key holder.jpg"
    },
    {
      "id": 6,
      "title": "MacBook Pro 13",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "https://i.ibb.co/VT1ct2m/Macbook-AIR-13.jpg",
      "images": [
        "http://localhost:5173/imagenes/Macbook-AIR-13.jpg",
        "http://localhost:5173/imagenes/Macbook-AIR-13dos.png",
        "http://localhost:5173/imagenes/macbook-pro-13-m2-chip-8-core-cpu-10-core-gpu-512gb-ssd-space-grey.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "",
      "images": [
        "http://localhost:5173/imagenes/iphone x.jpg",
        "http://localhost:5173/imagenes/iphone x2.jpg",
        "http://localhost:5173/imagenes/iphone x3.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/galaxy-s9.jpg",
      "images": ["http://localhost:5173/imagenes/galaxy-s9.jpg"]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/oppo-f19.jpg",
      "images": ["http://localhost:5173/imagenes/oppo-f19.jpg"]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/huawei p30.jpg",
      "images": ["http://localhost:5173/imagenes/huawei p30.jpg"]
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/samsung galaxy book laptop.jpg",
      "images": [
        "http://localhost:5173/imagenes/samsung galaxy book laptop.jpg"
      ]
    },
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/iphone_9_white.jpg",
      "images": ["http://localhost:5173/imagenes/iphone_9_white.jpg"]
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/microsoft-surface-laptop 4.jpg",
      "images": [
        "http://localhost:5173/imagenes/microsoft-surface-laptop 4.jpg"
      ]
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Infinix INBOOK.jpg",
      "images": ["http://localhost:5173/imagenes/Infinix INBOOK.jpg"]
    },
    {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89,
      "brand": "HP Pavilion",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/hp pavilion 15.jpg",
      "images": ["http://localhost:5173/imagenes/Hp pavilion 15.jpg"]
    },
    {
      "id": 11,
      "title": "perfume Oil",
      "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "price": 147,
      "discountPercentage": 8.4,
      "rating": 4.26,
      "stock": 65,
      "brand": "Impression of Acqua Di Gio",
      "category": "fragrances",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Non-Alcoholic Concentrated Perfume Oil.webp"
    },
    {
      "id": 12,
      "title": "Brown Perfume",
      "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "price": 147,
      "discountPercentage": 15.66,
      "rating": 4,
      "stock": 52,
      "brand": "Royal_Mirage",
      "category": "fragrances",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/Brown Perfume.jpg"
    },
    {
      "id": 13,
      "title": "Fog Scent Xpressio Perfume",
      "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "price": 172,
      "discountPercentage": 8.14,
      "rating": 4.59,
      "stock": 61,
      "brand": "Fog Scent Xpressio",
      "category": "fragrances",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Fog Scent Xpressio Perfume.jpg"
    },
    {
      "id": 14,
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "price": 177,
      "discountPercentage": 15.6,
      "rating": 4.21,
      "stock": 114,
      "brand": "Al Munakh",
      "category": "fragrances",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/nonalcoholicperfume.jpg"
    },
    {
      "id": 15,
      "title": "Eau De Perfume Spray",
      "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "price": 167,
      "discountPercentage": 10.99,
      "rating": 4.7,
      "stock": 105,
      "brand": "Lord - Al-Rehab",
      "category": "fragrances",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Eau De Perfume Spray.jpg"
    },
    {
      "id": 16,
      "title": "Hyaluronic Acid Serum",
      "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      "price": 156,
      "discountPercentage": 13.31,
      "rating": 4.83,
      "stock": 110,
      "brand": "L'Oreal Paris",
      "category": "skincare",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Hyaluronic Acid Serum.jpg"
    },
    {
      "id": 17,
      "title": "Tree Oil 30ml",
      "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      "price": 149,
      "discountPercentage": 4.09,
      "rating": 4.52,
      "stock": 78,
      "brand": "Hemani Tea",
      "category": "skincare",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Tree Oil 30ml.jpg"
    },
    {
      "id": 18,
      "title": "Oil Free Moisturizer 100ml",
      "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      "price": 148,
      "discountPercentage": 13.1,
      "rating": 4.56,
      "stock": 88,
      "brand": "Dermive",
      "category": "skincare",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Oil Free Moisturizer 100ml.jpg"
    },
    {
      "id": 19,
      "title": "Skin Beauty Serum.",
      "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      "price": 147,
      "discountPercentage": 10.68,
      "rating": 4.42,
      "stock": 54,
      "brand": "ROREC White Rice",
      "category": "skincare",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Skin Beauty Serum.jpg"
    },
    {
      "id": 20,
      "title": "Freckle Treatment Cream- 15gm",
      "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      "price": 146,
      "discountPercentage": 16.99,
      "rating": 4.06,
      "stock": 140,
      "brand": "Fair & Clear",
      "category": "skincare",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Freckle Treatment Cream- 15gm.jpg"
    },
    {
      "id": 21,
      "title": "- Daal Masoor 500 grams",
      "description": "Fine quality Branded Product Keep in a cool and dry place",
      "price": 140,
      "discountPercentage": 4.81,
      "rating": 4.44,
      "stock": 133,
      "brand": "Saaf & Khaas",
      "category": "groceries",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Daal Masoor 500 grams.jpg"
    },
    {
      "id": 22,
      "title": "Elbow Macaroni - 400 gm",
      "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      "price": 139,
      "discountPercentage": 15.58,
      "rating": 4.57,
      "stock": 146,
      "brand": "Bake Parlor Big",
      "category": "groceries",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Elbow Macaroni - 400 gm.webp"
    },
    {
      "id": 23,
      "title": "Orange Essence Food Flavou",
      "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      "price": 138,
      "discountPercentage": 8.04,
      "rating": 4.85,
      "stock": 26,
      "brand": "Baking Food Items",
      "category": "groceries",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Orange Essence Food Flavou.jpg"
    },
    {
      "id": 24,
      "title": "cereals muesli fruit nuts",
      "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "price": 125,
      "discountPercentage": 16.8,
      "rating": 4.94,
      "stock": 113,
      "brand": "fauji",
      "category": "groceries",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/cereals muesli fruit nuts.jpg"
    },
    {
      "id": 25,
      "title": "Gulab Powder 50 Gram",
      "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      "price": 124,
      "discountPercentage": 13.58,
      "rating": 4.87,
      "stock": 47,
      "brand": "Dry Rose",
      "category": "groceries",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Gulab Powder 50 Gram.jpg"
    },
    {
      "id": 26,
      "title": "Plant Hanger For Home",
      "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      "price": 119,
      "discountPercentage": 17.86,
      "rating": 4.08,
      "stock": 131,
      "brand": "Boho Decor",
      "category": "home-decoration",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Plant Hanger For Home.jpg"
    },
    {
      "id": 27,
      "title": "Flying Wooden Bird",
      "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      "price": 152,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Flying Wooden",
      "category": "home-decoration",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Flying Wooden Bird.jpg"
    },
    {
      "id": 28,
      "title": "3D Embellishment Art Lamp",
      "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      "price": 143,
      "discountPercentage": 16.49,
      "rating": 4.82,
      "stock": 54,
      "brand": "LED Lights",
      "category": "home-decoration",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/3D Embellishment Art Lamp.jpg"
    },
    {
      "id": 29,
      "title": "Handcraft Chinese style",
      "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      "price": 132,
      "discountPercentage": 15.34,
      "rating": 4.44,
      "stock": 7,
      "brand": "luxury palace",
      "category": "home-decoration",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Handcraft Chinese style.jpg"
    },
    {
      "id": 30,
      "title": "Motorola G-60",
      "description": "With moto g60, you got it. Snap pics that stun with a class-leading 108 MP ultra high-res camera. Go farther with a 6000 mAh battery that can go 54 hours on a single charge1. Plus, enjoy impressive performance from a Qualcomm® Snapdragon™ 732G processor and 6 GB of RAM, and a gorgeous 6.8” display with a lightning-fast 120 Hz refresh rate",
      "price": 600,
      "discountPercentage": 15.34,
      "rating": 4.86,
      "stock": 45,
      "brand": "Motorola",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/motorola-g60.jpg",
      "images": ["http://localhost:5173/imagenes/motorola-g60.jpg"]
    },
    {
      "id": 31,
      "title": "Moto Edge-40",
      "description": "World's slimmest IP68 Rated 5G Phone, Feel the comfort of curved edges and hold a Vegan Leather finish. while you hold. Super slim and light to carry along with underwater protection. 256GB of UFS3.1 storage for a powerful experience. MediaTek Dimensity 8020: Enjoy a processor that allows you to game better, capture better videos, get lightning-fast file transfers, and do much more!. Keep in cool: New HyperCrystal graphite cooling system dissipates heat faster than standard cooling technology thus giving high performance. 8GB Maximize your capabilities and enjoy seamless multitasking with 8GB of LPDDR4X RAM.",
      "price": 1300,
      "discountPercentage": 10.67,
      "rating": 4.64,
      "stock": 16,
      "brand": "Motorola",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/moto-edge-40.jpg",
      "images": ["http://localhost:5173/imagenes/moto-edge-40.jpg"]
    },
    {
      "id": 32,
      "title": "Moto Edge-50",
      "description": "Crated for the bold. Everything you want in a camera. Create effortlessly, capture excellence. Power your pursuits, Go further on fewer charges or even charge wirelessly. Life is better unplugged: Keep creativity flowing with 68W TurboPower™. Charge your phone for the day in just 15 minutes. All day battery: A massive 5000mAh battery provides over 30 hours of fuel on a single charge. Love every beat: Dive into the multidimensional sound of Dolby Atmos® and hear every detail loud and clear with two large stereo speakers.",
      "price": 1400,
      "discountPercentage": 10.56,
      "rating": 4.74,
      "stock": 18,
      "brand": "Motorola",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/moto-edge-50.jpg",
      "images": ["http://localhost:5173/imagenes/moto-edge-50.jpg"]
    },
    {
      "id": 33,
      "title": "Moto G42",
      "description": "Most stylish in segment. Unleash your style with the premium design of moto g42. It comes with a PMMA acrylic glass finish and renewed camera module for a stunning look and weighs just 174.5 gms . Choose from two stunning colours, Atlantic Green and Metallic Rosé to suit your style. Cinematic immersion With an ultra-wide 6.4” OLED display and virtually borderless design, your phone brings you an expansive, crystal-clear view. See deeper blacks and vibrant colors that meet cinematic standards for accuracy¹. It also comes with 100% of the DCI-P3 color gamut and SGS-certified low blue light emission.",
      "price": 600,
      "discountPercentage": 12.78,
      "rating": 4.07,
      "stock": 14,
      "brand": "Motorola",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Moto-G42.jpg",
      "images": ["http://localhost:5173/imagenes/Moto-G42.jpg"]
    },
    {
      "id": 34,
      "title": "Google Pixel 5",
      "description": "An affordable flagship that focuses on camera quality. The Google Pixel 5 delivers 5G connectivity, excellent cameras, long battery life, and an outstanding Android software experience for a relatively affordable price.",
      "price": 1100,
      "discountPercentage": 9.34,
      "rating": 4.66,
      "stock": 32,
      "brand": "Google",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/google-pixel-5.jpg",
      "images": ["http://localhost:5173/imagenes/google-pixel-5.jpg"]
    },
    {
      "id": 35,
      "title": "Iphone 13",
      "description": "it’s an important iteration that offers better battery life, a better processor and an upgraded camera setup than iPhones that have gone before it. If you’re looking for a fast and capable smartphone, and don’t need the extra features of the pricier Pro model, this is a top choice.",
      "price": 1500,
      "discountPercentage": 7.34,
      "rating": 4.91,
      "stock": 16,
      "brand": "Iphone",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/iphone 13.jpg",
      "images": ["http://localhost:5173/imagenes/iphone 13.jpg"]
    },
    {
      "id": 36,
      "title": "Pocophone Poco C40",
      "description": "For those who enjoy great battery life. Xiaomi's sub-brand Poco is once again trying to penetrate the entry-level market with a phone that features a huge battery and an exotic processor. The Poco C40 even looks great to boot. The rear of the phone has a leatherette texture that gives the otherwise pretty basic plastic construction a more premium feel. The camera module and fingerprint sensor are located in a large, black unit that occupies the top quarter of the phone's back and refracts light.",
      "price": 799,
      "discountPercentage": 11.34,
      "rating": 4.55,
      "stock": 27,
      "brand": "Xiaomi",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Pocophone Poco C40.jpg",
      "images": ["http://localhost:5173/imagenes/Pocophone Poco C40.jpg"]
    },
    {
      "id": 37,
      "title": "Redmi A3",
      "description": "If you're looking for an inexpensive phone above all else, then the Xiaomi Redmi A3 may be worth a look: The manufacturer only demands US$130 for it, but you still get WiFi 5 and a PWM-free display. ffers a larger screen area, while its weight remains almost unchanged. However, there are still wide bezels around the screen, but this is acceptable within this price range. The back has been redesigned to feature a large circular camera module, resulting in a much more sophisticated look compared to its playful predecessor. Its color selection, consisting of dark green, black or medium blue, is also more mature. The shiny case is quite susceptible to collecting fingerprint marks. Xiaomi's Redmi A3 can be twisted  slightly at the sides, and applying medium pressure onto its display already results in the screen's liquid crystal becoming visible. The phone's build is flawless. One big advantage the Redmi A3 has over its predecessor is its USB-C port which makes the phone much more compatible when it comes to chargers and cables. The modern budget phone from Xiaomi doesn't support NFC. It continues to feature a dedicated microSD card slot, so you can insert a memory card alongside two SIM cards. During our tests using the Angelbird V60 as a reference microSD card, the card reader proved to be speedy for its price class, but at no point was it able to make use of the fast microSD card's full potential.",
      "price": 700,
      "discountPercentage": 16.34,
      "rating": 4.06,
      "stock": 39,
      "brand": "Xiaomi",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Redmi A3.jpg",
      "images": ["http://localhost:5173/imagenes/Redmi A3.jpg"]
    },
    {
      "id": 38,
      "title": "Galaxy A04",
      "description": "is an entry-level smartphone. It boasts all the basic specs like 4G connectivity, a dual camera setup, an HD+ display, and a 5000mAh battery. Running the show under the hood is an Helio G35 chipset. Let’s talk about the OneUI core experience first. It is built on top of Android 12. The lighter version of Samsung’s proprietary OS looks good. You get all those regular Samsung features with fewer customizations. Thankfully, Samsung hasn’t installed bloatware here but you do get a bunch of Microsoft and Google apps preinstalled. Most of them can be uninstalled. In performance The phone boasts an entry-level Mediatek Helio P35 chip from 2018. The P35 gets the job done for those wanting the basic experience. It can handle day-to-day activities like using social media, multitasking, light gaming, etc.  But the catch is that its performance is just average. In case you are willing to play some games on this guy, I’ll advise you to stick to basic games like Subway Surfers, Candy Crush, Temple Run, and such. I tried playing PUBG and the max it can go is–balanced graphics at a Medium frame rate. To no surprise, graphics rendering takes a significantly longer time on PUBG. The game is barely playable and not so enjoyable on this phone. Apart from that, A04 is good to go for light gaming. Design: the phone is made up of plastic as expected. The front side houses a waterdrop notch which I think is the norm for budget phones these days. The device weighs 192 grams which is a bit heavier if you are coming from a lightweight phone. Nevertheless, it doesn’t feel bulky though. I like the camera module on the rear side, arising from the surface. But, the headphone jack placement is at the bottom left side which feels a bit awkward while gaming in portrait mode.",
      "price": 400,
      "discountPercentage": 18.34,
      "rating": 4.07,
      "stock": 35,
      "brand": "Samsung",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/galaxy a04.jpg",
      "images": ["http://localhost:5173/imagenes/galaxy a04.jpg"]
    },
    {
      "id": 39,
      "title": "Iphone 8",
      "description": "The iPhone 8 offers wireless charging, lightning-fast performance and small but solid upgrades to its camera, screen and speakers. Its starting storage size is a roomy 64GB, double that of the iPhone 7. The iPhone 8 has plenty of power under the hood, but lacks the extra camera features and design upgrade of the better iPhone 8 Plus and X.",
      "price": 700,
      "discountPercentage": 8.34,
      "rating": 4.52,
      "stock": 15,
      "brand": "Iphone",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/iphone-8-256gb-gold.jpg",
      "images": ["http://localhost:5173/imagenes/iphone-8-256gb-gold.jpg"]
    },
    {
      "id": 40,
      "title": "Google Pixel 4",
      "description": "The Pixel 4's industry-leading cameras, super-smooth display and intuitive Face Unlock help it stand out, but short battery life holds it back. The camera may be the Google Pixel 4's headline feature, but there's a lot more on offer with this phone. Especially when compared to the new, but also less impressive, Pixel 5. Whether it's the silky-smooth 90Hz display, super-secure Face-Unlock, and so much more. Unfortunately, as forward thinking as the Pixel 4 may be, Google still repeated a lot of the same frustrating mistakes. Plus, with the Pixel 5 not really having that wow factor, we've had to look forward to see if Google ever has any intention of fixing common Pixel problems like underpowered hardware and weak battery life.",
      "price": 1600,
      "discountPercentage": 9.34,
      "rating": 4.68,
      "stock": 24,
      "brand": "Google",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/google-pixel-4.jpg",
      "images": ["http://localhost:5173/imagenes/google-pixel-4.jpg"]
    },
    {
      "id": 41,
      "title": "Galaxy S20 FE",
      "description": "a fast screen refresh rate, great photography potential, and a powerful processor. It has many of the flagship’s top features, including a super-smooth 120Hz screen, useful photography tricks and a capable processor, but at a lower starting price. The Samsung Galaxy S20 FE comes in a wide variety of eye-catching colors, from a pale mint to bright red and more besides, and there’s much more diversity than the typically limited selection of other smartphones. The design could be divisive though, as the screen doesn’t curve at the edges, and the back of the handset is plastic, making the phone feel relatively cheap in the hand.",
      "price": 600,
      "discountPercentage": 10.34,
      "rating": 4.64,
      "stock": 19,
      "brand": "Samsung",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/SGS20FE.jpg",
      "images": ["http://localhost:5173/imagenes/SGS20FE.jpg"]
    },
    {
      "id": 42,
      "title": "Iphone 12",
      "description": "The iPhone 12 sports a gorgeous design, full 5G support, great cameras and strong performance. However, you don't get a 120Hz display or telephoto lens, and the newer iPhone 14 offers better cameras. The iPhone 12 is worth a look if you're on the hunt for a cheap iPhone. The iPhone 12 offers an attractive, flat edged design surrounding a crisp OLED display. Also bundled in is 5G connectivity, great cameras and the power of the A14 Bionic chipset. The battery life isn't great, and it lacks a 120Hz refresh rate, but nobody's perfect.",
      "price": 1700,
      "discountPercentage": 11.34,
      "rating": 4.85,
      "stock": 17,
      "brand": "Iphone",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/iphone 12.jpg",
      "images": ["http://localhost:5173/imagenes/iphone 12.jpg"]
    },
    {
      "id": 43,
      "title": "Moto G04s",
      "description": "",
      "price": 430,
      "discountPercentage": 13.34,
      "rating": 4.85,
      "stock": 32,
      "brand": "Mac",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Moto G04s.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 44,
      "title": "Galaxy A15 LTE",
      "description": "asdasdasd",
      "price": 490,
      "discountPercentage": 12.34,
      "rating": 4.55,
      "stock": 35,
      "brand": "Mac",
      "category": "smartphones",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/galaxy a15.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 45,
      "title": "TCL 40SE",
      "description": "asdasdasd",
      "price": 520,
      "discountPercentage": 15.34,
      "rating": 4.59,
      "stock": 28,
      "brand": "Mac",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/TCL 40SE.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 46,
      "title": "Galaxy A55",
      "description": "asdasdasd",
      "price": 570,
      "discountPercentage": 12.24,
      "rating": 4.59,
      "stock": 27,
      "brand": "Mac",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/Galaxy A55.jpg",
      "images": [
        "http://localhost:5173/imagenes/Galaxy A55.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 47,
      "title": "Moto G85",
      "description": "asdasdasd",
      "price": 570,
      "discountPercentage": 13.65,
      "rating": 4.59,
      "stock": 26,
      "brand": "Mac",
      "category": "smartphones",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/Moto G85.jpg",
      "images": [
        "http://localhost:5173/imagenes/Moto G85.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 48,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 12.67,
      "rating": 4.65,
      "stock": 18,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 49,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 12.67,
      "rating": 4.65,
      "stock": 18,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 50,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 14.77,
      "rating": 4.65,
      "stock": 12,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 51,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 15.34,
      "rating": 4.65,
      "stock": 11,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 52,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 16.57,
      "rating": 4.65,
      "stock": 23,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 53,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 17.59,
      "rating": 4.65,
      "stock": 21,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 54,
      "title": "Notebook Asus 15,6” Core i3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 19.34,
      "rating": 4.65,
      "stock": 19,
      "brand": "ASUS",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/ASUS Core I3.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 55,
      "title": "MacBook Pro 14 M3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 11.34,
      "rating": 4.65,
      "stock": 13,
      "brand": "Mac",
      "category": "laptops",
      "stars": 4,
      "thumbnail": "http://localhost:5173/imagenes/Macbook-pro-14.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 56,
      "title": "Macbook Air 15 M3",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 12.69,
      "rating": 4.65,
      "stock": 12,
      "brand": "Mac",
      "category": "laptops",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/Macbook-air-15.jpg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    },
    {
      "id": 57,
      "title": "MacBook Pro 16",
      "description": "asdasd",
      "price": 1700,
      "discountPercentage": 15.68,
      "rating": 4.65,
      "stock": 10,
      "brand": "Mac",
      "category": "laptops",
      "stars": 5,
      "thumbnail": "http://localhost:5173/imagenes/MacBook_Pro_16.jpeg",
      "images": [
        "http://localhost:5173/imagenes/.jpg",
        "http://localhost:5173/imagenes/.jpg"
      ]
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}

   */

  return (
    <>
      <nav className="nav">
        <div className="padrehome">
          <img
            src={Home}
            width="105px"
            height="95px"
            onClick={() => navigte("/")}
          ></img>
          <h2>Back to home</h2>
        </div>
        <CartPage />
      </nav>

      {pidDetail.map((product) => {
        const isProductInCart = checkProductInCart(product);
        const filterp = slices.filter((f) => f.category === product.category);
        const stars = product.stars;

        return (
          <>
            <div className="containerproductdetail" key={product.id}>
              <div className="productdetail">
                <div className="containerpdimg">
                  <img
                    id="thumbnail"
                    src={
                      product.images ? product.images[value] : product.thumbnail
                    }
                    alt={product.title}
                  />
                  {product.images ? (
                    <div className="miniimages">
                      {product.images?.map((x, id) => (
                        <img
                          src={x}
                          alt={id}
                          onClick={() => setValue(id)}
                        ></img>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="pdcontent">
                  <StarRating stars={stars} />
                  <strong id="p-title">{product.title}</strong>
                  <strong id="p-price">${product.price}</strong>
                  <div className="padrebutton">
                    <button
                      style={{
                        backgroundColor: isProductInCart ? "red" : "#09f",
                      }}
                      onClick={() => {
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product);
                      }}
                    >
                      {isProductInCart
                        ? "Quitar del Carrito"
                        : "Añadir al Carrito"}
                      {isProductInCart ? (
                        <RemoveFromCartIcon />
                      ) : (
                        <AddToCartIcon />
                      )}
                    </button>
                  </div>
                  <p>Ver legales de promociones bancarias</p>
                  <p id="p-ccuotas">Calcula el valor en cuotas</p>
                </div>
              </div>
            </div>
            <div></div>

            {filterp.length > 1 ? (
              <>
                <br />
                <br />
                <div className="padreoctv">
                  <h2 id="octv">Otros clientes tambien vieron</h2>
                </div>
                <Carousel similarprodct={filterp} />
              </>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
}
