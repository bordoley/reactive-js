import { Optional } from "../../../functions.js";
import { DisposableLike_error } from "../../../util.js";

const Disposable_getError = (disposable: {
  [DisposableLike_error]: Optional<Error>;
}): Optional<Error> => disposable[DisposableLike_error];

export default Disposable_getError;
