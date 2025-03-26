import { SourceLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, TInnerSource extends SourceLike<T>, T>(delegate: LiftedSinkLike<TSubscription, T>, subscribeToInner: Function1<LiftedSinkLike<TSubscription, T>, Function1<TInnerSource, DisposableLike>>) => LiftedSinkLike<TSubscription, TInnerSource>;
