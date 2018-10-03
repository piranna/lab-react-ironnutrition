import React from 'react'


export default class extends React.Component
{
  state = {open: false}

  _close = () => this.setState({open: false})

  _open = () => this.setState({open: true})

  _submit = () =>
  {
    this._close()

    this.props.onSubmit({
      calories: this.state.calories,
      image: this.state.image,
      name: this.state.name
    })
  }

  render()
  {
    if(!this.state.open)
      return <button onClick={this._open}>Add new food</button>

    return (
      <div>
        <label for="name">Name</label>
        <input name="name" onChange={event => this.setState({name: event.target.value})}/>

        <label for="calories">Calories</label>
        <input name="calories" type="number" onChange={({target: {value}}) => this.setState({calories: value})}/>

        <label for="image">Image</label>
        <input name="name" type="file" onChange={({target: {value}}) => this.setState({image: value})}/>

        <button onClick={this._close}>Cancel</button>
        <button onClick={this._submit}>Submit</button>
      </div>
    )
  }
}
