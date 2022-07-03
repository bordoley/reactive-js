import { Function1, SideEffect1 } from "./functions.mjs";
import { LiftableStateLike } from "./liftable.mjs";
interface SinkLike<T> extends LiftableStateLike {
    assertState(this: SinkLike<T>): void;
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(this: SinkLike<T>, next: T): void;
}
declare const assertState: (sink: SinkLike<unknown>) => void;
declare const notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export { SinkLike, assertState, notify, notifySink };
