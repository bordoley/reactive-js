import { SideEffect1 } from "../../../functions";
import { ObserverLike, RunnableObservableLike } from "../../../rx";
import Observable_create from "../../__internal__/Observable/Observable.create";

const RunnableObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): RunnableObservableLike<T> =>
  Observable_create(f, false, true) as RunnableObservableLike<T>;

export default RunnableObservable_create;
