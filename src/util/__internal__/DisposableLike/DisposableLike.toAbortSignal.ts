import { newInstance, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import onDisposed from "./DisposableLike.onDisposed";

const DisposableLike__toAbortSignal = (
  disposable: DisposableLike,
): AbortSignal => {
  const abortController = newInstance(AbortController);
  pipe(
    disposable,
    onDisposed(e => abortController.abort(e)),
  );
  return abortController.signal;
};

export default DisposableLike__toAbortSignal;
