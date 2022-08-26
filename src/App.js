import "./App.css";
import React from "react";

class Person extends React.Component {
  render() {
    console.log("Person render");
    const { name, age } = this.props;
    return (
      <div>
        {name} / {age}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    text: "",
    persons: [
      { id: 1, name: "SKY", age: 35 },
      { id: 2, name: "SoltBae", age: 340 },
    ],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    const { text, persons } = this.state;
    return (
      <div>
        <input type="text" value={text} onChange={this._change} />
        <ul>
          {persons.map((person) => {
            return <Person {...person} key={person.id} />;
          })}
        </ul>
      </div>
    );
  }

  _change = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
    });
  };
}

export default App;
