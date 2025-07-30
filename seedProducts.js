const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: 'UFC Fight Gloves',
    description: 'Official UFC fight gloves. Premium quality for training and competition.',
    price: 49.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/mens-ufc-black-official-pro-fight-gloves_ss5_p-200966595+u-vwzielguzpbqpzqg9cfk+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Gloves',
    stock: 100
  },
  {
    name: 'UFC Walkout Hoodie',
    description: 'Walkout hoodie as seen on UFC athletes. Soft, warm, and stylish.',
    price: 79.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/mens-black-ufc-old-vegas-pullover-hoodie_ss5_p-202920566+u-fdwhhdklthqgup0i6ozz+v-5oj4fcuaklmjpdqe4jcd.jpg?_hv=2&w=400',
    category: 'Hoodies',
    stock: 50
  },
  {
    name: 'UFC T-Shirt',
    description: 'Classic UFC logo t-shirt. Lightweight and comfortable.',
    price: 29.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/mens-black-ufc-logo-t-shirt_ss5_p-200966591+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'T-Shirts',
    stock: 200
  },
  {
    name: 'UFC Snapback Hat',
    description: 'Official UFC snapback hat. Adjustable fit.',
    price: 24.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/ufc-black-logo-snapback-hat_ss5_p-200966599+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Hats',
    stock: 80
  },
  {
    name: 'UFC Octagon Shorts',
    description: 'Lightweight, flexible shorts for training and competition.',
    price: 39.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/mens-ufc-black-authentic-fight-night-shorts_ss5_p-200966597+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Shorts',
    stock: 120
  },
  {
    name: 'UFC Beanie',
    description: 'Keep warm with this official UFC beanie.',
    price: 19.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/ufc-black-cuffed-knit-hat_ss5_p-200966600+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Hats',
    stock: 60
  },
  {
    name: 'UFC Duffel Bag',
    description: 'Spacious and durable duffel bag for all your gym needs.',
    price: 59.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/ufc-black-duffel-bag_ss5_p-200966601+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Accessories',
    stock: 40
  },
  {
    name: 'UFC Water Bottle',
    description: 'Stay hydrated with this official UFC water bottle.',
    price: 14.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/ufc-black-water-bottle_ss5_p-200966602+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Accessories',
    stock: 150
  },
  {
    name: 'UFC Training Cap',
    description: 'Lightweight cap for training and everyday wear.',
    price: 22.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/ufc-black-training-cap_ss5_p-200966603+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Hats',
    stock: 90
  },
  {
    name: 'UFC Compression Shirt',
    description: 'Performance compression shirt for intense workouts.',
    price: 34.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/mens-black-ufc-compression-shirt_ss5_p-200966604+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'T-Shirts',
    stock: 70
  },
  {
    name: 'UFC Gym Towel',
    description: 'Absorbent and soft towel for gym and training.',
    price: 12.99,
    imageUrl: 'https://images.footballfanatics.com/ufc-merchandise/ufc-black-gym-towel_ss5_p-200966605+u-1w7w4w7w4w7w4w7w4w7w+v-4wspmw5mkeleozvp2b3v.jpg?_hv=2&w=400',
    category: 'Accessories',
    stock: 110
  }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Products seeded!');
  mongoose.disconnect();
}

seed();
