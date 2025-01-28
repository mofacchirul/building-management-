import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { useQuery } from 'react-query';
import SecureAxioc from '../../Hook/SecureAxios';

const Paymenthistory = () => {
    const axiossecure = SecureAxioc()
    const {user}=useContext(AuthContext)
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user?.email],
        queryFn: async ()=>{
            const res= await axiossecure.get(`/payments/${user.email}`)
           return res?.data
        }
    })
    
    return (
        <div>
            <h2 className="text-3xl">{payments.length}</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Renst</th>
        <th>Transection Id</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((payment,index)=>
            <tr key={payment._id}>
        <th>{index+1}</th>
        <td>${payment.rent}</td>
        <td> {payment.transactionId} </td>
        <td>{payment.date}</td>
        <td>{payment.status}</td>
      </tr>
        )
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Paymenthistory;