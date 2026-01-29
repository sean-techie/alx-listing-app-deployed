// constants/index.ts

export type PropertyProps = {
  name: string;
  price: number;
  rating: number;
  image: string;
  address: {
    city: string;
    country: string;
  };
};

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    price: 120,
    rating: 4.8,
    image: "/images/villa.jpg",
    address: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    name: "Mountain View Lodge",
    price: 90,
    rating: 4.5,
    image: "/images/lodge.jpg",
    address: {
      city: "Drakensberg",
      country: "South Africa",
    },
  },
];
