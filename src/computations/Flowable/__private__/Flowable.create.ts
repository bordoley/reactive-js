import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import * as WritableStore from "../../../computations/WritableStore.js";
import {
  DeferredObservableLike,
  EventSourceLike,
  FlowableLike,
  FlowableLike_flow,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../../computations.js";
import { Function1, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackpressureStrategy, SchedulerLike } from "../../../utils.js";
import type * as Flowable from "../../Flowable.js";
import * as Observable from "../../Observable.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";

const PauseableObservable_create: <T>(
  op: Function1<EventSourceLike<boolean>, DeferredObservableLike<T>>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
) => PauseableObservableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin(), DelegatingMulticastObservableMixin()),
    function PauseableObservable(
      instance: Pick<
        PauseableObservableLike<T>,
        typeof PauseableLike_pause | typeof PauseableLike_resume
      > &
        TProperties,
      op: Function1<EventSourceLike<boolean>, DeferredObservableLike<T>>,
      scheduler: SchedulerLike,
      multicastOptions?: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
        replay?: number;
      },
    ): PauseableObservableLike<T> {
      const writableStore = (instance[PauseableLike_isPaused] =
        WritableStore.create(true));

      const observableDelegate = pipe(
        writableStore,
        op,
        Observable.multicast(scheduler, multicastOptions),
        Disposable.bindTo(writableStore),
      );

      init(DelegatingDisposableMixin(), instance, writableStore);
      init(
        DelegatingMulticastObservableMixin<T>(),
        instance,
        observableDelegate,
      );

      return instance;
    },
    props<TProperties>({
      [PauseableLike_isPaused]: none,
    }),
    {
      [PauseableLike_pause](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = true;
      },

      [PauseableLike_resume](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = false;
      },
    },
  );
})();

const Flowable_create: Flowable.Signature["create"] = <T>(
  op: Function1<EventSourceLike<boolean>, DeferredObservableLike<T>>,
): FlowableLike<T> => ({
  [FlowableLike_flow]: (scheduler, options) =>
    PauseableObservable_create(op, scheduler, options),
});

export default Flowable_create;
