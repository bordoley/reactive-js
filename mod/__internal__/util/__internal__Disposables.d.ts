import { Factory } from "../../functions.mjs";
import { DisposableLike } from "../../util.mjs";
import { MutableRefLike } from "./__internal__MutableRefLike.mjs";
import { Mixin1, Mixin } from "./__internal__Objects.mjs";
declare const delegatingDisposableMixin: Mixin1<DisposableLike, DisposableLike>;
declare const disposableMixin: Mixin<DisposableLike>;
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const disposableRefMixin: <TDisposable extends DisposableLike>() => Mixin1<MutableRefLike<TDisposable>, TDisposable>;
declare const createDisposableRef: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export { DisposableRefLike, createDisposable, createDisposableRef, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
