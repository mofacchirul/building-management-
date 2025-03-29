import React from 'react';
import img1 from '../../../assets/banner/bb45389e-2c5a-4f45-a668-b684016e1e94.jpg';
import img2 from '../../../assets/banner/Construction management software.jpg';
import img3 from '../../../assets/banner/Construction Software _ CoConstruct.jpg';

const Coupons = () => {
    const coupons = [
        {
            id: 1,
            title: "10% Off on Your First Subscription",
            code: "WELCOME10",
            description: "Use this code to get 10% off on your first subscription.",
           
        },
        {
            id: 2,
            title: "Free Trial for 7 Days",
            code: "FREETRIAL",
            description: "Enjoy a free trial for 7 days. No card required.",
           
        },
        {
            id: 3,
            title: "25% Off for Students",
            code: "STUDENT25",
            description: "Students get 25% off on all annual plans.",
           
        },
    ];

    const images = [img1, img2, img3]

    return (
        <div className="py-16 max-w-screen-xl mx-auto ">
            <h2 className="text-center lg:text-3xl text-xl text-sky-500 font-bold mb-6 ">
                Exclusive Coupons for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
                {coupons.map((coupon, index) => (
                    <div
                        key={coupon.id}
                        className="p-6 border rounded-xl shadow-lg text-center"
                   
                    >
                        <img
                            src={images[index % images.length]} // Cycle through images
                            alt={`Coupon ${coupon.id}`}
                            className="w-full h-72 object-cover rounded-md mb-4"
                        />
                        <h3 className="lg:text-3xl text-xl text-sky-500  font-bold mb-2 ">{coupon.title}</h3>
                        <p className="text-white mb-4">{coupon.description}</p>
                       <button className='btn btn-info text-white btn-block'>
                       {coupon.code}
                       </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coupons;
