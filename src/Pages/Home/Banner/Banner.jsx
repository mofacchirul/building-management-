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
            background: "#FFEECC",
        },
        {
            id: 2,
            title: "Free Trial for 7 Days",
            code: "FREETRIAL",
            description: "Enjoy a free trial for 7 days. No card required.",
            background: "#CCE7FF",
        },
        {
            id: 3,
            title: "25% Off for Students",
            code: "STUDENT25",
            description: "Students get 25% off on all annual plans.",
            background: "#FFCCCC",
        },
    ];

    const images = [img1, img2, img3]

    return (
        <div className="py-8 max-w-screen-xl mx-auto bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
                Exclusive Coupons for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
                {coupons.map((coupon, index) => (
                    <div
                        key={coupon.id}
                        className="p-6 rounded-lg shadow-lg text-center"
                        style={{ backgroundColor: coupon.background }}
                    >
                        <img
                            src={images[index % images.length]} // Cycle through images
                            alt={`Coupon ${coupon.id}`}
                            className="w-full h-72 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{coupon.title}</h3>
                        <p className="text-gray-700 mb-4">{coupon.description}</p>
                        <div className="bg-white rounded-lg px-4 py-2 inline-block shadow">
                            <span className="text-gray-800 font-mono text-lg">{coupon.code}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coupons;
