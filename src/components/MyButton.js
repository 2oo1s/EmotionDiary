const MyButton = ({ text, type, onClick }) => {
  // type에 이상한 값이 들어오면 default값으로 반환
  const btnType = ["positive", "negative"].includes(type) ? type : `default`;

  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
