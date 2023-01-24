import { ContainerOperator } from "../../../containers";
import ContainerLike__concatMap from "../../../containers/__internal__/ContainerLike/ContainerLIke.concatMap";
import PromiseableLike__toObservable from "../../../containers/__internal__/PromiseableLike/PromiseableLike.toObservable";
import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__map from "./ObservableLike.map";
import ObservableLike__switchAll from "./ObservableLike.switchAll";

const ObservableLike__mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  ContainerLike__concatMap(
    { concatAll: ObservableLike__switchAll, map: ObservableLike__map },
    (a: TA) => pipe(a, f, PromiseableLike__toObservable()),
  );

export default ObservableLike__mapAsync;
