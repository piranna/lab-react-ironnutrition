import 'bulma/css/bulma.css';
import React, { Component } from 'react';

import AddNewFood from './AddNewFood'
import FoodBox    from './FoodBox'
import TodayFood  from './TodayFood'

import './App.css';

import logo  from './logo.svg';
import foods from './foods.json'


function filterFood({name})
{
  return name.toLowerCase().includes(this.toString())
}


class App extends Component {
  state =
  {
    foods,
    todayFoods: []
  }

  _addTodayFood = food =>
  {
    this.setState({todayFoods: [...this.state.todayFoods, food]})
  }

  _onNewFood = food =>
  {
    this.setState({foods: [...this.state.foods, food]})
  }

  _renderFoodBox = (food, key) =>
  {
    return <FoodBox addFood={this._addTodayFood} key={key} {...food}/>
  }

  render() {
    let {foods, search, todayFoods} = this.state

    if(search) foods = foods.filter(filterFood, search.toLowerCase())

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <input onChange={({target: {value: search}}) => this.setState({search})}/>
        <br/>
        <AddNewFood onNewFood={this._onNewFood}/>
        <div style={{display: 'flex'}}>
          <div>
            {foods.map(this._renderFoodBox)}
          </div>
          <TodayFood foods={todayFoods}/>
        </div>
      </div>
    );
  }
}


export default App;
