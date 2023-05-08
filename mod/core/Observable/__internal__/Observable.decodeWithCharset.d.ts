import { Container, ObservableContainer } from "../../../core.js";
type ObservableDecodeWithCharset = <C extends ObservableContainer>(options?: {
    readonly charset?: string;
}) => Container.Operator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
