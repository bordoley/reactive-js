import { StatefulContainerLike, StatefulContainerStateOf, Container, ContainerOf, ContainerLike } from "./containers.mjs";
import { Function1 } from "./functions.mjs";
import { ObserverLike } from "./scheduling.mjs";
import { SinkLike, DisposableLike } from "./util.mjs";
/** @ignore */
declare const ReactiveContainerLike_sinkInto: unique symbol;
interface ReactiveContainerLike extends StatefulContainerLike {
    readonly TContainerOf?: this;
    readonly TStatefulContainerState?: SinkLike;
    [ReactiveContainerLike_sinkInto](sink: StatefulContainerStateOf<ReactiveContainerLike, this["T"]>): void;
}
interface RunnableLike<T = unknown> extends ReactiveContainerLike {
    readonly TStatefulContainerState?: SinkLike<this["T"]>;
    [ReactiveContainerLike_sinkInto](sink: SinkLike<T>): void;
}
declare const DefaultObservable = 0;
declare const RunnableObservable = 1;
declare const EnumerableObservable = 2;
/** @ignore */
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
/** @ignore */
declare const MulticastObservableLike_observerCount: unique symbol;
/** @ignore */
declare const MulticastObservableLike_replay: unique symbol;
interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
/** @ignore */
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
declare type ToRunnable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toRunnable<T>(options?: TOptions): Function1<ContainerOf<C, T>, RunnableLike<T>>;
};
declare const createSubject: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
export { CreateReactiveContainer, DefaultObservable, EnumerableObservable, EnumerableObservableLike, MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, Never, ObservableLike, ObservableLike_observableType, ReactiveContainerLike, ReactiveContainerLike_sinkInto, RunnableLike, RunnableObservable, RunnableObservableLike, SubjectLike, SubjectLike_publish, ToRunnable, createSubject };
