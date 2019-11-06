import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h1>Contact me</h1>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', color: 'white'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+47) 936 02 840
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', color: 'white'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        soliman_61@hotmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', color: 'white'}}>
                                        <i className="fa fa-facebook-square" aria-hidden="true"/>
                                        facebook.com/franciissoliman
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;