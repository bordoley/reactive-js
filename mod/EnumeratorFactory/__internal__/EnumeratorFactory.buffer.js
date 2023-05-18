/// <reference types="./EnumeratorFactory.buffer.d.ts" />

import Enumerator_buffer from "../../Enumerator/__internal__/Enumerator.buffer.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_buffer = (options) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_buffer(options));
export default EnumeratorFactory_buffer;
