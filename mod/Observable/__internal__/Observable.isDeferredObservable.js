/// <reference types="./Observable.isDeferredObservable.d.ts" />

import { ObservableLike_isDeferred, } from "../../types.js";
const Observable_isDeferredObservable = (obs) => obs[ObservableLike_isDeferred];
export default Observable_isDeferredObservable;
