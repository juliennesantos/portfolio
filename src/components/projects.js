import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'; 

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab:0};
	}

	toggleCatergories() {
		if(this.state.activeTab === 0){
			return (
				<div className="projects-grid">
					{/* Project #1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://previews.dropbox.com/p/thumb/AAcUdBnaiRdAkpgxIzTfFNlhBbYsSDqYDnClzvui-Bes7Yp-jf2vou1aL_mToR-7qxcgAu5p1fHAqxkqGoQWitPwAmJGLmysICzWdiAgTpoAFIUDvJ0Ye1u-p3e4qUoDkBP30o2eJ8MX-2taxhjEk6mLGHFciRChbqH2Wj6HEJ9oTTGmbBKs8CW-H3KNP71VgEH0ALovfOO91Fhugl7Q6PS6jRiaZBBi2rn6XlHBAiRUcr3XcBMhlaCuGAPJz0IUmrHmzGp9YIXZE6AmC8S2OF8vZEAUs0Vp-yaNmxsbLAP76fEdcr1inmt4UHy70yeeO5Gd0URDYVqYe2u6p-NcBxn5/p.jpeg?fv_content=true&size_mode=5) center / cover'}}></CardTitle>
						<CardText>
							Website application prototype delivery system for Small to Medium Enterprises
						</CardText>
						<CardActions>
							{/* <Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button> */}
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
						</CardMenu>
					</Card>
				</div>
			)
		}
		else if(this.state.activeTab === 1){
			return (
				<div>
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle className='card-title-php' style={{color: '#fff'}}></CardTitle>
						<CardText>
							SLICe is a website application that automates and simplifies the tutorial system of the Student Learning Center of De La Salle - College of Saint Benilde
						</CardText>
						<CardActions>
							<Button colored><a className='general-link' href="https://github.com/juliennesantos/slice" target="_blank" rel="noopener noreferrer">Github</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
						</CardMenu>
					</Card>
				</div>
			)
		}
		else if(this.state.activeTab === 2){
			return (
				<div>
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle className='card-title-react' style={{color: '#fff'}}>Portfolio</CardTitle>
						<CardText>
							My first React attempt at a portfolio.
						</CardText>
						<CardActions>
							<Button colored><a className='general-link' href="https://github.com/juliennesantos/portfolio" target="_blank" rel="noopener noreferrer">Github</a></Button>
							<Button colored><a className='general-link' href="https://juliennesantos.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
						</CardMenu>
					</Card>
		</div>
			)
		}
		// else if(this.state.activeTab === 3){
		// 	return (
		// 		<div><h1>This is SQL.</h1></div>
		// 	)
		// }
	}
	
	render(){
		return(
			<div>
				<Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
					<Tab>C#</Tab>
					<Tab>PHP</Tab>
					<Tab>React</Tab>
					{/* <Tab>NodeJS</Tab> */}
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCatergories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;