/// <reference types="./Observable.forEach.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
const Observable_forEach = ((effect) => pipe(Observer_createForEachObserver, partial(effect), Enumerable_lift));
export default Observable_forEach;
