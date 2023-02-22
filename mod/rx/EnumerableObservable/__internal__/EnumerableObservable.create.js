/// <reference types="./EnumerableObservable.create.d.ts" />

import Observable_create from "../../Observable/__internal__/Observable.create.js";
const EnumerableObservable_create = (f) => Observable_create(f, true, true);
export default EnumerableObservable_create;
