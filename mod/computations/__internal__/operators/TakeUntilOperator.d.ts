import { Function1, Function2, SideEffect } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike, T, TNotifier>(delegate: LiftedOperatorLike<TSubscription, T>, notifier: TNotifier, addEventListener: Function2<TSubscription, SideEffect, Function1<TNotifier, DisposableLike>>) => LiftedOperatorLike<TSubscription, T>;
