import image1 from "../images/temp/image1@2x.jpg";
import image2 from "../images/temp/image2@2x.jpg";
import image3 from "../images/temp/image3@2x.jpg";
import image4 from "../images/temp/image4@2x.jpg";
import image5 from "../images/temp/image5@2x.jpg";

// category: 1 -> category 1, 2 -> category 2
const FavouriteData = [
  {
    id: 1,
    image: image1,
    name: 'Portable Floor Fan - 12"',
    sku: "H-4791",
    price: 88.0,
    unit: "Each",
    children: 6,
    category: 1
  },
  {
    id: 2,
    image: image2,
    name: 'Kraft Mailing Tubes with End Caps - 2 1⁄2 x 18", .060" thick',
    sku: "S-3940",
    price: 0.84,
    unit: "Each (Sold in carton quantities)",
    children: 0,
    category: 2
  },
  {
    id: 3,
    image: image3,
    name: '3M H183 Pistol Grip Dispenser - 3"',
    sku: "H-730",
    price: 55.0,
    unit: "Each",
    children: 6,
    category: 1
  },
  {
    id: 4,
    image: image4,
    name: "Velcro® Brand Combo Industrial Strips Pack - 2\" x 15', White",
    sku: "S-6097",
    price: 33.0,
    unit: "Each",
    children: 6,
    category: 2
  },
  {
    id: 5,
    image: image5,
    name: "Folding Security Gate - 8-10' x 6'",
    sku: "H-2828",
    price: 265.0,
    unit: "Each",
    children: 0,
    category: 1
  }
];

export default FavouriteData;
