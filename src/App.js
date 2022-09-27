import { Component } from "react";
import Animal from "./components/Animal";
import TypButton from "./components/TypButton";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typ: ""
    }
  }

  onClick = (event) => {
    this.setState({ typ: event.target.innerHTML })
  }
  
  render() {
    let typ = this.state.typ;
    return (
      <>
        <TypButton onClick={this.onClick} />
        {
          typ !== "" ? <Animal type={typ} /> : <h1 className="text-center font-bold text-3xl">Select type</h1>
        }
      </>
    );
  }
}

export default App;