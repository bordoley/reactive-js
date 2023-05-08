import { Containers, ObservableContainer } from "../../../core.js";
type ObservableDecodeWithCharset = <C extends ObservableContainer>(options?: {
    readonly charset?: string;
}) => Containers.Operator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
