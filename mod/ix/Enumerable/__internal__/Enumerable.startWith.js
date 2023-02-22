/// <reference types="./Enumerable.startWith.d.ts" />

import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import Enumerable_concatWith from "./Enumerable.concatWith.js";
const Enumerable_startWith = 
/*@__PURE__*/ Container_startWith(Enumerable_concatWith, ReadonlyArray_toEnumerable);
export default Enumerable_startWith;
