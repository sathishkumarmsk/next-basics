import React from 'react'

interface User {
    id: number;
    name: string;

}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const Users: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {Users.map(usr => <li key={usr.id}>{usr.name}</li>)}
      </ul>
    </div>
  )
}

export default UserPage
