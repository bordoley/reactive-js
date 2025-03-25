/// <reference types="./Broadcaster.gen.d.ts" />

import { pipe } from "../../../functions.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import { Producer_genPure } from "../../Producer/__private__/Producer.gen.js";
const Broadcaster_gen = ((factory, options) => pipe(Producer_genPure(factory), Producer_broadcast(options)));
export default Broadcaster_gen;
