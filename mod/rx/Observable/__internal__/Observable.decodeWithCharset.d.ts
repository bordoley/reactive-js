import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableDecodeWithCharset = <C extends ObservableLike>(options?: {
    charset?: string | undefined;
} | undefined) => ContainerOperator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
