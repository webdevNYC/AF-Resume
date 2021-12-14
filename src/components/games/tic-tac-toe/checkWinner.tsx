export default function checkWinner(board: any, currentPlayer: any) {
  const winnerPlays = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
  ];
  const allEqual = (arr: any) => arr.every((v) => v === true);

  // filter all the plays for the current player
  const PlayerArray = board.reduce(function plays(a, e, i) {
    if (e === currentPlayer) a.push(i.toString());
    return a;
  }, []);
  // console.log('PlayerArray', PlayerArray);

  const playerResult = winnerPlays.map((item) =>
    item.map((turn) => PlayerArray.includes(turn))
  );

  // each line is an array with 3 elements if all are true it means that is a winner
  const checkUserWinner = playerResult
    .map((item: any) => allEqual(item))
    .includes(true);
  return checkUserWinner;
}
