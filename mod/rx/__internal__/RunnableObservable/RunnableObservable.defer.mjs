/// <reference types="./RunnableObservable.defer.d.ts" />
import Observable_defer from '../Observable/Observable.defer.mjs';

const RunnableObservable_defer = (f => Observable_defer(f, false, true));

export { RunnableObservable_defer as default };
