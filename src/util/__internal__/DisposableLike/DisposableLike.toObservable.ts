import { Function1, compose } from "../../../functions";
import { ObservableLike } from "../../../rx";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import { DisposableLike } from "../../../util";
import addTo from "./DisposableLike.addTo";

const toObservable = <T>(): Function1<DisposableLike, ObservableLike<T>> =>
  compose(addTo, ObservableLike__create);

export default toObservable;
