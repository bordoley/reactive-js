/// <reference types="./Observable.keep.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
const Observable_keep = ((predicate) => pipe(Observer_createKeepObserver, partial(predicate), Enumerable_lift));
export default Observable_keep;
