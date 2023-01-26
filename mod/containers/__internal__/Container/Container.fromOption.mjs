/// <reference types="./Container.fromOption.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';

const Container_fromOption = ({ fromArray }, 
// FIXME: How do we omit the start/count options sanely
options) => option => pipe(isSome(option) ? [option] : [], fromArray(options));

export { Container_fromOption as default };
