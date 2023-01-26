import { newInstance, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import onDisposed from "./Disposable.onDisposed";

const Disposable$toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  pipe(
    disposable,
    onDisposed(e => abortController.abort(e)),
  );
  return abortController.signal;
};

export default Disposable$toAbortSignal;
