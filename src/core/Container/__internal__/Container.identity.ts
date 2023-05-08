import { Container } from "../../../core.js";
import { identity, returns } from "../../../functions.js";

const Container_identity: <C extends Container, T>() => Container.Operator<
  C,
  T,
  T
> = /*@__PURE__*/ returns(identity) as <
  C extends Container,
  T,
>() => Container.Operator<C, T, T>;

export default Container_identity;
