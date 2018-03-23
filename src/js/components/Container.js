import React, { Component } from 'react'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {connect} from 'react-redux';

import Pros from './Pros';
import Cons from './Cons';
import data from './dataSource'

class Container extends Component {
    constructor(props) {
        super(props);
        this.moveCons = this.moveCons.bind(this);
        this.movePros = this.movePros.bind(this);
        this.updateData = this.updateData.bind(this);
        this.state = data;
    }

    moveCons(dragIndex, hoverIndex) {
        const { cons } = this.state;
        const dragCard = cons[dragIndex];
        debugger;
        let a = update(this.state, {
            cons: {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
            },
        });

        this.setState(a)
    }

    movePros(dragIndex, hoverIndex) {
        const { pros } = this.state;
        const dragCard = pros[dragIndex];

        this.setState(
            update(this.state, {
                pros: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            })
        );
    }


    updateData(newData, isPros = true) {
        let newState = {};
        if (isPros){
             newState =  {
                ...this.state,
                pros : newData,
            };
        } else {
            newState =  {
                ...this.state,
                cons : newData,
            };
        }
        this.setState(newState)
    }


    render() {
        const { pros } = this.state;
        const { cons } = this.state;

        return (
			<div>

                <div className="">
                    <div className="leftPart left">

                    </div>
                    <div className="center left ">
                        <div className="row header-box">
                            <div className="col-xs-12 col-md-12 text-center ">
                                Should I eat at McDonalds
                            </div>
                        </div>
                        <div className="row initial-bold" style={{border: "1px solid"}}>
                            <div className="col-xs-12 col-md-6 left-header-box ">
                                Pros
                            </div>
                            <div className="col-xs-12 right-header-box  col-md-6 ">Cons</div>
                        </div>
                        <div className="row" style={{border: "1px solid"}}>
                            <div className="col-xs-12 col-md-6 border-right text-center min-height-box">
                                <ol className="center">
                                {pros.map((card, i) => (
                                    <Pros
                                        key={card.id}
                                        index={i}
                                        id={card.id}
                                        text={card.text}
                                        allData={pros}
                                        movePros={this.movePros}
                                        updateData = {this.updateData}
                                    />
                                ))}
                                </ol>

                            </div>
                            <div className="col-xs-12 col-md-6 text-center min-height-box">
                                <ol className="center">
                                        {cons.map((card, i) => (
                                            <Cons
                                                key={card.id}
                                                index={i}
                                                id={card.id}
                                                text={card.text}
                                                allData={cons}
                                                moveCons ={this.moveCons}
                                                updateData = {this.updateData}
                                                addData = {this.addData}
                                            />
                                        ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        data       : state.dataReducer.data,
    };
};

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(Container));



