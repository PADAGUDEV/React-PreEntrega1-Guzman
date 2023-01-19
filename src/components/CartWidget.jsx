import React from 'react';
import './CartWidget.css'
const NavigationBar = ({ visible }) => ( 
    <div id="navbar" className={visible ? 'slideIn swing' : 'slideOut'} >
    Hello
    </div>
)

class App extends React.Component {

    constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { visible: false }
    }

    handleClick() {
    this.setState(prev => ({ visible: !prev.visible }))
    }
    
    render() {
    return (
        <div id="App">
        <button type="button" onClick={this.handleClick}>
            {this.state.visible ? 'Hide navbar' : 'Show navbar'}
        </button>
        <hr />
        <NavigationBar visible={this.state.visible} />
        </div>
    )
    }
}
export default App
// ReactDOM.render(<App />, document.getElementById("root"))