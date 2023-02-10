import { Function1, compose } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create";
import { DisposableLike } from "../../../util";
import addTo from "./Disposable.addTo";

const Disposable_toObservable = <T>(): Function1<
  DisposableLike,
  ObservableLike<T>
> => compose(addTo, Observable_create);

export default Disposable_toObservable;
