import { SideEffect1 } from "../../../functions";
import { ObserverLike, RunnableObservableLike } from "../../../rx";
import ObservableLike__create from "../../__internal__/ObservableLike/ObservableLike.create";

const create = <T>(
  f: SideEffect1<ObserverLike<T>>,
): RunnableObservableLike<T> =>
  ObservableLike__create(f, false, true) as RunnableObservableLike<T>;

export default create;
