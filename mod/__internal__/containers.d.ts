import { Function1, Predicate, Reducer } from "../functions.js";
import { __MappingLike_mapper, __PredicatedLike_predicate, __ReducerAccumulatorLike_acc, __ReducerAccumulatorLike_reducer } from "./symbols.js";
export interface MappingLike<TA, TB> {
    [__MappingLike_mapper]: Function1<TA, TB>;
}
export interface PredicatedLike<T> {
    [__PredicatedLike_predicate]: Predicate<T>;
}
export interface ReducerAccumulatorLike<T, TAcc> {
    [__ReducerAccumulatorLike_acc]: TAcc;
    [__ReducerAccumulatorLike_reducer]: Reducer<T, TAcc>;
}
