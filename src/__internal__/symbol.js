import { none } from "../functions.js";
import { __DEV__ } from "./constants.js";

const symbol = label => Symbol(__DEV__ ? label : none);

export default symbol;
