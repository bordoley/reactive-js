[Reactive-JS](../README.md) / containers/ReadonlyArrayLike

# Module: containers/ReadonlyArrayLike

## Table of contents

### Interfaces

- [ReadonlyArrayLike](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)

### Type Aliases

- [ToReadonlyArray](containers_ReadonlyArrayLike.md#toreadonlyarray)

### Variables

- [emptyT](containers_ReadonlyArrayLike.md#emptyt)
- [keepT](containers_ReadonlyArrayLike.md#keept)
- [mapT](containers_ReadonlyArrayLike.md#mapt)
- [toReadonlyArrayT](containers_ReadonlyArrayLike.md#toreadonlyarrayt)

### Functions

- [empty](containers_ReadonlyArrayLike.md#empty)
- [every](containers_ReadonlyArrayLike.md#every)
- [forEach](containers_ReadonlyArrayLike.md#foreach)
- [keep](containers_ReadonlyArrayLike.md#keep)
- [map](containers_ReadonlyArrayLike.md#map)
- [toReadonlyArray](containers_ReadonlyArrayLike.md#toreadonlyarray-1)

## Type Aliases

### ToReadonlyArray

Ƭ **ToReadonlyArray**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `toReadonlyArray`: <T\>() => [`Function1`](util_functions.md#function1)<[`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers_ContainerLike.ContainerLike.md) |

## Variables

### emptyT

• `Const` **emptyT**: [`Empty`](containers_ContainerLike.md#empty)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers_ContainerLike.md#keep)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers_ContainerLike.md#map)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers_ReadonlyArrayLike.md#toreadonlyarray)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)\>

## Functions

### empty

▸ **empty**<`T`\>(): readonly `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

readonly `T`[]

___

### every

▸ **every**<`T`\>(`predicate`): [`Function1`](util_functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](util_functions.md#function1)<readonly `T`[], `boolean`\>

___

### forEach

▸ **forEach**<`T`\>(`f`): [`Function1`](util_functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](util_functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](util_functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](util_functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](util_functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`unknown`\>, `TA`, `TB`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](util_functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](util_functions.md#function1)<[`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers_ReadonlyArrayLike.ReadonlyArrayLike.md)<`T`\>\>
