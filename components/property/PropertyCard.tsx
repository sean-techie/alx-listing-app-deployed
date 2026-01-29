interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: number;
    location: string;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover mb-3 rounded"
      />
      <h3 className="text-lg font-bold mb-1">{property.title}</h3>
      <p className="text-gray-600 mb-1">{property.location}</p>
      <p className="text-green-600 font-semibold">${property.price}</p>
    </div>
  );
}
