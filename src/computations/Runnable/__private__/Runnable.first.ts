import { RunnableLike, RunnableLike_eval } from "../../../computations.js";
import { Optional, newInstance, none } from "../../../functions.js";
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

class FirstSink<T>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  public [SinkLike_isCompleted] = false;
  public v: Optional<T> = none;

  constructor() {
    super(Disposable.create());
  }

  [EventListenerLike_notify](next: T): void {
    this.v = next;
    this[SinkLike_complete]();
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_first: Runnable.Signature["first"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(FirstSink<T>);
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.v;
  };

export default Runnable_first;
