/// <reference types="./RunnableObservableLike.create.d.ts" />
import ObservableLike__create from '../ObservableLike/ObservableLike.create.mjs';

const RunnableObservableLike__create = (f) => ObservableLike__create(f, false, true);

export { RunnableObservableLike__create as default };
