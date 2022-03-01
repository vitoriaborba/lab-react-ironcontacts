import React, {useState} from 'react'
import contactData from'./contacts.json'
import './App.css';

function App() {
  const [contacts, setContacts] = useState(contactData.splice(0,5));

  const addContact = () => {
    const randomContact = contactData[Math.floor(Math.random() * (contactData.length))];
    setContacts([randomContact, ...contacts]);
  }
  const sortPopularity = () => {
    setContacts([...contacts.sort((a,b) => a.popularity < b.popularity ? 1 : -1)])

  }
  const sortName = () => {
    setContacts([...contacts.sort((a,b) => a.name > b.name ? 1 : -1)])
  }
  const deleteMovie = (contactID) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactID
    });
    setContacts(filteredContact)

  }
  return (
    <div className="App"> 

     <h1> IronContacts </h1> 
     <div className='buttons'>
     <button onClick={addContact}> Add Random Contact</button>
     <button onClick={sortPopularity}> Sort by Popularity</button>
     <button onClick={sortName}> Sort by Name</button>
     </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) =>{

          return (
          <tr key={contact.id}> 
          <td> <img src={contact.pictureUrl} alt={contacts.name} /></td>
          <td>{contact.name}</td>
          <td>{(contact.popularity).toFixed(2)}</td>
          <td>{contact.wonOscar?'🏆':' '}</td>
          <td>{contact.wonEmmy?'🏆':' '}</td>
          <td><button className='delete' onClick={() => deleteMovie(contact.id)}>Delete</button></td>
        </tr>
        )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
