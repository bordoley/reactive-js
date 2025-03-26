import { Optional } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends DisposableLike>(delegate: LiftedOperatorLike<TSubscription, string>, options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
}>) => LiftedOperatorLike<TSubscription, ArrayBuffer>;
