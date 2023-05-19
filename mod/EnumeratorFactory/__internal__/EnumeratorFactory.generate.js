/// <reference types="./EnumeratorFactory.generate.d.ts" />

import Enumerator_generate from "../../Enumerator/__internal__/Enumerator.generate.js";
const EnumeratorFactory_generate = (generator, initialValue) => () => Enumerator_generate(generator, initialValue);
export default EnumeratorFactory_generate;
