/// <reference types="./Container.endWith.d.ts" />

import Container_concatWith from "./Container.concatWith.js";
const Container_endWith = (m, ...values) => Container_concatWith(m, m.fromReadonlyArray()(values));
export default Container_endWith;
