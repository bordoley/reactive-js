import Observable_create from "../../Observable/__internal__/Observable.create.js";
import { Function1, compose } from "../../functions.js";
import { DisposableLike, ObservableLike } from "../../types.js";
import addTo from "./Disposable.addTo.js";

const Disposable_toObservable = <T>(): Function1<
  DisposableLike,
  ObservableLike<T>
> => compose(addTo, Observable_create);

export default Disposable_toObservable;
