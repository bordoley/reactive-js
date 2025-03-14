import { Array_push } from "../../../__internal__/constants.js";
import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
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

class ToReadonlyArraySink<T>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  constructor() {
    super(Disposable.create());
  }
  public [SinkLike_isCompleted] = false;
  public acc: T[] = [];

  [EventListenerLike_notify](next: T): void {
    this.acc[Array_push](next);
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_toReadonlyArray: Runnable.Signature["toReadonlyArray"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(ToReadonlyArraySink<T>);
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.acc;
  };

export default Runnable_toReadonlyArray;
