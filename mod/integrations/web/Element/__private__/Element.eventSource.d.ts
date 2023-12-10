import { EventSourceLike } from "../../../../events.js";
import { Function1 } from "../../../../functions.js";
export type EventTarget = {
    addEventListener(eventName: string, listener: (ev: unknown) => void, options: unknown): void;
    removeEventListener(eventName: string, listener: (ev: unknown) => void): void;
};
declare const Element_eventSource: (eventName: string, options?: {
    passive?: boolean;
    capture?: boolean;
}) => Function1<EventTarget, EventSourceLike>;
export default Element_eventSource;
