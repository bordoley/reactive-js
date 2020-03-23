import { EnumeratorLike } from "./interfaces";
import { add, dispose, createDisposable } from "@reactive-js/disposable";

export abstract class AbstractDelegatingEnumerator<TReq, TA, TB>
  implements EnumeratorLike<TReq, TB> {
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

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
