import {  SinkLike_complete } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import { Producer_createPureDeferred } from "./Producer.create.js";

const Producer_empty: Producer.Signature["empty"] = (() =>
  Producer_createPureDeferred(async consumer => {
    await Promise.resolve();
    consumer[SinkLike_complete]();
  })) as Producer.Signature["empty"];

export default Producer_empty;
