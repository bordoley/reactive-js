/// <reference types="./DeferredObservable.defer.d.ts" />

import HigherOrderObservable_defer from "../../HigherOrderObservable/__internal__/HigherOrderObservable.defer.js";
import DeferredObservable_create from "./DeferredObservable.create.js";
const DeferredObservable_defer = 
/*@__PURE__*/ HigherOrderObservable_defer(DeferredObservable_create);
export default DeferredObservable_defer;
