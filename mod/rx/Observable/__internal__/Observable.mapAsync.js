/// <reference types="./Observable.mapAsync.d.ts" />

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Promiseable_toObservable from "../../../containers/Promiseable/__internal__/Promiseable.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
const Observable_mapAsync = (f) => Container_concatMap({ concatAll: Observable_switchAll, map: Observable_map }, (a) => pipe(a, f, Promiseable_toObservable()));
export default Observable_mapAsync;
