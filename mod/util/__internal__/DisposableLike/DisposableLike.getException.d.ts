import { Option } from "../../../functions.mjs";
import { DisposableLike_exception, Exception } from "../../../util.mjs";
declare const getException: (disposable: {
    [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception>;
export { getException as default };
