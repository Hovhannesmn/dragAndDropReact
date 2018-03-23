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

const consource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
};

let id = 1;

const consTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Time to actually perform the action
        props.moveCons(dragIndex, hoverIndex)

        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex
    },
};




class Cons extends Component {

    updateData = (e) => {
        let cons = [...this.props.allData];
        let target = e.target;
        let id  = target.id;

        cons.forEach((val, key ) => {
            if (val.id == id) {
                cons[key].text = target.value;
                if (target.value === "") {
                    cons.splice(key, 1);
                    return this.props.updateData(cons, false);
                }
            }
        });
        this.props.updateData(cons, false);

    };

    addData = (e) => {
        let cons = [...this.props.allData];
        let index = this.props.index;
        let lenght = cons.length;
        if (index < lenght - 1 || !cons[index].text ) {
            return false;
        }
        debugger;
        id ++;
        cons.push({id : id, text : ""});

        this.props.updateData(cons, false);
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


Cons = DropTarget(ItemTypes.Cons, consTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))(Cons);
Cons = DragSource(ItemTypes.Cons, consource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))(Cons);

export default Cons;