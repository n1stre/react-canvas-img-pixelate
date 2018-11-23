import React from "react";

class CanvasImagePixelate extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.imageRef = React.createRef();
    this.state = {
      imageLoaded: false,
      hideCanvas: false,
      canvasOpacity: 0.5,
      gridX: 15,
      gridY: 15
    };
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  createCanvas = evt => {
    const { width, height } = evt.target.getBoundingClientRect();
    this.setState({ imageLoaded: true, width, height });
  };

  updateCanvas = () => {
    if (
      !this.canvasRef ||
      !this.imageRef ||
      !this.canvasRef.current ||
      !this.imageRef.current
    ) {
      return;
    }

    const { width, height } = this.state;
    const ctx = this.canvasRef.current.getContext("2d");
    const w = this.state.gridX;
    const h = this.state.gridY;

    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.imageRef.current, 0, 0, w, h);
    ctx.drawImage(this.canvasRef.current, 0, 0, w, h, 0, 0, width, height);
  };

  onClick = () => {
    this.setState(state => ({ hideCanvas: !state.hideCanvas }));
  };

  makeOnRangeChange = side => evt => {
    this.setState({ [side]: Number(evt.target.value) });
  };

  onOpacityChange = evt => {
    this.setState({ canvasOpacity: (evt.target.value * 0.01).toFixed(2) });
  };

  render() {
    return (
      <div className="wrapper">
        <p>
          x:{" "}
          <input
            type="range"
            min={2}
            max={100}
            value={this.state.gridX}
            onChange={this.makeOnRangeChange("gridX")}
          />
          {this.state.gridX}
        </p>
        <p>
          y:{" "}
          <input
            type="range"
            min={2}
            max={100}
            value={this.state.gridY}
            onChange={this.makeOnRangeChange("gridY")}
          />
          {this.state.gridY}
        </p>
        <p>
          o:{" "}
          <input
            type="range"
            min={0}
            max={100}
            onChange={this.onOpacityChange}
          />
          {this.state.canvasOpacity}
        </p>

        <div className="canvasContainer">
          <img
            alt="base img"
            src={this.props.src}
            ref={this.imageRef}
            onLoad={this.createCanvas}
          />
          {this.state.imageLoaded && (
            <canvas
              style={{ opacity: this.state.canvasOpacity }}
              className={this.state.hideCanvas ? "is-hidden" : ""}
              ref={this.canvasRef}
              width={this.state.width}
              height={this.state.height}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CanvasImagePixelate;
