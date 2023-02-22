/// <reference types="./EnumerableObservable.defer.d.ts" />

import Observable_defer from "../../Observable/__internal__/Observable.defer.js";
const EnumerableObservable_defer = (f => Observable_defer(f, true, true));
export default EnumerableObservable_defer;
