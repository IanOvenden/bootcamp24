import PropTypes from 'prop-types';
import { Link } from '@pega/cosmos-react-core';
import React from 'react';

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
const IxdSparkLink = props => {
  const { value, text, variant, overriddenValue } = props;
  const linkValue = value || overriddenValue;
  return (
    <Link href={linkValue} variant={variant}>
      {text}
    </Link>
  );
};

IxdSparkLink.defaultProps = {
  value: 'http://test.com',
  text: 'Link'
};

IxdSparkLink.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string
};

export default IxdSparkLink;
