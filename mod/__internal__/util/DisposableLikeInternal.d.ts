import { Identity, Option } from "../../functions.mjs";
import { DisposableLike, Error, DisposableLike_error, DisposableLike_isDisposed } from "../../util.mjs";
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: <T extends DisposableLike>(e?: Error) => Identity<T>;
declare const getError: (disposable: {
    [DisposableLike_error]: Option<Error>;
}) => Option<Error>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
export { dispose, getError, isDisposed };
