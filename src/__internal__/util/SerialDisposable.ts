import { DisposableLike, disposed } from "../../util/DisposableLike";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";

export interface SerialDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

const SerialDisposable_private_current = Symbol(
  "SerialDisposable_private_current",
);

interface SerialDisposableProperties<
  TDisposable extends DisposableLike = DisposableLike,
> {
  [SerialDisposable_private_current]: TDisposable;
}

export const properties: SerialDisposableProperties = {
  [SerialDisposable_private_current]: disposed,
};

export const prototype = {
  get [MutableRefLike_current](): DisposableLike {
    const self = this as unknown as typeof properties;
    return self[SerialDisposable_private_current];
  },
  set [MutableRefLike_current](v: DisposableLike) {
    const self = this as unknown as typeof properties;
    self[SerialDisposable_private_current] = v;
  },
};

export const init = <TDisposable extends DisposableLike = DisposableLike>(
  self: typeof properties,
  defaultValue: TDisposable,
) => {
  self[SerialDisposable_private_current] = defaultValue;
};
