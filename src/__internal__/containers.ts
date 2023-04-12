import { ContainerLike } from "../containers.js";
import { Function1, Predicate, Reducer } from "../functions.js";
import {
  __LiftedLike_operators as LiftedLike_operators,
  __LiftedLike_source as LiftedLike_source,
  __MappingLike_mapper as MappingLike_mapper,
  __PredicatedLike_predicate as PredicatedLike_predicate,
  __ReducerAccumulatorLike_acc as ReducerAccumulatorLike_acc,
  __ReducerAccumulatorLike_reducer as ReducerAccumulatorLike_reducer,
} from "./symbols.js";

export {
  LiftedLike_operators,
  LiftedLike_source,
  MappingLike_mapper,
  PredicatedLike_predicate,
  ReducerAccumulatorLike_acc,
  ReducerAccumulatorLike_reducer,
};

export interface LiftedLike<C extends ContainerLike, TState> {
  readonly [LiftedLike_source]: C;
  readonly [LiftedLike_operators]: readonly Function1<TState, TState>[];
}

export interface MappingLike<TA, TB> {
  [MappingLike_mapper]: Function1<TA, TB>;
}

export interface PredicatedLike<T> {
  [PredicatedLike_predicate]: Predicate<T>;
}

export interface ReducerAccumulatorLike<T, TAcc> {
  [ReducerAccumulatorLike_acc]: TAcc;
  [ReducerAccumulatorLike_reducer]: Reducer<T, TAcc>;
}
