import { SequenceLike } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
import { RunnableLike } from "../../../rx.mjs";
declare const toRunnable: <T>() => Function1<SequenceLike<T>, RunnableLike<T>>;
export { toRunnable as default };
