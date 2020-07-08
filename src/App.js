import React from "react";
import "./App.css";
import UserItem from "./components/UserItem";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        <div>
          <form>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="submit" />
          </form>
        </div>

        {/* List of users */}
        <div>
          <h3>List of users</h3>
          {this.states.users.map((user,index) =>(
            <UserItem name={user.name} email={user.email} key={index} />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
