import React from 'react'


export default class extends React.Component
{
  state = {quantity: 1}

  render()
  {
    const {addFood, calories, image, name} = this.props
    const {quantity} = this.state

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img alt={name} src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong>
                <br/>
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={({target: {value: quantity}}) => this.setState({quantity})}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => addFood({calories, name, quantity})}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
