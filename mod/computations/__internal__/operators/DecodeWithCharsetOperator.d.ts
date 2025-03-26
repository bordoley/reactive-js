import { Optional } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike>(delegate: LiftedSinkLike<TSubscription, string>, options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
}>) => LiftedSinkLike<TSubscription, ArrayBuffer>;
