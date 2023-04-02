import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableDecodeWithCharset = <C extends ObservableLike>(options?: {
    readonly charset?: string;
}) => ContainerOperator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
