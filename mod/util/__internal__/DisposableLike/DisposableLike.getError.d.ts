import { Optional } from "../../../functions.mjs";
import { DisposableLike_error } from "../../../util.mjs";
declare const DisposableLike__getError: (disposable: {
    [DisposableLike_error]: Optional<Error>;
}) => Optional<Error>;
export { DisposableLike__getError as default };
