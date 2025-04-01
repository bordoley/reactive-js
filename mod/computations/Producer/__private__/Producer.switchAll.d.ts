import { ReactiveSourceLike } from "../../../computations.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
export declare const createSwitchAllConsumer: <TInnerSource extends ReactiveSourceLike<T, ConsumerLike<T>>, T>(delegate: ConsumerLike<T>) => ConsumerLike<TInnerSource>;
declare const Producer_switchAll: Producer.Signature["switchAll"];
export default Producer_switchAll;
