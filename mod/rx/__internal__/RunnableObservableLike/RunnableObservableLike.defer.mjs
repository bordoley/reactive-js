/// <reference types="./RunnableObservableLike.defer.d.ts" />
import ObservableLike__defer from '../ObservableLike/ObservableLike.defer.mjs';

const RunnableObservableLike__defer = (f => ObservableLike__defer(f, false, true));

export { RunnableObservableLike__defer as default };
