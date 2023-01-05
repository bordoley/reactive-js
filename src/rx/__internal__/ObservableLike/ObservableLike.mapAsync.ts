import { ContainerOperator } from "../../../containers";
import { concatMap } from "../../../containers/ContainerLike";
import PromiseableLike__toObservable from "../../../containers/__internal__/PromiseableLike/PromiseableLike.toObservable";
import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__mapT from "./ObservableLike.mapT";
import ObservableLike__switchAllT from "./ObservableLike.switchAllT";

const ObservableLike__mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  concatMap(
    { ...ObservableLike__switchAllT, ...ObservableLike__mapT },
    (a: TA) => pipe(a, f, PromiseableLike__toObservable()),
  );

export default ObservableLike__mapAsync;
