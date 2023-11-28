import React,{Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre';
import Button from './components/Button';

const league={
  membre1:{
    nom:'Batman',
    age:48
  },
  membre2:{
    nom:'Superman',
    age:46
  },
  membre3:{
    nom:'Wonder Woman',
    age:79
  },
  membre4:{
    nom:'Cat Woman',
    age:33
  }
}

class App extends Component {
  state = {  
    league:league 
  } 
  handleClick=(nb)=>{
    const league={...this.state.league}
    league.membre1.age+=nb
    this.setState({league})
  }
  render() { 
    return (
     <>
        <h1>Prend ça la vie !</h1>
        <h1>Prend ça la vie !</h1>
        <Membre 
          nom={this.state.league.membre1.nom}
          age={this.state.league.membre1.age}
        />
        <Membre 
          nom={this.state.league.membre2.nom}
          age={this.state.league.membre2.age}
        />
        <Membre 
          nom={this.state.league.membre3.nom}
          age={this.state.league.membre3.age}
        />
        <Membre 
          nom={this.state.league.membre4.nom}
          age={this.state.league.membre4.age}
        />
  
        <Membre nom="Dylan" age="48">
          <h2>No comprendo esta pa biene</h2>
        </Membre>
      <Button 
        plus={2}
        vieillir={()=>this.handleClick(2)}
      />
     </>
    );
  }

}
 
export default App;