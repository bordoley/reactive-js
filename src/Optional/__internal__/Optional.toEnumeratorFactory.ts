import { Function1, Optional, composeLazy } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import Optional_enumerate from "./Optional.enumerate.js";

const Optional_toEnumeratorFactory = <T>(): Function1<
  Optional<T>,
  EnumeratorFactoryLike<T>
> => composeLazy(Optional_enumerate<T>());

export default Optional_toEnumeratorFactory;
