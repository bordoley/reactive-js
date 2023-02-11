[Reactive-JS](../README.md) / rx/Runnable

# Module: rx/Runnable

## Table of contents

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

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |
| `options?` | `undefined` |

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

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\> |
| `options?` | `undefined` |

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

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

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

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |
| `options?` | `undefined` |

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

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

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

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### never

▸ **never**<`T`\>(`options?`): [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>

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

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

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
| `options?` | `undefined` |

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

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `TAcc`\>

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
| `options?` | `undefined` |

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

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

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

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

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
