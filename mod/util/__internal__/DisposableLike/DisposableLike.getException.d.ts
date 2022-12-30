import { Optional } from "../../../functions.mjs";
import { DisposableLike_exception, Exception } from "../../../util.mjs";
declare const getException: (disposable: {
    [DisposableLike_exception]: Optional<Exception>;
}) => Optional<Exception>;
export { getException as default };
