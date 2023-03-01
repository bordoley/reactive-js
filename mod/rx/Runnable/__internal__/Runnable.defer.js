/// <reference types="./Runnable.defer.d.ts" />

import Observable_defer from "../../Observable/__internal__/Observable.defer.js";
const Runnable_defer = (f => Observable_defer(f, false, true));
export default Runnable_defer;
