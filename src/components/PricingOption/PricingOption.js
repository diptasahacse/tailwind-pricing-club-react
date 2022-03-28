import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid'

const PricingOption = ({ option }) => {
    const { name, price, features, features_status } = option;
    let priceFeatures = [];

    for (let i = 0; i < features.length; i++) {
        let element = {};
        element.feature = features[i];
        element.status = features_status[i];
        priceFeatures.push(element);
    }

    return (
        <div className='text-center bg-white text-white p-3 rounded-2xl'>
            <h3 className='bg-indigo-400 rounded font-bold text-xl py-2'>{name}</h3>
            <p className='text-black mt-4'>
                <span className='text-4xl font-bold'>${price}</span>
                <span>/month</span>
            </p>
            <div>
                {
                    priceFeatures.map((element, id) => <MakeList key={id} element={element}></MakeList>)
                }


            </div>

        </div>
    );
};
const MakeList = ({ element }) => {
    const { feature, status } = element;

    return (
        <div className='text-black flex items-center mt-3'>
            <span className='mr-2'>{status ? <CheckIcon className='w-5 h-5 text-green-600'></CheckIcon> : <XIcon className='w-5 h-5 text-red-700'></XIcon>}</span>
            <p>{feature}</p>
        </div>
    );

}

export default PricingOption;