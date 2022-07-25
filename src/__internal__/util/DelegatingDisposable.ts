import { Option } from "../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Error,
} from "../../util";
import { disposed } from "../../util/DisposableLike";
import { Object_init } from "./Object";

const DelegatingDisposable_private_delegate = Symbol(
  "DelegatingDisposable_private_delegate",
);

export const properties: {
  [DelegatingDisposable_private_delegate]: DisposableLike;
} = {
  [DelegatingDisposable_private_delegate]: disposed,
};

export const prototype = {
  get [DisposableLike_error](): Option<Error> {
    const self = this as unknown as typeof properties;

    const delegate = self[DelegatingDisposable_private_delegate];
    return delegate[DisposableLike_error];
  },
  get [DisposableLike_isDisposed]() {
    const self = this as unknown as typeof properties;

    const delegate = self[DelegatingDisposable_private_delegate];
    return delegate[DisposableLike_isDisposed];
  },
  [DisposableLike_add](
    this: typeof properties,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ) {
    const delegate = this[DelegatingDisposable_private_delegate];
    delegate[DisposableLike_add](disposable, ignoreChildErrors);
  },
  [DisposableLike_dispose](
    this: {
      [DelegatingDisposable_private_delegate]: DisposableLike;
    },
    error?: Error,
  ) {
    const delegate = this[DelegatingDisposable_private_delegate];
    delegate[DisposableLike_dispose](error);
  },
  [Object_init](this: typeof properties, delegate: DisposableLike) {
    this[DelegatingDisposable_private_delegate] = delegate;
  },
};
