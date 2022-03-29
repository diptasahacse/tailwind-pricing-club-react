import React from 'react';
import { ArrowNarrowRightIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

const PricingOption = ({ option }) => {
    const { name, price, features, features_status,type } = option;
    let priceFeatures = [];

    for (let i = 0; i < features.length; i++) {
        let element = {};
        element.feature = features[i];
        element.status = features_status[i];
        priceFeatures.push(element);
    }

    return (
        <div className='text-center bg-white text-white py-3 px-12 rounded-2xl'>
            <h3 className='font-bold text-2xl text-black text-left'>{name}</h3>
            <p className='text-black text-left'>For {type}</p>
            <p className='text-black mt-4'>
                <span className='text-4xl font-bold'>${price}</span>
                <span>/month</span>
            </p>
            <div>
                {
                    priceFeatures.map((element, id) => <MakeList key={id} element={element}></MakeList>)
                }


            </div>
            <div className=''>
                <button className='bg-indigo-400 rounded-lg py-2 flex justify-center items-center px-3 mt-4 w-full'>
                    
                    <span>Subscribe</span>
                    <ArrowNarrowRightIcon className='w-5 h-5 ml-2'></ArrowNarrowRightIcon>
                </button>
            </div>

        </div>
    );
};
const MakeList = ({ element }) => {
    const { feature, status } = element;

    return (
        <div className='text-black flex items-center mt-3'>
            <span className='mr-2'>{status ? <CheckCircleIcon className='w-5 h-5 text-green-600'></CheckCircleIcon> : <XCircleIcon className='w-5 h-5 text-red-700'></XCircleIcon>}</span>
            <p>{feature}</p>
        </div>
    );

}

export default PricingOption;