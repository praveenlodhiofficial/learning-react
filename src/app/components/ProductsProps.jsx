import Image from 'next/image'
import React from 'react'
import codestring from '../data/codestring.json'; // Ensure correct path
import CodePreview from '../components/CodePreview';

const ProductsProps = () => {
    const productsProps = codestring.productsProps.productsPropsString; // This must be defined before use

    return (
        <div className='flex justify-between w-[100%]'>
            <div>
                <Product
                    name='Washing Machine'
                    img='https://imgs.search.brave.com/bnb5p0WGCL9fPYTHRuMEBxmyFRNDzgailLNEwtEDVoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzY3Lzg5LzQ2/LzM2MF9GXzk2Nzg5/NDYwN19EeHYxaENT/bHhScnNrMzhqUm9a/ZjRiRWFZMXo4MTVz/US5qcGc'
                    description='A front-loading washing machine with energy-saving features.'
                    price={299.99}
                    isAvailable={true}
                />
                <Product
                    name='Refrigerator'
                    img='https://imgs.search.brave.com/mCDroW_TaEzmQmytTfXcEJJdKFXocGwdV0yzVxkf7v0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzk5LzIyLzkw/LzM2MF9GXzc5OTIy/OTA1MV8xWVBTd3c0/TXBscXZYd3liMUIx/ZkwxZWFudUtnZVAx/aC5qcGc'
                    description='A high-efficiency refrigerator with ample storage space.'
                    price={499.99}
                    isAvailable={false}
                />
                <Product
                    name='Microwave Oven'
                    img='https://imgs.search.brave.com/m_QbLCM_Af7-9csXLfklbWSWID9oQG8NdaPlSohSJ9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzQ4LzQz/LzM2MF9GXzYyNDg0/MzY1X2tkRlJWT0hn/TXBZQndCWW1mMk1U/VVhnTEJCMVoyMkdk/LmpwZw'
                    description='A compact microwave oven with multiple cooking settings.'
                    price={89.99}
                    isAvailable={true}
                />
            </div>

            {/* CODE PREVIEW */}
            <div>
                <CodePreview codeString={productsProps} />
            </div>
        </div>
    )
}

const Product = ({ img, name, price, description, isAvailable }) => {
    return (
        <div className='duration-200 flex p-4 mb-3 border border-dotted border-gray-700 rounded-md shadow-md justify-center cursor-pointer hover:border-transparent transition-all hover:shadow-[1px_1px_5px_0.2px_rgba(255,255,255,0.5)]'>
            <Image
                src={img}
                alt={name}
                width={150} // Set a specific width
                height={150} // Set a specific height
                className='object-cover rounded'
            />
            <div className='ml-4 flex flex-col justify-center max-w-60'>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <p className='text-gray-500 text-xs'>Price: ${price.toFixed(2)}</p>
                <p className='text-gray-500 py-5 w-[70%] text-xs'>{description}</p>
                <p className={`sticky text-xs items-center max-w-fit px-2 py-1 rounded-xl font-bold ${isAvailable ? 'text-green-600 border border-green-600' : 'text-red-600 border border-red-600'}`}>
                    {isAvailable ? 'In Stock' : 'Out of Stock'}
                </p>
            </div>
        </div>
    )
}

export default ProductsProps
