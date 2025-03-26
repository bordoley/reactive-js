import { ProducerLike } from "../../../computations.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import { LiftedOperatorLike } from "../../__internal__/LiftedSource.js";
export declare const createTakeUntilOperator: <T>(delegate: LiftedOperatorLike<ConsumerLike, T>, notifier: ProducerLike) => LiftedOperatorLike<ConsumerLike, T>;
declare const Producer_takeUntil: Producer.Signature["takeUntil"];
export default Producer_takeUntil;
