import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




class DataProtect extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }


 show() {
     alert("Zeige");
 }



  componentDidMount() {
    let el = document.getElementById("ContactPage");
  }

  render() {

    const style = {
        position: 'relative',
        left: 0,
        right: 0,
        marginTop: '10px',
        fontSize: 'calc(10px + 0.2vw)',
        lineHeight: 'calc(12px + 0.7vw)',
        opacity: 1,
        width: '100%',
        height: 'auto',
        padding: 20,
        paddingBottom: '2vw',
        color: 'black',
        overflowY: 'auto',
        fontFamily: 'Open Sans',
        background: 'white'

    }

    const details = {
        fontSize: '12px'
    }


    return (

        <div id = "DataProtect" className="dataProtectInterior" >

            <div>
                Diese Webseite publiziert Inhalte, die für jedermann frei verfügbar sind. Diese Seite verwendet keine Cookies. 
            </div>
            <br />

            <div id = "Details" style = { details } >
            <h4>Datenschutzerklärung</h4>
            <br/>

            <h5>1. Einleitung und allgemeine Angaben</h5>
            <br />
            <div>Vielen Dank für Ihr Interesse an unserer Website, die über das Angebot der Firma Ludic Philosophy GmbH & Co.KG informiert. Im Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die durch Ihre Nutzung meiner Website erfasst werden. Die Verarbeitung Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen zum Datenschutz. Soweit Links auf andere Websites vorliegen wird, haben wir weder Einfluss noch Kontrolle auf die verlinkten Inhalte und die dortigen Datenschutzbestimmungen. Ich empfehle, die Datenschutzerklärungen auf den verlinkten Webseiten zu prüfen, um feststellen zu können, ob und in welchem Umfang personenbezogene Daten erhoben, verarbeitet, genutzt oder Dritten zugänglich gemacht werden. Ich bin bemüht, einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können internetbasierte Datenübertragungen Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann.</div>

            <br />
            <h5>2. Kontaktinformationen</h5>
            <br />
            <div>Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter: Dr. Burckhardt<br/>
            <br />
            <div>Anschrift</div>
            <br />
            <div>Ludic Philosophy GmbH & Co.KG</div>
            <div>c/o Dr. Burckhardt</div>
            <div>Schlosstr. 115</div>
            <div>12163 Berlin</div>
            <div>Telefon: +49 30-797.07.339</div>
            <div>hillinger@ludicphilosophy.com</div>
            <div>Jeder Betroffene kann sich bei allen Fragen und Anregungen zum Datenschutz direkt an uns wenden.</div>
            </div>


            <h5>3. Datenverarbeitung durch den Besuch der Website</h5>
            <div>Zum Abruf meiner Webseite ist es technisch notwendig, dass über Ihren Internetbrowser Daten an den Webserver meines Providers übermittelt werden. Folgende Daten werden während einer laufenden Verbindung zur Kommunikation zwischen Ihrem Internetbrowser und unserem Webserver aufgezeichnet:</div>
            <li>Datum und Uhrzeit der Anforderung</li>
            <li>Name der angeforderten Datei</li>
            <li>Seite, von der aus die Datei angefordert wurde</li>
            <li>Zugriffsstatus (Datei übertragen, Datei nicht gefunden, etc.)</li>
            <li>verwendeter Webbrowser und verwendetes Betriebssystem</li>
            <li>vollständige IP-Adresse des anfordernden Rechners</li>
            <li>übertragene Datenmenge</li>
            <div>Die aufgelisteten Daten werden erhoben, um einen reibungslosen Verbindungsaufbau der Website zu gewährleisten und eine komfortable Nutzung der Website durch die Nutzer zu ermöglichen. Zudem dient die Logdatei der Auswertung der Systemsicherheit und -stabilität sowie administrativen Zwecken. Rechtsgrundlage für die vorübergehende Speicherung der Daten bzw. der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.</div>

            </div>
        </div>  

    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(DataProtect);