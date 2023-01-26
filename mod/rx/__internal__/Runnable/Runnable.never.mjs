/// <reference types="./Runnable.never.d.ts" />
import { ignore } from '../../../functions.mjs';
import Runnable$create from './Runnable.create.mjs';

const Runnable$never = () => Runnable$create(ignore);

export { Runnable$never as default };
