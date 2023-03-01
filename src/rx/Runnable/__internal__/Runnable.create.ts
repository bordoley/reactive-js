import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, RunnableLike } from "../../../rx.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";

const Runnable_create = <T>(f: SideEffect1<ObserverLike<T>>): RunnableLike<T> =>
  Observable_create(f, false, true) as RunnableLike<T>;

export default Runnable_create;
