import React, { Component } from 'react';

class Impressum extends Component {

    render() {
        return (
            <div className="container-fluid bg-2 text-center">
                <h1>Impressum</h1>
                <h2>Angaben gemäß § 5 TMG:</h2>
                <p>vspace.one e.V.<br /> Wilhelm-Binder-Str. 19<br /> 78048 Villingen
                </p>
                <h2>Vertreten durch:</h2>
                <p>Nils Krause<br /> Maximilian Noppel<br /> Michael Castano<br />Damian Jesionek</p>
                <h2>Kontakt:</h2>
                <p>
                    Telefon: 0176 31642695<br />
                    E-Mail: public [at] lists.vspace.one oder vorstand [at] lists.vspace.one
                </p>
                <h2>Datenschutzerklärung</h2>
                <p>Es gilt die folgenden <a href="?page=datenschutzerklärung" style={{color: '#ffffff'}}>Datenschutzerklärung</a>.</p>
                <p></p>
                <h2>Registereintrag:</h2>
                <p>Eintragung im Vereinsregister. <br />Registergericht: Amtsgericht Villingen-Schwenningen <br />Registernummer: VR 701636</p>
                <p> </p>
                <p>Steuernummer: 22102/71153</p>
                <p> </p>
                <p>Quelle: <em><a href="https://www.e-recht24.de" style={{color: '#ffffff'}}>eRecht24</a></em></p>
            </div>        
        );
    }
}

export default Impressum;