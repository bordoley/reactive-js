/// <reference types="./DisposableLike.toObservable.d.ts" />
import { createObservable } from '../../../__internal__/rx/ObservableLike.create.mjs';
import { compose } from '../../../functions.mjs';
import addTo from './DisposableLike.addTo.mjs';

const toObservable = () => compose(addTo, createObservable);

export { toObservable as default };
