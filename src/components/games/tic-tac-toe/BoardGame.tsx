const Space = (props: any) => {
  const { name, board, onClick, disabled } = props;
  const currentClass = `w-full h-full bg-gray-300`;
  return (
    <div className="box-border h-16 w-16  border-4 border-white">
      <button
        type="button"
        key={name}
        defaultValue={0}
        name={name}
        className={currentClass}
        onClick={onClick}
        disabled={disabled}
      >
        {' '}
        {board[name]}
      </button>
    </div>
  );
};

const BoardGame = (props: any) => {
  const { board, onClick, disabled } = props;
  return (
    <div className="w-40 grid grid-cols-3 pb-3">
      {board.map(
        (item: any, index = 0): JSX.Element => (
          <Space
            item={item}
            key={index}
            name={index}
            onClick={onClick}
            board={board}
            disabled={disabled}
          />
        )
      )}
    </div>
  );
};
export default BoardGame;
