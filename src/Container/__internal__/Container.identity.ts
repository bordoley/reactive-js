import { identity, returns } from "../../functions.js";
import { Container, Containers } from "../../types.js";

const Container_identity: <C extends Container, T>() => Containers.Operator<
  C,
  T,
  T
> = /*@__PURE__*/ returns(identity) as <
  C extends Container,
  T,
>() => Containers.Operator<C, T, T>;

export default Container_identity;
