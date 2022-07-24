import { DisposableLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose } from "../../util/DisposableLike.mjs";
import { Option } from "../../util/Option.mjs";
import { Object_init } from "./Object.mjs";
declare const DelegatingDisposable_private_delegate: unique symbol;
declare const properties: {
    [DelegatingDisposable_private_delegate]: DisposableLike;
};
declare const prototype: {
    readonly [DisposableLike_error]: Option<Error>;
    readonly [DisposableLike_isDisposed]: boolean;
    [DisposableLike_add](this: typeof properties, disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](this: {
        [DelegatingDisposable_private_delegate]: DisposableLike;
    }, error?: Error): void;
    [Object_init](this: typeof properties, delegate: DisposableLike): void;
};
export { properties, prototype };
