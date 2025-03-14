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

class RunSink<T>
  extends AbstractDelegatingDisposableSink<T>
  implements SinkLike<T>
{
  public [SinkLike_isCompleted] = false;

  constructor() {
    super(Disposable.create());
  }

  [EventListenerLike_notify](_: T): void {}

  [SinkLike_complete]() {
    this[SinkLike_isCompleted] = true;
  }
}

const Runnable_run: Runnable.Signature["run"] =
  <T>() =>
  (deferable: RunnableLike<T>) => {
    const sink = newInstance(RunSink<T>);
    deferable[RunnableLike_eval](sink);
    sink[DisposableLike_dispose]();
  };

export default Runnable_run;
