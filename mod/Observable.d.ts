import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, Tuple2, Tuple3, Tuple4, Tuple5, Tuple6, Tuple7, Tuple8, Tuple9, Updater } from "./functions.js";
import { Container_T, Container_type, DeferredObservableBaseLike, DeferredObservableLike, DispatcherLike, DisposableLike, EnumerableBaseLike, EnumerableLike, EnumerableWithSideEffectsLike, EnumeratorLike, EventSourceLike, IndexedCollectionLike, IndexedContainer, MulticastObservableLike, ObservableBaseLike, ObservableLike, ObservableWithSideEffectsLike, ObserverLike, PauseableObservableLike, PublisherLike, PureObservableLike, QueueableLike, QueueableLike_backpressureStrategy, ReplayObservableLike, RunnableBaseLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "./types.js";
export type PureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends EnumerableWithSideEffectsLike<TIn> ? EnumerableWithSideEffectsLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : never;
export type ObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableBaseLike<TIn> ? EnumerableWithSideEffectsLike<TOut> : TObservableIn extends RunnableBaseLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? DeferredObservableLike<TOut> : never;
export type RunnableBoundedPureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : never;
export type RunnableBoundedObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableBaseLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? DeferredObservableLike<TOut> : never;
export type DeferredObservableBoundedObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends DeferredObservableBaseLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? DeferredObservableLike<TOut> : never;
export type MulticastObservableBoundedPureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : DeferredObservableLike<TOut>;
export type PureDeferredObservableOperator<TIn, TOut> = <TObservableIn extends DeferredObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends EnumerableWithSideEffectsLike<TIn> ? EnumerableWithSideEffectsLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableWithSideEffectsLike<TIn> ? RunnableWithSideEffectsLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : never;
/**
 * @noInheritDoc
 * @category Container
 */
export interface ObservableContainer extends IndexedContainer {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface DeferredObservableContainer extends IndexedContainer {
    readonly [Container_type]?: DeferredObservableLike<this[typeof Container_T]>;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends IndexedContainer {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableWithSideEffectsContainer extends IndexedContainer {
    readonly [Container_type]?: RunnableWithSideEffectsLike<this[typeof Container_T]>;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableContainer extends IndexedContainer {
    readonly [Container_type]?: EnumerableLike<this[typeof Container_T]>;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableWithSideEffectsContainer extends IndexedContainer {
    readonly [Container_type]?: EnumerableWithSideEffectsLike<this[typeof Container_T]>;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface MulticastObservableContainer extends IndexedContainer {
    readonly [Container_type]?: MulticastObservableLike<this[typeof Container_T]>;
}
export type Type = ObservableContainer;
export declare namespace Animation {
    /**
     * @noInheritDoc
     */
    interface Delay {
        readonly type: "delay";
        readonly duration: number;
    }
    /**
     * @noInheritDoc
     */
    interface KeyFrame {
        readonly type: "keyframe";
        readonly from: number;
        readonly to: number;
        readonly duration: number;
        readonly easing?: Function1<number, number>;
    }
    /**
     * @noInheritDoc
     */
    interface Frame {
        readonly type: "frame";
        readonly value: number;
    }
    /**
     * @noInheritDoc
     */
    interface Loop<T> {
        readonly type: "loop";
        readonly animation: Animation<T> | readonly Animation<T>[];
        readonly count?: number;
    }
    /**
     * @noInheritDoc
     */
    interface Spring {
        readonly type: "spring";
        readonly from: number;
        readonly to: number;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }
}
export type Animation<T = number> = Animation.Delay | Animation.Loop<T> | (T extends number ? (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector?: never;
} : (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector: Function1<number, T>;
});
/**
 * @noInheritDoc
 * @category Module
 */
export interface ObservableModule {
    /**
     * @category Constructor
     */
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): RunnableLike<T>;
    /**
     * @category Operator
     */
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): RunnableBoundedPureObservableOperator<T, T>;
    /**
     * @category Operator
     */
    buffer<T>(options?: {
        count?: number;
    }): PureObservableOperator<T, readonly T[]>;
    /**
     * @category Operator
     */
    catchError<T>(onError: SideEffect1<Error>): ObservableOperatorWithSideEffects<T, T>;
    /**
     * @category Constructor
     */
    combineLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>, i: RunnableBaseLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>, i: DeferredObservableBaseLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    combineLatest<TA, TB>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB, TC, TD, TE>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>, i: ObservableBaseLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    /**
     * @category Constructor
     */
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): DeferredObservableLike<T>;
    /**
     * @category Constructor
     */
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concat<T>(fst: EnumerableBaseLike<T>, snd: EnumerableBaseLike<T>, ...tail: readonly EnumerableBaseLike<T>[]): EnumerableWithSideEffectsLike<T>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    concat<T>(fst: RunnableBaseLike<T>, snd: RunnableBaseLike<T>, ...tail: readonly RunnableWithSideEffectsLike<T>[]): RunnableWithSideEffectsLike<T>;
    concat<T>(fst: DeferredObservableBaseLike<T>, snd: DeferredObservableBaseLike<T>, ...tail: readonly DeferredObservableBaseLike<T>[]): DeferredObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: DeferredObservableBaseLike<T>, ...tail: readonly DeferredObservableBaseLike<T>[]): MulticastObservableLike<T>;
    concatAll<T>(): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableBaseLike<T>, T>;
    concatMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(observables: readonly EnumerableBaseLike<T>[]): EnumerableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    concatMany<T>(observables: readonly RunnableBaseLike<T>[]): RunnableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly DeferredObservableBaseLike<T>[]): DeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...DeferredObservableBaseLike<T>[]
    ]): MulticastObservableLike<T>;
    concatMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): PureObservableOperator<T, T>;
    concatWith<T>(snd: EnumerableBaseLike<T>, ...tail: readonly EnumerableBaseLike<T>[]): ObservableOperatorWithSideEffects<T, T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableBoundedPureObservableOperator<T, T>;
    concatWith<T>(snd: RunnableBaseLike<T>, ...tail: readonly RunnableBaseLike<T>[]): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    concatWith<T>(snd: DeferredObservableBaseLike<T>, ...tail: readonly DeferredObservableBaseLike<T>[]): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    contains<T>(value: T, options?: {
        readonly equality?: Equality<T>;
    }): Function1<RunnableLike<T>, boolean>;
    count(): Function1<RunnableLike, number>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;
    createPublisher<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
    createRefCountedPublisher<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
    currentTime(): RunnableLike<number>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): PureObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<ObservableLike<T>>): DeferredObservableLike<T>;
    delay<T>(delay: number, options?: {
        delayStart?: boolean;
    }): <TObservableIn extends EnumerableBaseLike<T>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<T> ? RunnableLike<T> : TObservableIn extends EnumerableWithSideEffectsLike<T> ? RunnableWithSideEffectsLike<T> : never;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureObservableOperator<T, T>;
    empty<T>(): EnumerableLike<T>;
    encodeUtf8(): PureObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): PureObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    enumerate<T>(): Function1<EnumerableBaseLike<T>, EnumeratorLike<T>>;
    everySatisfy<T>(predicate: Predicate<T>): Function1<RunnableLike<T>, boolean>;
    exhaust<T>(): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableBaseLike<T>, T>;
    exhaustMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    first<T>(): Function1<RunnableLike<T>, Optional<T>>;
    firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ObservableOperatorWithSideEffects<TA, TB>;
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<RunnableBaseLike<T>, PauseableObservableLike<T> & DisposableLike>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    forkMerge<TOut, TObservableIn extends ObservableBaseLike, TObservableOut extends ObservableBaseLike<TOut>>(fst: Function1<TObservableIn, TObservableOut>, snd: Function1<TObservableIn, TObservableOut>, ...tail: readonly Function1<TObservableIn, TObservableOut>[]): TObservableIn extends RunnableLike ? TObservableOut extends RunnableLike<TOut> ? Function1<TObservableIn, RunnableLike<TOut>> : TObservableOut extends RunnableBaseLike<TOut> ? Function1<TObservableIn, RunnableWithSideEffectsLike<TOut>> : TObservableOut extends PureObservableLike<TOut> ? Function1<TObservableIn, MulticastObservableLike<TOut>> : TObservableOut extends DeferredObservableBaseLike<TOut> ? Function1<TObservableIn, DeferredObservableLike<TOut>> : never : TObservableIn extends RunnableWithSideEffectsLike ? TObservableOut extends RunnableBaseLike<TOut> ? Function1<TObservableIn, RunnableWithSideEffectsLike<TOut>> : TObservableOut extends PureObservableLike<TOut> ? Function1<TObservableIn, MulticastObservableLike<TOut>> : TObservableOut extends DeferredObservableBaseLike<TOut> ? Function1<TObservableIn, DeferredObservableLike<TOut>> : never : TObservableIn extends DeferredObservableLike ? Function1<TObservableIn, DeferredObservableLike<TOut>> : TObservableIn extends MulticastObservableLike ? TObservableOut extends PureObservableLike<TOut> ? Function1<TObservableIn, MulticastObservableLike<TOut>> : Function1<TObservableIn, DeferredObservableLike<TOut>> : never;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableLike<T>>;
    fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
    fromIterable<T>(): Function1<Iterable<T>, EnumerableWithSideEffectsLike<T>>;
    fromOptional<T>(): Function1<Optional<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromValue<T>(): Function1<T, EnumerableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    ignoreElements<T>(): PureObservableOperator<unknown, T>;
    isDeferred<T>(obs: ObservableBaseLike<T>): obs is DeferredObservableBaseLike<T>;
    isEnumerable<T>(obs: ObservableBaseLike<T>): obs is EnumerableBaseLike<T>;
    isPure<T>(obs: ObservableBaseLike<T>): obs is PureObservableLike<T>;
    isRunnable<T>(obs: ObservableBaseLike<T>): obs is RunnableBaseLike<T>;
    keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;
    last<T>(): Function1<RunnableLike<T>, Optional<T>>;
    lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    merge<T>(fst: RunnableBaseLike<T>, snd: RunnableBaseLike<T>, ...tail: readonly RunnableBaseLike<T>[]): RunnableWithSideEffectsLike<T>;
    merge<T>(fst: DeferredObservableBaseLike<T>, snd: DeferredObservableBaseLike<T>, ...tail: readonly DeferredObservableBaseLike<T>[]): DeferredObservableLike<T>;
    merge<T>(fst: PureObservableLike<T>, snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    merge<T>(fst: ObservableBaseLike<T>, snd: ObservableBaseLike<T>, ...tail: readonly ObservableBaseLike<T>[]): DeferredObservableLike<T>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableBaseLike<T>, T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    mergeMany<T>(observables: readonly RunnableBaseLike<T>[]): RunnableWithSideEffectsLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableBaseLike<T>[]): DeferredObservableLike<T>;
    mergeMany<T>(observables: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    mergeMany<T>(observables: readonly ObservableBaseLike<T>[]): DeferredObservableLike<T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableBoundedPureObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableBaseLike<T>, ...tail: readonly RunnableBaseLike<T>[]): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: DeferredObservableBaseLike<T>, ...tail: readonly DeferredObservableBaseLike<T>[]): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): Function1<PureObservableLike<T>, MulticastObservableLike<T>>;
    mergeWith<T>(snd: ObservableBaseLike<T>, ...tail: readonly ObservableBaseLike<T>[]): Function1<ObservableBaseLike<T>, DeferredObservableLike<T>>;
    mergeMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    /**
     * @category Transform
     */
    multicast<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableWithSideEffectsLike<T>, ReplayObservableLike<T> & DisposableLike>;
    never<T>(): MulticastObservableLike<T>;
    noneSatisfy<T>(predicate: Predicate<T>): Function1<RunnableLike<T>, boolean>;
    onSubscribe<T>(f: Factory<DisposableLike>): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: SideEffect): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    pairwise<T>(): PureObservableOperator<T, Tuple2<T, T>>;
    range(start: number, options?: {
        readonly count?: number;
    }): EnumerableLike<number>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<RunnableLike<T>, TAcc>;
    /**
     * @category Operator
     */
    repeat<T>(predicate: Predicate<number>): PureDeferredObservableOperator<T, T>;
    repeat<T>(count: number): PureDeferredObservableOperator<T, T>;
    repeat<T>(): PureDeferredObservableOperator<T, T>;
    /**
     * @category Operator
     */
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): PureDeferredObservableOperator<T, T>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableBaseLike<T>>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureObservableOperator<T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, DeferredObservableBaseLike<TAcc>>, initialValue: Factory<TAcc>): Function1<ObservableBaseLike<T>, DeferredObservableLike<TAcc>>;
    /**
     * @category Transform
     */
    share<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableWithSideEffectsLike<T>, MulticastObservableLike<T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    someSatisfy<T>(predicate: Predicate<T>): Function1<RunnableLike<T>, boolean>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): RunnableLike<number>;
    startWith<T>(value: T, ...values: readonly T[]): PureObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableBaseLike<T>, DisposableLike>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    switchAll<T>(): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableBaseLike<T>, T>;
    switchMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableLike): RunnableBoundedPureObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableWithSideEffectsLike): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: DeferredObservableLike): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: MulticastObservableLike): MulticastObservableBoundedPureObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): ObservableOperatorWithSideEffects<T, T>;
    throws<T>(): EnumerableWithSideEffectsLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
    }): EnumerableWithSideEffectsLike<T>;
    toEventSource<T>(): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toIndexedCollection<T>(): Function1<RunnableBaseLike<T>, IndexedCollectionLike<T>>;
    toIterable<T>(): Function1<EnumerableBaseLike<T>, Iterable<T>>;
    toObservable<T>(): Function1<ObservableLike<T>, ObservableLike<T>>;
    toReadonlyArray<T>(): Function1<RunnableBaseLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    toReadonlySet<T>(): Function1<RunnableBaseLike<T>, ReadonlySet<T>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): RunnableBoundedPureObservableOperator<TA, TB>;
    withLatestFrom<TA, TB, T>(other: RunnableLike<TB>, selector: Function2<TA, TB, T>): RunnableBoundedPureObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: RunnableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): RunnableBoundedObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableBaseLike<TA>, MulticastObservableLike<T>>;
    zip<TA, TB>(a: EnumerableLike<TA>, b: EnumerableLike<TB>): EnumerableLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zip<TA, TB>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>): EnumerableWithSideEffectsLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>): EnumerableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>): EnumerableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>): EnumerableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>): EnumerableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>): EnumerableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>, h: EnumerableBaseLike<TH>): EnumerableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>, h: EnumerableBaseLike<TH>, i: EnumerableBaseLike<TI>): EnumerableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zip<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zip<TA, TB>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>, i: RunnableBaseLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zip<TA, TB>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>, i: DeferredObservableBaseLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zip<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zip<TA, TB>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>, i: ObservableBaseLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>, i: RunnableBaseLike<TI>): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>, i: DeferredObservableBaseLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipLatest<TA, TB>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>): DeferredObservableLike<Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>): DeferredObservableLike<Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB, TC, TD, TE>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableBaseLike<TA>, b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>, i: ObservableBaseLike<TI>): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: EnumerableLike<TB>): PureObservableOperator<TA, Tuple2<TA, TB>>;
    zipWith<TA, TB, TC>(b: EnumerableLike<TB>, c: EnumerableLike<TC>): PureObservableOperator<TA, Tuple3<TA, TB, TC>>;
    zipWith<TA, TB, TC, TD>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): PureObservableOperator<TA, Tuple4<TA, TB, TC, TD>>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): PureObservableOperator<TA, Tuple5<TA, TB, TC, TD, TE>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): PureObservableOperator<TA, Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): PureObservableOperator<TA, Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): PureObservableOperator<TA, Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): PureObservableOperator<TA, Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: EnumerableBaseLike<TB>): ObservableOperatorWithSideEffects<TA, Tuple2<TA, TB>>;
    zipWith<TA, TB, TC>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>): ObservableOperatorWithSideEffects<TA, Tuple3<TA, TB, TC>>;
    zipWith<TA, TB, TC, TD>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>): ObservableOperatorWithSideEffects<TA, Tuple4<TA, TB, TC, TD>>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>): ObservableOperatorWithSideEffects<TA, Tuple5<TA, TB, TC, TD, TE>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>): ObservableOperatorWithSideEffects<TA, Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>): ObservableOperatorWithSideEffects<TA, Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): ObservableOperatorWithSideEffects<TA, Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): ObservableOperatorWithSideEffects<TA, Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: RunnableLike<TB>): RunnableBoundedPureObservableOperator<TA, Tuple2<TA, TB>>;
    zipWith<TA, TB, TC>(b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableBoundedPureObservableOperator<TA, Tuple3<TA, TB, TC>>;
    zipWith<TA, TB, TC, TD>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableBoundedPureObservableOperator<TA, Tuple4<TA, TB, TC, TD>>;
    zipWith<TA, TB, TC, TD, TE>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableBoundedPureObservableOperator<TA, Tuple5<TA, TB, TC, TD, TE>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableBoundedPureObservableOperator<TA, Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableBoundedPureObservableOperator<TA, Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableBoundedPureObservableOperator<TA, Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableBoundedPureObservableOperator<TA, Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: RunnableBaseLike<TB>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple2<TA, TB>>;
    zipWith<TA, TB, TC>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple3<TA, TB, TC>>;
    zipWith<TA, TB, TC, TD>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple4<TA, TB, TC, TD>>;
    zipWith<TA, TB, TC, TD, TE>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple5<TA, TB, TC, TD, TE>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>, i: RunnableBaseLike<TI>): RunnableBoundedObservableOperatorWithSideEffects<TA, Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: DeferredObservableBaseLike<TB>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple2<TA, TB>>;
    zipWith<TA, TB, TC>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple3<TA, TB, TC>>;
    zipWith<TA, TB, TC, TD>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple4<TA, TB, TC, TD>>;
    zipWith<TA, TB, TC, TD, TE>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple5<TA, TB, TC, TD, TE>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple6<TA, TB, TC, TD, TE, TF>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>, i: DeferredObservableBaseLike<TI>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: PureObservableLike<TB>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple2<TA, TB>>>;
    zipWith<TA, TB, TC>(b: PureObservableLike<TB>, c: PureObservableLike<TC>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple3<TA, TB, TC>>>;
    zipWith<TA, TB, TC, TD>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple4<TA, TB, TC, TD>>>;
    zipWith<TA, TB, TC, TD, TE>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): Function1<PureObservableLike<TA>, MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>>;
    zipWith<TA, TB>(b: ObservableBaseLike<TB>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple2<TA, TB>>>;
    zipWith<TA, TB, TC>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple3<TA, TB, TC>>>;
    zipWith<TA, TB, TC, TD>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple4<TA, TB, TC, TD>>>;
    zipWith<TA, TB, TC, TD, TE>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: ObservableBaseLike<TB>, c: ObservableBaseLike<TC>, d: ObservableBaseLike<TD>, e: ObservableBaseLike<TE>, f: ObservableBaseLike<TF>, g: ObservableBaseLike<TG>, h: ObservableBaseLike<TH>, i: ObservableBaseLike<TI>): Function1<ObservableBaseLike<TA>, DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>>;
}
export type Signature = ObservableModule;
export declare const animate: Signature["animate"];
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMany: Signature["concatMany"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const count: Signature["count"];
export declare const create: Signature["create"];
export declare const createPublisher: Signature["createPublisher"];
export declare const createRefCountedPublisher: Signature["createRefCountedPublisher"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const delay: Signature["delay"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const endWith: Signature["endWith"];
export declare const enqueue: Signature["enqueue"];
export declare const enumerate: Signature["enumerate"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapAsync: Signature["flatMapAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const flow: Signature["flow"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferred: Signature["isDeferred"];
export declare const isEnumerable: Signature["isEnumerable"];
export declare const isPure: Signature["isPure"];
export declare const isRunnable: Signature["isRunnable"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeMap: Signature["mergeMap"];
export declare const mergeWith: Signature["mergeWith"];
export declare const multicast: Signature["multicast"];
export declare const never: Signature["never"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const scanMany: Signature["scanMany"];
export declare const range: Signature["range"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const share: Signature["share"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const spring: Signature["spring"];
export declare const startWith: Signature["startWith"];
export declare const subscribe: Signature["subscribe"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toIndexedCollection: Signature["toIndexedCollection"];
export declare const toIterable: Signature["toIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const toReadonlySet: Signature["toReadonlySet"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zip: Signature["zip"];
export declare const zipLatest: Signature["zipLatest"];
export declare const zipWith: Signature["zipWith"];
