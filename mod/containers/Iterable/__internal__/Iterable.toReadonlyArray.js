/// <reference types="./Iterable.toReadonlyArray.d.ts" />

import { compose, returns } from "../../../functions.js";
import Runnable_toReadonlyArray from "../../../rx/Runnable/__internal__/Runnable.toReadonlyArray.js";
import Iterable_toRunnable from "./Iterable.toRunnable.js";
const Iterable_toReadonlyArray = 
/*@__PURE__*/ (() => returns(compose(Iterable_toRunnable(), Runnable_toReadonlyArray())))();
export default Iterable_toReadonlyArray;
