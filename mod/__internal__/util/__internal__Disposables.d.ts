import { Factory } from "../../functions.mjs";
import { DisposableLike } from "./__internal__DisposableLike.mjs";
import { MutableRefLike } from "./__internal__MutableRefLike.mjs";
import { Class1, Class } from "./__internal__Objects.mjs";
declare const delegatingDisposableMixin: Class1<DisposableLike, DisposableLike>;
declare const disposableMixin: Class<DisposableLike>;
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const disposableRefMixin: <TDisposable extends DisposableLike>() => Class1<TDisposable, MutableRefLike<TDisposable>>;
declare const createDisposableRef: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export { DisposableRefLike, createDisposable, createDisposableRef, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
