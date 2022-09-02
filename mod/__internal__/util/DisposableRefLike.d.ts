import { DisposableLike } from "../../util.mjs";
import { Mixin1 } from "../mixins.mjs";
import { MutableRefLike } from "./MutableRefLike.mjs";
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const disposableRefMixin: <TDisposable extends DisposableLike>() => Mixin1<MutableRefLike<TDisposable>, TDisposable>;
declare const createDisposableRef: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export { DisposableRefLike, createDisposableRef, disposableRefMixin };
