/// <reference types="./ContainerLike.noneSatisfy.d.ts" />
import { compose, negate } from '../../../functions.mjs';

const ContainerLike__noneSatisfy = ({ everySatisfy }, predicate) => everySatisfy(compose(predicate, negate));

export { ContainerLike__noneSatisfy as default };
