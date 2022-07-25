import { DisposableLike_add as DisposableLike_add$1, DisposableLike_dispose as DisposableLike_dispose$1, DisposableLike_error as DisposableLike_error$1, DisposableLike_isDisposed as DisposableLike_isDisposed$1 } from "./__internal__/util/DisposableLikeInternal.mjs";
import { SideEffect1, Option, Factory } from "./functions.mjs";
/** @ignore */
declare const DisposableLike_add: typeof DisposableLike_add$1;
/** @ignore */
declare const DisposableLike_dispose: typeof DisposableLike_dispose$1;
/** @ignore */
declare const DisposableLike_error: typeof DisposableLike_error$1;
/** @ignore */
declare const DisposableLike_isDisposed: typeof DisposableLike_isDisposed$1;
declare type Error = {
    readonly cause: unknown;
};
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;
/**
 * Represents an unmanaged resource that can be disposed.
 */
interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_error]: Option<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    readonly [DisposableLike_isDisposed]: boolean;
    /**
     * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
     *
     * @param disposable
     * @returns `this`
     */
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    /**
     * Dispose the resource.
     *
     * @param error An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
/** @ignore */
declare const PauseableLike_pause: unique symbol;
/** @ignore */
declare const PauseableLike_resume: unique symbol;
interface PauseableLike {
    [PauseableLike_pause](): void;
    [PauseableLike_resume](): void;
}
/** @ignore */
declare const ContinuationLike_run: unique symbol;
/**
 * A unit of work to be executed by a scheduler.
 *
 * @noInheritDoc
 */
interface ContinuationLike extends DisposableLike {
    [ContinuationLike_run](): void;
}
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
export { ContinuationLike, ContinuationLike_run, DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, DisposableOrTeardown, Error, PauseableLike, PauseableLike_pause, PauseableLike_resume, createDisposable, disposed };
