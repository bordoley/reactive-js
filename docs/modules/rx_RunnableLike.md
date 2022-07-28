[Reactive-JS](../README.md) / rx/RunnableLike

# Module: rx/RunnableLike

## Table of contents

### Variables

- [distinctUntilChangedT](rx_RunnableLike.md#distinctuntilchangedt)
- [keepT](rx_RunnableLike.md#keept)
- [mapT](rx_RunnableLike.md#mapt)
- [scanT](rx_RunnableLike.md#scant)
- [skipFirstT](rx_RunnableLike.md#skipfirstt)
- [takeFirstT](rx_RunnableLike.md#takefirstt)
- [takeLastT](rx_RunnableLike.md#takelastt)
- [takeWhileT](rx_RunnableLike.md#takewhilet)
- [toReadonlyArrayT](rx_RunnableLike.md#toreadonlyarrayt)

### Functions

- [distinctUntilChanged](rx_RunnableLike.md#distinctuntilchanged)
- [keep](rx_RunnableLike.md#keep)
- [map](rx_RunnableLike.md#map)
- [onNotify](rx_RunnableLike.md#onnotify)
- [run](rx_RunnableLike.md#run)
- [scan](rx_RunnableLike.md#scan)
- [skipFirst](rx_RunnableLike.md#skipfirst)
- [takeFirst](rx_RunnableLike.md#takefirst)
- [takeLast](rx_RunnableLike.md#takelast)
- [takeWhile](rx_RunnableLike.md#takewhile)
- [toReadonlyArray](rx_RunnableLike.md#toreadonlyarray)

## Variables

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

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

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)\>

## Functions

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

### onNotify

▸ **onNotify**<`T`\>(`onNotify`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableLike`](../interfaces/rx.RunnableLike.md)<`unknown`\>, `T`, `T`\>

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
