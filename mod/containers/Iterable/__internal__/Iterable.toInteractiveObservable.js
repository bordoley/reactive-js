/// <reference types="./Iterable.toInteractiveObservable.d.ts" />

import { compose } from "../../../functions.js";
import Enumerable_toInteractiveObservable from "../../../rx/Enumerable/__internal__/Enumerable.toInteractiveObservable.js";
import Iterable_toObservable from "./Iterable.toObservable.js";
const Iterable_toInteractiveObservable = (scheduler, options) => compose(Iterable_toObservable(), Enumerable_toInteractiveObservable(scheduler, options));
export default Iterable_toInteractiveObservable;
