export const deals = [
  { id: 1, name: "Smart watches", price: "$199", discount: "-25%", image: "/image/tech/8.svg" },
  { id: 2, name: "Laptops", price: "$899", discount: "-15%", image: "/image/tech/7.svg" },
  { id: 3, name: "GoPro cameras", price: "$350", discount: "-40%", image: "/image/tech/6.svg" },
  { id: 4, name: "Headphones", price: "$120", discount: "-25%", image: "/image/tech/5.svg" },
  { id: 5, name: "Canon cameras", price: "$450", discount: "-25%", image: "/image/tech/4.svg" },
];

export const categories = [
  {
    id: 1,
    title: "Home and outdoor",
    // image:"pic.svg",
    items: [

      { name: "Soft chairs", price: "From USD 19", image: "/image/interior/1.svg" },
      { name: "Sofa & chair", price: "From USD 19", image: "/image/interior/6.svg" },
      { name: "Kitchen dishes", price: "From USD 10", image: "/image/interior/5.svg" },
      { name: "Smart watches", price: "From USD 10", image: "/image/interior/3.svg" },
    ],
  },
  {
    id: 2,
    title: "Consumer electronics and gadgets",
    // image:"pic2.svg",
    items: [
      { name: "Smart watches", price: "From USD 19", image: "/image/8.svg" },
      { name: "Cameras", price: "From USD 19", image: "/image/6.svg" },
      { name: "Headphones", price: "From USD 10", image: "/image/9.svg" },
      { name: "Smart watches", price: "From USD 90", image: "/image/10.svg" },
    ],
  },
];
