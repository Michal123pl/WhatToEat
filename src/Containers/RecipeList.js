import React from 'react';
import Recipe from '../Components/Recipe';
import './RecipeList.css';

const RecipeList = ({recipes}) => {
	return (
		<div className='listContainer'>
			{recipes.map((recipe, i) =>
				<Recipe 
					key={i}
					title={recipes[i].recipe.label}
					ingredients={recipes[i].recipe.ingredientLines}
					url={recipes[i].recipe.url}
					img={recipes[i].recipe.image}
					time={recipes[i].recipe.totalTime}
					yields={recipes[i].recipe.yield}
					calories={Math.floor(recipes[i].recipe.calories)}
					health={recipes[i].recipe.healthLabels}
				/>
			)}
		</div>

	);
}

export default RecipeList;