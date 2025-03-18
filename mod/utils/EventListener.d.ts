import { Function1 } from "../functions.js";
import { EventListenerLike, SinkLike } from "../utils.js";
export interface EventListenerModule {
    toSink<T>(): Function1<EventListenerLike<T>, SinkLike<T>>;
}
export type Signature = EventListenerModule;
export declare const toSink: Signature["toSink"];
