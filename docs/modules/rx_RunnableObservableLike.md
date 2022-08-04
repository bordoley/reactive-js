[Reactive-JS](../README.md) / rx/RunnableObservableLike

# Module: rx/RunnableObservableLike

## Table of contents

### Variables

- [concatT](rx_RunnableObservableLike.md#concatt)
- [decodeWithCharsetT](rx_RunnableObservableLike.md#decodewithcharsett)
- [distinctUntilChangedT](rx_RunnableObservableLike.md#distinctuntilchangedt)
- [forEachT](rx_RunnableObservableLike.md#foreacht)
- [keepT](rx_RunnableObservableLike.md#keept)
- [mapT](rx_RunnableObservableLike.md#mapt)
- [mergeT](rx_RunnableObservableLike.md#merget)
- [pairwiseT](rx_RunnableObservableLike.md#pairwiset)
- [reduceT](rx_RunnableObservableLike.md#reducet)
- [scanT](rx_RunnableObservableLike.md#scant)
- [skipFirstT](rx_RunnableObservableLike.md#skipfirstt)
- [switchAllT](rx_RunnableObservableLike.md#switchallt)
- [takeFirstT](rx_RunnableObservableLike.md#takefirstt)
- [takeLastT](rx_RunnableObservableLike.md#takelastt)
- [takeWhileT](rx_RunnableObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_RunnableObservableLike.md#throwifemptyt)
- [toFlowableT](rx_RunnableObservableLike.md#toflowablet)
- [toReadonlyArrayT](rx_RunnableObservableLike.md#toreadonlyarrayt)

### Functions

- [toFlowable](rx_RunnableObservableLike.md#toflowable)
- [toReadonlyArray](rx_RunnableObservableLike.md#toreadonlyarray)

## Variables

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### mergeT

• `Const` **mergeT**: [`Concat`](containers.md#concat)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### switchAllT

• `Const` **switchAllT**: [`ConcatAll`](containers.md#concatall)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers.md#throwifempty)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### toFlowableT

• `Const` **toFlowableT**: [`ToFlowable`](streaming.md#toflowable)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\>

## Functions

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>
