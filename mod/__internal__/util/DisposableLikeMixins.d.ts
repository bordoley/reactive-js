import { Option, Factory } from "../../functions.mjs";
import { DisposableLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableLike_dispose, DisposableLike_add, DisposableOrTeardown } from "./DisposableLikeInternal.mjs";
import { MutableRefLike } from "./MutableRefLike.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const delegatingDisposableMixin: {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: DisposableLike): void;
} & DisposableLike;
declare const disposableMixin: {
    [Object_properties]: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_init](this: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    }): void;
    [DisposableLike_dispose](error?: Error): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
};
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const disposableRefMixin: <TDisposable extends DisposableLike>() => {
    [Object_properties]: unknown;
    [Object_init](this: unknown, defaultValue: TDisposable): void;
} & MutableRefLike<TDisposable>;
export { DisposableRefLike, createDisposable, delegatingDisposableMixin, disposableMixin, disposableRefMixin, disposed };
