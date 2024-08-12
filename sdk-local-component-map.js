// Statically load all "local" components that aren't yet in the npm package

import IxdSparkLink from './src/components/custom-sdk/field/IXD_SPARK_Link/';
import Url from './src/components/override-sdk/field/URL/';
/*import end - DO NOT REMOVE*/

// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

const localSdkComponentMap = {
  "IXD_SPARK_Link" : IxdSparkLink,
  "URL" : Url,
/*map end - DO NOT REMOVE*/
};

export default localSdkComponentMap;
