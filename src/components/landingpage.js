import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div className="landing-body">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Francis Soliman Dyrhovden</h1>

                            <hr/>

                            <p>Student ∙ Selger ∙ Utvikler ∙ Fotograf</p>
                            
                            <div className="social-links">
                                {/* Linked In */}
                                <a href="https://www.linkedin.com/in/francis-soliman-dyrhovden-1b6008188" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/francisdyrhovden" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* Youtube */}
                                <a href="https://www.youtube.com/channel/UCvQO0gl9g7oJ1Z61yyFk1CQ" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/francis.soliman" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;