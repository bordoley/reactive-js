/// <reference types="./Observable.mapAsync.d.ts" />
import Container_concatMap from '../../../containers/__internal__/Container/ContainerLIke.concatMap.mjs';
import Promiseable_toObservable from '../../../containers/__internal__/Promiseable/Promiseable.toObservable.mjs';
import { pipe } from '../../../functions.mjs';
import Observable_map from './Observable.map.mjs';
import Observable_switchAll from './Observable.switchAll.mjs';

const Observable_mapAsync = (f) => Container_concatMap({ concatAll: Observable_switchAll, map: Observable_map }, (a) => pipe(a, f, Promiseable_toObservable()));

export { Observable_mapAsync as default };
