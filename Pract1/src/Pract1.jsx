import React from 'react'

function Pract1() {
let [name, setName] = React.useState('Name');
  function updateName() {
    let newName = prompt('Enter new name');
    setName(newName);
  }
return (
    <div>
        <h1>{name}</h1>
        <button onClick={updateName}>Update name</button>
    </div>
  )
}

export default Pract1;