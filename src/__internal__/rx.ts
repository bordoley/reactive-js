import { Function2, Optional } from "../functions.js";
import {
  __WithLatestLike_hasLatest,
  __WithLatestLike_otherLatest,
  __WithLatestLike_selector,
} from "./symbols.js";

export interface WithLatestLike<TA, TB, T> {
  [__WithLatestLike_hasLatest]: boolean;
  [__WithLatestLike_otherLatest]: Optional<TB>;
  [__WithLatestLike_selector]: Function2<TA, TB, T>;
}
