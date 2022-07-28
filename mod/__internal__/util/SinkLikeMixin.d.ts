import { Function1 } from "../../functions.mjs";
import { SinkLike, SinkLike_notify } from "../../util.mjs";
import { DisposableLike } from "./DisposableLikeInternal.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const Sink_delegate: unique symbol;
declare const mapSinkMixin: <TA, TB>() => DisposableLike & {
    [Object_properties]: {
        [Sink_delegate]: SinkLike<TB>;
        mapper: Function1<TA, TB>;
    };
    [Object_init](this: {
        [Sink_delegate]: SinkLike<TB>;
        mapper: Function1<TA, TB>;
    }, delegate: SinkLike<TB>, mapper: Function1<TA, TB>): void;
    [SinkLike_notify](next: TA): void;
};
export { Sink_delegate, mapSinkMixin };
