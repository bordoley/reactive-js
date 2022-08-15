import { SideEffect1, Option } from "./functions.mjs";
/** @ignore */
declare const DisposableLike_add: unique symbol;
/** @ignore */
declare const DisposableLike_dispose: unique symbol;
/** @ignore */
declare const DisposableLike_exception: unique symbol;
/** @ignore */
declare const DisposableLike_isDisposed: unique symbol;
declare type Exception = {
    readonly cause: unknown;
};
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Exception>>;
/**
 * Represents an unmanaged resource that can be disposed.
 */
interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_exception]: Option<Exception>;
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
    [DisposableLike_dispose](error?: Exception): void;
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
/** @ignore */
declare const SinkLike_notify: unique symbol;
interface SinkLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    [SinkLike_notify](next: T): void;
}
/** @ignore */
declare const SourceLike_move: unique symbol;
interface SourceLike extends DisposableLike {
    [SourceLike_move](): void;
}
/** @ignore */
declare const EnumeratorLike_current: unique symbol;
/** @ignore */
declare const EnumeratorLike_hasCurrent: unique symbol;
interface EnumeratorLike<T = unknown> extends SourceLike {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}
export { ContinuationLike, ContinuationLike_run, DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_exception, DisposableLike_isDisposed, DisposableOrTeardown, EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, Exception, PauseableLike, PauseableLike_pause, PauseableLike_resume, SinkLike, SinkLike_notify, SourceLike, SourceLike_move };
