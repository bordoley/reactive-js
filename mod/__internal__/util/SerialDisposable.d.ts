import { DisposableLike } from '../../util/DisposableLike.js';
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike.mjs";
interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const SerialDisposable_private_current: unique symbol;
interface SerialDisposableProperties<TDisposable extends DisposableLike = DisposableLike> {
    [SerialDisposable_private_current]: TDisposable;
}
declare const properties: SerialDisposableProperties;
declare const prototype: {
    [MutableRefLike_current]: DisposableLike;
};
declare const init: <TDisposable extends DisposableLike = DisposableLike>(self: typeof properties, defaultValue: TDisposable) => void;
export { SerialDisposableLike, init, properties, prototype };
