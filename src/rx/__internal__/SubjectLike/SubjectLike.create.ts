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
import DispatcherLike__dispatch from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch";
import DisposableLike__addIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import ObserverLike__getDispatcher from "../ObserverLike/ObserverLike.getDispatcher";

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
          if (!DisposableLike__isDisposed(this)) {
            const { replayed } = this;

            const replay = this[MulticastObservableLike_replay];

            if (replay > 0) {
              replayed.push(next);
              if (getLength(replayed) > replay) {
                replayed.shift();
              }
            }

            for (const observer of this.observers) {
              pipe(
                observer,
                ObserverLike__getDispatcher,
                DispatcherLike__dispatch(next),
              );
            }
          }
        },

        [ReactiveContainerLike_sinkInto](
          this: TProperties & SubjectLike,
          observer: ObserverLike<T>,
        ) {
          if (!DisposableLike__isDisposed(this)) {
            const { observers } = this;
            observers.add(observer);

            pipe(
              observer,
              DisposableLike__onDisposed(_ => {
                observers.delete(observer);
              }),
            );
          }

          const dispatcher = ObserverLike__getDispatcher(observer);

          // The idea here is that an onSubscribe function may
          // call next from unscheduled sources such as event handlers.
          // So we marshall those events back to the scheduler.
          for (const next of this.replayed) {
            pipe(dispatcher, DispatcherLike__dispatch(next));
          }

          pipe(this, DisposableLike__addIgnoringChildErrors(dispatcher));
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
