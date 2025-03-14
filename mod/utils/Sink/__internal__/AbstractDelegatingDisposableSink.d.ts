import { DisposableLike, EventListenerLike_notify, SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../../utils.js";
import AbstractDelegatingDisposable from "../../Disposable/__internal__/AbstractDelegatingDisposable.js";
declare abstract class AbstractDelegatingDisposableSink<T> extends AbstractDelegatingDisposable implements SinkLike<T> {
    abstract [SinkLike_isCompleted]: boolean;
    constructor(sink: DisposableLike);
    abstract [EventListenerLike_notify](next: T): void;
    abstract [SinkLike_complete](): void;
}
export default AbstractDelegatingDisposableSink;
