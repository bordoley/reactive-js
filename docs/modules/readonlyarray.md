[Reactive-JS](../README.md) / readonlyArray

# Module: readonlyArray

## Table of contents

### Type Aliases

- [ReadonlyArrayOperator](readonlyArray.md#readonlyarrayoperator)

### Functions

- [everySatisfy](readonlyArray.md#everysatisfy)
- [fromObject](readonlyArray.md#fromobject)
- [join](readonlyArray.md#join)
- [keep](readonlyArray.md#keep)
- [length](readonlyArray.md#length)
- [map](readonlyArray.md#map)
- [reduce](readonlyArray.md#reduce)
- [reduceRight](readonlyArray.md#reduceright)

## Type Aliases

### ReadonlyArrayOperator

Ƭ **ReadonlyArrayOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<readonly `TA`[], readonly `TB`[]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

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

### fromObject

▸ **fromObject**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMap`](readonlyObjectMap.md#readonlyobjectmap)<`T`\>, readonly [`string`, `T`][]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMap`](readonlyObjectMap.md#readonlyobjectmap)<`T`\>, readonly [`string`, `T`][]\>

___

### join

▸ **join**(`separator?`): [`Function1`](functions.md#function1)<readonly `string`[], `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Returns

[`Function1`](functions.md#function1)<readonly `string`[], `string`\>

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

### length

▸ **length**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | readonly `unknown`[] |

#### Returns

`number`

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

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### reduceRight

▸ **reduceRight**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>
