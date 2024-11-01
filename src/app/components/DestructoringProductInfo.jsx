import React from 'react'

const DestructoringProductInfoListUsingMapFunction = () => {

    const ProductsInfo = [
        {
            name: 'Microwave',
            price: '100',
            description: 'A high-efficiency microwave oven that cooks food evenly and quickly, featuring multiple power settings and a sleek design.',
        },
        {
            name: 'Blender',
            price: '50',
            description: 'A powerful blender for smoothies and soups, equipped with a high-speed motor and stainless steel blades for perfect blending every time.',
        },
        {
            name: 'Toaster',
            price: '30',
            description: 'A compact toaster for perfect toast, featuring adjustable browning settings and a crumb tray for easy cleaning.',
        },
        {
            name: 'Coffee Maker',
            price: '80',
            description: 'A programmable coffee maker for fresh brews, allowing you to set a timer for your morning coffee and brew up to 12 cups at once.',
        },
    ]

    return (
        <div className='flex gap-2'>
            Products Information:
            <div className='flex flex-col gap-6'>
                {
                    ProductsInfo.map(({ name, price, description }, index) => (
                        <ul key={index} className='w-[50%]'>
                            <div className='flex justify-between mb-2'>
                                <div className='underline text-red-500 font-extrabold'>{name}</div>
                                <div className='text-green-600 font-extrabold'>${price}</div>
                            </div>
                            <div className='text-[90%]'> --- {description}</div>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default DestructoringProductInfoListUsingMapFunction