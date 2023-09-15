import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
  const [groups, setGroups] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch("http://localhost:4000/api/groups")
      const json = await response.json()
      if (response.ok) {
        setGroups(json)
      }
    }
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4000/api/items")
      const json = await response.json()
      if (response.ok) {
        setItems(json)
      }
    }
    fetchGroups()
    fetchItems()
  }, [])

  return (
    <div>
      <h1>Groups</h1>
      <ul>
        {groups.map((group) => (
          <li key={group._id}>{group.title}</li>
        ))}
      </ul>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home