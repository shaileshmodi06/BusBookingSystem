import React, { useState } from "react";

const BusSearchForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching buses from ${formData.from} to ${formData.to} on ${formData.date}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Bus Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* From */}
          <div>
            <label className="block text-gray-700 mb-1">From</label>
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            >
              <option value="">Select Departure</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          {/* To */}
          <div>
            <label className="block text-gray-700 mb-1">To</label>
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            >
              <option value="">Select Destination</option>
              <option value="Delhi">Delhi</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Pune">Pune</option>
              <option value="Goa">Goa</option>
            </select>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-gray-700 mb-1">Travel Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Search Buses
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusSearchForm;
