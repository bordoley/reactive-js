/// <reference types="./Streamable.d.ts" />

import Streamable_actionReducer from "./Streamable/__private__/Streamable.actionReducer.js";
import Streamable_animation, { AnimationLike_isRunning as Animation_isRunning, } from "./Streamable/__private__/Streamable.animation.js";
//import Streamable_animationGroup from "./Streamable/__private__/Streamable.animationGroup.js";
import Streamable_create from "./Streamable/__private__/Streamable.create.js";
import Streamable_identity from "./Streamable/__private__/Streamable.identity.js";
//import Streamable_spring from "./Streamable/__private__/Streamable.spring.js";
import Streamable_stateStore from "./Streamable/__private__/Streamable.stateStore.js";
//import Streamable_syncState from "./Streamable/__private__/Streamable.syncState.js";
export const AnimationLike_isRunning = Animation_isRunning;
export const create = Streamable_create;
export const actionReducer = Streamable_actionReducer;
export const animation = Streamable_animation;
//export const animationGroup: Signature["animationGroup"] = Streamable_animationGroup;
export const identity = Streamable_identity;
//export const spring: Signature["spring"] = Streamable_spring;
export const stateStore = Streamable_stateStore;
//export const syncState: Signature["syncState"] = Streamable_syncState;
