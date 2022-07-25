import { StatefulContainerLike, StatefulContainerStateOf, Container, ContainerOf, ContainerLike } from "./containers.mjs";
import { Function1 } from "./functions.mjs";
import { DispatcherLike, SchedulerLike } from "./scheduling.mjs";
import { DisposableLike } from "./util.mjs";
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
declare const ObserverLike_dispatcher: unique symbol;
declare const ObserverLike_scheduler: unique symbol;
interface ObserverLike<T = unknown> extends ReactiveSinkLike<T> {
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
    readonly [ObserverLike_scheduler]: SchedulerLike;
}
declare const ReactiveContainerLike_sinkInto: unique symbol;
interface ReactiveContainerLike extends StatefulContainerLike {
    readonly TContainerOf?: this;
    readonly TStatefulContainerState?: ReactiveSinkLike;
    [ReactiveContainerLike_sinkInto](sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>): void;
}
interface RunnableLike<T = unknown> extends ReactiveContainerLike {
    readonly TStatefulContainerState?: ReactiveSinkLike<this["T"]>;
    [ReactiveContainerLike_sinkInto](sink: ReactiveSinkLike<T>): void;
}
declare const DefaultObservable = 0;
declare const RunnableObservable = 1;
declare const EnumerableObservable = 2;
declare const ObservableLike_observableType: unique symbol;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T = unknown> extends ReactiveContainerLike {
    readonly TStatefulContainerState?: ObserverLike<T>;
    readonly [ObservableLike_observableType]: typeof EnumerableObservable | typeof RunnableObservable | typeof DefaultObservable;
}
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_observableType]: typeof RunnableObservable | typeof EnumerableObservable;
}
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ObservableLike_observableType]: typeof EnumerableObservable;
}
declare const MulticastObservableLike_observerCount: unique symbol;
declare const MulticastObservableLike_replay: unique symbol;
interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
declare const SubjectLike_publish: unique symbol;
interface SubjectLike<T = unknown> extends MulticastObservableLike<T> {
    [SubjectLike_publish](next: T): void;
}
declare type CreateReactiveContainer<C extends ReactiveContainerLike> = Container<C> & {
    create<T>(onSink: (sink: StatefulContainerStateOf<C, T>) => void): ContainerOf<C, T>;
};
declare type Never<C extends ReactiveContainerLike> = Container<C> & {
    never<T>(): ContainerOf<C, T>;
};
declare type ToRunnable<C extends ContainerLike> = Container<C> & {
    toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
export { CreateReactiveContainer, DefaultObservable, EnumerableObservable, EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, Never, ObservableLike, ObservableLike_observableType, ObserverLike, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike, ReactiveContainerLike_sinkInto, ReactiveSinkLike, ReactiveSinkLike_notify, RunnableLike, RunnableObservable, RunnableObservableLike, SubjectLike, SubjectLike_publish, ToRunnable };
