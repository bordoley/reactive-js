/// <reference types="./Enumerable.compute.d.ts" />

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toEnumerable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import Enumerable_map from "./Enumerable.map.js";
const Enumerable_compute = 
/*@__PURE__*/ Container_compute(ReadonlyArray_toEnumerable, Enumerable_map);
export default Enumerable_compute;
