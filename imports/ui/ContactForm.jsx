import React from 'react';
import { ContactsCollection } from '../api/ContactCollection';

export const ContactForm = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [imageURL, setImageURL] = React.useState('');

    const saveContact = () => {
        ContactsCollection.insert({name, email, imageURL});
        setName('');
        setEmail('');
        setImageURL('');
    }

    return (
    <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" 
                value={name}
                id="name" 
                onChange={(e) => setName( e.target.value )}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" 
                value={email}
                id="email" 
                onChange={(e) => setEmail( e.target.value )}/>
        </div>
        <div>
          <label htmlFor="imageURL">Image</label>
          <input type="text" 
                value={imageURL}
                id="imageURL" 
                onChange={(e) => setImageURL(e.target.value)}/>
        </div>
        <div>
          <button type="button" 
                onClick={saveContact}>Save Contact</button>
        </div>
      </form>
      );
}
