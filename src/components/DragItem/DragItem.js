import React, { Component} from 'react';
import './DragItem.css'
import Bounce from 'react-reveal/Bounce';

class DragItem extends Component {
    drag = (e) => {
        if(e.target.draggable) {
            e.dataTransfer.setData('text', e.target.id);
        }    
    }

    notAllowDrop = (e) => {
        e.stopPropagation();
    }
   
    render() {
        return (
            <div 
                id={this.props.id} 
                onDragStart={this.drag} 
                onDragOver={this.notAllowDrop} 
                className={`item item__${this.props.id}`}>   
            </div>
        );
    }
}

export default DragItem;