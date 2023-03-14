/// <reference types="./Iterable.toReadonlyArray.d.ts" />

import { compose, returns } from "../../../functions.js";
import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import Iterable_enumerate from "./Iterable.enumerate.js";
const Iterable_toReadonlyArray = 
/*@__PURE__*/ (() => returns(compose(Iterable_enumerate(), Enumerator_toReadonlyArray())))();
export default Iterable_toReadonlyArray;
