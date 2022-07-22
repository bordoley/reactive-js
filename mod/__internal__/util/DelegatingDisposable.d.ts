import { DisposableLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose } from '../../util/DisposableLike.js';
import { Option } from '../../util/Option.js';
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
};
declare const init: (self: typeof properties, delegate: DisposableLike) => void;
export { init, properties, prototype };
