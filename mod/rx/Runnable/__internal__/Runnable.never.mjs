/// <reference types="./Runnable.never.d.ts" />
import { ignore } from '../../../functions.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_never = () => Runnable_create(ignore);

export { Runnable_never as default };
