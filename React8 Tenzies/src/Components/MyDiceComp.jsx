export default function MyDiceComp(props) {
  console.log(props);
  const color = props.selected ? "#59e391" : "#f5f5f5";
  const styles = {
    backgroundColor: color,
  };
  return (
    <button
      onClick={() => props.toggle(props.id)}
      style={styles}
      className="btn"
    >
      {props.number}
    </button>
  );
}
