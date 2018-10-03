import React from 'react'

import Fields from './Fields'


export default class extends React.Component
{
  state = {food: {}}

  _close = () => this.setState({open: false})

  _onChange = (key, {target: {value}}) =>
  {
    this.setState({food: {...this.state.food, [key]: value}})
  }

  _submit = () =>
  {
    this.props.onNewFood({...this.state.food, quantity: 1})

    this._close()
  }

  render()
  {
    if(!this.state.open)
      return <button onClick={() => this.setState({open: true})}>Add new food</button>

    return (
      <div>
        <Fields onChange={this._onChange}/>
        <button onClick={this._close}>Cancel</button>
        <button onClick={this._submit}>Submit</button>
      </div>
    )
  }
}
