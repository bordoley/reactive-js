/// <reference types="./Container.contains.d.ts" />
import { isEqualTo } from '../../../functions.mjs';

const Container$contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));

export { Container$contains as default };
