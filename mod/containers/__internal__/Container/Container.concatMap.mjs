/// <reference types="./Container.concatMap.d.ts" />
import { compose } from '../../../functions.mjs';

const Container_concatMap = (m, mapper) => compose(m.map(mapper), m.concatAll());

export { Container_concatMap as default };
