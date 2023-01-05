/// <reference types="./ObservableLike.mapAsync.d.ts" />
import { concatMap } from '../../../containers/ContainerLike.mjs';
import PromiseableLike__toObservable from '../../../containers/__internal__/PromiseableLike/PromiseableLike.toObservable.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__mapT from './ObservableLike.mapT.mjs';
import ObservableLike__switchAllT from './ObservableLike.switchAllT.mjs';

const ObservableLike__mapAsync = (f) => concatMap({ ...ObservableLike__switchAllT, ...ObservableLike__mapT }, (a) => pipe(a, f, PromiseableLike__toObservable()));

export { ObservableLike__mapAsync as default };
