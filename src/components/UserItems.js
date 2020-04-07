import React from 'react';
import { Link } from 'react-router-dom';

const UserItems = props => {
  const { login, avatar_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='img'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h2>{login}</h2>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark button-small my-1'>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default UserItems;
