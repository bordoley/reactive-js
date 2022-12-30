/// <reference types="./DisposableLike.toObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import addTo from './DisposableLike.addTo.mjs';

const toObservable = () => compose(addTo, create);

export { toObservable as default };
