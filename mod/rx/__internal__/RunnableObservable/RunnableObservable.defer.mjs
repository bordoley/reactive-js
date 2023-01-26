/// <reference types="./RunnableObservable.defer.d.ts" />
import Observable$defer from '../Observable/Observable.defer.mjs';

const RunnableObservable$defer = (f => Observable$defer(f, false, true));

export { RunnableObservable$defer as default };
