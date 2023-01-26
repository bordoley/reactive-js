/// <reference types="./Disposable.toObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import Observable_create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Disposable_addTo from './Disposable.addTo.mjs';

const Disposable_toObservable = () => compose(Disposable_addTo, Observable_create);

export { Disposable_toObservable as default };
