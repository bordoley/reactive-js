import { scan } from "../../observable.js";
import { createStreamable } from "../../streamable.js";
const generateScanner = (generator) => (acc, _) => generator(acc);
export const generate = (generator, initialValue) => createStreamable(scan(generateScanner(generator), initialValue));
