import { Optional } from "../../../functions.mjs";
import { DisposableLike_exception, Exception } from "../../../util.mjs";
declare const DisposableLike__getException: (disposable: {
    [DisposableLike_exception]: Optional<Exception>;
}) => Optional<Exception>;
export { DisposableLike__getException as default };
