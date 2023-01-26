/// <reference types="./RunnableObservable.create.d.ts" />
import Observable$create from '../Observable/Observable.create.mjs';

const RunnableObservable$create = (f) => Observable$create(f, false, true);

export { RunnableObservable$create as default };
