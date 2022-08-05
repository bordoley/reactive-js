[Reactive-JS](../README.md) / containers/ReadonlyArrayLike

# Module: containers/ReadonlyArrayLike

## Table of contents

### Interfaces

- [toObservable](../interfaces/containers_ReadonlyArrayLike.toObservable.md)

### Type Aliases

- [FromArrayOptions](containers_ReadonlyArrayLike.md#fromarrayoptions)

### Variables

- [forEachT](containers_ReadonlyArrayLike.md#foreacht)
- [keepT](containers_ReadonlyArrayLike.md#keept)
- [mapT](containers_ReadonlyArrayLike.md#mapt)
- [toEnumerableT](containers_ReadonlyArrayLike.md#toenumerablet)
- [toReadonlyArrayT](containers_ReadonlyArrayLike.md#toreadonlyarrayt)
- [toRunnableT](containers_ReadonlyArrayLike.md#torunnablet)
- [toSequenceT](containers_ReadonlyArrayLike.md#tosequencet)

### Functions

- [every](containers_ReadonlyArrayLike.md#every)
- [forEach](containers_ReadonlyArrayLike.md#foreach)
- [keep](containers_ReadonlyArrayLike.md#keep)
- [map](containers_ReadonlyArrayLike.md#map)
- [some](containers_ReadonlyArrayLike.md#some)
- [toEnumerable](containers_ReadonlyArrayLike.md#toenumerable)
- [toObservable](containers_ReadonlyArrayLike.md#toobservable)
- [toReadonlyArray](containers_ReadonlyArrayLike.md#toreadonlyarray)
- [toRunnable](containers_ReadonlyArrayLike.md#torunnable)
- [toSequence](containers_ReadonlyArrayLike.md#tosequence)

## Type Aliases

### FromArrayOptions

Ƭ **FromArrayOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `start` | `number` |

## Variables

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md), { `count`: `number` ; `start`: `number`  }\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md), { `count`: `number` ; `start`: `number`  }\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](rx.md#torunnable)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

___

### toSequenceT

• `Const` **toSequenceT**: [`ToSequence`](containers.md#tosequence)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)\>

## Functions

### every

▸ **every**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

### some

▸ **some**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, `boolean`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableObservableLike`](../interfaces/rx.EnumerableObservableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `count`: `number` ; `start`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

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

### toSequence

▸ **toSequence**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>\>
