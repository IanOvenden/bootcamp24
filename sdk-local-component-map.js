// Statically load all "local" components that aren't yet in the npm package

import AutoComplete from './src/components/override-sdk/field/AutoComplete/';
import TextInput from './src/components/override-sdk/field/TextInput/';
/*import end - DO NOT REMOVE*/

// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

const localSdkComponentMap = {
  "AutoComplete" : AutoComplete,
  "TextInput" : TextInput,
/*map end - DO NOT REMOVE*/
};

export default localSdkComponentMap;
