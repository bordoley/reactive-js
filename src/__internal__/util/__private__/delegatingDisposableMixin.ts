import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Error,
} from "../../../util/DisposableLike";
import { Option } from "../../../util/Option";
import { ConstructorOf, pipe } from "../../../util/functions";
import { Mixin, Mixin1, Mixin2, Mixin3, addGetter, addMethod } from "../mixins";

export const DelegatingDisposableMixin_delegate = Symbol(
  "DelegatingDisposableMixin_delegate",
);

export interface DelegatingDisposableMixin {
  readonly [DelegatingDisposableMixin_delegate]: DisposableLike;
}

function add(
  this: DelegatingDisposableMixin,
  disposable: DisposableOrTeardown,
  ignoreChildErrors: boolean,
) {
  const delegate = this[DelegatingDisposableMixin_delegate];
  delegate[DisposableLike_add](disposable, ignoreChildErrors);
}

function dispose(this: DelegatingDisposableMixin, error?: Error) {
  const delegate = this[DelegatingDisposableMixin_delegate];
  delegate[DisposableLike_dispose](error);
}

function getError(this: DelegatingDisposableMixin): Option<Error> {
  const delegate = this[DelegatingDisposableMixin_delegate];
  return delegate[DisposableLike_error];
}

function isDisposed(this: DelegatingDisposableMixin): boolean {
  const delegate = this[DelegatingDisposableMixin_delegate];
  return delegate[DisposableLike_isDisposed];
}

interface MixinDelegatingDisposable {
  <T extends DelegatingDisposableMixin>(): Mixin<T, DisposableLike>;
  <T extends DelegatingDisposableMixin, TA>(): Mixin1<TA, T, DisposableLike>;
  <T extends DelegatingDisposableMixin, TA, TB>(): Mixin2<
    TA,
    TB,
    T,
    DisposableLike
  >;
  <T extends DelegatingDisposableMixin, TA, TB, TC>(): Mixin3<
    TA,
    TB,
    TC,
    T,
    DisposableLike
  >;
}

export const mixinDelegatingDisposable: MixinDelegatingDisposable =
  <T extends DelegatingDisposableMixin>() =>
  (Constructor: ConstructorOf<T>): ConstructorOf<T & DisposableLike> =>
    pipe(
      Constructor,
      addGetter<typeof DisposableLike_error, Option<Error>>(
        DisposableLike_error,
        getError,
      ),
      addGetter<typeof DisposableLike_isDisposed, boolean>(
        DisposableLike_isDisposed,
        isDisposed,
      ),
      addMethod<
        typeof DisposableLike_dispose,
        DisposableLike[typeof DisposableLike_dispose]
      >(DisposableLike_dispose, dispose),
      addMethod<
        typeof DisposableLike_add,
        DisposableLike[typeof DisposableLike_add]
      >(DisposableLike_add, add),
    );
