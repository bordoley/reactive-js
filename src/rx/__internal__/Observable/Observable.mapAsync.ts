import { ContainerOperator } from "../../../containers";
import Container_concatMap from "../../../containers/__internal__/Container/ContainerLIke.concatMap";
import Promiseable_toObservable from "../../../containers/__internal__/Promiseable/Promiseable.toObservable";
import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_map from "./Observable.map";
import Observable_switchAll from "./Observable.switchAll";

const Observable_mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  Container_concatMap(
    { concatAll: Observable_switchAll, map: Observable_map },
    (a: TA) => pipe(a, f, Promiseable_toObservable()),
  );

export default Observable_mapAsync;
