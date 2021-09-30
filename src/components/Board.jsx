import React, { useEffect, useState } from 'react';
import Rows from './Rows';
// import Squares from './Squares';

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [game, setGame] = useState({});
  let active = true;

  const initialJSX = (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div className='board'>
        <Rows
          fillSquare={fillSquare}
          board={board}
          game={game}
          active={active}
        />
      </div>
    </>
  );

  const [JSX, setJSX] = useState(initialJSX);

  let round = 0;

  function fillSquare(sqId) {
    const player = round % 2 === 0 ? 'X' : 'O';
    board[sqId] = player;
    console.log(`Ronda: ${round}, jugador ${player}, ha colocado en ${sqId}`);
    round++;
    setBoard(board);
    const solutions = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < solutions.length; i++) {
      const [a, b, c] = solutions[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        const Winner = board[a];
        active = false;
        setGame({
          finished: true,
          winner: Winner,
          solution: solutions[i],
          active: { active },
        });
      }
    }
    if (!board.includes(null)) {
      active = false;
      const newJSX = (
        <>
          <h1>Tic-Tac-Toe</h1>
          <div className='endGame'>
            <h1>It was a tie!</h1>
          </div>
          <Rows
            fillSquare={fillSquare}
            board={board}
            active={active}
            game={game}
          />
        </>
      );
      return setJSX(newJSX);
    }
  }

  useEffect(() => {
    if (game.finished) {
      console.log(game);
      const newJSX = (
        <>
          <h1>Tic-Tac-Toe</h1>
          <div className='endGame'>
            <h1>Ha ganado {game.winner}</h1>
          </div>
          <Rows fillSquare={fillSquare} board={board} game={game} />
        </>
      );
      return setJSX(newJSX);
    }
  }, [game]);

  return JSX;
}
