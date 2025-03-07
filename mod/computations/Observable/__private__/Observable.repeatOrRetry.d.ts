import { StatelessComputationOperator } from "../../../computations.js";
import type * as Observable from "../../Observable.js";
type ObservableRepeatOrRetry = <T>(shouldRepeat: (count: number, error?: Error) => boolean) => StatelessComputationOperator<Observable.Computation, T, T>;
declare const Observable_repeatOrRetry: ObservableRepeatOrRetry;
export default Observable_repeatOrRetry;
