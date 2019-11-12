import { lift } from "@rx-min/rx-core";
import { distinctUntilChanged as observableDistinctUntilChanged } from "@rx-min/rx-operators";

import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
  Operator,
} from "@rx-min/ix-core";

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const distinctUntilChanged = <TReq, T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): Operator<TReq, T, TReq, T> => (delegate: AsyncIteratorLike<TReq, T>) => {
  const [observable, disposable, dispatcher] =
    delegate instanceof DelegatingAsyncIterator
      ? [delegate.observable, delegate.disposable, delegate.dispatcher]
      : [delegate, delegate, (req: TReq) => delegate.dispatch(req)];
  const distinctUntilChangedObservable = lift(
    observable,
    observableDistinctUntilChanged(equals),
  );
  return new DelegatingAsyncIterator(
    distinctUntilChangedObservable,
    dispatcher,
    disposable,
  );
};
