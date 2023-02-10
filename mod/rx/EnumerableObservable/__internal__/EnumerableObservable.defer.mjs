/// <reference types="./EnumerableObservable.defer.d.ts" />
import Observable_defer from '../../Observable/__internal__/Observable.defer.mjs';

const EnumerableObservable_defer = (f => Observable_defer(f, true, true));

export { EnumerableObservable_defer as default };
