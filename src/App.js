import Game from './components/Game/Game'
import './App.css';
import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faRedo} from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [1,2,3],
      solved: false,
      moves: 0,
    }
  }



  render() {
    const onIncreaseClick = () => {
      
      if(this.state.items.length < 8) {
        this.setState({
          items: [...this.state.items, this.state.items.length+1],
        })
      }
    }

    const onDecreaseClick = () => {
      if(this.state.items.length > 3) {
        this.state.items.pop();
        this.setState({
          items: [...this.state.items], 
        })
      }  
    }

    const onGameSolved = () => {
      this.setState({
        solved: true
      })
    }

    const incrementMoves = () => {
      this.setState({
        moves: this.state.moves + 1
      })
    }

  
    return (
    <div className="App">
       <h1>Tower of Hanoi</h1>
      <div className="main">
        <Game items={this.state.items} onGameSolved={onGameSolved} incrementMoves={incrementMoves} gameStatus={this.state.gameStatus}/>
      </div>
      
       {
        this.state.solved ? (<div className="game-msg">
        <h1>{`You solved it in ${this.state.moves} moves`}</h1>
      </div>) : "" 
      }
      <div className="btn-box">
        <div className="btn-item-box">
          <p>Item count</p>
          <div className="btn-item-count">
            <p className="btn" onClick={onIncreaseClick}><FontAwesomeIcon icon={faAngleUp}/> Increase  </p>
            <p className="btn" onClick={onDecreaseClick}><FontAwesomeIcon icon={faAngleDown}/> Decrease </p>
          </div>
          <small className="min-max">(Max 8, Min 3)</small>
        </div>
        <div className="move-count">
          <h4>Moves: {this.state.moves}</h4>
        </div>
        <div className=" btn btn-restart">
          <p><FontAwesomeIcon icon={faRedo}/> Restart!</p>
        </div>
      </div> 
     
      
  
    </div>
  );
  }  
}

export default App;

