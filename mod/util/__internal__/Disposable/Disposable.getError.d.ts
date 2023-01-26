import { Optional } from "../../../functions.js";
import { DisposableLike_error } from "../../../util.js";
declare const Disposable_getError: (disposable: {
    [DisposableLike_error]: Optional<Error>;
}) => Optional<Error>;
export { Disposable_getError as default };
