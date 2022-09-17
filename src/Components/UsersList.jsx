import React from 'react';

const UsersList = ({forms}) => {
    return (
        <div>
            <ul>
                {
                    forms.map(form => (
                        <li key={form.id}>
                      <div><b>{form.first_name} {form.last_name}</b></div>
                      <div>{form.email}</div>
                      <div>{form.birthday}</div>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default UsersList;