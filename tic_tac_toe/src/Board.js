import React from 'react';
import * as utils from './functions.js';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null),
            XisNext:true,
        };
    }

    //This will render the squares
    rendersquare(i)
    {
        return <utils.square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }

    //This will handle the clicks
    handleClick(i)
    {
        const squares= this.state.squares.slice();
        if (utils.findWinner(squares) || squares[i])
        {
            return;
        }

        if (utils.are_all_squares_clicked(squares)===true)
        {
            return;
        }

        squares[i]=this.state.XisNext ? 'X' : 'O';

        this.setState({
            squares:squares,
            XisNext:!this.state.XisNext
        })
    }
}