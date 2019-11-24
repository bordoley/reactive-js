import { DisposableOrTeardown } from "@reactive-js/disposable";
import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
} from "@reactive-js/ix-async-iterator";
import {
  lift as observableResourceLift,
  ObservableResourceLike,
} from "@reactive-js/rx-observable-resource";
import { Operator, SubscriberLike } from "@reactive-js/rx-subscriber";

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    ObservableResourceLike<T> {}

/** @noInheritDoc */
class DelegatingAsyncIteratorResource<TReq, T>
  extends DelegatingAsyncIterator<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }
  readonly disposable: ObservableResourceLike<T>;

  constructor(
    observable: ObservableResourceLike<T>,
    dispatcher: (req: TReq) => void,
  ) {
    super(observable, dispatcher);
    this.disposable = observable;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }
}

export function lift<TReq, T, TA>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
): AsyncIteratorResourceLike<TReq, TA>;
export function lift<TReq, T, TA, TB>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
): AsyncIteratorResourceLike<TReq, TB>;
export function lift<TReq, T, TA, TB, TC>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
): AsyncIteratorResourceLike<TReq, TC>;
export function lift<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
): AsyncIteratorResourceLike<TReq, TD>;
export function lift<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
): AsyncIteratorResourceLike<TReq, TE>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
): AsyncIteratorResourceLike<TReq, TF>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
): AsyncIteratorResourceLike<TReq, TG>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
  op8: Operator<TG, TH>,
): AsyncIteratorResourceLike<TReq, TH>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: Operator<T, TA>,
  op2: Operator<TA, TB>,
  op3: Operator<TB, TC>,
  op4: Operator<TC, TD>,
  op5: Operator<TD, TE>,
  op6: Operator<TE, TF>,
  op7: Operator<TF, TG>,
  op8: Operator<TG, TH>,
  op9: Operator<TH, TI>,
): AsyncIteratorResourceLike<TReq, TI>;
export function lift<TReq>(
  iterator: AsyncIteratorResourceLike<TReq, any>,
  operator: Operator<any, any>,
  ...operators: readonly Operator<any, any>[]
): AsyncIteratorResourceLike<TReq, any> {
  const [delegate, dispatcher] =
    iterator instanceof DelegatingAsyncIteratorResource
      ? [iterator.disposable, iterator.dispatcher]
      : [iterator, (req: TReq) => iterator.dispatch(req)];

  const liftedObservableResource = observableResourceLift.apply(undefined, [
    delegate,
    operator,
    ...operators,
  ] as any);

  return new DelegatingAsyncIteratorResource(
    liftedObservableResource,
    dispatcher,
  );
}

export const map = <TSrcReq, TReq, T>(
  iterator: AsyncIteratorResourceLike<TSrcReq, T>,
  mapper: (v: TReq) => TSrcReq,
): AsyncIteratorResourceLike<TReq, T> => {
  const [delegate, dispatcher] =
    iterator instanceof DelegatingAsyncIteratorResource
      ? [iterator.disposable, iterator.dispatcher]
      : [iterator, (req: TSrcReq) => iterator.dispatch(req)];
  const mappedDispatcher = (req: TReq) => dispatcher(mapper(req));

  return new DelegatingAsyncIteratorResource(delegate, mappedDispatcher);
};
