import { Function1 } from "../../functions.mjs";
import { ObserverLike } from "../../scheduling.mjs";
import { SinkLike_notify } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const Sink_delegate: unique symbol;
declare type TMapProperties = {
    [Sink_delegate]: ObserverLike;
    mapper: Function1<any, any>;
};
declare const mapPrototype: {
    [Object_properties]: {
        mapper: any;
    };
    [Object_init](this: TMapProperties, delegate: ObserverLike, mapper: Function1<any, any>): void;
    [SinkLike_notify](this: TMapProperties, next: any): void;
};
export { Sink_delegate, mapPrototype };
