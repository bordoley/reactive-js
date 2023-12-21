import { EnumerableLike } from "../../../collections.js";
import { Factory, Function1 } from "../../../functions.js";
declare const Enumerable_fromIteratorFactory: <T>() => Function1<Factory<Iterator<T>>, EnumerableLike<T>>;
export default Enumerable_fromIteratorFactory;
