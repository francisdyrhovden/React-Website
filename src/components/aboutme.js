import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Pic from '../circle-cropped.png';

class About extends Component {
    render() {
        return (
            <div className="aboutme">
                <Grid>
                    {/* spacing */}
                    <Cell col={2}></Cell>
                    
                    <Cell col={8} style={{ margin: 'auto' }}>
                        <div>
                            <img src={Pic}
                                alt="avatar"
                                style={{ height: '300px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '1em', paddingBottom: '1em' }}>Francis Soliman Dyrhovden</h2>
                        <hr style={{ borderTop: '3px solid #367588', width: '90%', margin: 'auto' }} />
                    </Cell>

                    {/* spacing */}
                    <Cell col={2}></Cell>

                    <Cell col={7} style={{ margin: 'auto' }}>
                        <h3 style={{ color: 'grey', paddingTop: '0px', paddingBottom: '1em' }}>Om meg</h3>
                        <h5>
                            Mitt navn er Francis Soliman Dyrhovden, og jeg studerer 3. året som Dataingeniør ved Høgskulen på Vestlandet.
                            Jeg er 25 år gammel, og har fagbrev som havbunnsinstallatør. På fritiden liker jeg å filme og ta bilder, buldring, fly drone og drive på med egne prosjekter.
                        </h5>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;