import { Optional } from "../../../functions";
import { DisposableLike_exception, Exception } from "../../../util";

const DisposableLike__getException = (disposable: {
  [DisposableLike_exception]: Optional<Exception>;
}): Optional<Exception> => disposable[DisposableLike_exception];

export default DisposableLike__getException;
