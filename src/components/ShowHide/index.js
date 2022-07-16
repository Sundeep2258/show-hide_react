import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="section">
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>

            {showFirstName && <p className="para">Joe</p>}
          </div>
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
