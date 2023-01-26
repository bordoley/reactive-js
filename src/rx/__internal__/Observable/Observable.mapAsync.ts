import { ContainerOperator } from "../../../containers";
import Container$concatMap from "../../../containers/__internal__/Container/ContainerLIke.concatMap";
import Promiseable$toObservable from "../../../containers/__internal__/Promiseable/Promiseable.toObservable";
import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable$map from "./Observable.map";
import Observable$switchAll from "./Observable.switchAll";

const Observable$mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  Container$concatMap(
    { concatAll: Observable$switchAll, map: Observable$map },
    (a: TA) => pipe(a, f, Promiseable$toObservable()),
  );

export default Observable$mapAsync;
