import { Observable } from "@rx-min/rx-core";
import { map as observableMap } from "@rx-min/rx-operators";

import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
  Operator,
} from "@rx-min/ix-core";

export const map = <TSrc, TReq, T>(
  mapper: (v: TSrc) => T,
): Operator<TReq, TSrc, TReq, T> => (
  delegate: AsyncIteratorLike<TReq, TSrc>,
) => {
  const [observable, disposable, dispatcher] =
    delegate instanceof DelegatingAsyncIterator
      ? [delegate.observable, delegate.disposable, delegate.dispatcher]
      : [delegate, delegate, (req: TReq) => delegate.dispatch(req)];

  const mappedObservable = Observable.lift(observable, observableMap(mapper));

  return new DelegatingAsyncIterator(mappedObservable, dispatcher, disposable);
};
