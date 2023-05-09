/// <reference types="./Observable.map.d.ts" />

import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { partial, pipe } from "../../functions.js";
const Observable_map = ((selector) => pipe(Observer_createMapObserver, partial(selector), Enumerable_lift));
export default Observable_map;
