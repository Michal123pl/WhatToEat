import React from 'react';
import './SearchRecipe.css';

const SearchRecipe = ({onSearchField, onSearchButton}) => {
	return (
		<div className='searchRecipeContainer'>
			<h1>Enter products and find your favourite recipe.</h1>
			<input 
			type='text' 
			onChange={onSearchField}/>
			<p>*Enter products comma-separeted</p>
			<input 
			type="button" 
			value="Search" 
			onClick={onSearchButton}
			/>
			<div style={{marginBottom: "50px"}} id="edamam-badge" data-color="transparent"></div>
		</div>
	);
}

export default SearchRecipe;