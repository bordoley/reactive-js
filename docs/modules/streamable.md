[Reactive-JS](../README.md) / streamable

# Module: streamable

## Table of contents

### Interfaces

- [StreamableLike](../interfaces/streamable.StreamableLike.md)

### Type Aliases

- [FlowMode](streamable.md#flowmode)
- [StreamableOperator](streamable.md#streamableoperator)

### Functions

- [\_\_stream](streamable.md#__stream)
- [createActionReducer](streamable.md#createactionreducer)
- [createStreamable](streamable.md#createstreamable)
- [empty](streamable.md#empty)
- [flow](streamable.md#flow)
- [identity](streamable.md#identity)
- [lift](streamable.md#lift)
- [map](streamable.md#map)
- [mapReq](streamable.md#mapreq)
- [mapTo](streamable.md#mapto)
- [onNotify](streamable.md#onnotify)
- [scan](streamable.md#scan)
- [sink](streamable.md#sink)
- [stream](streamable.md#stream)
- [withLatestFrom](streamable.md#withlatestfrom)

## Type Aliases

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

### map

▸ **map**<`TReq`, `TA`, `TB`\>(`mapper`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

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

### mapTo

▸ **mapTo**<`TReq`, `TA`, `TB`\>(`v`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `TB` |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `TB`\>

___

### onNotify

▸ **onNotify**<`TReq`, `T`\>(`onNotify`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `T`, `TReq`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `T`, `TReq`, `T`\>

___

### scan

▸ **scan**<`TReq`, `T`, `TAcc`\>(`scanner`, `initalValue`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `T`, `TReq`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initalValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `T`, `TReq`, `TAcc`\>

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

### withLatestFrom

▸ **withLatestFrom**<`TReq`, `TA`, `TB`, `T`\>(`other`, `selector`): [`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`TReq`, `TA`, `TReq`, `T`\>
