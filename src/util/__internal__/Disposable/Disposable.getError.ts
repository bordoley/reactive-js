import { Optional } from "../../../functions";
import { DisposableLike_error } from "../../../util";

const Disposable$getError = (disposable: {
  [DisposableLike_error]: Optional<Error>;
}): Optional<Error> => disposable[DisposableLike_error];

export default Disposable$getError;
