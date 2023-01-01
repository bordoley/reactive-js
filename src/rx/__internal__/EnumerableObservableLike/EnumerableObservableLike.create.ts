import { SideEffect1 } from "../../../functions";
import { EnumerableObservableLike, ObserverLike } from "../../../rx";
import ObservableLike__create from "../ObservableLike/ObservableLike.create";

const EnumerableObservableLike__create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableObservableLike<T> =>
  ObservableLike__create(f, true, true) as EnumerableObservableLike<T>;

export default EnumerableObservableLike__create;
