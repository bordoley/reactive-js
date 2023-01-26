/// <reference types="./Container.mapTo.d.ts" />
import { pipe, returns } from '../../../functions.mjs';

const Container$mapTo = ({ map }, value) => pipe(value, returns, map);

export { Container$mapTo as default };
