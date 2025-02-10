import {
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../events.js";
import { bindMethod } from "../../../functions.js";
import type { ObservableOperatorWithSideEffects } from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";

const Observable_notify = <T>(
  eventListener: EventListenerLike<T>,
): ObservableOperatorWithSideEffects<T, T> =>
  Observable_forEach(bindMethod(eventListener, EventListenerLike_notify));

export default Observable_notify;
