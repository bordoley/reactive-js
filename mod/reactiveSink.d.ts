import { Disposable } from "./disposable.mjs";
import { Function1, SideEffect1 } from "./functions.mjs";
interface ReactiveSinkLike<T> extends Disposable {
    assertState(this: this): void;
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(this: this, next: T): void;
}
declare const assertState: (sink: ReactiveSinkLike<unknown>) => void;
declare const notify: <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(sink: TSink) => SideEffect1<T>;
export { ReactiveSinkLike, assertState, notify, notifySink };
