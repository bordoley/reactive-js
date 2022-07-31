import { Option, Factory } from "../../functions.mjs";
import { DisposableLike, DisposableLike_isDisposed, DisposableLike_exception, Exception, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose } from "./DisposableLikeInternal.mjs";
import { MutableRefLike } from "./MutableRefLike.mjs";
import { Object_init, Object_properties, Object_prototype, UnknownObject } from "./Object.mjs";
declare const delegatingDisposableMixin: {
    [Object_init](this: unknown, delegate: DisposableLike): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
    };
};
declare const disposableMixin: {
    [Object_init](this: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    }): void;
    [Object_properties]: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_dispose](error?: Exception): void;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    };
};
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const disposableRefMixin: <TDisposable extends DisposableLike>() => {
    [Object_init](this: unknown, defaultValue: TDisposable): void;
    [Object_properties]: UnknownObject;
    [Object_prototype]: MutableRefLike<TDisposable>;
};
export { DisposableRefLike, createDisposable, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
