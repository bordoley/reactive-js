import { Function1, composeLazy } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import Iterable_enumerate from "./Iterable.enumerate.js";

const Iterable_toEnumeratorFactory = <T>(): Function1<
  Iterable<T>,
  EnumeratorFactoryLike<T>
> => composeLazy(Iterable_enumerate());

export default Iterable_toEnumeratorFactory;
