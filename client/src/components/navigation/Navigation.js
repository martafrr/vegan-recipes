import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
	renderContent() {
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Loggin with Google</a>
					</li>
				)
			default:
				return <li><a href="/api/logout">Logout</a></li>
		}	
	}

    render() {
    	return (
        	<nav>
        	  	<div className="nav-wrapper teal lighten-1">
					<Link 
						to={this.props.auth ? '/recipes' : '/'} 
					  	className="left brand-logo"
					>
					  	Tasty Vegan Recipes
					</Link>
        	    	<ul className="right">
        	      		{this.renderContent()}
        	    	</ul>
        	  	</div>
  			</nav>
      	)
    }
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Navigation);