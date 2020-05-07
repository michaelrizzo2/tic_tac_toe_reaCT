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
}