/// <reference types="./Enumerable.switchAll.d.ts" />

import HigherOrderObservable_switchAll from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(Enumerable_lift);
export default Enumerable_switchAll;
