import { EventListenerLike } from "../../../events.js";
import type { ObservableOperatorWithSideEffects } from "../../Observable.js";
declare const Observable_notify: <T>(eventListener: EventListenerLike<T>) => ObservableOperatorWithSideEffects<T, T>;
export default Observable_notify;
