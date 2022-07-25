/// <reference types="./rx.d.ts" />
const ReactiveSinkLike_notify = Symbol("ReactiveSinkLike_notify");
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
const DefaultObservable = 0;
const RunnableObservable = 1;
const EnumerableObservable = 2;
const ObservableLike_observableType = Symbol("ObservableLike_observableType");
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
const SubjectLike_publish = Symbol("SubjectLike_publish");

export { DefaultObservable, EnumerableObservable, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observableType, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike_sinkInto, ReactiveSinkLike_notify, RunnableObservable, SubjectLike_publish };
