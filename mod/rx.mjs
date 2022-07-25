/// <reference types="./rx.d.ts" />
/** @ignore */
const ReactiveSinkLike_notify = Symbol("ReactiveSinkLike_notify");
/** @ignore */
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
/** @ignore */
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");
/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
const DefaultObservable = 0;
const RunnableObservable = 1;
const EnumerableObservable = 2;
/** @ignore */
const ObservableLike_observableType = Symbol("ObservableLike_observableType");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");

export { DefaultObservable, EnumerableObservable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observableType, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike_sinkInto, ReactiveSinkLike_notify, RunnableObservable, SubjectLike_publish };
