import { Optional } from "../../../functions.js";
import { DisposableLike_error } from "../../../util.js";
declare const DisposableLike__getError: (disposable: {
    [DisposableLike_error]: Optional<Error>;
}) => Optional<Error>;
export { DisposableLike__getError as default };
