// import React, { useState, useEffect } from 'react';
// import { Button, Modal, Input, Table } from "@/components/ui";
// import axios from 'axios';

// const Manage_Coupons = () => {
//     const [coupons, setCoupons] = useState([]);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [newCoupon, setNewCoupon] = useState({
//         code: "",
//         discount: "",
//         description: ""
//     });

//     // Fetch coupons from the database
//     useEffect(() => {
//         const fetchCoupons = async () => {
//             try {
//                 const response = await axios.get('/api/coupons'); // Replace with your API endpoint
//                 setCoupons(response.data);
//             } catch (error) {
//                 console.error("Error fetching coupons:", error);
//             }
//         };

//         fetchCoupons();
//     }, []);

//     // Handle input changes for the modal form
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewCoupon({ ...newCoupon, [name]: value });
//     };

//     // Submit new coupon to the database
//     const handleSubmit = async () => {
//         try {
//             const response = await axios.post('/api/coupons', newCoupon); // Replace with your API endpoint
//             setCoupons([...coupons, response.data]);
//             setNewCoupon({ code: "", discount: "", description: "" });
//             setModalOpen(false);
//         } catch (error) {
//             console.error("Error adding coupon:", error);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h3 className="text-3xl mb-4">Manage Coupons</h3>

//             <div className="flex justify-end mb-4">
//                 <Button onClick={() => setModalOpen(true)}>Add Coupon</Button>
//             </div>

//             <Table>
//                 <thead>
//                     <tr>
//                         <th>Coupon Code</th>
//                         <th>Discount (%)</th>
//                         <th>Description</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {coupons.map((coupon, index) => (
//                         <tr key={index}>
//                             <td>{coupon.code}</td>
//                             <td>{coupon.discount}</td>
//                             <td>{coupon.description}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {modalOpen && (
//                 <Modal onClose={() => setModalOpen(false)}>
//                     <h4 className="text-xl mb-4">Add New Coupon</h4>
//                     <div className="space-y-4">
//                         <Input
//                             label="Coupon Code"
//                             name="code"
//                             value={newCoupon.code}
//                             onChange={handleInputChange}
//                         />
//                         <Input
//                             label="Discount Percentage"
//                             name="discount"
//                             type="number"
//                             value={newCoupon.discount}
//                             onChange={handleInputChange}
//                         />
//                         <Input
//                             label="Description"
//                             name="description"
//                             value={newCoupon.description}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="flex justify-end mt-4">
//                         <Button onClick={handleSubmit}>Submit</Button>
//                     </div>
//                 </Modal>
//             )}
//         </div>
//     );
// };

// export default Manage_Coupons;
