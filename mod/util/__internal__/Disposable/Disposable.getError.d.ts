import { Optional } from "../../../functions.js";
import { DisposableLike_error } from "../../../util.js";
declare const Disposable$getError: (disposable: {
    [DisposableLike_error]: Optional<Error>;
}) => Optional<Error>;
export { Disposable$getError as default };
