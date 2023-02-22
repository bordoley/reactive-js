import {
  ContainerLike,
  ContainerOperator,
  EverySatisfy,
} from "../../../containers.js";
import { Predicate, compose, negate } from "../../../functions.js";

const Container_noneSatisfy = <C extends ContainerLike, T>(
  { everySatisfy }: EverySatisfy<C>,
  predicate: Predicate<T>,
): ContainerOperator<C, T, boolean> => everySatisfy(compose(predicate, negate));

export default Container_noneSatisfy;
