import React from 'react';
import Image from 'next/image';
import codestring from '../data/codestring.json';
import CodePreview from '../components/CodePreview';

const ShowingCartItemsUsingConditionalRendering = () => {
    const cartItemsString = codestring.cartItems.cartItemsString;

    return (
        <div className='flex justify-between w-full'>
            <div>
                <CartItems
                    item01='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNw3HQRBBkvqsIJeLKvQZf6lQqTkREgffUg&s'
                    item02='https://brownliving.in/cdn/shop/products/coconut-shell-masala-spoon-set-of-6-for-small-containers-173-05696-thenga-coconut-shell-masala-spoon-set-of-6-fo-cutlery-brown-living-772662_800x.jpg?v=1682961500'
                    item03='https://cdn.shopify.com/s/files/1/0626/5136/7617/files/CJRB_Pyrite_Wharncliffe_J1925A_AR-RPM9_POWDER_STEEL_BLADE_STEEL_HANDLE_FOLDING_KNIVES_5_8997010c-75ab-44f1-8012-155684da7a73_1024x1024.jpg?v=1704699722'
                    item04='https://imgs.search.brave.com/4JoPU_I_6ADx5_fnEOQGh_JvxdMQGpc1bw73g3pKr98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM5/NzkxMjk0L3Bob3Rv/L2Nvb2tpbmctbWVh/dC1pbi1hLWZyeWlu/Zy1wYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWdzZm0y/ZlpuSFJVYTZnTDhs/bk1qZXRRWUQweXpW/V1NhMGxxVW1RSEhn/akk9'
                    description=''
                />
            </div>

            <div>
                {/* CODE PREVIEW */}
                <CodePreview codeString={cartItemsString} />
            </div>

        </div>
    );
};

const CartItems = ({ item01, item02, item03, item04 }) => {
    const items = [
        { src: item01, name: 'Glass' },
        { src: item02, name: 'Spoon' },
        { src: item03, name: 'Knife' },
        { src: item04, name: 'Frying Pan' },
    ];

    return (
        <div className='gap-1 rounded-md border-gray-800 flex flex-col border py-2 px-4 items-center justify-center text-center'>
            <h1 className='px-2 text-3xl underline font-bold'>Cart</h1>

            {/* CONDITIONAL RENDERING CONTENT HERE */}
            {items.length > 0 && <p>There are currently {items.length} items in the Cart.</p>}

            {/* MAPPING ITEMS HERE */}
            <div className='p-2 rounded grid grid-cols-2 gap-5'>
                {items.map((item, index) => (
                    <div key={index} className='text-center'>
                        <Image src={item.src} alt={item.name} width={160} height={160} className='rounded h-40' />
                        <p className='flex justify-around mt-1'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowingCartItemsUsingConditionalRendering;
