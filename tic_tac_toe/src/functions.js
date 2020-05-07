import React from 'react';

export function square(props)
{
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export function findWinner(squares)
{
    const lines=[[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
        [2, 4, 6]]
    
    for (let index=0; index<lines.length;index++)
    {
        const [a,b,c]=lines[index];
        if (squares[a] && squares ===squares[b] && squares[a]===squares[c])
        {
            return squares[a]
        }

    }
    return null;
}

export function are_all_squares_clicked(squares)
{
    let count=0;
    squares.forEach(function(item)
    {
        if (item!=null)
        {
            count++;
        }
    });

    if (count===9)
    {
        return true;
    }

    else
    {
        return false;
    }
} 