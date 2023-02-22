/// <reference types="./Container.mapTo.d.ts" />

import { pipe, returns } from "../../../functions.js";
const Container_mapTo = ({ map }, value) => pipe(value, returns, map);
export default Container_mapTo;
