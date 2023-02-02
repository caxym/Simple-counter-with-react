import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'




const App = (props) => {
  return <div>
    <div className="container p-4">
      <div className="row bg-black text-light d-flex fs-1">
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text"><FontAwesomeIcon icon={faClock} size="2x" /></p>
          </div>
        </div>
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text">0</p>
          </div>
        </div>
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text">0</p>
          </div>
        </div>
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text">{props.numberFour % 10}</p>
          </div>
        </div>
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text">{props.numberThree % 10}</p>
          </div>
        </div>
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text">{props.numberTwo % 10}</p>
          </div>
        </div>
        <div class="col card text-bg-secondary m-3 text-center align-self-center">
          <div class="card-body">
            <p class="card-text">{props.numberOne % 10}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
};
export default App;
