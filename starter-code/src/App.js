import React, { Component } from 'react';

import 'bulma/css/bulma.css';

import './App.css';

import logo from './logo.svg';

import AddNewFood from './AddNewFood'
import FoodBox    from './FoodBox'
import TodayFoods from './TodayFoods'


import foods from './foods.json'


function filterFood({name})
{
  return name.toLowerCase().includes(this.toString())
}


class App extends Component
{
  state = {
    foods,
    search: '',
    todayFoods: []
  }

  _addFood = food =>
  {
    this.setState({todayFoods: [...this.state.todayFoods, food]})
  }

  _renderFoodBox = (food, key) => <FoodBox addFood={this._addFood} key={key} {...food}/>

  render() {
    const {foods, search, todayFoods} = this.state

    let filteredFoods = foods

    if(search) filteredFoods = filteredFoods.filter(filterFood, search.toLowerCase())

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <div style={{display: 'flex'}}>
          <input onChange={({target: {value: search}}) => this.setState({search})}/>
          <AddNewFood onSubmit={food => this.setState({foods: [...foods, food]})}/>
          <div>
            {filteredFoods.map(this._renderFoodBox)}
          </div>

          <TodayFoods foods={todayFoods}/>
        </div>
      </div>
    );
  }
}

export default App;
