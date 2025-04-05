import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ObservableLike,
  SynchronousObservableLike,
} from "../../../computations.js";
import { Optional, bindMethod, pipe } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
} from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import * as Publisher from "../../Publisher.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";

const createPauseableBroadcasterFromSynchronousObservable = /*@__PURE__*/ (<
  T,
>() =>
  mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingPauseableMixin,
      DelegatingBroadcasterMixin(),
    ),
    function PauseableBroadcasterFromSynchronousObservable(
      this: Pick<
        PauseableLike,
        | typeof PauseableLike_pause
        | typeof PauseableLike_resume
        | typeof PauseableLike_isPaused
      >,
      obs: ObservableLike<T>,
      options: Optional<{
        autoDispose?: boolean;
        scheduler?: SchedulerLike;
      }>,
    ): PauseableLike & BroadcasterLike<T> & DisposableLike {
      const scheduler = options?.scheduler ?? DefaultScheduler.get();
      const pauseableScheduler = PauseableScheduler.create(scheduler);

      init(DelegatingDisposableMixin, this, pauseableScheduler);
      init(DelegatingPauseableMixin, this, pauseableScheduler);

      const publisher = pipe(
        Publisher.create<T>(options),
        Disposable.addTo(this),
      );

      init(DelegatingBroadcasterMixin<T>(), this, publisher);

      pipe(
        obs,
        EventSource.subscribe(bindMethod(publisher, EventListenerLike_notify), {
          scheduler: pauseableScheduler,
        }),
        Disposable.addTo(this),
      );

      this[PauseableLike_resume]();

      return this;
    },
  ))();

const SynchronousObservable_broadcast: SynchronousObservable.Signature["broadcast"] =
  (<T>(options?: { autoDispose?: boolean; scheduler?: SchedulerLike }) =>
    (observable: SynchronousObservableLike<T>) =>
      createPauseableBroadcasterFromSynchronousObservable(
        observable,
        options,
      )) as SynchronousObservable.Signature["broadcast"];

export default SynchronousObservable_broadcast;
