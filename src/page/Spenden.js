import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';
import DonateButton from './PayPalDonateButton';


class Spenden extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-3 text-center label-warning" id="getamember">
                <div style={{marginBottom: '2rem'}} className="row">
                    <div className="col-sm-12">
                        <h1>Spenden</h1>
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className="col-sm-12">
                        <p>
                        Wir sind froh über jede Spende, die bei uns ankommt. Als gemeinnütziger Verein können wir selbstverständlich auf Wunsch Spendenbescheinigungen ausstellen. 
                        Melde Dich dazu nach erfolgter Überweisung per E-Mail an vorstand [at] vspace.one und nenne uns Deine Kontaktdaten sowie die IBAN mit Betrag damit wir die Spende zuordnen können.
                        <br/>
                        Dazu könnt Ihr uns einfach den gewählten Betrag mit dem Betreff "Spende" überweisen oder alternativ eine Spende über PayPal senden.
                        Zweckgebundene Spenden nimmt der Vorstand nach erfolgter Absprache an, sofern der Zweck mit der Satzung kompatibel ist.
                        </p>
                    </div>
                </div>
                <div className="parent">
                    <div className="child inline-block-child">
                        <p>
                            Spenden über PayPal:
                            <DonateButton />
                        </p>
                    </div>
                    <div className="child inline-block-child">
                        <p>
                            QR-Code mit Kontodaten:<br/>
                            <Img src="/pic/donation-qr-code.png"></Img>
                        </p>
                    </div>
                </div>
            
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className="col-sm-12">
                        <p>
                        Kontodaten zum Selbsteingeben:<br/>
                            <table className="table table-dark table-borderless">
                                <tbody>
                                    <tr>
                                        <td>Inhaber</td>
                                        <td>vspace.one e. V.</td>
                                    </tr>
                                    <tr>
                                        <td>Bank</td>
                                        <td>Volksbank eG - Die Gestalterbank</td>
                                    </tr>
                                    <tr>
                                    <td>IBAN</td>
                                        <td>DE76 6649 0000 0032 7297 03</td>
                                    </tr>
                                    <tr>
                                        <td>BIC</td>
                                        <td>GENODE61OG1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div>
                </div>
            </div>     
        );
    }
}

export default Spenden;

