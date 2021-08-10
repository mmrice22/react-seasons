import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this is the only time we do direct assignment to this.state
    // to change state, you always call setState
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => {
        // we called setState to update our state
        this.setState({ lat: position.coords.latitude });
      },
      // error callback
      (err) => this.setState({ errorMessage: err.message })
    );
  }


  // we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
