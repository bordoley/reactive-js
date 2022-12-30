/// <reference types="./EnumerableObservableLike.create.d.ts" />
import create$1 from '../ObservableLike/ObservableLike.create.mjs';

const create = (f) => create$1(f, true, true);

export { create as default };
