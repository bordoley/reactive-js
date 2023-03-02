/// <reference types="./Enumerable.defer.d.ts" />

import Observable_defer from "../../../rx/Observable/__internal__/Observable.defer.js";
const Enumerable_defer = (f => Observable_defer(f, true, true));
export default Enumerable_defer;
