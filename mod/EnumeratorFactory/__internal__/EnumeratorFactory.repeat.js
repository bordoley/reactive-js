/// <reference types="./EnumeratorFactory.repeat.d.ts" />

import ReadonlyArray_repeat from "../../ReadonlyArray/__internal__/ReadonlyArray.repeat.js";
import ReadonlyArray_toEnumeratorFactory from "../../ReadonlyArray/__internal__/ReadonlyArray.toEnumeratorFactory.js";
import { pipe } from "../../functions.js";
import EnumeratorFactory_concatAll from "./EnumeratorFactory.concatAll.js";
const EnumeratorFactory_repeat = (count) => (factory) => 
// FIXME: This is kind of an awful implmentation.
pipe([factory], ReadonlyArray_repeat(count), ReadonlyArray_toEnumeratorFactory(), EnumeratorFactory_concatAll());
export default EnumeratorFactory_repeat;
