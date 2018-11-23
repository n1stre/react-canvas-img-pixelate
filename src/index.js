import React from "react";
import ReactDOM from "react-dom";
import CanvasImagePixelate from "./CanvasImagePixelate";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CanvasImagePixelate src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoEYuMCYhzWc35SFjEdtAJhhbcUpCgh-pxPeO6JJMgwTmJpCIfw" />
        <CanvasImagePixelate src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEn14QahipLOoHM5GvwmwZELnR_C-1mI49Ad-x8x_WkUihdoL0" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
