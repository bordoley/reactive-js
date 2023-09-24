import { isSome, raiseError } from "../../../functions.js";
import { DisposableLike, DisposableLike_error } from "../../../utils.js";

const Disposable_raiseIfDisposedWithError = (disposable: DisposableLike) => {
  const err = disposable[DisposableLike_error];
  if (isSome(err)) {
    raiseError(err);
  }
};

export default Disposable_raiseIfDisposedWithError;
