import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { isSome, none, pipe, unsafeCast } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike_current,
  SourceLike,
  SourceLike_move,
  ToEnumerable,
} from "../../../ix";
import Enumerable_create from "../../../ix/__internal__/Enumerable/Enumerable.create";
import Enumerable_empty from "../../../ix/__internal__/Enumerable/Enumerable.empty";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling";
import Continuation_run from "../../../scheduling/__internal__/Continuation/Continuation.run";
import Scheduler_isInContinuation from "../../../scheduling/__internal__/Scheduler/Scheduler.isInContinuation";
import { DisposableLike } from "../../../util";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Observable_isEnumerable from "./Observable.isEnumerable";

const Observable_toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
    const typedObserverMixin = Observer_mixin<T>();

    type TEnumeratorSchedulerProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly continuations: ContinuationLike[];
    };

    type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

    const createEnumeratorScheduler = createInstanceFactory(
      mix(
        include(Disposable_mixin, typedMutableEnumeratorMixin),
        function EnumeratorScheduler(
          instance: Pick<
            SchedulerLike & SourceLike,
            | typeof SchedulerLike_now
            | typeof SchedulerLike_requestYield
            | typeof SchedulerLike_schedule
            | typeof SchedulerLike_shouldYield
            | typeof SourceLike_move
          > &
            Mutable<TEnumeratorSchedulerProperties>,
        ): EnumeratorScheduler {
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.continuations = [];

          return instance;
        },
        props<TEnumeratorSchedulerProperties>({
          [SchedulerLike_inContinuation]: false,
          continuations: none,
        }),
        {
          [SchedulerLike_now]: 0,
          get [SchedulerLike_shouldYield](): boolean {
            unsafeCast<TEnumeratorSchedulerProperties>(this);
            return Scheduler_isInContinuation(this);
          },
          [SchedulerLike_requestYield](): void {
            // No-Op: We yield whenever the continuation is running.
          },
          [SourceLike_move](
            this: TEnumeratorSchedulerProperties & MutableEnumeratorLike<T>,
          ) {
            if (!Disposable_isDisposed(this)) {
              const { continuations } = this;

              const continuation = continuations.shift();
              if (isSome(continuation)) {
                this[SchedulerLike_inContinuation] = true;
                Continuation_run(continuation);
                this[SchedulerLike_inContinuation] = false;
              } else {
                pipe(this, Disposable_dispose());
              }
            }
          },
          [SchedulerLike_schedule](
            this: TEnumeratorSchedulerProperties & DisposableLike,
            continuation: ContinuationLike,
            _?: { readonly delay?: number },
          ): void {
            pipe(this, Disposable_add(continuation));

            if (!Disposable_isDisposed(continuation)) {
              this.continuations.push(continuation);
            }
          },
        },
      ),
    );

    type TEnumeratorObserverProperties = {
      readonly enumerator: EnumeratorScheduler;
    };

    const createEnumeratorObserver = createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin),
        function EnumeratorObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            Mutable<TEnumeratorObserverProperties>,
          enumerator: EnumeratorScheduler,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
          init(typedObserverMixin, instance, enumerator);

          instance.enumerator = enumerator;

          return instance;
        },
        props<TEnumeratorObserverProperties>({
          enumerator: none,
        }),
        {
          [SinkLike_notify](this: TEnumeratorObserverProperties, next: T) {
            this.enumerator[EnumeratorLike_current] = next;
          },
        },
      ),
    );

    return () =>
      (obs: ObservableLike<T>): EnumerableLike<T> =>
        Observable_isEnumerable(obs)
          ? Enumerable_create(() => {
              const scheduler = createEnumeratorScheduler();

              pipe(
                createEnumeratorObserver(scheduler),
                Disposable_addTo(scheduler),
                Sink_sourceFrom(obs),
              );

              return scheduler;
            })
          : Enumerable_empty();
  })();

export default Observable_toEnumerable;
