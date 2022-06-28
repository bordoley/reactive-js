[Reactive-JS](../README.md) / option

# Module: option

## Table of contents

### Type Aliases

- [Option](option.md#option)

### Variables

- [none](option.md#none)

### Functions

- [getOrDefault](option.md#getordefault)
- [isNone](option.md#isnone)
- [isSome](option.md#issome)

## Type Aliases

### Option

Ƭ **Option**<`T`\>: `T` \| `undefined`

Represents an unboxed value of type T or undefined.

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

### none

• `Const` **none**: `undefined`

An alias for undefined.

## Functions

### getOrDefault

▸ **getOrDefault**<`T`\>(`v`): (`option`: [`Option`](option.md#option)<`T`\>) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`fn`

▸ (`option`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Option`](option.md#option)<`T`\> |

##### Returns

`T`

___

### isNone

▸ **isNone**<`T`\>(`option`): option is undefined

Returns true if `option` is `none`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Option`](option.md#option)<`T`\> |

#### Returns

option is undefined

___

### isSome

▸ **isSome**<`T`\>(`option`): option is T

Returns true if `option` is not `none`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Option`](option.md#option)<`T`\> |

#### Returns

option is T
