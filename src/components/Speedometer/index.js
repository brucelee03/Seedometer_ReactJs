import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.speed === 200) {
        return prevState
      }
      return {speed: prevState.speed + 10}
    })
  }

  onApplyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed === 0) {
        return prevState
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <div>
          <img
            className="meter"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="button accelerate"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button brake"
            onClick={this.onApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
