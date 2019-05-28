import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
		<div className="demo-big-content">
			<Layout>
				<Header waterfall className="header-color" title={<Link class="home-link" to="/">Julienne Santos</Link>} scroll>
					<Navigation>
						<Link to="/">Home</Link>
						<Link to="/resume">Resume</Link>
						{/* <Link to="/aboutme">About Me</Link> */}
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Header>
				<Drawer title={<Link class="home-link" to="/">Julienne Santos</Link>}>
					<Navigation>
						<Link to="/">Home</Link>
						<Link to="/resume">Resume</Link>
						{/* <Link to="/aboutme">About Me</Link> */}
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
  );
}

export default App;
