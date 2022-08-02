import { Option, Factory } from "../../functions.mjs";
import { DisposableLike_isDisposed, DisposableLike_exception, Exception, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose, DisposableLike } from "./DisposableLikeInternal.mjs";
import { MutableRefLike } from "./MutableRefLike.mjs";
import { Class1, Class, UnknownObject } from "./Object.mjs";
declare const delegatingDisposableMixin: Class1<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
}, DisposableLike>;
declare const disposableMixin: Class<{
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_dispose](error?: Exception): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
}>;
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const disposableRefMixin: <TDisposable extends DisposableLike>() => Class1<UnknownObject, MutableRefLike<TDisposable>, TDisposable>;
declare const createDisposableRef: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export { DisposableRefLike, createDisposable, createDisposableRef, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
