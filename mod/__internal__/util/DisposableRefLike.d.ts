import { DisposableLike } from "../../util.mjs";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const DisposableRef_private_current: unique symbol;
declare const properties: {
    [DisposableRef_private_current]: DisposableLike;
};
declare const prototype: {
    [Object_properties]: {
        [DisposableRef_private_current]: DisposableLike;
    };
    [Object_init]<TDisposable extends DisposableLike = DisposableLike>(this: typeof properties & DisposableLike, defaultValue: TDisposable): void;
    [MutableRefLike_current]: DisposableLike;
};
export { DisposableRefLike, prototype };
