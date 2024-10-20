import React from 'react'

// Example 01: Password
const validPassword = "Password is Valid"
const invalidPassword = "Password is Invalid"

const Password = ({ isValid }) => {
    return (
        <h1>Mobile Password: {isValid ? validPassword : invalidPassword}</h1>
    )
}

// Example 02: Carts
const cartItems = ["jeans", "shirt", "t-shirt", "shoes", "watch"]

// Example 03: Temperature
const Temperature = ({ value }) => (
    <p>
        {value > 0 && value < 15 ? "It's cold Outside" :
            value >= 15 && value < 25 ? "It's nice Outside" :
                "It's hot Outside"}
    </p>
);

// Example 03: User Status
const isAdmin = "Welcome Admin !!!"
const isUser = "Welcome Praveen !!!"

const UserStatus = ({ userType, isLoggedIn }) => {
    return (
        <p>
            <li>Anyone Logged In: {isLoggedIn ? "Yes" : "No"} </li>
            <li>
                What's the user type: {isLoggedIn ? (userType === isAdmin ? isAdmin : isUser) : "No one logged in Yet"}
            </li>
        </p>
    );
};

// Example 05: Greetings
const Greetings = ({ timeOfDay }) => {
    return <p>Hey, the current time is {timeOfDay}, 
    {(timeOfDay > 0.00 && timeOfDay < 12.00) ? "Good Morning" :
        (timeOfDay >= 12.00 && timeOfDay < 15.00) ? "Good Afternoon" :
            (timeOfDay >= 15.00 && timeOfDay < 19.00) ? "Good Evening" :
                "Good Night"
    } </p>
}




const ConditionalRenderingInReact = () => {
    return (
        <div>

            {/* Example 01: Password */}
            <Password isValid={true} />

            <hr />

            {/* Example 02: Carts */}
            <div>
                <h1>Carts 🛒</h1>
                {
                    cartItems.length > 0
                    &&
                    <h2>You have {cartItems.length} in your Cart.</h2>
                }

                {
                    cartItems.map(items => {
                        return <li>{items}</li>
                    })
                }
            </div>

            <hr />

            {/* Example 03: Temperature */}
            <div>
                <h1>Whats the temperature outside ???</h1>
                <Temperature value={5} />
            </div>

            <hr />

            {/* Example 04: User Status */}
            <div>
                <h1>User Status</h1>
                <UserStatus userType={isAdmin} isLoggedIn={true} />
            </div>

            <hr />

            {/* Example 05: Greetings */}
            <div>
                <h1>Greetings</h1>
                <Greetings timeOfDay={19.30} />
            </div>


        </div>
    )
}

export default ConditionalRenderingInReact