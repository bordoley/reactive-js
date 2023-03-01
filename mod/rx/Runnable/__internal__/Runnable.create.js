/// <reference types="./Runnable.create.d.ts" />

import Observable_create from "../../Observable/__internal__/Observable.create.js";
const Runnable_create = (f) => Observable_create(f, false, true);
export default Runnable_create;
