import { SideEffect1 } from "../../../functions";
import { EnumerableObservableLike, ObserverLike } from "../../../rx";
import Observable_create from "../../Observable/__internal__/Observable.create";

const EnumerableObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableObservableLike<T> =>
  Observable_create(f, true, true) as EnumerableObservableLike<T>;

export default EnumerableObservable_create;
