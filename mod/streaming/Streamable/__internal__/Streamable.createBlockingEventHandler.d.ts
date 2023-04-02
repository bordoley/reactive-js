import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_createBlockingEventHandler: <TEvent>(op: Function1<TEvent, ObservableLike<unknown>>) => StreamableLike<TEvent, boolean, import("../../../streaming.js").StreamLike<TEvent, boolean>>;
export default Streamable_createBlockingEventHandler;
