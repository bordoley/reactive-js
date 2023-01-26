import { SideEffect1 } from "../../../functions";
import { ObserverLike, RunnableObservableLike } from "../../../rx";
import Observable$create from "../../__internal__/Observable/Observable.create";

const RunnableObservable$create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): RunnableObservableLike<T> =>
  Observable$create(f, false, true) as RunnableObservableLike<T>;

export default RunnableObservable$create;
