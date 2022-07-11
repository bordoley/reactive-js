[Reactive-JS](../README.md) / readonlyArray

# Module: readonlyArray

## Table of contents

### Type Aliases

- [ReadonlyArrayOperator](readonlyArray.md#readonlyarrayoperator)

### Variables

- [empty](readonlyArray.md#empty)

### Functions

- [everySatisfy](readonlyArray.md#everysatisfy)
- [forEach](readonlyArray.md#foreach)
- [keep](readonlyArray.md#keep)
- [keepType](readonlyArray.md#keeptype)
- [map](readonlyArray.md#map)

## Type Aliases

### ReadonlyArrayOperator

Ƭ **ReadonlyArrayOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<readonly `TA`[], readonly `TB`[]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### empty

• `Const` **empty**: `ReadonlyArray`<`any`\>

## Functions

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

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

▸ **forEach**<`T`\>(`f`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ReadonlyArrayOperator`](readonlyArray.md#readonlyarrayoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ReadonlyArrayOperator`](readonlyArray.md#readonlyarrayoperator)<`T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ReadonlyArrayOperator`](readonlyArray.md#readonlyarrayoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ReadonlyArrayOperator`](readonlyArray.md#readonlyarrayoperator)<`TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ReadonlyArrayOperator`](readonlyArray.md#readonlyarrayoperator)<`TA`, `TB`\>

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

[`ReadonlyArrayOperator`](readonlyArray.md#readonlyarrayoperator)<`TA`, `TB`\>
