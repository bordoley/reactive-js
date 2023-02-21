import { Function1, compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DisposableLike } from "../../../util.js";
import addTo from "./Disposable.addTo.js";

const Disposable_toObservable = <T>(): Function1<
  DisposableLike,
  ObservableLike<T>
> => compose(addTo, Observable_create);

export default Disposable_toObservable;
