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

class LastSink<T>
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
  }
  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_last: Runnable.Signature["last"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(LastSink<T>);
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
    return sink.v;
  };

export default Runnable_last;
