[Reactive-JS](../README.md) / rx/EnumerableObservableLike

# Module: rx/EnumerableObservableLike

## Table of contents

### Variables

- [bufferT](rx_EnumerableObservableLike.md#buffert)
- [catchErrorT](rx_EnumerableObservableLike.md#catcherrort)
- [concatT](rx_EnumerableObservableLike.md#concatt)
- [decodeWithCharsetT](rx_EnumerableObservableLike.md#decodewithcharsett)
- [distinctUntilChangedT](rx_EnumerableObservableLike.md#distinctuntilchangedt)
- [emptyT](rx_EnumerableObservableLike.md#emptyt)
- [everySatisfyT](rx_EnumerableObservableLike.md#everysatisfyt)
- [exhaustT](rx_EnumerableObservableLike.md#exhaustt)
- [forEachT](rx_EnumerableObservableLike.md#foreacht)
- [generateeT](rx_EnumerableObservableLike.md#generateet)
- [keepT](rx_EnumerableObservableLike.md#keept)
- [mapT](rx_EnumerableObservableLike.md#mapt)
- [mergeAllT](rx_EnumerableObservableLike.md#mergeallt)
- [mergeT](rx_EnumerableObservableLike.md#merget)
- [neverT](rx_EnumerableObservableLike.md#nevert)
- [pairwiseT](rx_EnumerableObservableLike.md#pairwiset)
- [reduceT](rx_EnumerableObservableLike.md#reducet)
- [scanAsyncT](rx_EnumerableObservableLike.md#scanasynct)
- [scanT](rx_EnumerableObservableLike.md#scant)
- [skipFirstT](rx_EnumerableObservableLike.md#skipfirstt)
- [someSatisfyT](rx_EnumerableObservableLike.md#somesatisfyt)
- [switchAllT](rx_EnumerableObservableLike.md#switchallt)
- [takeFirstT](rx_EnumerableObservableLike.md#takefirstt)
- [takeLastT](rx_EnumerableObservableLike.md#takelastt)
- [takeWhileT](rx_EnumerableObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_EnumerableObservableLike.md#throwifemptyt)
- [toReadonlyArrayT](rx_EnumerableObservableLike.md#toreadonlyarrayt)
- [zipT](rx_EnumerableObservableLike.md#zipt)

### Functions

- [catchError](rx_EnumerableObservableLike.md#catcherror)
- [concatAll](rx_EnumerableObservableLike.md#concatall)
- [exhaust](rx_EnumerableObservableLike.md#exhaust)
- [mergeAll](rx_EnumerableObservableLike.md#mergeall)
- [scanAsync](rx_EnumerableObservableLike.md#scanasync)
- [switchAll](rx_EnumerableObservableLike.md#switchall)

## Variables

### bufferT

• `Const` **bufferT**: [`Buffer`](containers.md#buffer)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### catchErrorT

• `Const` **catchErrorT**: [`CatchError`](containers.md#catcherror)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

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

### emptyT

• `Const` **emptyT**: [`Empty`](containers.md#empty)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### everySatisfyT

• `Const` **everySatisfyT**: [`EverySatisfy`](containers.md#everysatisfy)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### exhaustT

• `Const` **exhaustT**: [`ConcatAll`](containers.md#concatall)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### generateeT

• `Const` **generateeT**: [`Generate`](containers.md#generate)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

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

### neverT

• `Const` **neverT**: [`Never`](containers.md#never)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### scanAsyncT

• `Const` **scanAsyncT**: [`ScanAsync`](rx.md#scanasync)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md), [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

___

### someSatisfyT

• `Const` **someSatisfyT**: [`SomeSatisfy`](containers.md#somesatisfy)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)\>

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

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

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

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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
