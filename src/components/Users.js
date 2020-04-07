import React, { useContext } from 'react';
import UserItems from './UserItems';
import propTypes from 'prop-types';
import Spinner from './Spinner';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItems key={user.id} user={user} />
      ))}
    </div>
  );
};
Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
export default Users;
