import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <div className="card-space">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/82563.png) center / cover' }}>
                                Fortnite app
                    </CardTitle>
                            <CardText>A web application to keep track of relevant information for me, such as player stats and store items, using a Fortnite API </CardText>
                            <CardActions border>
                                <div style={{ textAlign: "center" }}>
                                    <a href="https://fortnite-app.netlify.com/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                    <a href="https://github.com/francisdyrhovden/React-fortnite-app" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="card-space">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.webdesignerdepot.com/cdn-origin/uploads/2015/05/featured_animation.png) center / cover' }}>
                                Portfolio website
                    </CardTitle>
                            <CardText>The web application you are currently on, where I focus on architecture, design, and exploring new things.</CardText>
                            <CardActions border>
                                <div style={{ textAlign: "center" }}>
                                    <a href="https://github.com/francisdyrhovden/tictactoe" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="card-space">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://ak0.picdn.net/shutterstock/videos/1017545170/thumb/12.jpg) center / cover' }}>
                                Tic Tac Toe
                    </CardTitle>
                            <CardText>A simple tic tac toe game which is able to track the history of the game. From a official React tutorial.</CardText>
                            <CardActions border>
                                <div style={{ textAlign: "center" }}>
                                    <a href="https://github.com/francisdyrhovden/tictactoe" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="card-space">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.govloop.com/wp-content/uploads/2015/04/HiRes-1024x768.jpg) center / cover' }}>
                                To-do List
                    </CardTitle>
                            <CardText>This is my first ever React project, which is a simple to-do list where you can add, check, and delete your todos. </CardText>
                            <CardActions border>
                                <div style={{ textAlign: "center" }}>
                                    <a href="https://github.com/francisdyrhovden/react-todoapp" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.bleepstatic.com/content/hl-images/2017/03/09/JavaScript.jpg) center / cover' }}>
                            School project
                    </CardTitle>
                        <CardText>A school-project about making a web application which can be used for attending to a party.</CardText>
                        <CardActions border>
                            <div style={{ textAlign: "center" }}>
                                <a href="https://github.com/francisdyrhovden/dat108Oblig3" rel="noopener noreferrer" target="_blank">
                                    <Button colored>GitHub</Button>
                                </a>
                            </div>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{ padding: "1em" }}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Other</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;