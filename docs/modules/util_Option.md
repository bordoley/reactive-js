[Reactive-JS](../README.md) / util/Option

# Module: util/Option

## Table of contents

### Variables

- [none](util_Option.md#none)

### Functions

- [isNone](util_Option.md#isnone)
- [isSome](util_Option.md#issome)

## Variables

### none

• `Const` **none**: `undefined`

An alias for undefined.

## Functions

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
| `option` | [`Option`](util.md#option)<`T`\> |

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
| `option` | [`Option`](util.md#option)<`T`\> |

#### Returns

option is T
