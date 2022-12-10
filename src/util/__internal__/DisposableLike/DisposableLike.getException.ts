import { Option } from "../../../functions";
import { DisposableLike_exception, Exception } from "../../../util";

const getException = (disposable: {
  [DisposableLike_exception]: Option<Exception>;
}): Option<Exception> => disposable[DisposableLike_exception];

export default getException;
