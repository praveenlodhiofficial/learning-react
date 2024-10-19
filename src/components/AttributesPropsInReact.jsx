import React from 'react'

const User = ({ name, age, email, isLoggedIn, remainingLife }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
                <li>Is Logged In: {isLoggedIn ? "Yes" : "No"}</li>
                <li>Remaining Life: {remainingLife - age}</li>
            </p>
        </>
    )
}

const Product = ({ name, description }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
        </>
    )
}


const AttributesPropsInReact = () => {
    return (
        <>
            <div>
                <User
                    name="Praveen Lodhi"
                    age={20}
                    email="praveen@gmail.com"
                    isLoggedIn={true}
                    remainingLife={80}
                />

                <hr />

                <Product
                    name="Vivo Y15"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum quod. Saepe dolor provident eum doloribus eius aliquam consectetur? Mollitia? "
                />
            </div>
        </>
    )
}

export default AttributesPropsInReact
