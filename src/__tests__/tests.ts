/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import { ContainerLikeTests } from "./ContainerLike.test";
import { DisposableLikeTests } from "./DisposableLike.test";
import { EnumerableLikeTests } from "./EnumerableLike.test";

runTests([ContainerLikeTests, DisposableLikeTests, EnumerableLikeTests]);
