import { Function1, Function2, SideEffect } from "../../../functions.js";
import { DisposableLike, SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike, T, TNotifier>(delegate: LiftedSinkLike<TSubscription, T>, notifier: TNotifier, addEventListener: Function2<TSubscription, SideEffect, Function1<TNotifier, DisposableLike>>) => LiftedSinkLike<TSubscription, T>;
