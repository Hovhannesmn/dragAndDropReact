import React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const prosource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return
        }


        // Time to actually perform the action
        props.movePros(dragIndex, hoverIndex)

        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex
    },
};




class Pros extends Component {

    updateData = (e) => {
        let  pros = [...this.props.allData];
        let target = e.target;
        let id  = target.id;
        pros.forEach((val, key ) => {
            if (val.id == id) {
                pros[key].text =  target.value;
            }
        });
        this.props.updateData(pros);

    };

    addData = (e) => {
        let pros = [...this.props.allData];
        let index = this.props.index;
        let lenght = pros.length;
        if (index < lenght - 1 || !pros[index].text ) {
            return false;
        }
        debugger;
        pros.push({id : lenght + 1, text : ""});

        this.props.updateData(pros);
    };

    render() {
        const {
            id,
            text,
            isDragging,
            connectDragSource,
            connectDropTarget,
        } = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
			connectDropTarget(
			    <li >
                    <input key={id}
                          onKeyDown = {this.addData.bind(this)}
                          onChange = {this.updateData.bind(this)}
                          style={{ ...style, opacity }}
                          value={text}
                          id={id}
                          type={"text"}/>
                </li>
            ),
        )
    }
}


Pros = DropTarget(ItemTypes.Pros, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))(Pros);
Pros = DragSource(ItemTypes.Pros, prosource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))(Pros);

export default Pros;