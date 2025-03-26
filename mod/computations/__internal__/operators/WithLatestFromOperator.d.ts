import { Function1, Function2, SideEffect1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, TOther, TA, TB, T>(delegate: LiftedOperatorLike<TSubscription, T>, other: TOther, selector: Function2<TA, TB, T>, addEventListener: Function2<TSubscription, SideEffect1<TB>, Function1<TOther, DisposableLike>>) => LiftedOperatorLike<TSubscription, TA>;
