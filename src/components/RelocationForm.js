import { useState } from 'react';

const RelocationForm = () => {
  const [city, setCity] = useState('Mumbai');
  const [fromLocality, setFromLocality] = useState('');
  const [toLocality, setToLocality] = useState('');
  const [shiftingDate, setShiftingDate] = useState('');
  const [isFlexible, setIsFlexible] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [moveType, setMoveType] = useState('');
  const [price, setPrice] = useState(500);  // Example price
  const [showPopup, setShowPopup] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];

  const handleMoveTypeClick = (type) => {
    setMoveType(type);
    alert(`${type} Selected`);
  };

  const handleFormSubmit = () => {
    if (!whatsappNumber || whatsappNumber.length < 10) {
      alert("Please enter a valid WhatsApp number.");
      return;
    }
    
    setShowPopup(true); // Show the popup confirmation
  };

  const handlePopupConfirm = () => {
    const message = `Hello! I'm interested in relocating.\n\nDetails:\nCity: ${city}\nFrom Locality: ${fromLocality}\nTo Locality: ${toLocality}\nShifting Date: ${shiftingDate}\nFlexible Date: ${isFlexible ? 'Yes' : 'No'}\nPrice: ₹${price}\n\nPlease provide further details.`;
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setShowPopup(false); // Close the popup after confirming
  };

  const handlePopupCancel = () => {
    setShowPopup(false); // Close the popup if the user cancels
  };

  return (
    <div className="bg-white py-8 px-6 md:px-10 rounded-t-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-lg">
      <div className="sticky top-2 bg-white rounded-md">
        <div className="md:px-6 md:py-4 md:pb-0">
          <div className="font-extrabold text-gray-600 text-2xl mb-4">
            Where are you going to relocate?
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md shadow-md">
            <button
              className={`text-sm font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out ${moveType === 'Within City' ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
              onClick={() => handleMoveTypeClick('Within City')}
            >
              Within City
            </button>
            <button
              className={`text-sm font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out ${moveType === 'Between Cities' ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
              onClick={() => handleMoveTypeClick('Between Cities')}
            >
              Between Cities
            </button>
            <button
              className={`text-sm font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out ${moveType === 'Rent Truck' ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
              onClick={() => handleMoveTypeClick('Rent Truck')}
            >
              Rent Truck
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-sm text-gray-700">Select City</p>
              <div className="relative text-base">
                <button
                  type="button"
                  className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                >
                  {city}
                  <svg className="w-5 h-5 ml-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {cityDropdownOpen && (
                  <div className="absolute bg-white border border-gray-300 shadow-md rounded-lg w-full mt-1 z-10">
                    {cities.map((cityName) => (
                      <button
                        key={cityName}
                        onClick={() => {
                          setCity(cityName);
                          setCityDropdownOpen(false); // Close the dropdown after selection
                        }}
                        className="w-full py-2 px-4 text-left hover:bg-blue-100"
                      >
                        {cityName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="font-bold text-sm text-gray-700">Search your Locality</p>
              <div className="relative mt-2">
                <input
                  type="text"
                  className="form-control w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Shifting From"
                  value={fromLocality}
                  onChange={(e) => setFromLocality(e.target.value)}
                />
              </div>
              <div className="relative mt-2">
                <input
                  type="text"
                  className="form-control w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Shifting To"
                  value={toLocality}
                  onChange={(e) => setToLocality(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-sm text-gray-700">Select Shifting Date</p>
              <div className="relative mt-2">
                <input
                  type="date"
                  className="form-control w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                  value={shiftingDate}
                  onChange={(e) => setShiftingDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isFlexible}
                  onChange={() => setIsFlexible(!isFlexible)}
                />
                I’m flexible on my shifting date
              </label>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-bold text-sm text-gray-700">WhatsApp Number</p>
            <input
              type="text"
              className="form-control w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter WhatsApp Number"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
          </div>

          <div className="mt-8 text-right">
            <button
              style={{ width: '100%' }}
              className="btn btn-primary px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
              onClick={handleFormSubmit}
            >
              Check Prices
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-1/2 text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Submission</h2>
            <p className="text-sm mb-4">Are you sure you want to submit the details? The price will be sent to your WhatsApp.</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                onClick={handlePopupConfirm}
              >
                Confirm
              </button>
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                onClick={handlePopupCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelocationForm;
