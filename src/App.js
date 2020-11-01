import Game from './components/Game/Game'
import './App.css';
import React, { Component} from 'react';
import Bounce from 'react-reveal/Bounce';
import Jello from 'react-reveal/Jello';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faRedo} from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [1,2,3],
      solved: false,
      moves: 0,
      restart: true, //refresh game, uses key atrribute to trigger rerender
      minMoves: 7
    }
  }


  render() {
  
    //increase number of items
    const onIncreaseClick = () => {
      if(this.state.items.length < 8) {
        this.setState({
          items: [...this.state.items, this.state.items.length+1],
          restart: !this.state.restart,
          minMoves: this.state.minMoves * 2 + 1
        })
      }
    }
    //decrease number of items
    const onDecreaseClick = () => {
      if(this.state.items.length > 3) {
        this.state.items.pop();
        this.setState({
          items: [...this.state.items],
          restart: !this.state.restart,
          minMoves: Math.round(this.state.minMoves / 2 - 1)
        })
      }  
    }
    //game ended
    const onGameSolved = () => {
      this.setState({
        solved: true
      })
    }
    //counts number of moves
    const incrementMoves = () => {
      this.setState({
        moves: this.state.moves + 1
      })
    }
    //restart game
    const restart = () => {
      this.setState({
        moves: 0,
        restart: !this.state.restart
      })
    }

    const onPlayAgain = () => {
      this.setState({
        moves: 0,
        solved: !this.state.solved,
      })
      restart()
    }

    const showHowToPlayInfo = () => {
      const popUp = document.getElementsByClassName("how-to-play-info");
      popUp[0].className = `${popUp[0].className} toggle-display`
    }

    const hideHowToPlayInfo = (e) => {
      const popUp = document.getElementsByClassName("how-to-play-info");
      popUp[0].className = "how-to-play-info";
    }

    return (
    <div className="App">
    <small className="notice">Notice: This site does not work on mobile devices!</small>
        {/* Header */}
      <div className="title">
        <h1>ower of Hanoi</h1>
        <Bounce top>T</Bounce>
      </div>
        
       {/* How to play button and pop up message*/}
      <div className="how-to-play-box">
        <p 
          className="btn-how-to-play" 
          onClick={showHowToPlayInfo}>How to Play?
        </p>
        <div className="how-to-play-info">
        <Bounce top>
          <div className="pop-up how-to-play-txt ">
              <p>Transfer the bars to the rightmost tower in the same order.</p> 
                  <p>It is not allowed to put a bar on top of a smaller bar.</p>
              <div 
                className="btn btn-okay" 
                onClick={e => {hideHowToPlayInfo(e)}}
              >
              I'm Ready
              </div> 
          </div>
        </Bounce>  
        </div>
      </div>
      {/* Game box*/}
      <Jello>
        <div className="main">
          {
            <Game 
              key={this.state.restart} 
              items={this.state.items} 
              onGameSolved={onGameSolved} 
              incrementMoves={incrementMoves} 
              gameStatus={this.state.gameStatus}/>
          }  
          </div>
      </Jello>
      {/* Pop up div when game is solved*/}
      {
        this.state.solved 
        ? 
          (<Bounce top>
            <div className="pop-up pop-up-solved">
              <h1>{`You solved it in ${this.state.moves} moves!`}</h1>
              <div 
                className=" btn btn-play-again" 
                onClick={onPlayAgain}
              >
                Play Again?
              </div>
            </div>
          </Bounce>
          ) 
            
        : 
          "" 
      }

      {/* Game Settings/Controls */}
      <div className="btn-box">
        <div className="btn-item-box">
          <p>Item count</p>
          <div className="btn-item-count">
            <p className="btn" onClick={onIncreaseClick}><FontAwesomeIcon icon={faAngleUp}/> Add </p>
            <p className="btn" onClick={onDecreaseClick}><FontAwesomeIcon icon={faAngleDown}/> Minus </p>
          </div>
          <small>( Max 8, Min 3 )</small>
        </div>
        <div className="move-count">
          <h4>Moves: {this.state.moves}</h4>
          <small>{`Minimum moves: ${this.state.minMoves}`}</small>
        </div>
        <div className=" btn btn-restart" onClick={restart}>
          <p><FontAwesomeIcon icon={faRedo}/> Restart!</p>
        </div>
      </div> 
    </div>
  );
  }  
}

export default App;

