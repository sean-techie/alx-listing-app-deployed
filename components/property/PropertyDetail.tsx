interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    price: number;
    location: string;
    description: string;
    image: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-green-600 font-semibold mb-4">${property.price}</p>
      <p>{property.description}</p>
    </div>
  );
}
