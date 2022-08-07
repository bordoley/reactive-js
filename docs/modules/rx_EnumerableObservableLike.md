[Reactive-JS](../README.md) / rx/EnumerableObservableLike

# Module: rx/EnumerableObservableLike

## Table of contents

### Variables

- [bufferT](rx_EnumerableObservableLike.md#buffert)
- [concatT](rx_EnumerableObservableLike.md#concatt)
- [decodeWithCharsetT](rx_EnumerableObservableLike.md#decodewithcharsett)
- [distinctUntilChangedT](rx_EnumerableObservableLike.md#distinctuntilchangedt)
- [exhaustT](rx_EnumerableObservableLike.md#exhaustt)
- [forEachT](rx_EnumerableObservableLike.md#foreacht)
- [keepT](rx_EnumerableObservableLike.md#keept)
- [mapT](rx_EnumerableObservableLike.md#mapt)
- [mergeAllT](rx_EnumerableObservableLike.md#mergeallt)
- [mergeT](rx_EnumerableObservableLike.md#merget)
- [pairwiseT](rx_EnumerableObservableLike.md#pairwiset)
- [reduceT](rx_EnumerableObservableLike.md#reducet)
- [scanT](rx_EnumerableObservableLike.md#scant)
- [skipFirstT](rx_EnumerableObservableLike.md#skipfirstt)
- [switchAllT](rx_EnumerableObservableLike.md#switchallt)
- [takeFirstT](rx_EnumerableObservableLike.md#takefirstt)
- [takeLastT](rx_EnumerableObservableLike.md#takelastt)
- [takeWhileT](rx_EnumerableObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_EnumerableObservableLike.md#throwifemptyt)
- [toReadonlyArrayT](rx_EnumerableObservableLike.md#toreadonlyarrayt)
- [zipT](rx_EnumerableObservableLike.md#zipt)

### Functions

- [concatAll](rx_EnumerableObservableLike.md#concatall)
- [exhaust](rx_EnumerableObservableLike.md#exhaust)
- [mergeAll](rx_EnumerableObservableLike.md#mergeall)
- [switchAll](rx_EnumerableObservableLike.md#switchall)

## Variables

### bufferT

• `Const` **bufferT**: [`Buffer`](containers.md#buffer)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### exhaustT

• `Const` **exhaustT**: [`ConcatAll`](containers.md#concatall)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

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

### mergeAllT

• `Const` **mergeAllT**: [`ConcatAll`](containers.md#concatall)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md), { `maxBufferSize?`: `number` ; `maxConcurrency?`: `number`  }\>

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

### switchAllT

• `Const` **switchAllT**: [`ConcatAll`](containers.md#concatall)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

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

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md), { `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\>

___

### zipT

• `Const` **zipT**: [`Zip`](containers.md#zip)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

## Functions

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `maxBufferSize?`: `number`  }\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `maxBufferSize?`: `number` ; `maxConcurrency?`: `number`  }\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>, `T`\>
