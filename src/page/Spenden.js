import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';

class Spenden extends Component {

    componentDidMount(){
        document.title = "Spenden – vspace.one"
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-2 text-center content-page" id="getamember">
                <div style={{marginBottom: '2rem'}} className="row">
                    <div className="col-sm-12">
                        <h1 className="content-page-title">Spenden</h1>
                        <hr className="section-divider" />
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className="col-sm-12">
                        <p>
                        Wir freuen uns über jede Spende! Als gemeinnütziger Verein stellen wir auf Wunsch Spendenbescheinigungen aus.
                        Überweist einfach den gewünschten Betrag mit dem Betreff „Spende" an unser Konto.
                        <br/><br/>
                        Für eine Spendenbescheinigung meldet euch nach der Überweisung per E-Mail an <a href="mailto:vorstand@vspace.one">vorstand [at] vspace.one</a> mit euren Kontaktdaten, IBAN und Betrag.
                        Zweckgebundene Spenden sind nach Absprache mit dem Vorstand möglich, sofern der Zweck mit unserer Satzung vereinbar ist.
                        </p>
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'center'}} className="col-sm-12">
                        <div style={{display: 'inline-block', padding: '1.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)'}}>
                            <p style={{marginBottom: '1rem'}}>QR-Code mit Kontodaten:</p>
                            <Img src="/pic/donation-qr-code.png"></Img>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className="col-sm-12">
                        <p>
                        Kontodaten zum Selbsteingeben:<br/>
                            <table className="table table-dark table-borderless table-modern">
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
