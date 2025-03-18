import React from 'react'
import greeksalad from '../../assets/greeksalad.jpg'
import pizza from '../../assets/pizza.jpg'
import lemondessert from '../../assets/lemondessert.jpg'
import './Menu.css'

const FoodCard = () => {
    const foodData = [
        {
            name: "Greek Salad",
            description: "A refreshing salad with peppers, olives, and feta cheese, dressed with a tangy vinaigrette.",
            price: "SGD$25.00",
            image: greeksalad
        },
        {
            name: "Italian Pizza",
            description: "Freshly baked pizza with mozzarella cheese, tomato sauce, and basil.",
            price: "SGD$18.00",
            image: pizza
        },
        {
            name: "Lemon Dessert",
            description: "A sweet and tangy lemon dessert with a buttery crust.",
            price: "SGD$22.00",
            image: lemondessert
        }
    ];

    return (
        <>
            {foodData.map((food, index) => (
                <div key={index} className="food-card">
                    <img src={food.image} alt={food.name} />
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>
                    <p>{food.price}</p>
                </div>
            ))}
        </>
    )
}

function MenuButton() {
    const openImg = () => {
        window.open('/menu.png', '_blank');
    };

    return (
        <button className="menu-button" onClick={openImg}>View Menu</button>
    );
}


const Menu = () => {
    return (
        <>
            <div className="menu-header-container">
                <h2>Special</h2>
                <MenuButton />
            </div>
            <div className="menu-container">
                <FoodCard />
            </div>
        </>

    )
}

export default Menu