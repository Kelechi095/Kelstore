export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "iphone 14",
    description: "Short description",
    price: 2999,
    brand: "apple",
    category: "Phone",
    inStock: true,
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1694245643713-iphone14-white.png?alt=media&token=2486cd23-8aa9-449e-8563-8c8a3278d0b4",

    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Lenovo AMD RYZEN 3 1TB 8GB RAM 1TB HDD 2.6 To 3.4ghz Win 10+32GB Flash",
    description:
      "AboutThe Lenovo IdeaPad Amd ryzen is a 14.1-inch laptop with a screen resolution of 1920 x 1080. It has 8GB of memory and a 1TB Hard Disk drive. It has an Amd ryzen to 2.6GHz processor with Lenovo turbo boost system. It was with Windows 10 Home installed",
    price: 102.99,
    brand: "Lenovo",
    category: "Accesories",
    inStock: true,
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/124177/1.jpg?9117",
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image: "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Samsung galaxy s23",
    description:
      'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: 40,
    brand: "Samsung",
    category: "Phone",
    inStock: true,
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/4621462/1.jpg?5527",
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Kelechi",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Playstation 5",
    description:
      "One of the major new features of the PS5 is the next generation solid state storage, and it's also the aspect Cerny spent most time talking about. Like the Xbox Series X, the PS5 move away from the hard drive based storage of previous generation consoles to fast SSD storage. How fast are we talking about here? Sony claims raw I/O that rewrite the rules of what a PlayStation console can do which makes it roughly 100x faster than the storage on the PS4",
    price: 70,
    brand: "Sony",
    category: "Accesories",
    inStock: true,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/5490752/1.jpg?7906",
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    image: "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1695192445608-watch-black.jpg?alt=media&token=4446b901-01ab-4152-8953-e36b22608755",
    reviews: [],
  },
];
