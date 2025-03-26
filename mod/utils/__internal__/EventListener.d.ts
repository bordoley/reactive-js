import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1 } from "../../functions.js";
import { EventListenerLike } from "../../utils.js";
export declare const create: <T>(notify: (this: EventListenerLike<T>, a: T) => void) => EventListenerLike<T>;
export declare const toOperator: <T>() => Function1<EventListenerLike<T>, LiftedSinkLike<EventListenerLike<T>, T>>;
