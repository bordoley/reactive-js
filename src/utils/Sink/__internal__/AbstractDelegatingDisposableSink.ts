import { bindMethod, pipe } from "../../../functions.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import AbstractDelegatingDisposable from "../../Disposable/__internal__/AbstractDelegatingDisposable.js";
import * as DisposableContainer from "../../DisposableContainer.js";

abstract class AbstractDelegatingDisposableSink<T>
  extends AbstractDelegatingDisposable
  implements SinkLike<T>
{
  abstract [SinkLike_isCompleted]: boolean;

  constructor(sink: DisposableLike) {
    super(sink);
    pipe(
      this,
      DisposableContainer.onComplete(bindMethod(this, SinkLike_complete)),
    );
  }

  abstract [EventListenerLike_notify](next: T): void;

  abstract [SinkLike_complete](): void;
}

export default AbstractDelegatingDisposableSink;
