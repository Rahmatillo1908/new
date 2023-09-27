import React from 'react'
import "./meal.scss"
import { Link } from 'react-router-dom'
function MealList({ meals }) {
    return (
        <div className='section-wrapper' >
            <div className='container' >
                <div className='sc-title'>
                    meals
                </div>
                <section className='sc-meal grid' >
                    {
                        meals.map(maelItem => {
                            const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = maelItem;
                            return (
                                <Link to={`/meal/${id}`} className='meal-item align-center justify-center' key={id} >
                                    <div className='meal-item-img' >
                                        <img src={thumbnail} alt={meal} />
                                        <div className='meal-item-cat bg-orange text-center' fw-6 >
                                            {category}
                                        </div>
                                    </div>
                                    <div className='meal-item-body' >
                                        <div className='meal-item-body-info flex flex-column' >
                                            <div className='area fs-14 ls-1 fw-5'>
                                                {area}
                                            </div>
                                            <div className='meal fw-15 fw-7 op-09' >
                                                {meal}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}

export default MealList