import { Container, ContainerOperator, ContainerLike, ContainerOf } from '../containers/ContainerLike.js';
import { StatefulContainerLike, StatefulContainerStateOf } from '../containers/StatefulContainerLike.js';
import { Function1 } from '../util/functions.js';
import { EnumeratorLike } from "./EnumeratorLike.mjs";
import { InteractiveContainerLike, InteractiveContainerLike_interact } from "./InteractiveContainerLike.mjs";
declare type StatefulContainerOperator<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>;
declare type StatefulContainerOperatorIn<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TB> : StatefulContainerStateOf<C, TA>;
declare type StatefulContainerOperatorOut<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TA> : StatefulContainerStateOf<C, TB>;
declare type TInteractive = 0;
declare type TReactive = 1;
declare type Lift<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = Container<C> & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, TVar>): ContainerOperator<C, TA, TB>;
    readonly variance: TInteractive | TReactive;
};
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T = unknown> extends InteractiveContainerLike {
    readonly TContainerOf?: EnumerableLike<this["T"]>;
    readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
    readonly TCtx?: void;
    [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}
interface FromEnumerable<C extends ContainerLike> extends Container<C> {
    fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}
interface ToEnumerable<C extends ContainerLike> extends Container<C> {
    toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
/**
 * Returns an EnumerableOperator that applies `operator` to
 * the EnumeratorLike returned by the source when enumerated.
 *
 * @param operator
 */
declare const lift: <TA, TB>(operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>) => ContainerOperator<EnumerableLike<unknown>, TA, TB>;
declare const liftT: Lift<EnumerableLike<unknown>, TInteractive>;
export { EnumerableLike, FromEnumerable, ToEnumerable, lift, liftT };
