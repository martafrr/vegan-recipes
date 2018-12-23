import React, { Component } from 'react';
import { connect } from 'react-redux';
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
				return <li><a>Logout</a></li>
		}	
	}

    render() {
    	return (
        	<nav>
        	  	<div className="nav-wrapper teal lighten-1">
				  	<a className="left brand-logo">Tasty Vegan Recipes</a>
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