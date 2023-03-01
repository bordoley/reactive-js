[Reactive-JS](../README.md) / streaming/Flowable

# Module: streaming/Flowable

## Table of contents

### Constructor Functions

- [fromAsyncIterable](streaming_Flowable.md#fromasynciterable)
- [fromEnumerable](streaming_Flowable.md#fromenumerable)
- [fromEnumerableObservable](streaming_Flowable.md#fromenumerableobservable)
- [fromIterable](streaming_Flowable.md#fromiterable)
- [fromReadonlyArray](streaming_Flowable.md#fromreadonlyarray)
- [fromRunnable](streaming_Flowable.md#fromrunnable)
- [fromSequence](streaming_Flowable.md#fromsequence)

### Converter Functions

- [toObservable](streaming_Flowable.md#toobservable)

## Constructor Functions

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### fromEnumerableObservable

▸ **fromEnumerableObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### fromRunnable

▸ **fromRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### fromSequence

▸ **fromSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

## Converter Functions

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
