import { useQuery } from "react-query";
import SecureAxioc from "../../Hook/SecureAxios";

const Service = () => {
  const axios = SecureAxioc();
  const { data: services, isLoading, isError } = useQuery({
    queryKey: ['service'],
    queryFn: async () => {
      const res = await axios.get('/service');
      return res.data;
    }
  });

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading services. Please try again later.</div>;
  }

  return (
   <div className="max-w-7xl mx-auto lg:py-16 py-8">
     <div>
    <h2 className="text-center uppercase lg:text-3xl text-xl font-bold mb-6 text-sky-500">
    Service the building
        </h2>
    </div>
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {services && services.length > 0 ? (
        services.map(service => (
          <div key={service._id} className=" border w-[330px] mx-auto lg:w-full    rounded-lg shadow-md overflow-hidden">
            <figure>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover p-2"
              />
            </figure>
            <div className="space-y-2 p-3">
              <h2 className="lg:text-3xl text-xl font-bold text-sky-500">{service.title}</h2>
              <p className="text-white">
                {service.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>No services available.</div>
      )}
    </div>
   </div>
  );
};

export default Service;
