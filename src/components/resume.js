import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Certificate from './certificates';
import Pic from '../circle-cropped.png';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={Pic}
                                alt="avatar"
                                style={{ height: '300px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Francis Soliman Dyrhovden</h2>
                        <h4 style={{ color: 'grey' }}>Personopplysninger</h4>
                        <hr style={{ borderTop: '3px solid #367588', width: '90%' }} />
                        <h5>Født</h5>
                        <p>25.04.1995</p>
                        <h5>Addresse</h5>
                        <p>Kalfarveien 22, 5018 Bergen</p>
                        <h5>Telefon</h5>
                        <p>(+47) 936 02 840</p>
                        <h5>Email</h5>
                        <p>soliman_61@hotmail.com</p>
                        <hr style={{ borderTop: '3px solid #367588', width: '90%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Utdanning</h2>

                        <Education
                            startYear={2018}
                            endYear="d.d"
                            schoolName="Høgskulen på Vestlandet"
                            schoolDescription="Dataingeniør"
                        />
                        <Education
                            startYear={2017}
                            endYear={2018}
                            schoolName="Høgskulen på Vestlandet"
                            schoolDescription="Forkurs for ingeniørstudier"
                        />
                        <Education
                            startYear={2014}
                            endYear={2016}
                            schoolName="Aker Solutions AS"
                            schoolDescription="Lærling som havbunnsinstallatør"
                        />
                        <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="Bergen Maritime VGS"
                            schoolDescription="VG2 Brønnteknikk"
                        />
                        <Education
                            startYear={2012}
                            endYear={2013}
                            schoolName="Laksevåg Videregående Skole"
                            schoolDescription="VG2 Elenergi"
                        />
                        <Education
                            startYear={2011}
                            endYear={2012}
                            schoolName="Laksevåg Videregående Skole"
                            schoolDescription="VG1 Elektro"
                        />

                        <hr style={{ borderTop: '3px solid white' }} />

                        <h2>Arbeidserfaring</h2>

                        <Experience
                            startYear={2020}
                            endYear={2020}
                            workName="Bouvet ASA"
                            workDescription="Konsulent"
                        />
                        <Experience
                            startYear={2019}
                            endYear={2019}
                            workName="Høgskulen på Vestlandet"
                            workDescription="Hjelpelærer"
                        />
                        <Experience
                            startYear={2017}
                            endYear="d.d"
                            workName="Megaflis Haukås"
                            workDescription="Selger"
                        />
                        <Experience
                            startYear={2016}
                            endYear={2017}
                            workName="Aker Solutions Moss"
                            workDescription="Operatør"
                        />
                        <Experience
                            startYear={2014}
                            endYear={2016}
                            workName="Aker Solutions Ågotnes"
                            workDescription="Lærling som havbunnsinstallatør"
                        />
                        <Experience
                            startYear={2011}
                            endYear={2014}
                            workName="Dolly Dimples"
                            workDescription="Restaurantmedarbeider"
                        />

                        <hr style={{ borderTop: '3px solid white' }} />

                        <h2>Kurs og sertifikater</h2>

                        <Certificate
                            startYear={2015}
                            certName="AktiMed Norge avd Care Bergen"
                            certDescription="Offshoreattest, Sjømannsattest"
                        />
                        <Certificate
                            startYear={2014}
                            certName="Gantic AS"
                            certDescription="T1 Truck sertifikat, T4 Truck sertifikat, G4 Traverskran sertifikat, Fallsikringskurs inkl. evakuering"
                        />
                        <Certificate
                            startYear={2014}
                            certName="Bergen Maritime VGS"
                            certDescription="G11 Stroppe- og anhukerkurs, GSK sikkerhteskurs"
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default Resume;