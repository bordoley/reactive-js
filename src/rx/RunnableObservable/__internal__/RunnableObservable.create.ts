import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, RunnableObservableLike } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const RunnableObservable_create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): RunnableObservableLike<T> =>
  Observable_create(f, false, true) as RunnableObservableLike<T>;

export default RunnableObservable_create;
