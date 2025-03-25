import { Optional } from "../../../functions.js";
import { LiftedOperatorLike } from "../LiftedSource.js";
export declare const create: (delegate: LiftedOperatorLike<string>, options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
}>) => LiftedOperatorLike<ArrayBuffer>;
