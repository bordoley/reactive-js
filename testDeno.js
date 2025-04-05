/**
 * @jest-environment node
 */

import "./mod/__tests__/math.test.js";
import "./mod/__tests__/functions.test.js";

import "./mod/collections/__tests__/Collection.test.js";
import "./mod/collections/__tests__/Dictionary.test.js";
import "./mod/collections/__tests__/ReadonlyArray.test.js";
import "./mod/collections/__tests__/ReadonlyMap.test.js";
import "./mod/collections/__tests__/ReadonlyObjectMap.test.js";

import "./mod/computations/__tests__/AsyncIterable.test.js";
import "./mod/computations/__tests__/Broadcaster.test.js";
import "./mod/computations/__tests__/EventSource.test.js";
import "./mod/computations/__tests__/Iterable.test.js";
import "./mod/computations/__tests__/Observable.test.js";
import "./mod/computations/__tests__/Producer.test.js";
import "./mod/computations/__tests__/Publisher.test.js";
import "./mod/computations/__tests__/Runnable.test.js";
import "./mod/computations/__tests__/SynchronousObservable.test.js";
import "./mod/computations/__tests__/WritableStore.test.js";

import "./mod/utils/__tests__/DefaultScheduler.test.js";
import "./mod/utils/__tests__/Disposable.test.js";
import "./mod/utils/__tests__/DisposableContainer.test.js";
import "./mod/utils/__tests__/HostScheduler.test.js";
import "./mod/utils/__tests__/Iterator.test.js";
import "./mod/utils/__tests__/PauseableScheduler.test.js";
import "./mod/utils/__tests__/Queue.test.js";
import "./mod/utils/__tests__/VirtualTimeScheduler.test.js";
