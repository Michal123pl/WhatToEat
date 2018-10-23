import React from 'react';
import './Recipe.css';

const Recipe = ({calories, yields, time, img, url, ingredients, title, health}) => {

	return (
		<div className="grid-container">
		  <div className="img-start-cell">
		  	<img src={img} alt='title-img' />
		  </div>
		  <div className="title">
		 	<h2>{title}</h2>
		 	{time!==0
		 	?<p>Time: {time} m</p>
		 	:<p>Time: not specified</p>
		 	}
		 	<p>Original recipe yields {yields} servings</p>
		 	<p>Calories: {calories} </p>
		 	<div>
		 	{health.map((str, i) => 
		 		<p key={i}>{str}</p>
		 		)
		 	}
		 	</div>
		  </div>
		  <div className="desc">
		  	<ol>{ingredients.map((str, i) =>
				<li key={i}>{str}</li>
		  	)}
			</ol>
			<a href={url}>Click here to go for orginal recipe</a>

		  </div>

		</div>

	);
}

export default Recipe;