import { ObservableLike } from "../../../computations.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import { LiftedOperatorLike } from "../../__internal__/LiftedSource.js";
export declare const createTakeUntilOperator: <T>(delegate: LiftedOperatorLike<ObserverLike, T>, notifier: ObservableLike) => LiftedOperatorLike<ObserverLike, T>;
declare const Observable_takeUntil: Observable.Signature["takeUntil"];
export default Observable_takeUntil;
