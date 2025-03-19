import React from 'react';

function InvoiceList({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <div key={index} className='flex gap-4 mt-4 justify-center items-center'>
          <p className=''>{user.Name}</p>
          <p className='ml-40'>{user.Date}</p>
          <p className='flex gap-1 justify-center items-center'>
            {user.icons.map((icon, iconIndex) => (
              <span key={iconIndex}>{icon}</span>
            ))}
          </p>
        </div>
      ))}
    </>
  );
}

export default InvoiceList;