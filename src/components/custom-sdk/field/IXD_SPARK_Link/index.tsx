import PropTypes from 'prop-types';
import { Image } from '@pega/cosmos-react-core';
import StyledIxdSparkLinkWrapper from './styles';

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
const IxdSparkLink = props => {
  const { value, overriddenValue } = props;
  const linkValue = value || overriddenValue;
  return (
    <StyledIxdSparkLinkWrapper>
      <Image src={linkValue} alt='Pega' className='ixd-spark-image'/>
    </StyledIxdSparkLinkWrapper>
  );
};

IxdSparkLink.defaultProps = {
  value: 'http://test.com'
};

IxdSparkLink.propTypes = {
  value: PropTypes.string,
  overriddenValue: PropTypes.string
};

export default IxdSparkLink;
