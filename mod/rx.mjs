/// <reference types="./rx.d.ts" />
import './containers.mjs';

/** @ignore */
const SinkLike_notify = Symbol("SinkLike_notify");
/** @ignore */
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
/** @ignore */
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");
/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
/**  @ignore */
const ObservableLike_isEnumerable = Symbol("ObservableLike_isEnumerable");
/**  @ignore */
const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");

export { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_dispatcher, ObserverLike_scheduler, ReactiveContainerLike_sinkInto, SinkLike_notify, SubjectLike_publish };
