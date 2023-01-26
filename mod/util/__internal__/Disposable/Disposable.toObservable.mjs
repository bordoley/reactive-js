/// <reference types="./Disposable.toObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import Observable$create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Disposable$addTo from './Disposable.addTo.mjs';

const Disposable$toObservable = () => compose(Disposable$addTo, Observable$create);

export { Disposable$toObservable as default };
