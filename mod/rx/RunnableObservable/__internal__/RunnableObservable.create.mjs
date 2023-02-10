/// <reference types="./RunnableObservable.create.d.ts" />
import Observable_create from '../../Observable/__internal__/Observable.create.mjs';

const RunnableObservable_create = (f) => Observable_create(f, false, true);

export { RunnableObservable_create as default };
