[Reactive-JS](../README.md) / rx/RunnableLike

# Module: rx/RunnableLike

## Table of contents

### Variables

- [bufferT](rx_RunnableLike.md#buffert)
- [catchErrorT](rx_RunnableLike.md#catcherrort)
- [concatAllT](rx_RunnableLike.md#concatallt)
- [concatT](rx_RunnableLike.md#concatt)
- [decodeWithCharsetT](rx_RunnableLike.md#decodewithcharsett)
- [deferT](rx_RunnableLike.md#defert)
- [distinctUntilChangedT](rx_RunnableLike.md#distinctuntilchangedt)
- [emptyT](rx_RunnableLike.md#emptyt)
- [everySatisfyT](rx_RunnableLike.md#everysatisfyt)
- [forEachT](rx_RunnableLike.md#foreacht)
- [generateT](rx_RunnableLike.md#generatet)
- [keepT](rx_RunnableLike.md#keept)
- [mapT](rx_RunnableLike.md#mapt)
- [neverT](rx_RunnableLike.md#nevert)
- [pairwiseT](rx_RunnableLike.md#pairwiset)
- [reduceT](rx_RunnableLike.md#reducet)
- [repeatT](rx_RunnableLike.md#repeatt)
- [scanT](rx_RunnableLike.md#scant)
- [skipFirstT](rx_RunnableLike.md#skipfirstt)
- [someSatisfyT](rx_RunnableLike.md#somesatisfyt)
- [takeFirstT](rx_RunnableLike.md#takefirstt)
- [takeLastT](rx_RunnableLike.md#takelastt)
- [takeWhileT](rx_RunnableLike.md#takewhilet)
- [throwIfEmptyT](rx_RunnableLike.md#throwifemptyt)
- [toReadonlyArrayT](rx_RunnableLike.md#toreadonlyarrayt)
- [toRunnableT](rx_RunnableLike.md#torunnablet)

### Functions

- [buffer](rx_RunnableLike.md#buffer)
- [catchError](rx_RunnableLike.md#catcherror)
- [concat](rx_RunnableLike.md#concat)
- [concatAll](rx_RunnableLike.md#concatall)
- [create](rx_RunnableLike.md#create)
- [decodeWithCharset](rx_RunnableLike.md#decodewithcharset)
- [defer](rx_RunnableLike.md#defer)
- [distinctUntilChanged](rx_RunnableLike.md#distinctuntilchanged)
- [empty](rx_RunnableLike.md#empty)
- [everySatisfy](rx_RunnableLike.md#everysatisfy)
- [first](rx_RunnableLike.md#first)
- [forEach](rx_RunnableLike.md#foreach)
- [fromArray](rx_RunnableLike.md#fromarray)
- [generate](rx_RunnableLike.md#generate)
- [keep](rx_RunnableLike.md#keep)
- [last](rx_RunnableLike.md#last)
- [map](rx_RunnableLike.md#map)
- [never](rx_RunnableLike.md#never)
- [onRun](rx_RunnableLike.md#onrun)
- [pairwise](rx_RunnableLike.md#pairwise)
- [reduce](rx_RunnableLike.md#reduce)
- [repeat](rx_RunnableLike.md#repeat)
- [run](rx_RunnableLike.md#run)
- [scan](rx_RunnableLike.md#scan)
- [skipFirst](rx_RunnableLike.md#skipfirst)
- [someSatisfy](rx_RunnableLike.md#somesatisfy)
- [takeFirst](rx_RunnableLike.md#takefirst)
- [takeLast](rx_RunnableLike.md#takelast)
- [takeWhile](rx_RunnableLike.md#takewhile)
- [throwIfEmpty](rx_RunnableLike.md#throwifempty)
- [toReadonlyArray](rx_RunnableLike.md#toreadonlyarray)
- [toRunnable](rx_RunnableLike.md#torunnable)

## Variables

### bufferT

• `Const` **bufferT**: [`Buffer`](containers.md#buffer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### catchErrorT

• `Const` **catchErrorT**: [`CatchError`](containers.md#catcherror)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](containers.md#concatall)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### deferT

• `Const` **deferT**: [`Defer`](containers.md#defer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### emptyT

• `Const` **emptyT**: [`Empty`](containers.md#empty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### everySatisfyT

• `Const` **everySatisfyT**: [`EverySatisfy`](containers.md#everysatisfy)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### generateT

• `Const` **generateT**: [`Generate`](containers.md#generate)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### neverT

• `Const` **neverT**: [`Never`](containers.md#never)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](containers.md#repeat)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### someSatisfyT

• `Const` **someSatisfyT**: [`SomeSatisfy`](containers.md#somesatisfy)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers.md#throwifempty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](rx.md#torunnable)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, `T`\>

___

### create

▸ **create**<`T`\>(`run`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | [`SideEffect1`](functions.md#sideeffect1)<[`SinkLike`](../interfaces/rx.SinkLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### never

▸ **never**<`T`\>(): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### onRun

▸ **onRun**<`T`\>(`f`): (`runnable`: [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>) => [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](util.md#disposableorteardown)\> |

#### Returns

`fn`

▸ (`runnable`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `runnable` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |

##### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### repeat

▸ **repeat**(`predicate?`): (`c`: [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>) => [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | `number` \| [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

`fn`

▸ (`c`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\> |

##### Returns

[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>

___

### run

▸ **run**<`T`\>(): (`runnable`: [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`runnable`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `runnable` | [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\> |

##### Returns

`void`

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>
