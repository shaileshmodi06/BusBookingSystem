import React, { useState } from "react";

const BusListingsPage = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const buses = [
    {
      id: 1,
      name: "VRL Travels",
      departure: "7:20 AM",
      pickup: "Vadodara Central",
      price: 1200,
    },
    {
      id: 2,
      name: "VRL Travels",
      departure: "7:30 AM",
      pickup: "Ahmedabad Express",
      price: 1150,
    },
    {
      id: 3,
      name: "VRL Travels",
      departure: "7:20 AM",
      pickup: "Surat Main",
      price: 1100,
    },
  ];

  const handleViewSeats = (bus) => {
    setSelectedBus(bus);
    alert(`Viewing seats for ${bus.name} (${bus.departure})`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[500px]">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Bus Book
        </h2>

        {buses.map((bus) => (
          <div
            key={bus.id}
            className="flex items-center justify-between border rounded-md p-4 mb-4 hover:bg-gray-50 transition"
          >
            {/* Bus Icon */}
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 text-white rounded-full p-3">
                🚌
              </div>
              <div>
                <p className="font-semibold text-gray-800">{bus.name}</p>
                <p className="text-sm text-gray-600">
                  Departure: {bus.departure}
                </p>
                <p className="text-sm text-gray-600">
                  Pickup: {bus.pickup}
                </p>
                <p className="text-sm text-gray-800 font-medium">
                  ₹{bus.price}
                </p>
              </div>
            </div>

            {/* View Seats Button */}
            <button
              onClick={() => handleViewSeats(bus)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              View Seats
            </button>
          </div>
        ))}

        {selectedBus && (
          <div className="mt-6 p-4 border-t">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Selected Bus
            </h3>
            <p className="text-gray-600">
              {selectedBus.name} — {selectedBus.departure}
            </p>
            <p className="text-gray-600">Pickup: {selectedBus.pickup}</p>
            <p className="text-gray-800 font-medium">
              Price: ₹{selectedBus.price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusListingsPage;
