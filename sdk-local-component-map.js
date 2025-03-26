// Statically load all "local" components that aren't yet in the npm package

import Currency from './src/components/override-sdk/field/Currency/';
/* import end - DO NOT REMOVE */

// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

const localSdkComponentMap = {
  // eslint-disable-next-line object-shorthand
  Currency: Currency
  /* map end - DO NOT REMOVE */
};

export default localSdkComponentMap;
