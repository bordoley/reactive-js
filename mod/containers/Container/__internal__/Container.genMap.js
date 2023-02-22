/// <reference types="./Container.genMap.d.ts" />

import { compose, pipe } from "../../../functions.js";
const Container_genMap = (m, mapper, options) => compose(m.map(x => pipe(x, mapper, m.fromIterable(options))), m.concatAll());
export default Container_genMap;
