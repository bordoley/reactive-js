import { newInstance, pipe } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import onDisposed from "./Disposable.onDisposed.js";

const Disposable_toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  pipe(
    disposable,
    onDisposed(e => abortController.abort(e)),
  );
  return abortController.signal;
};

export default Disposable_toAbortSignal;
