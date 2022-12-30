import { Optional } from "../../../functions";
import { DisposableLike_exception, Exception } from "../../../util";

const getException = (disposable: {
  [DisposableLike_exception]: Optional<Exception>;
}): Optional<Exception> => disposable[DisposableLike_exception];

export default getException;
