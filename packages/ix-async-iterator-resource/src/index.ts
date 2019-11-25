import { DisposableOrTeardown } from "@reactive-js/disposable";
import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
} from "@reactive-js/ix-async-iterator";
import { ObservableOperator } from "@reactive-js/rx-observable";
import {
  lift as observableResourceLift,
  pipe as observableResourcePipe,
  ObservableResourceLike,
} from "@reactive-js/rx-observable-resource";
import { SubscriberLike, SubscriberOperator } from "@reactive-js/rx-subscriber";

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
  op1: SubscriberOperator<T, TA>,
): AsyncIteratorResourceLike<TReq, TA>;
export function lift<TReq, T, TA, TB>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
): AsyncIteratorResourceLike<TReq, TB>;
export function lift<TReq, T, TA, TB, TC>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
): AsyncIteratorResourceLike<TReq, TC>;
export function lift<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
): AsyncIteratorResourceLike<TReq, TD>;
export function lift<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
): AsyncIteratorResourceLike<TReq, TE>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
): AsyncIteratorResourceLike<TReq, TF>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
  op7: SubscriberOperator<TF, TG>,
): AsyncIteratorResourceLike<TReq, TG>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
  op7: SubscriberOperator<TF, TG>,
  op8: SubscriberOperator<TG, TH>,
): AsyncIteratorResourceLike<TReq, TH>;
export function lift<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: SubscriberOperator<T, TA>,
  op2: SubscriberOperator<TA, TB>,
  op3: SubscriberOperator<TB, TC>,
  op4: SubscriberOperator<TC, TD>,
  op5: SubscriberOperator<TD, TE>,
  op6: SubscriberOperator<TE, TF>,
  op7: SubscriberOperator<TF, TG>,
  op8: SubscriberOperator<TG, TH>,
  op9: SubscriberOperator<TH, TI>,
): AsyncIteratorResourceLike<TReq, TI>;
export function lift<TReq>(
  iterator: AsyncIteratorResourceLike<TReq, any>,
  operator: SubscriberOperator<any, any>,
  ...operators: readonly SubscriberOperator<any, any>[]
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

export function pipe<TReq, T, TA>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
): AsyncIteratorResourceLike<TReq, TA>;
export function pipe<TReq, T, TA, TB>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
): AsyncIteratorResourceLike<TReq, TB>;
export function pipe<TReq, T, TA, TB, TC>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
): AsyncIteratorResourceLike<TReq, TC>;
export function pipe<TReq, T, TA, TB, TC, TD>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
): AsyncIteratorResourceLike<TReq, TD>;
export function pipe<TReq, T, TA, TB, TC, TD, TE>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
): AsyncIteratorResourceLike<TReq, TE>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
): AsyncIteratorResourceLike<TReq, TF>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF, TG>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
  op7: ObservableOperator<TF, TG>,
): AsyncIteratorResourceLike<TReq, TG>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
  op7: ObservableOperator<TF, TG>,
  op8: ObservableOperator<TG, TH>,
): AsyncIteratorResourceLike<TReq, TH>;
export function pipe<TReq, T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  src: AsyncIteratorResourceLike<TReq, T>,
  op1: ObservableOperator<T, TA>,
  op2: ObservableOperator<TA, TB>,
  op3: ObservableOperator<TB, TC>,
  op4: ObservableOperator<TC, TD>,
  op5: ObservableOperator<TD, TE>,
  op6: ObservableOperator<TE, TF>,
  op7: ObservableOperator<TF, TG>,
  op8: ObservableOperator<TG, TH>,
  op9: ObservableOperator<TH, TI>,
): AsyncIteratorResourceLike<TReq, TI>;
export function pipe(
  src: AsyncIteratorResourceLike<any, any>,
  ...operators: ObservableOperator<any, any>[]
): AsyncIteratorResourceLike<any, any> {
  const [delegate, dispatcher] =
    src instanceof DelegatingAsyncIteratorResource
      ? [src.disposable, src.dispatcher]
      : [src, (req: any) => src.dispatch(req)];

  const liftedObservableResource = observableResourcePipe.apply(undefined, [
    delegate,
    ...operators,
  ] as any);

  return new DelegatingAsyncIteratorResource(
    liftedObservableResource,
    dispatcher,
  );
}
