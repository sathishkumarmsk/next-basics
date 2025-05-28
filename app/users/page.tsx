import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
    const Users: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-borderd border-2'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email </th>
            </tr>
        </thead>
        <tbody>
        {Users.map(usr => <tr key={usr.id}><td>{usr.name}</td>
        <td>{usr.email}</td> </tr>)}
        </tbody>
        
      </table>
    </div>
  )
}

export default UserPage
