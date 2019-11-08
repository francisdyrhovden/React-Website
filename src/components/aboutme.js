import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Pic from '../circle-cropped.png';

class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="aboutme-top" col={12}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={Pic}
                                alt="avatar"
                                style={{ height: '300px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '1em', paddingBottom: '1 em', textAlign: 'center' }}>Francis Soliman Dyrhovden</h2>
                        <h3 style={{ color: 'grey', textAlign: 'center' }}>Om meg</h3>
                        <hr style={{ borderTop: '3px solid #367588', width: '90%' }} />
                    </Cell>

                    <Cell className="aboutme-bottom" col={12}>
                        <h5>
                            Mitt navn er Francis Soliman Dyrhovden, og jeg studerer 2. året i en bachelor i Dataingeniør ved Høgskulen på Vestlandet. 
                        </h5>

                        <hr style={{ borderTop: '3px solid white' }} />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;