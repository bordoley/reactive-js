import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import { Function1, pipeLazy } from "../../functions.js";
import { EnumerableWithSideEffectsLike } from "../../types.js";
import Iterable_enumerate from "./Iterable.enumerate.js";

const Iterable_toObservable: <T>() => Function1<
  Iterable<T>,
  EnumerableWithSideEffectsLike<T>
> =
  <T>() =>
  (iterable: Iterable<T>) =>
    Enumerable_create(pipeLazy(iterable, Iterable_enumerate()), false);

export default Iterable_toObservable;
