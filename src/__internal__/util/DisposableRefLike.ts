import { pipe } from "../../functions";
import { DisposableLike, disposed } from "../../util";
import { add, dispose } from "../../util/DisposableLike";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";
import { Object_init, Object_properties } from "./Object";

export interface DisposableRefLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

const DisposableRef_private_current = Symbol("DisposableRef_private_current");

const properties = {
  [DisposableRef_private_current]: disposed,
};

export const prototype = {
  [Object_properties]: properties,
  [Object_init]<TDisposable extends DisposableLike = DisposableLike>(
    this: typeof properties & DisposableLike,
    defaultValue: TDisposable,
  ) {
    this[DisposableRef_private_current] = defaultValue;
    pipe(this, add(defaultValue));
  },
  get [MutableRefLike_current](): DisposableLike {
    const self = this as unknown as typeof properties;
    return self[DisposableRef_private_current];
  },
  set [MutableRefLike_current](v: DisposableLike) {
    const self = this as unknown as typeof properties & DisposableLike;
    const oldValue = self[DisposableRef_private_current];
    pipe(oldValue, dispose());

    self[DisposableRef_private_current] = v;
    pipe(self, add(v));
  },
};
