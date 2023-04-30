import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableDecodeWithCharset = <C extends ObservableContainer>(options?: {
    readonly charset?: string;
}) => ContainerOperator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
