import { Option } from "../../functions.mjs";
import { DisposableLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const DelegatingDisposable_private_delegate: unique symbol;
declare const properties: {
    [DelegatingDisposable_private_delegate]: DisposableLike;
};
declare const prototype: {
    [Object_properties]: {
        [DelegatingDisposable_private_delegate]: DisposableLike;
    };
    [Object_init](this: typeof properties, delegate: DisposableLike): void;
    readonly [DisposableLike_error]: Option<Error>;
    readonly [DisposableLike_isDisposed]: boolean;
    [DisposableLike_add](this: typeof properties, disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](this: {
        [DelegatingDisposable_private_delegate]: DisposableLike;
    }, error?: Error): void;
};
export { prototype };
