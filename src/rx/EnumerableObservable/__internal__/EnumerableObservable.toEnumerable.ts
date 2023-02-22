import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { isSome, none, pipe, unsafeCast } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike_current,
  SourceLike,
  SourceLike_move,
  ToEnumerable,
} from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal.js";
import {
  EnumerableObservableLike,
  ObserverLike,
  SinkLike_notify,
} from "../../../rx.js";
import {
  ContinuationLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import Continuation_run from "../../../scheduling/Continuation/__internal__/Continuation.run.js";
import Scheduler_isInContinuation from "../../../scheduling/Scheduler/__internal__/Scheduler.isInContinuation.js";
import { DisposableLike } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";

const EnumerableObservable_toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();
    const typedObserverMixin = Observer_mixin<T>();

    const EnumeratorScheduler_continuations = Symbol(
      "EnumeratorScheduler_continuations",
    );
    type TEnumeratorSchedulerProperties = {
      [SchedulerLike_inContinuation]: boolean;
      readonly [EnumeratorScheduler_continuations]: ContinuationLike[];
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

          instance[EnumeratorScheduler_continuations] = [];

          return instance;
        },
        props<TEnumeratorSchedulerProperties>({
          [SchedulerLike_inContinuation]: false,
          [EnumeratorScheduler_continuations]: none,
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
              const { [EnumeratorScheduler_continuations]: continuations } =
                this;

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
              this[EnumeratorScheduler_continuations].push(continuation);
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
      (obs: EnumerableObservableLike<T>): EnumerableLike<T> =>
        Enumerable_create(() => {
          const scheduler = createEnumeratorScheduler();

          pipe(
            createEnumeratorObserver(scheduler),
            Disposable_addTo(scheduler),
            Sink_sourceFrom(obs),
          );

          return scheduler;
        });
  })();

export default EnumerableObservable_toEnumerable;
