[Reactive-JS](../README.md) / rx/EnumerableObservableLike

# Module: rx/EnumerableObservableLike

## Table of contents

### Variables

- [concatT](rx_EnumerableObservableLike.md#concatt)
- [decodeWithCharsetT](rx_EnumerableObservableLike.md#decodewithcharsett)
- [distinctUntilChangedT](rx_EnumerableObservableLike.md#distinctuntilchangedt)
- [forEachT](rx_EnumerableObservableLike.md#foreacht)
- [keepT](rx_EnumerableObservableLike.md#keept)
- [mapT](rx_EnumerableObservableLike.md#mapt)
- [mergeT](rx_EnumerableObservableLike.md#merget)
- [pairwiseT](rx_EnumerableObservableLike.md#pairwiset)
- [reduceT](rx_EnumerableObservableLike.md#reducet)
- [scanT](rx_EnumerableObservableLike.md#scant)
- [skipFirstT](rx_EnumerableObservableLike.md#skipfirstt)
- [takeFirstT](rx_EnumerableObservableLike.md#takefirstt)
- [takeLastT](rx_EnumerableObservableLike.md#takelastt)
- [takeWhileT](rx_EnumerableObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_EnumerableObservableLike.md#throwifemptyt)
- [toEnumerableT](rx_EnumerableObservableLike.md#toenumerablet)
- [toFlowableT](rx_EnumerableObservableLike.md#toflowablet)
- [toReadonlyArrayT](rx_EnumerableObservableLike.md#toreadonlyarrayt)

### Functions

- [toEnumerable](rx_EnumerableObservableLike.md#toenumerable)
- [toFlowable](rx_EnumerableObservableLike.md#toflowable)
- [toHotObservable](rx_EnumerableObservableLike.md#tohotobservable)
- [toReadonlyArray](rx_EnumerableObservableLike.md#toreadonlyarray)

## Variables

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### mergeT

• `Const` **mergeT**: [`Concat`](containers.md#concat)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers.md#throwifempty)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### toFlowableT

• `Const` **toFlowableT**: [`ToFlowable`](streaming.md#toflowable)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md), { `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\>

## Functions

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

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

### toHotObservable

▸ **toHotObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>\>

___

### toReadonlyArray

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
