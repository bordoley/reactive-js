import { StatefulContainerLike, StatefulContainerLike_state, ContainerLike_T, Container, ContainerOperator } from "../../containers.mjs";
import { Function1 } from "../../functions.mjs";
import { DisposableLike } from "../../util.mjs";
declare type StatefulContainerStateOf<C extends StatefulContainerLike, T> = C extends {
    readonly [StatefulContainerLike_state]?: DisposableLike;
} ? NonNullable<(C & {
    readonly [ContainerLike_T]: T;
})[typeof StatefulContainerLike_state]> : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type TInteractive = 0;
declare const interactive: TInteractive;
declare type TReactive = 1;
declare const reactive: TReactive;
declare type StatefulContainerOperatorIn<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TB> : StatefulContainerStateOf<C, TA>;
declare type StatefulContainerOperatorOut<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TA> : StatefulContainerStateOf<C, TB>;
declare type Lift<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = Container<C> & {
    lift<TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>): ContainerOperator<C, TA, TB>;
    readonly variance: TVar;
};
export { Lift, StatefulContainerOperatorIn, StatefulContainerOperatorOut, StatefulContainerStateOf, TInteractive, TReactive, interactive, reactive };
