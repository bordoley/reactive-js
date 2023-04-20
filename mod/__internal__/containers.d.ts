import { ContainerLike } from "../containers.js";
import { Function1, Predicate, Reducer, SideEffect1 } from "../functions.js";
import { __ForEachLike_effect as ForEachLike_effect, __LiftedLike_operators as LiftedLike_operators, __LiftedLike_source as LiftedLike_source, __MappingLike_selector as MappingLike_selector, __PredicatedLike_predicate as PredicatedLike_predicate, __ReducerAccumulatorLike_acc as ReducerAccumulatorLike_acc, __ReducerAccumulatorLike_reducer as ReducerAccumulatorLike_reducer } from "./symbols.js";
export { ForEachLike_effect, LiftedLike_operators, LiftedLike_source, MappingLike_selector, PredicatedLike_predicate, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, };
export interface LiftedLike<C extends ContainerLike, TState> {
    readonly [LiftedLike_source]: C;
    readonly [LiftedLike_operators]: readonly Function1<TState, TState>[];
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
