import { DisposableLike_error, DisposableLike, DisposableLike_isDisposed, DisposableOrTeardown, DisposableLike_dispose, Error, DisposableLike_add } from '../../util/DisposableLike.js';
import { Object_init } from "./Object.mjs";
declare const Disposable_private_disposables: unique symbol;
declare const properties: {
    [DisposableLike_error]: DisposableLike[typeof DisposableLike_error];
    [DisposableLike_isDisposed]: DisposableLike[typeof DisposableLike_isDisposed];
    [Disposable_private_disposables]: Set<DisposableOrTeardown>;
};
declare const prototype: {
    [DisposableLike_dispose](this: typeof properties, error?: Error): void;
    [DisposableLike_add](this: typeof properties & DisposableLike, disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [Object_init](this: typeof properties): void;
};
export { properties, prototype };
