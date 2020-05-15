import { compose, returns } from "../../functions.js";
import { scan, map, takeFirst } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
const fromArrayScanner = (acc, _) => acc + 1;
export const fromArray = ({ startIndex } = { startIndex: 0 }) => (values) => createStreamable(compose(scan(fromArrayScanner, returns(startIndex - 1)), map((i) => values[i]), takeFirst(values.length - startIndex)));
