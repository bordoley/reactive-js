import { Function1 } from "../../functions.js";
import { EventSourceLike } from "../../types.js";
declare const Iterable_toEventSource: <T>() => Function1<Iterable<T>, EventSourceLike<T>>;
export default Iterable_toEventSource;
