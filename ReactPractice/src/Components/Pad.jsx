function Pad(props) {
  console.log(props);

  const styles = {
    backgroundColor: props.color,
  };
  return (
    <>
      <button
        style={styles}
        className={props.on ? "on" : "off"}
        onClick={() => props.toggle(props.id)}
      ></button>
    </>
  );
}

export default Pad;
