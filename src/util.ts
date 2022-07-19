import {
  DisposableMixin,
  DisposableMixin_disposables,
  mixinDisposable,
} from "./__internal__/util/disposables";
import {
  DisposableLike,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
} from "./util/DisposableLike";
import { none } from "./util/Option";
import { Constructor, Factory, pipe } from "./util/functions";

const Disposable: Constructor<DisposableLike> = /*@__PURE__*/ pipe(
  class Disposable implements DisposableMixin {
    [DisposableLike_error] = none;
    [DisposableLike_isDisposed] = false;
    readonly [DisposableMixin_disposables] = new Set<DisposableOrTeardown>();
  },
  mixinDisposable(),
);

export const createDisposable: Factory<DisposableLike> = () => new Disposable();
