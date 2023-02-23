import { ContainerOperator } from "../../../containers.js";
import Promiseable_toObservable from "../../../containers/Promiseable/__internal__/Promiseable.toObservable.js";
import { Function1, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatMap from "./Observable.concatMap.js";

const Observable_flatMapPromise = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ContainerOperator<ObservableLike, TA, TB> =>
  Observable_concatMap((a: TA) => pipe(a, f, Promiseable_toObservable()));

export default Observable_flatMapPromise;
