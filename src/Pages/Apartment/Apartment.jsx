
import { useEffect, useState } from 'react';
import useApartment from './useApartment';
import { Link } from 'react-router-dom';

const Apartment = () => {
  const [ search,setsearch]= useState("")
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [apartments, loading] = useApartment(debouncedSearch);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // Adjust debounce time as needed (500ms in this case)
    return () => clearTimeout(handler); // Cleanup the timeout
  }, [search]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Loading apartments...</p>
      </div>
    );
  }



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Apartments</h1>
      <label className="input input-bordered flex items-center gap-2">
      <input
          type="text"
          onChange={(e) => setsearch(e.target.value)}
          value={search}
          className="grow"
          placeholder="Search by rent"
        />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-9">
        {apartments?.map((apartment) => (
          <div
            key={apartment._id}
            className="border rounded-lg shadow p-4 flex flex-col "
          >
            <img
              src={apartment.apartment_image}
              alt={`Apartment ${apartment.apartment_no}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-start">
              <p className="font-semibold">Floor No: {apartment.floor_no}</p>
              <p className="font-semibold">Block: {apartment.block_name}</p>
              <p className="font-semibold">Apartment No: {apartment.apartment_no}</p>
              <p className="font-semibold">Rent: ${apartment.rent}</p>
            </div>
           <Link to={`/agreement/${apartment._id}`}>
           <button
              
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Agreement
            </button>
           </Link>
          
          </div>
            
        ))}
     
      </div>
    </div>
  );
};

export default Apartment;       
