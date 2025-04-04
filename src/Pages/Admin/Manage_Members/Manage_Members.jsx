import React from 'react';
import { useQuery } from 'react-query';
import SecureAxioc from '../../../Hook/SecureAxios';
import { FaUser } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Manage_Members = () => {
    const axios= SecureAxioc()
      const {data: users=[],isLoading,refetch}=useQuery({
        queryKey:['user'],
        queryFn: async()=>{
const res= await axios.get('/users')
return res.data;
        }
      })


      if (isLoading) {
        return <div>Loading...</div>;
    }

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
                axios.delete(`/users/${id}`)
                .then((res) => {
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


    const handleAdmin= (id)=>{
        axios.patch(`/users/${id}`)
        .then(res => {
             
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User is now an Admin",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch(); // Refresh user data after update
            }
        })
        .catch(error => {
            console.error("Error updating user:", error);
            Swal.fire("Error", "Failed to make user admin", "error");
        });
            
    
    }
      
      return (
        <div className="p-5">
            <h3 className="lg:text-4xl text-2xl font-bold mb-5">All Users ({users.length})</h3>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-sky-800 text-white">
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Role</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="">
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">
                               {
                                user.role === 'admin' ? 'admin'   : 
                                 <button
                                onClick={() => handleAdmin(user._id)}
                                className="bg-sky-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                <FaUsers></FaUsers>
                            </button>
                               }
                                </td>
                                
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleRemove(user._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Remove
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

export default Manage_Members;