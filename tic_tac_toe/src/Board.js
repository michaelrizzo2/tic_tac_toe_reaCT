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

    render()
    {
        const winner=utils.findWinner(this.state.squares);
        const isFilled=utils.are_all_squares_clicked(this.state.squares);
        let status;
        if (winner)
        {
            status= "Winner: "+ winner;
        }
        else if (!winner && isFilled)
        {
            status="Game Drawn";
        }
        else
        {
            status=" Now" + (this.state.XisNext ? "X" : "O") + "'s turn";
        }
        return(
            <div>
            <div className ="status">{status}</div>
            <div className ="board-row">
                {this.rendersquare(0)}
                {this.rendersquare(1)}
                {this.rendersquare(2)}
            </div>
            <div className ="board-row">
                {this.rendersquare(3)}
                {this.rendersquare(4)}
                {this.rendersquare(5)}
            </div>
            <div className ="board-row">
                {this.rendersquare(6)}
                {this.rendersquare(7)}
                {this.rendersquare(8)}
            </div>

            </div>
        )
    }
}

export default Board;