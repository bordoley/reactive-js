import { Disposable } from "./disposable.mjs";
import { ObservableOperator } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare abstract class AbstractDelegatingStream<TReqA, TA, TReqB, TB> extends Disposable implements StreamLike<TReqB, TB> {
    readonly delegate: StreamLike<TReqA, TA>;
    constructor(delegate: StreamLike<TReqA, TA>);
    get T(): TB;
    get TContainerOf(): this;
    get TLiftableState(): Observer<this["T"]>;
    get observerCount(): number;
    get replay(): number;
    get scheduler(): SchedulerLike;
    abstract dispatch(req: TReqB): void;
    abstract sink(observer: Observer<TB>): void;
}
declare const createStream: <TReq, T>(op: ObservableOperator<TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
export { AbstractDelegatingStream, createStream };
