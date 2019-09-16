import React from 'react';
import './App.css';
import datos from './datos';
// import Page from './components/Page';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos:datos
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="tittle-header">Legion of Hell</h1>
        <ul className="datoslist">
                {this.state.datos

                .map((item,index) => (
                <li className ="datoslist__content" key = {index}>
                <p className="datoslist__content-name">{item.name}</p>
                <p className="datoslist__content-email">{item.email}</p>
                <p className="datoslist__content-passwords">{item.passwords}</p>
                <p className="datoslist__content-bank-iban">{item.bank.iban}</p>
                <p className="datoslist__content-bank-pin">{item.bank.pin}</p>
                
                </li>
                ))
                }
            </ul>
        {/* <Page 
        // name={this.state.name}
        // email={this.state.email}
        // passwords={this.istatepasswords}
        // // bank={{this.state.bank.iban}, {this.state.bank.pin}}
        
        />  */}
        
        
      </div>
    );
  }
}

export default App;
// Vais a pintar una primera versión de los datos, sin filtrado ni nada, lo importante es que la información esté fuera.