/// <reference types="./Container.noneSatisfy.d.ts" />
import { compose, negate } from '../../../functions.mjs';

const Container$noneSatisfy = ({ everySatisfy }, predicate) => everySatisfy(compose(predicate, negate));

export { Container$noneSatisfy as default };
