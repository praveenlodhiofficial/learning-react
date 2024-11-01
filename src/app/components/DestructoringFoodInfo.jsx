import React from 'react'

const DestructoringFoodInfoListUsingMapFunction = () => {
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
        <div>
            <div className='flex gap-2'>
                Destructuring Info:
                <div className='flex gap-20'>
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
            <br /><br />
        </div>
    )
}

export default DestructoringFoodInfoListUsingMapFunction