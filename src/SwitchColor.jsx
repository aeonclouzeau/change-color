import PropTypes from "prop-types";

const SwitchColor = ({ onChangeColor }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change Color
    </button>
  );
};

SwitchColor.propTypes = {
  onChangeColor: PropTypes.func,
};

export default SwitchColor;
