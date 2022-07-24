import { DisposableLike } from "../../util/DisposableLike.mjs";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike.mjs";
import { Object_init } from "./Object.mjs";
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const DisposableRef_private_current: unique symbol;
interface DisposableRefProperties<TDisposable extends DisposableLike = DisposableLike> {
    [DisposableRef_private_current]: TDisposable;
}
declare const properties: DisposableRefProperties;
declare const prototype: {
    [MutableRefLike_current]: DisposableLike;
    [Object_init]<TDisposable extends DisposableLike = DisposableLike>(this: typeof properties & DisposableLike, defaultValue: TDisposable): void;
};
export { DisposableRefLike, properties, prototype };
