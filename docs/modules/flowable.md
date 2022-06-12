[Reactive-JS](../README.md) / flowable

# Module: flowable

## Table of contents

### Interfaces

- [FlowableLike](../interfaces/flowable.FlowableLike.md)

### Type Aliases

- [FlowMode](flowable.md#flowmode)
- [FlowableOperator](flowable.md#flowableoperator)

### Functions

- [empty](flowable.md#empty)
- [fromArray](flowable.md#fromarray)
- [fromObservable](flowable.md#fromobservable)
- [fromValue](flowable.md#fromvalue)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

___

### FlowableOperator

Ƭ **FlowableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`TA`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Functions

### empty

▸ **empty**<`T`\>(): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>\>

___

### fromObservable

▸ **fromObservable**<`T`\>(`__namedParameters?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`T`, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`\>\>
