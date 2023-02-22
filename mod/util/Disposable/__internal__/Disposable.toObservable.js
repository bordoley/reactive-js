/// <reference types="./Disposable.toObservable.d.ts" />

import { compose } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import addTo from "./Disposable.addTo.js";
const Disposable_toObservable = () => compose(addTo, Observable_create);
export default Disposable_toObservable;
