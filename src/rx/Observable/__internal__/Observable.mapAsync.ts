import { ContainerOperator } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Promiseable_toObservable from "../../../containers/Promiseable/__internal__/Promiseable.toObservable.js";
import { Function1, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";

const Observable_mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  Container_concatMap(
    { concatAll: Observable_switchAll, map: Observable_map },
    (a: TA) => pipe(a, f, Promiseable_toObservable()),
  );

export default Observable_mapAsync;
