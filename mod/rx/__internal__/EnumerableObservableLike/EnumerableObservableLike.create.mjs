/// <reference types="./EnumerableObservableLike.create.d.ts" />
import ObservableLike__create from '../ObservableLike/ObservableLike.create.mjs';

const EnumerableObservableLike__create = (f) => ObservableLike__create(f, true, true);

export { EnumerableObservableLike__create as default };
