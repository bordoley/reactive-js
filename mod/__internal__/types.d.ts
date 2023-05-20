import { Equality, Function1, Function2, Optional, Predicate, Reducer, SideEffect1 } from "../functions.js";
import { CollectionLike, Container, ContainerOperator, DisposableLike, EnumeratorLike, IndexedCollectionLike, KeyedCollectionLike, ObserverLike, QueueableLike, SchedulerLike } from "../types.js";
import { __BufferingLike_buffer as BufferingLike_buffer, __BufferingLike_count as BufferingLike_count, __ContinuationLike_activeChild as ContinuationLike_activeChild, __ContinuationLike_parent as ContinuationLike_parent, __ContinuationLike_run as ContinuationLike_run, __ContinuationLike_scheduler as ContinuationLike_scheduler, __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule, __DelegatingLike_delegate as DelegatingLike_delegate, __DistinctUntilChangedLike_equality as DistinctUntilChangedLike_equality, __DistinctUntilChangedLike_hasValue as DistinctUntilChangedLike_hasValue, __DistinctUntilChangedLike_prev as DistinctUntilChangedLike_prev, __ForEachLike_effect as ForEachLike_effect, __HigherOrderEnumerator_inner as HigherOrderEnumerator_inner, __LiftedLike_operators as LiftedLike_operators, __LiftedLike_source as LiftedLike_source, __MappingLike_selector as MappingLike_selector, __MutableKeyedCollectionLike_set as MutableKeyedCollectionLike_set, __PairwiseLike_hasPrev as PairwiseLike_hasPrev, __PairwiseLike_prev as PairwiseLike_prev, __PredicatedLike_predicate as PredicatedLike_predicate, __QueueLike_dequeue as QueueLike_dequeue, __QueueLike_head as QueueLike_head, __ReducerAccumulatorLike_acc as ReducerAccumulatorLike_acc, __ReducerAccumulatorLike_reducer as ReducerAccumulatorLike_reducer, __SchedulerTaskLike_continuation as SchedulerTaskLike_continuation, __SchedulerTaskLike_dueTime as SchedulerTaskLike_dueTime, __SchedulerTaskLike_id as SchedulerTaskLike_id, __SerialDisposableLike_current as SerialDisposableLike_current, __SkipFirstLike_count as SkipFirstLike_count, __SkipFirstLike_skipCount as SkipFirstLike_skipCount, __StackLike_head as StackLike_head, __StackLike_pop as StackLike_pop, __TakeFirstLike_count as TakeFirstLike_count, __TakeFirstLike_takeCount as TakeFirstLike_takeCount, __TakeWhileLike_inclusive as TakeWhileLike_inclusive, __WithLatestLike_hasLatest as WithLatestLike_hasLatest, __WithLatestLike_otherLatest as WithLatestLike_otherLatest, __WithLatestLike_selector as WithLatestLike_selector, __ZipLike_enumerators as ZipLike_enumerators } from "./symbols.js";
export { BufferingLike_buffer, BufferingLike_count, ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_run, ContinuationLike_scheduler, ContinuationSchedulerLike_schedule, DelegatingLike_delegate, DistinctUntilChangedLike_equality, DistinctUntilChangedLike_hasValue, DistinctUntilChangedLike_prev, ForEachLike_effect, HigherOrderEnumerator_inner, LiftedLike_operators, LiftedLike_source, MappingLike_selector, MutableKeyedCollectionLike_set, PairwiseLike_hasPrev, PairwiseLike_prev, PredicatedLike_predicate, QueueLike_dequeue, QueueLike_head, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, SerialDisposableLike_current, SkipFirstLike_count, SkipFirstLike_skipCount, StackLike_pop, StackLike_head, TakeFirstLike_count, TakeFirstLike_takeCount, TakeWhileLike_inclusive, WithLatestLike_hasLatest, WithLatestLike_otherLatest, WithLatestLike_selector, ZipLike_enumerators, };
export interface DelegatingLike<T> {
    readonly [DelegatingLike_delegate]: T;
}
export interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    get [SerialDisposableLike_current](): TDisposable;
    set [SerialDisposableLike_current](v: TDisposable);
}
export interface StackLike<T = unknown> extends QueueableLike<T> {
    readonly [StackLike_head]: Optional<T>;
    [StackLike_pop](): Optional<T>;
}
export interface QueueLike<T = unknown> extends QueueableLike<T> {
    readonly [QueueLike_head]: Optional<T>;
    [QueueLike_dequeue](): Optional<T>;
}
export interface QueueCollectionLike<T = unknown> extends QueueLike<T>, CollectionLike {
}
export interface MutableKeyedCollectionLike<TKey = unknown, T = unknown> extends KeyedCollectionLike<TKey, T> {
    [MutableKeyedCollectionLike_set](key: TKey, value: T): T;
}
export interface MutableIndexedCollectionLike<T = unknown> extends IndexedCollectionLike<T>, MutableKeyedCollectionLike<number, T> {
}
export interface IndexedQueueLike<T = unknown> extends QueueLike<T>, MutableIndexedCollectionLike<T>, StackLike<T> {
}
export interface ContinuationLike extends DisposableLike, QueueableLike<ContinuationLike>, CollectionLike {
    readonly [ContinuationLike_activeChild]: Optional<ContinuationLike>;
    readonly [ContinuationLike_scheduler]: ContinuationSchedulerLike;
    [ContinuationLike_parent]: Optional<ContinuationLike>;
    [ContinuationLike_run](): void;
}
export interface ContinuationSchedulerLike extends SchedulerLike {
    [ContinuationSchedulerLike_schedule](continuation: ContinuationLike, options?: {
        readonly delay?: number;
    }): void;
}
export interface SchedulerTaskLike {
    readonly [SchedulerTaskLike_continuation]: ContinuationLike;
    [SchedulerTaskLike_dueTime]: number;
    [SchedulerTaskLike_id]: number;
}
export interface LiftedLike<TSrc, TState> {
    readonly [LiftedLike_source]: TSrc;
    readonly [LiftedLike_operators]: readonly Function1<TState, TState>[];
}
export interface BufferingLike<T> {
    [BufferingLike_buffer]: T[];
    [BufferingLike_count]: number;
}
export interface ForEachLike<T> {
    [ForEachLike_effect]: SideEffect1<T>;
}
export interface MappingLike<TA, TB> {
    [MappingLike_selector]: Function1<TA, TB>;
}
export interface PredicatedLike<T> {
    [PredicatedLike_predicate]: Predicate<T>;
}
export interface ReducerAccumulatorLike<T, TAcc> {
    [ReducerAccumulatorLike_acc]: TAcc;
    [ReducerAccumulatorLike_reducer]: Reducer<T, TAcc>;
}
export interface PairwiseLike<T> {
    [PairwiseLike_prev]: T;
    [PairwiseLike_hasPrev]: boolean;
}
export interface DistinctUntilChangedLike<T> {
    [DistinctUntilChangedLike_equality]: Equality<T>;
    [DistinctUntilChangedLike_prev]: T;
    [DistinctUntilChangedLike_hasValue]: boolean;
}
export interface Lift<C extends Container> {
    lift<TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>): ContainerOperator<C, TA, TB>;
}
export interface SkipFirstLike {
    [SkipFirstLike_skipCount]: number;
    [SkipFirstLike_count]: number;
}
export interface TakeFirstLike {
    [TakeFirstLike_count]: number;
    [TakeFirstLike_takeCount]: number;
}
export interface TakeWhileLike<T> extends PredicatedLike<T> {
    [TakeWhileLike_inclusive]: boolean;
}
export interface WithLatestLike<TA, TB, T> {
    [WithLatestLike_hasLatest]: boolean;
    [WithLatestLike_otherLatest]: Optional<TB>;
    [WithLatestLike_selector]: Function2<TA, TB, T>;
}
export interface ZipLike {
    [ZipLike_enumerators]: readonly EnumeratorLike<unknown>[];
}
export interface HigherOrderEnumeratorLike<T> {
    [HigherOrderEnumerator_inner]: EnumeratorLike<T>;
}
