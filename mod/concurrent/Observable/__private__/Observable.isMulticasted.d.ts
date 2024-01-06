import { MulticastObservableLike, ObservableLike } from "../../../concurrent.js";
declare const Observable_isMulticasted: <T = unknown>(obs: ObservableLike<T>) => obs is MulticastObservableLike<T>;
export default Observable_isMulticasted;
