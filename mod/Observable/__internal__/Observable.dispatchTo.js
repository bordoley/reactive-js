/// <reference types="./Observable.dispatchTo.d.ts" />

import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { partial, pipe } from "../../functions.js";
const Observable_dispatchTo = ((dispatcher) => pipe(Observer_createDispatchToObserver, partial(dispatcher), Enumerable_lift));
export default Observable_dispatchTo;
