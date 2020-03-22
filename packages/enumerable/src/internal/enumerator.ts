import { EnumeratorLike } from "./interfaces";
import { disposableMixin, createDisposable } from "@reactive-js/disposable";

export abstract class AbstractDelegatingEnumerator<TReq, TA, TB>
  implements EnumeratorLike<TReq, TB> {

  readonly add = disposableMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = disposableMixin.dispose;

  abstract get current(): TB;
  abstract get hasCurrent(): boolean;

  constructor(readonly delegate: EnumeratorLike<TReq, TA>) {
    delegate.add(this);
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  abstract move(req: TReq): boolean;
}
