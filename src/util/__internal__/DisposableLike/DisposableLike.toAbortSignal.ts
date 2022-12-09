import { newInstance, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import { onDisposed } from "./DisposableLike.onDisposed";

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  pipe(
    disposable,
    onDisposed(e => abortController.abort(e?.cause)),
  );
  return abortController.signal;
};
