import { SideEffect1 } from "../../../functions";
import { EnumerableObservableLike, ObserverLike } from "../../../rx";
import Observable$create from "../Observable/Observable.create";

const EnumerableObservable$create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableObservableLike<T> =>
  Observable$create(f, true, true) as EnumerableObservableLike<T>;

export default EnumerableObservable$create;
