/// <reference types="./DisposableLike.toObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import DisposableLike__addTo from './DisposableLike.addTo.mjs';

const DisposableLike__toObservable = () => compose(DisposableLike__addTo, ObservableLike__create);

export { DisposableLike__toObservable as default };
