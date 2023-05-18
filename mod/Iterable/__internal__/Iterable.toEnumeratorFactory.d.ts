import { Function1 } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
declare const Iterable_toEnumeratorFactory: <T>() => Function1<Iterable<T>, EnumeratorFactoryLike<T>>;
export default Iterable_toEnumeratorFactory;
