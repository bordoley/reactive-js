/// <reference types="./EnumeratorFactory.flatMapIterable.d.ts" />

import Enumerator_flatMapIterable from "../../Enumerator/__internal__/Enumerator.flatMapIterable.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_flatMapIterable = (selector) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_flatMapIterable(selector));
export default EnumeratorFactory_flatMapIterable;
