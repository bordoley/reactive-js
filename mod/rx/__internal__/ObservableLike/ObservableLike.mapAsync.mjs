/// <reference types="./ObservableLike.mapAsync.d.ts" />
import ContainerLike__concatMap from '../../../containers/__internal__/ContainerLike/ContainerLIke.concatMap.mjs';
import PromiseableLike__toObservable from '../../../containers/__internal__/PromiseableLike/PromiseableLike.toObservable.mjs';
import { pipe } from '../../../functions.mjs';
import ObservableLike__map from './ObservableLike.map.mjs';
import ObservableLike__switchAll from './ObservableLike.switchAll.mjs';

const ObservableLike__mapAsync = (f) => ContainerLike__concatMap({ concatAll: ObservableLike__switchAll, map: ObservableLike__map }, (a) => pipe(a, f, PromiseableLike__toObservable()));

export { ObservableLike__mapAsync as default };
