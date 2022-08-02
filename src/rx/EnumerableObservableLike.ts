import { observerMixin } from "../__internal__/scheduling/ObserverLikeMixin";
import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import {
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import {
  Concat,
  DecodeWithCharset,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
} from "../containers";
import { Factory, isSome, none, pipe } from "../functions";
import { EnumerableLike, ToEnumerable, createEnumerable } from "../ix";
import { EnumerableObservableLike } from "../rx";
import {
  ObserverLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  VirtualTimeSchedulerLike,
} from "../scheduling";
import { isInContinuation } from "../scheduling/SchedulerLike";
import { ToFlowable } from "../streaming";
import {
  ContinuationLike,
  DisposableLike,
  EnumeratorLike_current,
  SinkLike_notify,
  SourceLike_move,
} from "../util";
import { run } from "../util/ContinuationLike";
import { add, addTo, dispose, isDisposed } from "../util/DisposableLike";
import { sourceFrom } from "../util/SinkLike";
import {
  concat as concatObs,
  decodeWithCharset as decodeWithCharsetObs,
  distinctUntilChanged as distinctUntilChangedObs,
  forEach as forEachObs,
  keep as keepObs,
  map as mapObs,
  merge as mergeObs,
  pairwise as pairwiseObs,
  reduce as reduceObs,
  scan as scanObs,
  skipFirst as skipFirstObs,
  takeFirst as takeFirstObs,
  takeLast as takeLastObs,
  takeWhile as takeWhileObs,
  throwIfEmpty as throwIfEmptyObs,
  toFlowable as toFlowableObs,
  toReadonlyArray as toReadonlyArrayObs,
} from "./RunnableObservableLike";

export const concat: Concat<EnumerableObservableLike>["concat"] = concatObs;
export const concatT: Concat<EnumerableObservableLike> = {
  concat,
};

export const decodeWithCharset: DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"] =
  decodeWithCharsetObs;
export const decodeWithCharsetT: DecodeWithCharset<EnumerableObservableLike> = {
  decodeWithCharset,
};

export const distinctUntilChanged: DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"] =
  distinctUntilChangedObs;
export const distinctUntilChangedT: DistinctUntilChanged<EnumerableObservableLike> =
  { distinctUntilChanged };

export const forEach: ForEach<EnumerableObservableLike>["forEach"] = forEachObs;
export const forEachT: ForEach<EnumerableObservableLike> = { forEach };

export const keep: Keep<EnumerableObservableLike>["keep"] = keepObs;
export const keepT: Keep<EnumerableObservableLike> = { keep };

export const map: Map<EnumerableObservableLike>["map"] = mapObs;
export const mapT: Map<EnumerableObservableLike> = { map };

export const merge: Concat<EnumerableObservableLike>["concat"] = mergeObs;
export const mergeT: Concat<EnumerableObservableLike> = {
  concat: merge,
};

export const pairwise: Pairwise<EnumerableObservableLike>["pairwise"] =
  pairwiseObs;
export const pairwiseT: Pairwise<EnumerableObservableLike> = { pairwise };

export const reduce: Reduce<EnumerableObservableLike>["reduce"] = reduceObs;
export const reduceT: Reduce<EnumerableObservableLike> = { reduce };

export const scan: Scan<EnumerableObservableLike>["scan"] = scanObs;
export const scanT: Scan<EnumerableObservableLike> = { scan };

export const skipFirst: SkipFirst<EnumerableObservableLike>["skipFirst"] =
  skipFirstObs;
export const skipFirstT: SkipFirst<EnumerableObservableLike> = { skipFirst };

export const takeFirst: TakeFirst<EnumerableObservableLike>["takeFirst"] =
  takeFirstObs;
export const takeFirstT: TakeFirst<EnumerableObservableLike> = { takeFirst };

export const takeLast: TakeLast<EnumerableObservableLike>["takeLast"] =
  takeLastObs;
export const takeLastT: TakeLast<EnumerableObservableLike> = { takeLast };

export const takeWhile: TakeWhile<EnumerableObservableLike>["takeWhile"] =
  takeWhileObs;
export const takeWhileT: TakeWhile<EnumerableObservableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"] =
  throwIfEmptyObs;
export const throwIfEmptyT: ThrowIfEmpty<EnumerableObservableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumeratorMixin = enumeratorMixin<T>();
    const typedObserverMixin = observerMixin<T>();

    type TEnumeratorSchedulerProperties = {
      [SchedulerLike_inContinuation]: boolean;
      continuations: ContinuationLike[];
    } & PropertyTypeOf<[typeof disposableMixin, typeof typedEnumeratorMixin]>;

    type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

    const createEnumeratorScheduler = pipe(
      clazz(
        function EnumeratorScheduler(this) {
          init(disposableMixin, this);
          init(typedEnumeratorMixin, this);

          this.continuations = [];
        },
        {
          [SchedulerLike_inContinuation]: false,
          continuations: none,
        },
        {
          [SchedulerLike_now]: 0,
          get [SchedulerLike_shouldYield](): boolean {
            const self = this as unknown as TEnumeratorSchedulerProperties;
            return isInContinuation(self);
          },
          [SchedulerLike_requestYield](): void {
            // No-Op: We yield whenever the continuation is running.
          },
          [SourceLike_move](
            this: TEnumeratorSchedulerProperties & MutableEnumeratorLike<T>,
          ) {
            if (!isDisposed(this)) {
              const { continuations } = this;

              const continuation = continuations.shift();
              if (isSome(continuation)) {
                this[SchedulerLike_inContinuation] = true;
                run(continuation);
                this[SchedulerLike_inContinuation] = false;
              } else {
                pipe(this, dispose());
              }
            }
          },
          [SchedulerLike_schedule](
            this: TEnumeratorSchedulerProperties & DisposableLike,
            continuation: ContinuationLike,
            _?: { readonly delay?: number },
          ): void {
            pipe(this, add(continuation));

            if (!isDisposed(continuation)) {
              this.continuations.push(continuation);
            }
          },
        },
      ),
      mixWith(disposableMixin, typedEnumeratorMixin),
      createObjectFactory<EnumeratorScheduler>(),
    );

    type TEnumeratorObserverProperties = {
      enumerator: EnumeratorScheduler;
    } & PropertyTypeOf<[typeof disposableMixin, typeof typedObserverMixin]>;

    const createEnumeratorObserver = pipe(
      clazz(
        function EnumeratorObserver(
          this: TEnumeratorObserverProperties,
          enumerator: EnumeratorScheduler,
        ) {
          init(disposableMixin, this);
          init(typedObserverMixin, this, enumerator);
          this.enumerator = enumerator;
        },
        {
          enumerator: none,
        },
        {
          [SinkLike_notify](this: TEnumeratorObserverProperties, next: T) {
            this.enumerator[EnumeratorLike_current] = next;
          },
        },
      ),
      mixWith(disposableMixin, typedObserverMixin),
      createObjectFactory<ObserverLike<T>, EnumeratorScheduler>(),
    );

    return () =>
      (obs: EnumerableObservableLike<T>): EnumerableLike<T> =>
        createEnumerable(() => {
          const scheduler = createEnumeratorScheduler();

          pipe(
            createEnumeratorObserver(scheduler),
            addTo(scheduler),
            sourceFrom(obs),
          );

          return scheduler;
        });
  })();
export const toEnumerableT: ToEnumerable<EnumerableObservableLike> = {
  toEnumerable,
};

export const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"] =
  toFlowableObs;
export const toFlowableT: ToFlowable<EnumerableObservableLike> = { toFlowable };

export const toReadonlyArray: ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
>["toReadonlyArray"] = toReadonlyArrayObs;

export const toReadonlyArrayT: ToReadonlyArray<
  EnumerableObservableLike,
  {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
  }
> = { toReadonlyArray };
