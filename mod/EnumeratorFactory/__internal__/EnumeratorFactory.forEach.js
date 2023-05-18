/// <reference types="./EnumeratorFactory.forEach.d.ts" />

import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_forEach = (effect) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_forEach(effect));
export default EnumeratorFactory_forEach;
