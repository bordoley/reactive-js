import { DisposableLike } from '../../util/DisposableLike.js';
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike.mjs";
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const DisposableRef_private_current: unique symbol;
interface DisposableRefProperties<TDisposable extends DisposableLike = DisposableLike> {
    [DisposableRef_private_current]: TDisposable;
}
declare const properties: DisposableRefProperties;
declare const prototype: {
    [MutableRefLike_current]: DisposableLike;
};
declare const init: <TDisposable extends DisposableLike = DisposableLike>(self: typeof properties, defaultValue: TDisposable) => void;
export { DisposableRefLike, init, properties, prototype };
