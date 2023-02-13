/// <reference types="./ReadonlyArray.test.d.ts" />
import ReadonlyArray from '../../containers/ReadonlyArray.mjs';
import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray));
