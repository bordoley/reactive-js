/// <reference types="./Observable.map.d.ts" />

import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPureObservableOperator from "./Observable.liftPureObservableOperator.js";
const Observable_map = (selector) => {
    const op = pipe((Observer_createMapObserver), partial(selector));
    return Observable_liftPureObservableOperator(Enumerator_map(selector), op);
};
export default Observable_map;
