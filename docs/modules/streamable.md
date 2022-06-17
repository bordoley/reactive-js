[Reactive-JS](../README.md) / streamable

# Module: streamable

## Table of contents

### Interfaces

- [IOSinkAccumulatorLike](../interfaces/streamable.IOSinkAccumulatorLike.md)
- [StreamableLike](../interfaces/streamable.StreamableLike.md)

### Type Aliases

- [FlowMode](streamable.md#flowmode)
- [IOEvent](streamable.md#ioevent)
- [StreamableOperator](streamable.md#streamableoperator)

### Functions

- [\_\_stream](streamable.md#__stream)
- [createActionReducer](streamable.md#createactionreducer)
- [createIOSinkAccumulator](streamable.md#createiosinkaccumulator)
- [createStateStore](streamable.md#createstatestore)
- [createStreamable](streamable.md#createstreamable)
- [decodeWithCharset](streamable.md#decodewithcharset)
- [doneIOEvent](streamable.md#doneioevent)
- [empty](streamable.md#empty)
- [encodeUtf8](streamable.md#encodeutf8)
- [flow](streamable.md#flow)
- [flowIOEvents](streamable.md#flowioevents)
- [fromArray](streamable.md#fromarray)
- [fromEnumerable](streamable.md#fromenumerable)
- [fromIterable](streamable.md#fromiterable)
- [generate](streamable.md#generate)
- [identity](streamable.md#identity)
- [lift](streamable.md#lift)
- [mapIOEventStream](streamable.md#mapioeventstream)
- [mapReq](streamable.md#mapreq)
- [notifyIOEvent](streamable.md#notifyioevent)
- [sink](streamable.md#sink)
- [stream](streamable.md#stream)
- [toStateStore](streamable.md#tostatestore)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

___

### IOEvent

Ƭ **IOEvent**<`T`\>: { `data`: `T` ; `type`: ``"notify"``  } \| { `type`: ``"done"``  }

#### Type parameters

| Name |
| :------ |
| `T` |

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

### createIOSinkAccumulator

▸ **createIOSinkAccumulator**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`IOSinkAccumulatorLike`](../interfaces/streamable.IOSinkAccumulatorLike.md)<`T`, `TAcc`\>

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

[`IOSinkAccumulatorLike`](../interfaces/streamable.IOSinkAccumulatorLike.md)<`T`, `TAcc`\>

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

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`, `options?`): [`StreamableOperator`](streamable.md#streamableoperator)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`ArrayBuffer`\>, [`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |
| `options?` | `TextDecoderOptions` |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`ArrayBuffer`\>, [`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`string`\>\>

___

### doneIOEvent

▸ **doneIOEvent**<`T`\>(): [`IOEvent`](streamable.md#ioevent)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`IOEvent`](streamable.md#ioevent)<`T`\>

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

### encodeUtf8

▸ **encodeUtf8**(`a`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`Uint8Array`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`string`\>\> |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`Uint8Array`\>\>

___

### flow

▸ **flow**<`T`\>(`__namedParameters?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), `T`\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), `T`\>\>

___

### flowIOEvents

▸ **flowIOEvents**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`T`\>\>\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`void`, `T`\>

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

### mapIOEventStream

▸ **mapIOEventStream**<`TA`, `TB`\>(`mapper`): [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`TA`\>\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`TB`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`TA`\>\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<[`FlowMode`](streamable.md#flowmode), [`IOEvent`](streamable.md#ioevent)<`TB`\>\>\>

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

### notifyIOEvent

▸ **notifyIOEvent**<`T`\>(`data`): [`IOEvent`](streamable.md#ioevent)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`IOEvent`](streamable.md#ioevent)<`T`\>

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
