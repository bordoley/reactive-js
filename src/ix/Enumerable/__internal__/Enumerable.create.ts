import { SideEffect1 } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import { ObserverLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";

const Enumerable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): EnumerableLike<T> => Observable_create(f, true, true) as EnumerableLike<T>;

export default Enumerable_create;
