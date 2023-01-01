import {
  ContainerLike,
  ContainerOperator,
  EverySatisfy,
} from "../../../containers";
import { Predicate, compose, negate } from "../../../functions";

const ContainerLike__noneSatisfy = <C extends ContainerLike, T>(
  { everySatisfy }: EverySatisfy<C>,
  predicate: Predicate<T>,
): ContainerOperator<C, T, boolean> => everySatisfy(compose(predicate, negate));

export default ContainerLike__noneSatisfy;
