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
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed";
import Observer_getDispatcher from "../../Observer/__internal__/Observer.getDispatcher";

const Subject_create: <T>(options?: { replay?: number }) => SubjectLike<T> =
  /*@__PURE__*/ (<T>() => {
    const Subject_observers = Symbol("Subject_observers");
    const Subject_replayed = Symbol("Subject_replayed");

    type TProperties = {
      readonly [MulticastObservableLike_replay]: number;
      readonly [Subject_observers]: Set<ObserverLike<T>>;
      readonly [Subject_replayed]: Array<T>;
    };

    const createSubjectInstance = createInstanceFactory(
      mix(
        include(Disposable_mixin),
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
          init(Disposable_mixin, instance);

          instance[MulticastObservableLike_replay] = replay;
          instance[Subject_observers] = newInstance<Set<ObserverLike>>(Set);
          instance[Subject_replayed] = [];

          return instance;
        },
        props<TProperties>({
          [MulticastObservableLike_replay]: 0,
          [Subject_observers]: none,
          [Subject_replayed]: none,
        }),
        {
          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return this[Subject_observers].size;
          },

          [SubjectLike_publish](this: TProperties & SubjectLike<T>, next: T) {
            if (!Disposable_isDisposed(this)) {
              const { [Subject_replayed]: replayed } = this;

              const replay = this[MulticastObservableLike_replay];

              if (replay > 0) {
                replayed.push(next);
                if (getLength(replayed) > replay) {
                  replayed.shift();
                }
              }

              for (const observer of this[Subject_observers]) {
                pipe(
                  observer,
                  Observer_getDispatcher,
                  Dispatcher_dispatch(next),
                );
              }
            }
          },

          [ReactiveContainerLike_sinkInto](
            this: TProperties & SubjectLike,
            observer: ObserverLike<T>,
          ) {
            if (!Disposable_isDisposed(this)) {
              const { [Subject_observers]: observers } = this;
              observers.add(observer);

              pipe(
                observer,
                Disposable_onDisposed(_ => {
                  observers.delete(observer);
                }),
              );
            }

            const dispatcher = Observer_getDispatcher(observer);

            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this[Subject_replayed]) {
              pipe(dispatcher, Dispatcher_dispatch(next));
            }

            pipe(this, Disposable_addIgnoringChildErrors(dispatcher));
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

export default Subject_create;
