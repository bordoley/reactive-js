import { PureIterableLike } from "../../../computations.js";
import { Factory } from "../../../functions.js";
declare const Iterable_createPure: <T>(f: Factory<Iterator<T>>) => PureIterableLike<T>;
export default Iterable_createPure;
