import { createObservable } from "../../../__internal__/rx/ObservableLike.create";
import { Function1, compose } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { DisposableLike } from "../../../util";
import addTo from "./DisposableLike.addTo";

const toObservable = <T>(): Function1<DisposableLike, ObservableLike<T>> =>
  compose(addTo, createObservable);

export default toObservable;
