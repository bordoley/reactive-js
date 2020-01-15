import { EnumeratorLike } from "./interfaces";
import { disposableMixin, createDisposable } from "@reactive-js/disposable";

export abstract class AbstractEnumerator<TReq, T> implements EnumeratorLike<TReq, T> {
  readonly add = disposableMixin.add;
  readonly disposable = createDisposable();
  readonly dispose = disposableMixin.dispose;

  abstract get current(): T;
  abstract get hasCurrent(): boolean;

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  abstract move(req: TReq): boolean;
}

export abstract class AbstractDelegatingEnumerator<TReq, TA, TB> 
  extends AbstractEnumerator<TReq, TB>
  implements EnumeratorLike<TReq, TB> {

  constructor(readonly delegate: EnumeratorLike<TReq,TA>){
    super();
    delegate.add(this);
  }
}