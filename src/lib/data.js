import cover from '@/public/cover/cover.jpg';
import cover2 from '@/public/cover/cover-2.jpg';
import cover3 from '@/public/cover/cover-3.jpg';
const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],

  carousels: [
    {
      title: 'Fresh Flowers & Lush Green Trees',
      buttonCaption: 'Shop Now',
      image: cover,
      url: '/search?category=Shoes',
      isPublished: true,
    },
    {
      title: "Nature's Beauty: Trees & Floral Wonders",
      buttonCaption: 'Shop Now',
      image: cover2,
      url: '/search?category=T-Shirts',
      isPublished: true,
    },
    {
      title: 'Vibrant Blossoms & Evergreen Paradise',
      buttonCaption: 'See More',
      image: cover3,
      url: '/search?category=Wrist Watches',
      isPublished: true,
    },
  ],
};

export default data;
