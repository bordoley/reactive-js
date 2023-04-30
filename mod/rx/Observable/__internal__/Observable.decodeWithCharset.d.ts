import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableDecodeWithCharset = <C extends ObservableContainerLike>(options?: {
    readonly charset?: string;
}) => ContainerOperator<C, ArrayBuffer, string>;
declare const Observable_decodeWithCharset: ObservableDecodeWithCharset;
export default Observable_decodeWithCharset;
