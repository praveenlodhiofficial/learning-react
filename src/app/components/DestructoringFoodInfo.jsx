import React from 'react'
import codestring from '../data/codestring.json'
import CodePreview from '../components/CodePreview'

const DestructoringFoodInfoListUsingMapFunction = () => {

    const foodsInfoString = codestring.foodsInfo.foodsInfoString;

    const foodsInfo = [
        {
            dishName: 'Pasta',
            price: '$12',
            availability: 'Available',
            location: 'Italian Restaurant',
        },
        {
            dishName: 'Sushi',
            price: '$15',
            availability: 'Available',
            location: 'Japanese Restaurant',
        },
        {
            dishName: 'Tacos',
            price: '$10',
            availability: 'Unavailable',
            location: 'Mexican Restaurant',
        },
    ]

    return (
<div className='flex'>
        <div className='flex w-[100%] justify-between gap-5'>
                Destructuring Info:
                <div className='md:flex-row md:flex md:gap-5 sm:flex-col sm:mb-10'>
                    {
                        foodsInfo.map(({ dishName, price, availability, location }, index) => (
                            <ul key={index}>
                                <div>{dishName}</div>
                                <div>{price}</div>
                                <div>{availability}</div>
                                <div>{location}</div>
                            </ul>
                        ))
                    }
                </div>

            </div>

            {/* CODE PREVIEW */}
            <CodePreview codeString={foodsInfoString} />
        </div>

    )
}

export default DestructoringFoodInfoListUsingMapFunction