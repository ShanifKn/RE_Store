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
            ],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
          },
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
          },
        ],
      },
      {
        name: 'Fresh Food',
        submenus: [
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Vegetables', 'Fruits', 'Dairy'],
          },
        ],
      },
      {
        name: 'Grocery',
        submenus: [
          {
            heading: 'CRAS JUSTO ODIO',
            items: ['Snacks', 'Beverages', 'Spices'],
          },
        ],
      },
      {
        name: 'Grocery Non Food',
        submenus: [
          {
            heading: 'CRAS JUSTO ODIO3',
            items: ['Paper Goods', 'Cleaning Supplies', 'Personal Care'],
          },
        ],
      },
    ],
  },
  {
    title: 'Fresh Food',
    subcategories: [
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
    ],
  },
  {
    title: 'Grocery',
    subcategories: [
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
      {
        heading: 'CRAS JUSTO ODIO',
        items: ['Sunt dolorius', 'Cum dolores', 'Lorem Ipsum'],
      },
    ],
  },
  { title: 'Electronics', subcategories: [] },
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
