/// <reference types="./Container.mapTo.d.ts" />
import { pipe, returns } from '../../../functions.mjs';

const Container_mapTo = ({ map }, value) => pipe(value, returns, map);

export { Container_mapTo as default };
