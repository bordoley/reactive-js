/// <reference types="./Iterable.toRunnable.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toRunnable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnable.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";
const Iterable_toRunnable = 
/*@__PURE__*/ returns(compose(Iterable_toEnumerable(), Enumerable_toRunnable()));
export default Iterable_toRunnable;
