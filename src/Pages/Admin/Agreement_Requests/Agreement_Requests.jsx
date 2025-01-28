

import Swal from "sweetalert2";
import SecureAxioc from "../../../Hook/SecureAxios";
import { useQuery } from "react-query";

const Agreement_Requests = () => {

  const axios = SecureAxioc();
  const { data: requestes=[],refetch } = useQuery({
      queryKey: ['requestes'],

      queryFn: async () => {     
          const res = await axios.get('/agrements');
         
          return res.data;
      }
  })


  const handleRemove =(id)=>{
          Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
          }).then((result) => {
              if (result.isConfirmed) {
                  axios.delete(`/agrements/${id}`).then((res) => {
                      if (res.data.deletedCount > 0) {
                          refetch();
                          Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success",
                          });
                      }
                  });
              }
          });
      }

  return (
    <div className="p-6">

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>NO</th>
        <th>Name</th>
        <th>Email</th>
        <th>floorNo</th>
        <th>blockName</th>
        <th>roomNo</th>
        <th>rent</th>
        <th>date</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
     
    {requestes.map((request,index) => (
              <tr key={request.id} className="text-center">
                <td className="border border-gray-300 p-2">{index+1}</td>
                <td className="border border-gray-300 p-2">{request.userName}</td>
                <td className="border border-gray-300 p-2">{request.userEmail}</td>
                <td className="border border-gray-300 p-2">{request.floorNo}</td>
                <td className="border border-gray-300 p-2">{request.blockName}</td>
                <td className="border border-gray-300 p-2">{request.roomNo}</td>
                <td className="border border-gray-300 p-2">${request.rent}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(request.requestDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                   
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleRemove(request._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
    </tbody>
  </table>
</div>


    
    </div>
  );
};

export default Agreement_Requests;
