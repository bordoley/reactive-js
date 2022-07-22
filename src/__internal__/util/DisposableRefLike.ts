import { DisposableLike, disposed } from "../../util/DisposableLike";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";

export interface DisposableRefLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

const DisposableRef_private_current = Symbol("DisposableRef_private_current");

interface DisposableRefProperties<
  TDisposable extends DisposableLike = DisposableLike,
> {
  [DisposableRef_private_current]: TDisposable;
}

export const properties: DisposableRefProperties = {
  [DisposableRef_private_current]: disposed,
};

export const prototype = {
  get [MutableRefLike_current](): DisposableLike {
    const self = this as unknown as typeof properties;
    return self[DisposableRef_private_current];
  },
  set [MutableRefLike_current](v: DisposableLike) {
    const self = this as unknown as typeof properties;
    self[DisposableRef_private_current] = v;
  },
};

export const init = <TDisposable extends DisposableLike = DisposableLike>(
  self: typeof properties,
  defaultValue: TDisposable,
) => {
  self[DisposableRef_private_current] = defaultValue;
};
