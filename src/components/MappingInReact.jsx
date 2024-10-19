import React from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const names = ["Praveen", "Rajesh", "Ramesh", "Suresh", "Mahesh"]

const contactinfo = [{
    id: 1,
    name: "Praveen",
    email: "praveen@gmail.com",
    phone: 1234567890
},
{
    id: 2,
    name: "Rajesh",
    email: "rajesh@gmail.com",
    phone: 1234567890
},
{
    id: 3,
    name: "Ramesh",
    email: "ramesh@gmail.com",
    phone: 1234567890
},
{
    id: 4,
    name: "Suresh",
    email: "suresh@gmail.com",
    phone: 1234567890
},
{
    id: 5,
    name: "Mahesh",
    email: "mahesh@gmail.com",
    phone: 1234567890
}
]

const touristPlaces = [
    {
        id: 1,
        name: "Mysore",
        description: "Known as the 'City of Palaces', Mysore is famous for its royal heritage, magnificent palaces, and the colorful Dasara festival.",
        image: "https://imgs.search.brave.com/z-9FKFZIjHoR19Qc6Lda06J_KfobqLYcwv9pkTcmhlw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMTIvbXlzb3Jl/LXBhbGFjZTEuanBn"
    },
    {
        id: 2,
        name: "Hampi",
        description: "A UNESCO World Heritage Site, Hampi is an ancient village known for its ruins of the Vijayanagara Empire, including temples and monuments.",
        image: "https://imgs.search.brave.com/oLl5gGDYh1dSyLuLnf2w0aBiVljcQx-C2AEO29a3SEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzI1LzEyLzUw/LzM2MF9GXzI1MTI1/MDA3X3A0cDdmMzVF/YWc2am5tdFF6RndB/SFFIeFRHWXl6QlNm/LmpwZw"
    },
    {
        id: 3,
        name: "Coorg",
        description: "Often called the 'Scotland of India', Coorg is a picturesque hill station known for its coffee plantations, waterfalls, and lush landscapes.",
        image: "https://imgs.search.brave.com/5qJd-SqjxOf4mNEEKV55HiKd6TaRWWbDQmJut5Hi0zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTEwNDA0MDI0OSx3/aWR0aC05NixoZWln/aHQtNjUuY21z"
    },
    {
        id: 4,
        name: "Gokarna",
        description: "A tranquil beach town, Gokarna is famous for its pristine beaches, laid-back atmosphere, and ancient temples.",
        image: "https://imgs.search.brave.com/Vk4HJnVn1fjryk-J_UzM10dEuxXmFEGIQSVEqm_ljXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvQmVhY2gtSG9w/cGluZy5qcGc"
    },
]

const MappingInReact = () => {
    return (
        <>
            {/* Mapping Numbers */}
            <div>
                <h1>Mapping Numbers</h1>
                {
                    numbers.map((number) => {
                        return <li key={number}> {number}</li>
                    })
                }
            </div>

            <hr />

            {/* Mapping Names */}
            <div>
                <h1>Mapping Names</h1>
                {
                    names.map((name) => {
                        return <li key={name}> {name}</li>
                    })
                }
            </div>

            <hr />

            {/* Mapping Contact Info */}
            <div>
                <h1>Mapping Contact Info</h1>
                {
                    contactinfo.map((contact) => {
                        return (
                            <div>
                                <h2>{contact.name}</h2>
                                <li key={contact.id}>Email: {contact.email}</li>
                                <li key={contact.id}>Phone: {contact.phone}</li>
                            </div>
                        )
                    })
                }
            </div>

            <hr />

            {/* Mapping Tourist Places by destructuring the object */}
            <div>
                <h1>Mapping Tourist Places</h1>
                {
                    touristPlaces.map(({id, name, description, image}) => {
                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <p>{description}</p>
                                <img src={image} alt={name} />
                            </div>
                        )
                    })
                }
            </div>
            
        </>

    )
}

export default MappingInReact
