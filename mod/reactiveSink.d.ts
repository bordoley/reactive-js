import { ContainerLike } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
import { Function1, SideEffect1 } from "./functions.mjs";
interface ReactiveSinkLike<T> extends Disposable, ContainerLike {
    readonly T: T;
    readonly TContainerOf: ReactiveSinkLike<this["T"]>;
    assertState(this: this["TContainerOf"]): void;
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(this: this["TContainerOf"], next: T): void;
}
declare const assertState: (sink: ReactiveSinkLike<unknown>) => void;
declare const notify: <TSink extends ReactiveSinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <TSink extends ReactiveSinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export { ReactiveSinkLike, assertState, notify, notifySink };
