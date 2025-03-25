/// <reference types="./Broadcaster.encodeUtf8.d.ts" />

import { pipe, returns } from "../../../functions.js";
import * as EncodeUtf8Operator from "../../__internal__/operators/EncodeUtf8Operator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_encodeUtf8 = 
/*@__PURE__*/ (() => returns(pipe(EncodeUtf8Operator.create, (Broadcaster_lift))))();
export default Broadcaster_encodeUtf8;
