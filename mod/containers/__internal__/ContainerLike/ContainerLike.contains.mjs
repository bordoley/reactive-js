/// <reference types="./ContainerLike.contains.d.ts" />
import { isEqualTo } from '../../../functions.mjs';

const ContainerLike__contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));

export { ContainerLike__contains as default };
