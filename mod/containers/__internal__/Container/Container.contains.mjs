/// <reference types="./Container.contains.d.ts" />
import { isEqualTo } from '../../../functions.mjs';

const Container_contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));

export { Container_contains as default };
