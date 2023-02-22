import { SideEffect1 } from "../../../functions.js";
import { EnumerableObservableLike, ObserverLike } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const EnumerableObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableObservableLike<T> =>
  Observable_create(f, true, true) as EnumerableObservableLike<T>;

export default EnumerableObservable_create;
