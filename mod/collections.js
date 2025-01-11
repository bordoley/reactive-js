/// <reference types="./collections.d.ts" />

import { Set } from "./__internal__/constants.js";
import { newInstance, } from "./functions.js";
export const DictionaryLike_get = Symbol("DictionaryLike_get");
export const DictionaryLike_keys = Symbol("DictionaryLike_keys");
export const Collection_T = Symbol("Collection_T");
export const Collection_type = Symbol("Collection_type");
export const Collection_TKey = Symbol("Collection_TKey");
export const keySet = (keys) => (collection) => newInstance((Set), keys()(collection));
