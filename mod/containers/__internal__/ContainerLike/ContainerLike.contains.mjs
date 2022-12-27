/// <reference types="./ContainerLike.contains.d.ts" />
import { isEqualTo } from '../../../functions.mjs';

const contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));

export { contains as default };
