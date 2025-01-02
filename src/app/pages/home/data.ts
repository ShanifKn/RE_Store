import { sliderOpt } from 'src/app/shared/data';

export const introSlider = {
  ...sliderOpt,
  loop: true, // Ensures the carousel loops infinitely
  margin: 10,
  nav: true, // Navigation arrows
  dots: true, // Dots for pagination
  autoplay: true, // Enables autoplay
  autoplayTimeout: 3000, // Time in milliseconds (3 seconds between slides)
  autoplayHoverPause: true, // Pauses autoplay when you hover over the carousel
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
  },
};

export const brandSlider = {
  nav: false,
  dots: false,
  margin: 0,
  loop: false,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
  },
};

export const menuData = [
  {
    title: 'All Categories',
    subcategories: [
      {
        name: 'Offers',
        submenus: [
          {
            heading: 'CRAS JUSTO ODIO',
            items: [
              'Sunt dolorius',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
            ],
          },
          {
            heading: 'Exclusive Deals',
            items: [
              'Discount on Laptops',
              'Buy One Get One Free',
              'Up to 50% Off',
              'Flash Sale',
            ],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: [
              'Sunt dolorius',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
            ],
          },
          {
            heading: 'Exclusive Deals',
            items: [
              'Discount on Laptops',
              'Buy One Get One Free',
              'Up to 50% Off',
              'Flash Sale',
            ],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: [
              'Sunt dolorius',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
            ],
          },
          {
            heading: 'Exclusive Deals',
            items: [
              'Discount on Laptops',
              'Buy One Get One Free',
              'Up to 50% Off',
              'Flash Sale',
            ],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: [
              'Sunt dolorius',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
            ],
          },
          {
            heading: 'Exclusive Deals',
            items: [
              'Discount on Laptops',
              'Buy One Get One Free',
              'Up to 50% Off',
              'Flash Sale',
            ],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: [
              'Sunt dolorius',
              'Cum dolores',
              'Lorem Ipsum',
              'Cum dolores',
              'Lorem Ipsum',
            ],
          },
          {
            heading: 'Exclusive Deals',
            items: [
              'Discount on Laptops',
              'Buy One Get One Free',
              'Up to 50% Off',
              'Flash Sale',
            ],
          },
        ],
      },
      {
        name: 'Fresh Food',
        submenus: [
          {
            heading: 'Vegetables & Fruits',
            items: ['Carrots', 'Tomatoes', 'Bananas', 'Apples', 'Lettuce'],
          },
          {
            heading: 'Dairy Products',
            items: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream'],
          },
          {
            heading: 'Meats & Poultry',
            items: ['Chicken', 'Beef', 'Pork', 'Lamb', 'Turkey'],
          },
          {
            heading: 'Frozen Foods',
            items: [
              'Ice Cream',
              'Frozen Vegetables',
              'Frozen Fruits',
              'Frozen Meals',
            ],
          },
        ],
      },
      {
        name: 'Grocery',
        submenus: [
          {
            heading: 'Snacks',
            items: ['Chips', 'Cookies', 'Candies', 'Nuts', 'Granola Bars'],
          },
          {
            heading: 'Beverages',
            items: ['Juices', 'Sodas', 'Coffee', 'Tea', 'Water'],
          },
          {
            heading: 'Spices',
            items: ['Salt', 'Pepper', 'Cumin', 'Coriander', 'Chili Powder'],
          },
        ],
      },
      {
        name: 'Grocery Non Food',
        submenus: [
          {
            heading: 'Cleaning Supplies',
            items: [
              'Dish Soap',
              'Laundry Detergent',
              'Wipes',
              'Bleach',
              'Sponges',
            ],
          },
          {
            heading: 'Personal Care',
            items: ['Shampoo', 'Toothpaste', 'Toothbrush', 'Soap', 'Deodorant'],
          },
        ],
      },
    ],
  },
  {
    title: 'Fresh Food',
    subcategories: [
      {
        name: 'Fresh Produce',
        submenus: [
          {
            heading: 'Vegetables',
            items: ['Spinach', 'Kale', 'Potatoes', 'Onions', 'Cucumbers'],
          },
          {
            heading: 'Fruits',
            items: [
              'Pineapple',
              'Mangoes',
              'Grapes',
              'Peaches',
              'Strawberries',
            ],
          },
          {
            heading: 'Dairy',
            items: ['Milk', 'Butter', 'Yogurt', 'Cheese', 'Cream'],
          },
        ],
      },
    ],
  },
  {
    title: 'Grocery',
    subcategories: [
      {
        name: 'Food Items',
        submenus: [
          {
            heading: 'Canned Goods',
            items: ['Tomatoes', 'Beans', 'Soup', 'Tuna', 'Corn'],
          },
          {
            heading: 'Packaged Foods',
            items: ['Instant Noodles', 'Pasta', 'Rice', 'Oats', 'Cereal'],
          },
          {
            heading: 'Beverages',
            items: ['Soda', 'Juice', 'Coffee', 'Tea', 'Energy Drinks'],
          },
        ],
      },
    ],
  },
  {
    title: 'Electronics',
    subcategories: [
      {
        name: 'Mobile Devices',
        submenus: [
          {
            heading: 'Smartphones',
            items: ['iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus'],
          },
          {
            heading: 'Accessories',
            items: ['Chargers', 'Cases', 'Earphones', 'Screen Protectors'],
          },
        ],
      },
      {
        name: 'Computers',
        submenus: [
          {
            heading: 'Laptops',
            items: ['MacBook Pro', 'Dell XPS', 'HP Spectre', 'Lenovo ThinkPad'],
          },
          {
            heading: 'Desktops',
            items: ['iMac', 'HP Omen', 'Custom Built PCs'],
          },
          {
            heading: 'Monitors',
            items: ['Samsung Curved', 'LG Ultrawide', 'Dell 4K'],
          },
        ],
      },
      {
        name: 'Home Appliances',
        submenus: [
          {
            heading: 'Kitchen Appliances',
            items: ['Blender', 'Microwave', 'Coffee Maker', 'Toaster'],
          },
          {
            heading: 'Vacuum Cleaners',
            items: ['Dyson', 'Shark', 'Bissell'],
          },
        ],
      },
      {
        name: 'Wearables',
        submenus: [
          {
            heading: 'Smartwatches',
            items: ['Apple Watch', 'Fitbit', 'Garmin', 'Samsung Galaxy Watch'],
          },
          {
            heading: 'Fitness Trackers',
            items: ['Fitbit Charge', 'Garmin Vivosmart', 'Xiaomi Mi Band'],
          },
        ],
      },
    ],
  },
  {
    title: 'Books',
    subcategories: [
      {
        name: 'Fiction',
        submenus: [
          {
            heading: 'Thrillers',
            items: [
              'Gone Girl',
              'The Girl with the Dragon Tattoo',
              'The Silent Patient',
            ],
          },
          {
            heading: 'Science Fiction',
            items: [
              'Dune',
              "Ender's Game",
              "The Hitchhiker's Guide to the Galaxy",
            ],
          },
        ],
      },
      {
        name: 'Non-Fiction',
        submenus: [
          {
            heading: 'Biographies',
            items: ['Steve Jobs', 'Becoming', 'The Diary of a Young Girl'],
          },
          {
            heading: 'Self-Help',
            items: [
              'The Power of Habit',
              'Atomic Habits',
              'The Subtle Art of Not Giving a F*ck',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Furniture',
    subcategories: [
      {
        name: 'Living Room',
        submenus: [
          {
            heading: 'Sofas & Couches',
            items: ['Leather Sofa', 'Fabric Sofa', 'Sectional Sofa'],
          },
          {
            heading: 'Coffee Tables',
            items: ['Wooden Tables', 'Glass Tables', 'Marble Tables'],
          },
        ],
      },
      {
        name: 'Bedroom',
        submenus: [
          {
            heading: 'Beds',
            items: ['King Bed', 'Queen Bed', 'Bunk Bed', 'Day Bed'],
          },
          {
            heading: 'Wardrobes',
            items: [
              'Wooden Wardrobe',
              'Metal Wardrobe',
              'Sliding Door Wardrobe',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Toys & Games',
    subcategories: [
      {
        name: 'Outdoor Toys',
        submenus: [
          {
            heading: 'Bikes & Scooters',
            items: ['Mountain Bike', 'BMX', 'Electric Scooters'],
          },
          {
            heading: 'Playhouses',
            items: ['Wooden Playhouse', 'Plastic Playhouse', 'Tent Playhouse'],
          },
        ],
      },
      {
        name: 'Board Games',
        submenus: [
          {
            heading: 'Classic Games',
            items: ['Monopoly', 'Scrabble', 'Chess', 'Risk'],
          },
          {
            heading: 'Strategy Games',
            items: ['Catan', 'Ticket to Ride', 'Carcassonne'],
          },
        ],
      },
    ],
  },
];

export const serviceSlider = {
  ...sliderOpt,
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

export const productSlider = {
  ...sliderOpt,
  nav: false,
  dots: true,
  margin: 0,
  loop: false,
  autoHeight: false,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    992: {
      items: 4,
      nav: true,
    },
    1200: {
      items: 6,
      nav: true,
    },
  },
};

export const bannerSlider = {
  ...sliderOpt,
  nav: false,
  dots: false,
  items: 1,
  margin: 10,
  loop: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

export const instagramSlider = {
  ...sliderOpt,
  nav: false,
  dots: false,
  items: 2,
  margin: 20,
  loop: false,
  responsive: {
    576: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

export const blogSlider = {
  ...sliderOpt,
  nav: false,
  dots: true,
  items: 3,
  margin: 20,
  loop: false,
  autoHeight: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

export const TopCategory = [
  {
    id: 1,
    title: 'Noodles',
    imageUrl: 'assets/images/home/categories/noodles.jpg',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'Tea',
    imageUrl: 'assets/images/home/categories/tea.jpg',
    description: 'Fresh and Organic Tea Collection',
    cta: 'Shop Now',
  },
  {
    id: 3,
    title: 'Soft Drinks',
    imageUrl: 'assets/images/home/categories/softdrinks.jpg',
    description: 'Fresh Up! You Need To Chill Out',
    cta: 'Shop Now',
  },
  {
    id: 4,
    title: 'Water',
    imageUrl: 'assets/images/home/categories/water.jpg',
    description: 'Mineral Water - Up to 50% Off',
    cta: 'Shop Now',
  },
  {
    id: 5,
    title: 'Cheese',
    imageUrl: 'assets/images/home/categories/cheese.jpg',
    description: 'A Variety of Gourmet Cheeses',
    cta: 'Shop Now',
  },
  {
    id: 6,
    title: 'Dairy Products',
    imageUrl: 'assets/images/home/categories/dairy.jpg',
    description: '100% Tasty Dairy Products',
    cta: 'Shop Now',
  },
  {
    id: 7,
    title: 'Laundry',
    imageUrl: 'assets/images/home/categories/laundry.jpg',
    description: 'Ultra Clean Laundry Solutions',
    cta: 'Shop Now',
  },
  {
    id: 8,
    title: 'Oil',
    imageUrl: 'assets/images/home/categories/oil.jpg',
    description: 'Top Quality Cooking Oil',
    cta: 'Shop Now',
  },
];
