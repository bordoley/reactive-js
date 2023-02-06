[Reactive-JS](../README.md) / rx/Runnable

# Module: rx/Runnable

## Table of contents

### Variables

- [default](rx_Runnable.md#default)

### Functions

- [buffer](rx_Runnable.md#buffer)
- [catchError](rx_Runnable.md#catcherror)
- [concat](rx_Runnable.md#concat)
- [concatAll](rx_Runnable.md#concatall)
- [create](rx_Runnable.md#create)
- [decodeWithCharset](rx_Runnable.md#decodewithcharset)
- [defer](rx_Runnable.md#defer)
- [distinctUntilChanged](rx_Runnable.md#distinctuntilchanged)
- [empty](rx_Runnable.md#empty)
- [everySatisfy](rx_Runnable.md#everysatisfy)
- [first](rx_Runnable.md#first)
- [forEach](rx_Runnable.md#foreach)
- [fromArray](rx_Runnable.md#fromarray)
- [generate](rx_Runnable.md#generate)
- [keep](rx_Runnable.md#keep)
- [last](rx_Runnable.md#last)
- [map](rx_Runnable.md#map)
- [never](rx_Runnable.md#never)
- [onRun](rx_Runnable.md#onrun)
- [pairwise](rx_Runnable.md#pairwise)
- [reduce](rx_Runnable.md#reduce)
- [repeat](rx_Runnable.md#repeat)
- [run](rx_Runnable.md#run)
- [scan](rx_Runnable.md#scan)
- [skipFirst](rx_Runnable.md#skipfirst)
- [someSatisfy](rx_Runnable.md#somesatisfy)
- [takeFirst](rx_Runnable.md#takefirst)
- [takeLast](rx_Runnable.md#takelast)
- [takeWhile](rx_Runnable.md#takewhile)
- [throwIfEmpty](rx_Runnable.md#throwifempty)
- [toReadonlyArray](rx_Runnable.md#toreadonlyarray)
- [toRunnable](rx_Runnable.md#torunnable)

## Variables

### default

• `Const` **default**: [`Buffer`](containers.md#buffer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`CatchError`](containers.md#catcherror)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Concat`](containers.md#concat)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`ConcatAll`](containers.md#concatall)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`DecodeWithCharset`](containers.md#decodewithcharset)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Defer`](containers.md#defer)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Empty`](containers.md#empty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md), { `delay`: `number`  }\> & [`EverySatisfy`](containers.md#everysatisfy)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`ForEach`](containers.md#foreach)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`FromArray`](containers.md#fromarray)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Generate`](containers.md#generate)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Keep`](containers.md#keep)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Map`](containers.md#map)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Pairwise`](containers.md#pairwise)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Reduce`](containers.md#reduce)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Repeat`](containers.md#repeat)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`Scan`](containers.md#scan)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`SkipFirst`](containers.md#skipfirst)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`SomeSatisfy`](containers.md#somesatisfy)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`TakeFirst`](containers.md#takefirst)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`TakeLast`](containers.md#takelast)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`TakeWhile`](containers.md#takewhile)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`ThrowIfEmpty`](containers.md#throwifempty)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\> & [`ToRunnable`](rx.md#torunnable)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

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
