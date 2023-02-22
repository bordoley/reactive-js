import { Container, ContainerLike_T, ContainerOperator, StatefulContainerLike, StatefulContainerLike_state } from "../../containers.js";
import { Function1 } from "../../functions.js";
import { DisposableLike } from "../../util.js";
export type StatefulContainerStateOf<C extends StatefulContainerLike, T> = C extends {
    readonly [StatefulContainerLike_state]?: DisposableLike;
} ? NonNullable<(C & {
    readonly [ContainerLike_T]: T;
})[typeof StatefulContainerLike_state]> : {
    readonly _C: C;
    readonly _T: () => T;
};
export type TInteractive = 0;
export type TReactive = 1;
export type StatefulContainerOperatorIn<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TB> : StatefulContainerStateOf<C, TA>;
export type StatefulContainerOperatorOut<C extends StatefulContainerLike, TA, TB, TVar extends TInteractive | TReactive> = TVar extends TReactive ? StatefulContainerStateOf<C, TA> : StatefulContainerStateOf<C, TB>;
export type Lift<C extends StatefulContainerLike, TVar extends TInteractive | TReactive> = Container<C> & {
    lift<TA, TB>(operator: Function1<StatefulContainerOperatorIn<C, TA, TB, TVar>, StatefulContainerOperatorOut<C, TA, TB, TVar>>): ContainerOperator<C, TA, TB>;
};
