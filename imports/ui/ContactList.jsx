import React from 'react';
import { ContactsCollection } from '../api/ContactCollection';
import { useTracker } from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => { 
        
        return ContactsCollection.find({}).fetch();}) 
    return (
        <div className="col-lg-6 rounded m-auto  w-50">
            <div className="card shadow">
            <h3 className="m-2 text-center font-weight-bold text-gray-800">Contact List</h3>
            {contacts.map((contact) => (
                <li className="list-group-item" key={contact.email}>
                    <div className='container-fluid'>
                        <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <img src={contact.imageURL} className="shadow border border-4 rounded-circle img-fluid" />
                        </div>
                        <div className={contact.online ? "font-weight-bold text-success col-xl-9 col-lg-9 col-md-9" : "text-gray-600 col-xl-9 col-lg-9 col-md-9"}>
                            {contact.name} | {contact.email}
                        </div>
                            
                    </div>
                    </div>
                </li>))}
        </div>
        </div>
        
    );
}