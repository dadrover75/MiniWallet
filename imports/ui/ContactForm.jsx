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
      <div className="col-lg-6 m-auto p-3">
        <div className="card shadow mb-4 p-3">
    <form >
      <div className="d-sm-flex aligns-items-center justify-content-around mb-1">
        <div className="card shadow m-2 text-center p-2">
          <label  htmlFor="name">Name</label>
          <input type="text" 
                value={name}
                id="name" 
                onChange={(e) => setName( e.target.value )}/>
        </div>
        <div className="card shadow m-2 text-center p-2">
          <label htmlFor="email">Email</label>
          <input type="email" 
                value={email}
                id="email" 
                onChange={(e) => setEmail( e.target.value )}/>
        </div>
        <div className="card shadow m-2 text-center p-2">
          <label htmlFor="imageURL">Image</label>
          <input type="text" 
                value={imageURL}
                id="imageURL" 
                onChange={(e) => setImageURL(e.target.value)}/>
        </div>
        </div>        
        <div>
          <button className="btn btn-secondary btn-lg btn-block" type="button" 
                onClick={saveContact}>Save Contact</button>
        </div>

      </form>
      </div>
      </div>
      );
}
