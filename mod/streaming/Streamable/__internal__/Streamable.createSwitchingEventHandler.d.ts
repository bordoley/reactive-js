import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_createSwitchingEventHandler: <TEvent>(op: Function1<TEvent, ObservableLike<unknown>>) => StreamableLike<TEvent, never, import("../../../streaming.js").StreamLike<TEvent, never>>;
export default Streamable_createSwitchingEventHandler;
