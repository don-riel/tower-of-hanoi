import React, { useEffect } from 'react';
import DropPlace from '../DropPlace/DropPlace'
import DragItem from '../DragItem/DragItem'

import './Game.css'

const Game = ({...props}) => {
 
    return (
        <div className="game-wrapper">
            <DropPlace id="drp1" items={props.items} onGameSolved={props.onGameSolved} incrementMoves={props.incrementMoves}>
                {props.items.map(item => {
                    return (
                        <DragItem key={item} id={item} />   
                    )
                })}
            
            
            </DropPlace>
            <DropPlace id="drp2" items={props.items} onGameSolved={props.onGameSolved} incrementMoves={props.incrementMoves}></DropPlace>
            <DropPlace id="drp3" items={props.items} onGameSolved={props.onGameSolved} incrementMoves={props.incrementMoves}></DropPlace>
        </div>
    );
};

export default Game;