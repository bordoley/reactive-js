import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Factory, Reducer, newInstance } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import {
  DisposableLike_dispose,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";

class ReducerSink<T, TAcc>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  public [SinkLike_isCompleted] = false;

  constructor(
    private readonly r: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(Disposable.create());
  }

  [EventListenerLike_notify](next: T): void {
    this.acc = this.r(this.acc, next);
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_reduce: Runnable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(ReducerSink, reducer, initialValue());
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.acc;
  };

export default Runnable_reduce;
