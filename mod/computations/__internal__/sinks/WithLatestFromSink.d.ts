import { Function1, Function2, SideEffect1 } from "../../../functions.js";
import { DisposableLike, SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, TOther, TA, TB, T>(delegate: LiftedSinkLike<TSubscription, T>, other: TOther, selector: Function2<TA, TB, T>, addEventListener: Function2<TSubscription, SideEffect1<TB>, Function1<TOther, DisposableLike>>) => LiftedSinkLike<TSubscription, TA>;
