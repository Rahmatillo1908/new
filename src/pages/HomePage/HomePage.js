import React from 'react'
import { useMealContext } from '../../context/mealContext'
import CategoryList  from '../../components/Category/CategoryList';
import  Loader  from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
function HomePage() {
  const {categories, meals ,categoryLoading , maelsLoading }= useMealContext()
  return (
    <main className='main-context'>
      {((maelsLoading) ? <Loader/> : (meals === null) ? <NotFound/> :  (meals.length) ? <MealList meals={meals} /> : "" )}

      {(categoryLoading) ? <Loader/> : <CategoryList categories={categories} />}
    </main>
    )
}

export default HomePage