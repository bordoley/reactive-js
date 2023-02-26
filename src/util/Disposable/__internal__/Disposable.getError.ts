import { Optional } from "../../../functions.js";
import { DisposableLike, DisposableLike_error } from "../../../util.js";

const Disposable_getError = (disposable: DisposableLike): Optional<Error> =>
  disposable[DisposableLike_error];

export default Disposable_getError;
