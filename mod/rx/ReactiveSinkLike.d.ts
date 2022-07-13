import { DisposableLike } from '../util/DisposableLike.js';
import { Function1, SideEffect1 } from '../util/functions.js';
declare const ReactiveSinkLike_notify: unique symbol;
interface ReactiveSinkLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    [ReactiveSinkLike_notify](next: T): void;
}
declare const notify: <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(sink: TSink) => SideEffect1<T>;
export { ReactiveSinkLike, ReactiveSinkLike_notify, notify, notifySink };
