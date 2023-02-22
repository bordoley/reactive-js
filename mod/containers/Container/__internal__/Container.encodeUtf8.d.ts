import { ContainerLike, ContainerOperator, Defer, Map } from "../../../containers.js";
declare const Container_encodeUtf8: <C extends ContainerLike>(m: Defer<C, never> & Map<C, never>) => ContainerOperator<C, string, Uint8Array>;
export default Container_encodeUtf8;
