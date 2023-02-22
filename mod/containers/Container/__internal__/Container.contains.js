/// <reference types="./Container.contains.d.ts" />

import { isEqualTo } from "../../../functions.js";
const Container_contains = ({ someSatisfy }, value, options = {}) => someSatisfy(isEqualTo(value, options));
export default Container_contains;
