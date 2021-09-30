import React, { useState } from 'react';

export default function Squares({ sPos, fillSquare, board, active, game }) {
  const [reLoad, setReload] = useState(false);
  const handleMouseDown = (e) => {
    e.target.style.backgroundColor = '#efefef5c';
  };
  const handleMouseUp = (e) => {
    e.target.style.backgroundColor = '';
  };
  const handleOnMouseOver = (e) => {
    e.target.style.backgroundColor = '#efefef1c';
  };
  const handleOnMouseOut = (e) => {
    e.target.style.backgroundColor = '';
  };
  let divs = [];
  const handleClick = (e) => {
    console.log(game);
    e.target.style.pointerEvents = 'none';
    fillSquare(e.target.attributes[1].value);
    setReload(!reLoad);
  };
  //   for (let i = Number(sPos); i <= Number(sPos) + 2; i++) {
  //     divs.push(
  //       <div
  //         style={{ pointerEvents: active ? '' : 'none' }}
  //         key={i}
  //         className='square'
  //         data-index={i}
  //         onMouseOver={handleOnMouseOver}
  //         onMouseLeave={handleOnMouseOut}
  //         onMouseDown={handleMouseDown}
  //         onMouseUp={handleMouseUp}
  //         onClick={handleClick}
  //       >
  //         {board[i]}
  //       </div>
  //     );
  //   }
  if (game.finished) {
    for (let i = Number(sPos); i <= Number(sPos) + 2; i++) {
      if (game.solution.includes(i)) {
        divs.push(
          <div
            style={{ pointerEvents: active ? '' : 'none' }}
            key={i}
            className='square winner'
            data-index={i}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseOut}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
          >
            {board[i]}
          </div>
        );
      } else {
        divs.push(
          <div
            style={{ pointerEvents: active ? '' : 'none' }}
            key={i}
            className='square loser'
            data-index={i}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseOut}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
          >
            {board[i]}
          </div>
        );
      }
    }
  } else {
    for (let i = Number(sPos); i <= Number(sPos) + 2; i++) {
      divs.push(
        <div
          style={{ pointerEvents: active ? '' : 'none' }}
          key={i}
          className='square'
          data-index={i}
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseOut}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
        >
          {board[i]}
        </div>
      );
    }
  }
  return divs.map((div) => div);
}
