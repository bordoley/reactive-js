import { Container, ContainerOperator } from "../../../containers.js";
import { identity, returns } from "../../../functions.js";

const Container_identity: <C extends Container, T>() => ContainerOperator<
  C,
  T,
  T
> = /*@__PURE__*/ returns(identity) as <
  C extends Container,
  T,
>() => ContainerOperator<C, T, T>;

export default Container_identity;
