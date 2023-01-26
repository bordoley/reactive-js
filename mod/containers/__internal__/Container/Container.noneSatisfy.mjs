/// <reference types="./Container.noneSatisfy.d.ts" />
import { compose, negate } from '../../../functions.mjs';

const Container_noneSatisfy = ({ everySatisfy }, predicate) => everySatisfy(compose(predicate, negate));

export { Container_noneSatisfy as default };
