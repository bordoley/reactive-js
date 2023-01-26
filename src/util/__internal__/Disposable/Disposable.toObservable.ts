import { Function1, compose } from "../../../functions";
import { ObservableLike } from "../../../rx";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import { DisposableLike } from "../../../util";
import addTo from "./Disposable.addTo";

const Disposable$toObservable = <T>(): Function1<
  DisposableLike,
  ObservableLike<T>
> => compose(addTo, Observable$create);

export default Disposable$toObservable;
