import { newInstance, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import onDisposed from "./DisposableLike.onDisposed";

const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  pipe(
    disposable,
    onDisposed(e => abortController.abort(e?.cause)),
  );
  return abortController.signal;
};

export default toAbortSignal;
