import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
declare const Sink_sourceFrom: <C extends ObservableLike<unknown>, TSink extends ObserverLike<T>, T>(source: C) => Function1<TSink, TSink>;
export default Sink_sourceFrom;
