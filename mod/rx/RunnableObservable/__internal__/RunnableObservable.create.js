/// <reference types="./RunnableObservable.create.d.ts" />

import Observable_create from "../../Observable/__internal__/Observable.create.js";
const RunnableObservable_create = (f) => Observable_create(f, false, true);
export default RunnableObservable_create;
