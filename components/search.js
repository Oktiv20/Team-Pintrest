// import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <input type="text" placeholder="Search" onChange={handleChange} value={searchInput} />
    </>
  );
}

// Search.propTypes = {
//   searchInput: PropTypes.string,
//   setSearchInput: PropTypes.func,
// };

Search.defaultProps = {
  searchInput: '',
  setSearchInput: '',
};
