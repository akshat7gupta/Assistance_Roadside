import React from 'react';
import { string } from 'prop-types';

const Submit = ({ value }) => (
  <input type="submit" value={value} className='button-primary'/>
);

Submit.defaultProps = {
  value: 'SEND',
};

Submit.propTypes = {
  value: string,
};

export default Submit;
