import React from 'react'

const ListItems = ({
  items,
  deleteItem,
  total
}) => (
  <div>
    {items.map((item, i) =>
      (<li key={i}>{item.power_item}: {item.power_value} Watts
      <button className="" onClick={() => deleteItem(i)}>x</button>
      </li>)
    )}

      <h1><span>Total power rating:</span> {total}</h1>
  </div>
)

export default ListItems