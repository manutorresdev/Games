import React from 'react';
import Squares from './Squares';

export default function Rows({ fillSquare, board, game, active }) {
  //   winners = [a,b,c]
  return (
    <>
      <div className='b-row first-row'>
        {game.finished ? (
          <Squares
            sPos='0'
            fillSquare={fillSquare}
            board={board}
            game={game}
            active={active}
          />
        ) : (
          <Squares
            sPos='0'
            fillSquare={fillSquare}
            board={board}
            game={game}
            active={active}
          />
        )}
      </div>
      <div className='b-row second-row'>
        {game.finished ? (
          <Squares
            sPos='3'
            fillSquare={fillSquare}
            board={board}
            game={game}
            active={active}
          />
        ) : (
          <Squares
            sPos='3'
            fillSquare={fillSquare}
            board={board}
            game={game}
            active={active}
          />
        )}
      </div>
      <div className='b-row third-row'>
        {game.finished ? (
          <Squares
            sPos='6'
            fillSquare={fillSquare}
            board={board}
            game={game}
            active={active}
          />
        ) : (
          <Squares
            sPos='6'
            fillSquare={fillSquare}
            board={board}
            game={game}
            active={active}
          />
        )}
      </div>
    </>
  );
}
