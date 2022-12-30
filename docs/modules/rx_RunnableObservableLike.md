[Reactive-JS](../README.md) / rx/RunnableObservableLike

# Module: rx/RunnableObservableLike

## Table of contents

### Variables

- [bufferT](rx_RunnableObservableLike.md#buffert)
- [catchErrorT](rx_RunnableObservableLike.md#catcherrort)
- [concatT](rx_RunnableObservableLike.md#concatt)
- [decodeWithCharsetT](rx_RunnableObservableLike.md#decodewithcharsett)
- [deferT](rx_RunnableObservableLike.md#defert)
- [distinctUntilChangedT](rx_RunnableObservableLike.md#distinctuntilchangedt)
- [emptyT](rx_RunnableObservableLike.md#emptyt)
- [everySatisfyT](rx_RunnableObservableLike.md#everysatisfyt)
- [exhaustT](rx_RunnableObservableLike.md#exhaustt)
- [forEachT](rx_RunnableObservableLike.md#foreacht)
- [generateT](rx_RunnableObservableLike.md#generatet)
- [keepT](rx_RunnableObservableLike.md#keept)
- [mapT](rx_RunnableObservableLike.md#mapt)
- [mergeAllT](rx_RunnableObservableLike.md#mergeallt)
- [mergeT](rx_RunnableObservableLike.md#merget)
- [neverT](rx_RunnableObservableLike.md#nevert)
- [pairwiseT](rx_RunnableObservableLike.md#pairwiset)
- [reduceT](rx_RunnableObservableLike.md#reducet)
- [scanAsyncT](rx_RunnableObservableLike.md#scanasynct)
- [scanT](rx_RunnableObservableLike.md#scant)
- [skipFirstT](rx_RunnableObservableLike.md#skipfirstt)
- [someSatisfyT](rx_RunnableObservableLike.md#somesatisfyt)
- [switchAllT](rx_RunnableObservableLike.md#switchallt)
- [takeFirstT](rx_RunnableObservableLike.md#takefirstt)
- [takeLastT](rx_RunnableObservableLike.md#takelastt)
- [takeWhileT](rx_RunnableObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_RunnableObservableLike.md#throwifemptyt)
- [toReadonlyArrayT](rx_RunnableObservableLike.md#toreadonlyarrayt)
- [zipT](rx_RunnableObservableLike.md#zipt)

### Functions

- [catchError](rx_RunnableObservableLike.md#catcherror)
- [concatAll](rx_RunnableObservableLike.md#concatall)
- [create](rx_RunnableObservableLike.md#create)
- [defer](rx_RunnableObservableLike.md#defer)
- [exhaust](rx_RunnableObservableLike.md#exhaust)
- [mergeAll](rx_RunnableObservableLike.md#mergeall)
- [scanAsync](rx_RunnableObservableLike.md#scanasync)
- [switchAll](rx_RunnableObservableLike.md#switchall)

## Variables

### bufferT

• `Const` **bufferT**: [`Buffer`](containers.md#buffer)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### catchErrorT

• `Const` **catchErrorT**: [`CatchError`](containers.md#catcherror)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### deferT

• `Const` **deferT**: [`Defer`](containers.md#defer)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### emptyT

• `Const` **emptyT**: [`Empty`](containers.md#empty)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `delay`: `number`  }\>

___

### everySatisfyT

• `Const` **everySatisfyT**: [`EverySatisfy`](containers.md#everysatisfy)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### exhaustT

• `Const` **exhaustT**: [`ConcatAll`](containers.md#concatall)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### generateT

• `Const` **generateT**: [`Generate`](containers.md#generate)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `delay`: `number` ; `delayStart`: `boolean`  }\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### mergeAllT

• `Const` **mergeAllT**: [`ConcatAll`](containers.md#concatall)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `maxBufferSize?`: `number` ; `maxConcurrency?`: `number`  }\>

___

### mergeT

• `Const` **mergeT**: [`Concat`](containers.md#concat)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### neverT

• `Const` **neverT**: [`Never`](containers.md#never)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### scanAsyncT

• `Const` **scanAsyncT**: [`ScanAsync`](rx.md#scanasync)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### someSatisfyT

• `Const` **someSatisfyT**: [`SomeSatisfy`](containers.md#somesatisfy)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

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

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\>

___

### zipT

• `Const` **zipT**: [`Zip`](containers.md#zip)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

## Functions

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### create

▸ **create**<`T`\>(`f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`\>\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `maxBufferSize?`: `number` ; `maxConcurrency?`: `number`  }\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>
