import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Publisher from "../../Publisher.js";
import Broadcaster_createPauseable from "./Broadcaster.createPauseable.js";
const Broadcaster_never: Broadcaster.Signature["never"] = (options =>
  Broadcaster_createPauseable(
    mode => pipe(Publisher.create(), Disposable.addTo(mode)),
    options,
  )) as Broadcaster.Signature["never"];

export default Broadcaster_never;
