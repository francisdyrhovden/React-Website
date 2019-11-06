import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Certificates extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.certName}</h4>
                    <p>{this.props.certDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Certificates;
