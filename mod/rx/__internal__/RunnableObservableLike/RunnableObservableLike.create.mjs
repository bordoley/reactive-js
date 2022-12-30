/// <reference types="./RunnableObservableLike.create.d.ts" />
import create$1 from '../ObservableLike/ObservableLike.create.mjs';

const create = (f) => create$1(f, false, true);

export { create as default };
