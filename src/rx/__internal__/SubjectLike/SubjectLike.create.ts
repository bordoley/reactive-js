import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  getLength,
  max,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  SubjectLike,
  SubjectLike_publish,
} from "../../../rx";
import { dispatch } from "../../../scheduling/DispatcherLike";
import {
  addIgnoringChildErrors,
  isDisposed,
  onDisposed,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { getDispatcher } from "../../ObserverLike";

const SubjectLike__create: <T>(options?: {
  replay?: number;
}) => SubjectLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [MulticastObservableLike_replay]: number;
    readonly observers: Set<ObserverLike<T>>;
    readonly replayed: Array<T>;
  };

  const createSubjectInstance = createInstanceFactory(
    mix(
      include(DisposableLike__mixin),
      function Subject(
        instance: Pick<
          SubjectLike<T>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof MulticastObservableLike_observerCount
          | typeof SubjectLike_publish
        > &
          Mutable<TProperties>,
        replay: number,
      ): SubjectLike<T> {
        init(DisposableLike__mixin, instance);

        instance[MulticastObservableLike_replay] = replay;
        instance.observers = newInstance<Set<ObserverLike>>(Set);
        instance.replayed = [];

        return instance;
      },
      props<TProperties>({
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
      }),
      {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this.observers.size;
        },

        [SubjectLike_publish](this: TProperties & SubjectLike<T>, next: T) {
          if (!isDisposed(this)) {
            const { replayed } = this;

            const replay = this[MulticastObservableLike_replay];

            if (replay > 0) {
              replayed.push(next);
              if (getLength(replayed) > replay) {
                replayed.shift();
              }
            }

            for (const observer of this.observers) {
              pipe(observer, getDispatcher, dispatch(next));
            }
          }
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties & SubjectLike,
          observer: ObserverLike<T>,
        ) {
          if (!isDisposed(this)) {
            const { observers } = this;
            observers.add(observer);

            pipe(
              observer,
              onDisposed(_ => {
                observers.delete(observer);
              }),
            );
          }

          const dispatcher = getDispatcher(observer);

          // The idea here is that an onSubscribe function may
          // call next from unscheduled sources such as event handlers.
          // So we marshall those events back to the scheduler.
          for (const next of this.replayed) {
            pipe(dispatcher, dispatch(next));
          }

          pipe(this, addIgnoringChildErrors(dispatcher));
        },
      },
    ),
  );

  return (options?: { replay?: number }): SubjectLike<T> => {
    const { replay: replayOption = 0 } = options ?? {};
    const replay = max(replayOption, 0);

    return createSubjectInstance(replay);
  };
})();

export default SubjectLike__create;
