import { Optional } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import { LiftedSinkLike } from "../LiftedSource.js";
export declare const create: <TSubscription extends SinkLike>(delegate: LiftedSinkLike<TSubscription, string>, options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
}>) => LiftedSinkLike<TSubscription, ArrayBuffer>;
