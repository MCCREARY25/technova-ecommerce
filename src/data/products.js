export const categories = [
  { id: "phones", name: "Phones & Tablets", icon: "📱" },
  { id: "laptops", name: "Laptops & Computers", icon: "💻" },
  { id: "gaming", name: "Gaming & Consoles", icon: "🎮" },
  { id: "audio", name: "Audio & Headphones", icon: "🎧" },
  { id: "tv", name: "TVs & Home Cinema", icon: "📺" },
  { id: "wearables", name: "Wearables", icon: "⌚" },
];

export const productsData = {
  phones: [
    { 
      id: "p1", 
      name: "iPhone 15 Pro Max", 
      price: 1199, 
      // Reliable Unsplash ID
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "p2", 
      name: "Samsung Galaxy S24 Ultra", 
      price: 1099, 
      // Reliable Samsung image
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "p3", 
      name: "Google Pixel 8 Pro", 
      price: 899, 
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "p4", 
      name: "OnePlus 12", 
      price: 799, 
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=compress&cs=tinysrgb&w=600" 
    },
  ],
  laptops: [
    { 
      id: "l1", 
      name: "MacBook Pro 16\" M3", 
      price: 2499, 
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "l2", 
      name: "Dell XPS 15", 
      price: 1799, 
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "l3", 
      name: "HP Spectre x360", 
      price: 1599, 
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "l4", 
      name: "Lenovo ThinkPad X1", 
      price: 1499, 
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=compress&cs=tinysrgb&w=600" 
    },
  ],
  gaming: [
    { 
      id: "g1", 
      name: "PlayStation 5 Console", 
      price: 499, 
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "g2", 
      name: "Xbox Series X", 
      price: 499, 
      // Verified Xbox Controller Link
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "g3", 
      name: "Nintendo Switch OLED", 
      price: 349, 
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "g4", 
      name: "Razer Blade 15", 
      price: 2299, 
      // Verified Gaming Laptop Link
      image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=compress&cs=tinysrgb&w=600" 
    },
  ],
  audio: [
    { 
      id: "a1", 
      name: "Sony WH-1000XM5", 
      price: 349, 
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "a2", 
      name: "AirPods Pro 2", 
      price: 249, 
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "a3", 
      name: "Bose QuietComfort", 
      price: 329, 
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "a4", 
      name: "JBL Flip 6", 
      price: 129, 
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=compress&cs=tinysrgb&w=600" 
    },
  ],
  tv: [
    { 
      id: "t1", 
      name: "Samsung 65\" QLED 8K", 
      price: 1999, 
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "t2", 
      name: "LG OLED 55\" C3", 
      price: 1499, 
      image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "t3", 
      name: "Sony Bravia XR", 
      price: 1299, 
      image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "t4", 
      name: "TCL 50\" Smart TV", 
      price: 299, 
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=compress&cs=tinysrgb&w=600" 
    },
  ],
  wearables: [
    { 
      id: "w1", 
      name: "Apple Watch Ultra 2", 
      price: 799, 
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "w2", 
      name: "Samsung Galaxy Watch 6", 
      price: 349, 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "w3", 
      name: "Fitbit Sense 2", 
      price: 249, 
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
      id: "w4", 
      name: "Garmin Fenix 7", 
      price: 699, 
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=compress&cs=tinysrgb&w=600" 
    },
  ],
};