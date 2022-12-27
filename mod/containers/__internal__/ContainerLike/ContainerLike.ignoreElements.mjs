/// <reference types="./ContainerLike.ignoreElements.d.ts" />
import { alwaysFalse } from '../../../functions.mjs';

const ignoreElements = ({ keep, }) => keep(alwaysFalse);

export { ignoreElements as default };
