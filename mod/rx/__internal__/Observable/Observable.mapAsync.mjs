/// <reference types="./Observable.mapAsync.d.ts" />
import Container$concatMap from '../../../containers/__internal__/Container/ContainerLIke.concatMap.mjs';
import Promiseable$toObservable from '../../../containers/__internal__/Promiseable/Promiseable.toObservable.mjs';
import { pipe } from '../../../functions.mjs';
import Observable$map from './Observable.map.mjs';
import Observable$switchAll from './Observable.switchAll.mjs';

const Observable$mapAsync = (f) => Container$concatMap({ concatAll: Observable$switchAll, map: Observable$map }, (a) => pipe(a, f, Promiseable$toObservable()));

export { Observable$mapAsync as default };
