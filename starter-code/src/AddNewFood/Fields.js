import React from 'react'


export default function({onChange})
{
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input name="name" onChange={onChange.bind(null, 'name')}/>

      <label htmlFor="calories">Calories</label>
      <input name="calories" type="number" onChange={onChange.bind(null, 'calories')}/>

      <label htmlFor="image">Image</label>
      <input name="image" type="file" onChange={onChange.bind(null, 'image')}/>
    </div>
  )
}
