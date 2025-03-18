import React from 'react'
import './Review.css'

const ReviewCard = () => {
    const ReviewData = [
        {
            review: `"Amazing food and great service!"`,
            name: "-John Doe",
            star: "★★★★★",
        },
        {
            review: `"Good taste but a bit pricey."`,
            name: "-Jane Smith",
            star: "★★★★☆",
        },
        {
            review: `"Best dining experience ever!"`,
            name: "-Alice Johnson",
            star: "★★★★★",
        },
    ];

    return (
        <>
            {ReviewData.map((reviews, index) => (
                <div key={index} className="review-card">
                    <h3>{reviews.review}</h3>
                    <h3>{reviews.name}</h3>
                    <p>{reviews.star}</p>
                </div>
            ))}
        </>
    )
}

const Review = () => {
    return (
        <>

            <h2 className='review-header'>Reviews</h2>
            <div className="review-container">
                <ReviewCard />
            </div>
        </>

    )
}

export default Review