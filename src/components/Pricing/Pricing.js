import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: "Free", price: "0", features: ["Simple Text Here", "Others Text Title", "Text Space Goes Here", "Description Space"], features_status: [true, false, false, false] },
        { id: 2, name: "Regular", price: "9.99", features: ["Simple Text Here", "Others Text Title", "Text Space Goes Here", "Description Space"], features_status: [true, true, true, false] },
        { id: 3, name: "Premium", price: "19.99", features: ["Simple Text Here", "Others Text Title", "Text Space Goes Here", "Description Space"], features_status: [true, true, true, true] },
    ];

    
    return (
        <div className='bg-indigo-50 p-5 mt-5'>
            <h1 className="text-6xl text-center">Best Deal of this Summer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis deleniti repudiandae tempore quidem obcaecati libero assumenda debitis adipisci quis?</p>
            <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    pricingOption.map(option => <PricingOption key={option.id} option={option}></PricingOption>)

                }

            </div>

        </div>
    );
};

export default Pricing;