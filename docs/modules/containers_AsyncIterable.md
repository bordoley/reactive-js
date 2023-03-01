[Reactive-JS](../README.md) / containers/AsyncIterable

# Module: containers/AsyncIterable

## Table of contents

### Converter Functions

- [toFlowable](containers_AsyncIterable.md#toflowable)
- [toObservable](containers_AsyncIterable.md#toobservable)

## Converter Functions

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBuffer?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBuffer?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncIterableLike`](../interfaces/containers.AsyncIterableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
