import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import Navigation from '../Components/Navigation';


class MainContent extends React.Component {
	constructor() {
		super()
		this.state = {
			searchField: '',
			recipes: [],
			message: '',
			navigation: {
				to: 0,
				from: 0
			}
		}
	}

	componentDidMount() {
	    Events.scrollEvent.register('begin', (to, element) => {

	    });
	    Events.scrollEvent.register('end', (to, element) => {

	    });
	    scrollSpy.update();
  	}

	onSearchField = (event) => {
		this.setState({searchField: event.target.value})
	}
	onSearchButton = () => {
		if(this.state.searchField.length > 0) {
			this.loadRecipes();
		}else {

		}
	}

	loadRecipes = () => {
		fetch(`https://api.edamam.com/search?q=${this.state.searchField}&app_id=0f751039&app_key=4492b1fe18d238604e4990b5e09640a8&from=0&to=20`)
		.then(response => response.json())
		.then(recipe => {
			this.setState({recipes: recipe.hits})
			this.setState({navigation: {
				to: recipe.to,
				from: recipe.from
			}})
		})
		
	}

	onNavButton = (from, to) => {
		fetch(`https://api.edamam.com/search?q=${this.state.searchField}&app_id=0f751039&app_key=4492b1fe18d238604e4990b5e09640a8&from=${from}&to=${to}`)
		.then(response => response.json())
		.then(recipe => {
			if(recipe.count === 0){
				this.setState({message: "I don't found any recipe"})
			} else{
				this.setState({recipes: recipe.hits})
				this.setState({navigation: {
					to: recipe.to,
					from: recipe.from
				}})
			}
		})
		.catch(err => console.log(err))
	}

	next = () =>{
		this.setState({navigation: {
			from: this.state.navigation.from+20,
			to: this.state.navigation.to+20 
		}})
		this.onNavButton(this.state.navigation.from+20, this.state.navigation.to+20);
		scroll.scrollToTop();
	}
	previous = () =>{
		this.setState({navigation: {
			from: this.state.navigation.from-20,
			to: this.state.navigation.to-20
		}})
		this.onNavButton(this.state.navigation.from-20, this.state.navigation.to-20);
		scroll.scrollToTop();
	}

	render(){
		return (
			<div>
				<SearchRecipe 
				onSearchField={this.onSearchField}
				onSearchButton={this.onSearchButton}
				/>
				
				{ this.state.recipes.length >0
					?<RecipeList recipes={this.state.recipes}/>
					:<h2 style={{marginBottom: "150px"}} >No recipes found</h2>
				}
				{this.state.navigation.to > 0 && this.state.recipes.length > 0
					?<Navigation 
					number={this.state.number}
					to={this.state.navigation.to}
					next={this.next}
					previous={this.previous}
					/>
					:<div></div>}
			</div>
		);
	}
}

export default MainContent;