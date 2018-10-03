import React from 'react'


function reduceCalories(acum, {calories, quantity})
{
  return acum + calories*quantity
}

function renderFood({calories, name, quantity}, key)
{
  return <li key={key}>{quantity} {name} = {calories*quantity} calories</li>
}


export default function({foods})
{
  return (
    <div>
      <h2>{"Today's foods"}</h2>
      <ul>
        {foods.map(renderFood)}
      </ul>
      <span>Total: {foods.reduce(reduceCalories, 0)} calories</span>
    </div>
  )
}
