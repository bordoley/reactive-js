import { ObservableLike, PureObservableLike } from "../../../concurrent.js";
declare const Observable_isPure: <T = unknown>(obs: ObservableLike<T>) => obs is PureObservableLike<T>;
export default Observable_isPure;
