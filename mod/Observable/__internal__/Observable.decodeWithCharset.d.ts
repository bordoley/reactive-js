import { Container, ObservableContainer } from "../../containers.js";
type ObservableDecodeWithCharset = <C extends ObservableContainer.Type>(options?: {
    readonly charset?: string;
}) => Container.Operator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
