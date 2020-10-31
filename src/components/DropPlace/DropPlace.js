import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropPlace.css';


class DropPlace extends Component {
  
    componentDidMount() {
        const items = document.getElementById("drp1").childNodes;
        //make top item draggable
        items[0].draggable = "true";
    }
   
    onDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const item = document.getElementById(data);
        const child = e.target.childNodes;
        const lastDropPlace = document.getElementById('drp3')
        if(item !== null) {
            const dragFrom = item.parentElement;

            if(child.length === 0) {
                e.target.prepend(item);
                this.props.incrementMoves();
            } else {
               if(item.id < child[0].id) {
                   e.target.prepend(item);
                   this.props.incrementMoves();
               }
           }

           if(dragFrom.childNodes.length > 0) {
               dragFrom.childNodes[0].draggable = "true";  
           }
           
           child.forEach(element => {
               element.removeAttribute("draggable")
           });
           child[0].draggable = "true"
        }
        
        if(this.props.items.length ===  lastDropPlace.childNodes.length) {
            this.props.onGameSolved();
        }
    };

    allowDrop = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div 
                id={this.props.id} 
                onDrop = {this.onDrop} 
                onDragOver={this.allowDrop} 
                className="dropPlace"
            >
                {this.props.children}
            </div>
        );
    }
}

DropPlace.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
};

export default DropPlace;