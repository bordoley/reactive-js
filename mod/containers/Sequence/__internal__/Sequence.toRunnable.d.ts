import { SequenceLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
declare const Sequence_toRunnable: <T>() => Function1<SequenceLike<T>, RunnableLike<T>>;
export { Sequence_toRunnable as default };
