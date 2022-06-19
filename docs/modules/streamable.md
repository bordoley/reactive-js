[Reactive-JS](../README.md) / streamable

# Module: streamable

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/streamable.AsyncEnumerableLike.md)
- [FlowableLike](../interfaces/streamable.FlowableLike.md)
- [FlowableSinkLike](../interfaces/streamable.FlowableSinkLike.md)
- [StreamableLike](../interfaces/streamable.StreamableLike.md)

### Type Aliases

- [ConsumeContinue](streamable.md#consumecontinue)
- [ConsumeDone](streamable.md#consumedone)
- [FlowMode](streamable.md#flowmode)
- [StreamableOperator](streamable.md#streamableoperator)

### Functions

- [\_\_stream](streamable.md#__stream)
- [consume](streamable.md#consume)
- [consumeAsync](streamable.md#consumeasync)
- [consumeContinue](streamable.md#consumecontinue-1)
- [consumeDone](streamable.md#consumedone-1)
- [createActionReducer](streamable.md#createactionreducer)
- [createFlowableSinkAccumulator](streamable.md#createflowablesinkaccumulator)
- [createStateStore](streamable.md#createstatestore)
- [createStreamable](streamable.md#createstreamable)
- [empty](streamable.md#empty)
- [flow](streamable.md#flow)
- [fromArray](streamable.md#fromarray)
- [fromEnumerable](streamable.md#fromenumerable)
- [fromIterable](streamable.md#fromiterable)
- [generate](streamable.md#generate)
- [identity](streamable.md#identity)
- [lift](streamable.md#lift)
- [mapReq](streamable.md#mapreq)
- [sink](streamable.md#sink)
- [stream](streamable.md#stream)
- [toStateStore](streamable.md#tostatestore)

## Type Aliases

### ConsumeContinue

Ƭ **ConsumeContinue**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"continue"`` |

___

### ConsumeDone

Ƭ **ConsumeDone**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"done"`` |

___

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

___

### StreamableOperator

Ƭ **StreamableOperator**<`TSrcReq`, `TSrc`, `TReq`, `T`\>: [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TSrcReq`, `TSrc`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TSrcReq` |
| `TSrc` |
| `TReq` |
| `T` |

## Functions

### \_\_stream

▸ **__stream**<`TReq`, `T`\>(`streamable`, `__namedParameters?`): [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\> |
| `__namedParameters?` | `Object` |
| `__namedParameters.replay?` | `number` |
| `__namedParameters.scheduler?` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

[`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>

___

### consume

▸ **consume**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ConsumeContinue`](streamable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](streamable.md#consumedone)<`TAcc`\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeAsync

▸ **consumeAsync**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`ConsumeContinue`](streamable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](streamable.md#consumedone)<`TAcc`\>\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeContinue

▸ **consumeContinue**<`T`\>(`data`): [`ConsumeContinue`](streamable.md#consumecontinue)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeContinue`](streamable.md#consumecontinue)<`T`\>

___

### consumeDone

▸ **consumeDone**<`T`\>(`data`): [`ConsumeDone`](streamable.md#consumedone)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeDone`](streamable.md#consumedone)<`T`\>

___

### createActionReducer

▸ **createActionReducer**<`TAction`, `T`\>(`reducer`, `initialState`, `options?`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TAction`, `T`\>

Returns a new `StreamableLike` instance that applies an accumulator function
over the notified actions, emitting each intermediate result.

#### Type parameters

| Name |
| :------ |
| `TAction` |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`TAction`, `T`\> | The accumulator function called on each notified action. |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TAction`, `T`\>

___

### createFlowableSinkAccumulator

▸ **createFlowableSinkAccumulator**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`FlowableSinkLike`](../interfaces/streamable.FlowableSinkLike.md)<`T`\> & [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`TAcc`\>

**`experimental`**

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`FlowableSinkLike`](../interfaces/streamable.FlowableSinkLike.md)<`T`\> & [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`TAcc`\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

___

### createStreamable

▸ **createStreamable**<`TReq`, `TData`\>(`op`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `TData`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `TData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ObservableOperator`](observable.md#observableoperator)<`TReq`, `TData`\> |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `TData`\>

___

### empty

▸ **empty**<`TReq`, `T`\>(`options?`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\>

Returns an empty `StreamableLike` that always returns
a disposed `StreamLike` instance.

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\>

___

### flow

▸ **flow**<`T`\>(`__namedParameters?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | `Object` |
| `__namedParameters.scheduler?` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`T`\>\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.endIndex?` | `number` |
| `options.startIndex?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `T`\>

___

### lift

▸ **lift**<`TReq`, `TA`, `TB`\>(`op`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ObservableOperator`](observable.md#observableoperator)<`TA`, `TB`\> |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `TB`\>

___

### mapReq

▸ **mapReq**<`TReqA`, `TReqB`, `T`\>(`op`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReqA`, `T`, `TReqB`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TReqA` |
| `TReqB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<`TReqB`, `TReqA`\> |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`TReqA`, `T`, `TReqB`, `T`\>

___

### sink

▸ **sink**<`TReq`, `T`\>(`src`, `dest`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\> |
| `dest` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `TReq`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`void`\>

___

### stream

▸ **stream**<`TReq`, `T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\>, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`\>, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\>

___

### toStateStore

▸ **toStateStore**<`T`\>(): [`StreamableOperator`](streamable.md#streamableoperator)<`T`, `T`, [`Updater`](functions.md#updater)<`T`\>, `T`\>

Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`T`, `T`, [`Updater`](functions.md#updater)<`T`\>, `T`\>
