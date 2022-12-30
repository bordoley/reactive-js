/// <reference types="./ObservableLike.merge.d.ts" />
import mergeAll from './ObservableLike.mergeObservables.mjs';

const merge = (...observables) => mergeAll(observables);

export { merge as default };
