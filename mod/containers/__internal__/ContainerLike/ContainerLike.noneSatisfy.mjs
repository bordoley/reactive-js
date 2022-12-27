/// <reference types="./ContainerLike.noneSatisfy.d.ts" />
import { compose, negate } from '../../../functions.mjs';

const noneSatisfy = ({ everySatisfy }, predicate) => everySatisfy(compose(predicate, negate));

export { noneSatisfy as default };
