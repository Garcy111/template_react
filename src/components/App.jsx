import React from "react";
import { Link } from 'react-router';

export let App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<ul className="menu-item">
					<li>
						<Link to='/contacts'>Contacts</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
				<div className="content">	
					{this.props.children}
				</div>
			</div>
		);
	}
});