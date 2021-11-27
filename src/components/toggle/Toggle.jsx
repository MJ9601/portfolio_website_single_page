import { FaMoon, FaSun } from "react-icons/fa";
import "./Toggle.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

function Toggle() {
  const context = useContext(ThemeContext);
  const darkMode = context.state.darkMode;

  const handelClick = () => {
    context.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle" onClick={handelClick}>
      {darkMode ? <FaSun className="sun" /> : <FaMoon className="moon" />}
    </div>
  );
}

export default Toggle;
