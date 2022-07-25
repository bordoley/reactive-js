import { SideEffect1, Option, Identity } from "../../functions.mjs";
declare const DisposableLike_add: unique symbol;
declare const DisposableLike_dispose: unique symbol;
declare const DisposableLike_error: unique symbol;
declare const DisposableLike_isDisposed: unique symbol;
declare type Error = {
    readonly cause: unknown;
};
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;
interface DisposableLike {
    readonly [DisposableLike_error]: Option<Error>;
    readonly [DisposableLike_isDisposed]: boolean;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Error): void;
}
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
export { DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DisposableOrTeardown, Error, dispose, getError, isDisposed };
