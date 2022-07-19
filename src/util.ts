import { mixinDisposable } from "./__internal__/util/DisposableLike";
import { DisposableLike } from "./util/DisposableLike";
import { Factory, instanceFactory, pipe } from "./util/functions";

export const createDisposable: Factory<DisposableLike> = /*@__PURE__*/ pipe(
  class Disposable {},
  mixinDisposable(),
  instanceFactory(),
);
