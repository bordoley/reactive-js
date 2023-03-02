/// <reference types="./Enumerable.create.d.ts" />

import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
const Enumerable_create = (f) => Observable_create(f, true, true);
export default Enumerable_create;
