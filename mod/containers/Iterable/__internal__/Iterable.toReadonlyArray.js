/// <reference types="./Iterable.toReadonlyArray.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerable_toReadonlyArray from "../../../ix/Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";
const Iterable_toReadonlyArray = 
/*@__PURE__*/ (() => returns(compose(Iterable_toEnumerable(), Enumerable_toReadonlyArray())))();
export default Iterable_toReadonlyArray;
