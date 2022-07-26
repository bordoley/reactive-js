import { Option, Factory } from "../../functions.mjs";
import { DisposableLike_error, Error, DisposableLike_isDisposed, DisposableOrTeardown, DisposableLike_dispose, DisposableLike, DisposableLike_add } from "./DisposableLikeInternal.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const Disposable_private_disposables: unique symbol;
declare const properties: {
    [DisposableLike_error]: Option<Error>;
    [DisposableLike_isDisposed]: boolean;
    [Disposable_private_disposables]: Set<DisposableOrTeardown>;
};
declare const prototype: {
    [Object_properties]: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
        [Disposable_private_disposables]: Set<DisposableOrTeardown>;
    };
    [Object_init](this: typeof properties): void;
    [DisposableLike_dispose](this: typeof properties & DisposableLike, error?: Error): void;
    [DisposableLike_add](this: typeof properties & DisposableLike, disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
};
declare const createDisposable: Factory<DisposableLike>;
declare const disposed: DisposableLike;
export { createDisposable, disposed, prototype };
