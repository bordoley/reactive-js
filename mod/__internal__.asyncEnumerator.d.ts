import { AsyncEnumerator } from "./asyncEnumerator.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare abstract class AbstractDelegatingAsyncEnumerator<TA, TB> extends AsyncEnumerator<TB> implements StreamLike<void, TB> {
    readonly delegate: StreamLike<void, TA>;
    constructor(delegate: StreamLike<void, TA>);
    get observerCount(): number;
    get replay(): number;
    get scheduler(): SchedulerLike;
    dispatch(req: void): void;
    abstract sink(observer: Observer<TB>): void;
}
export { AbstractDelegatingAsyncEnumerator };
