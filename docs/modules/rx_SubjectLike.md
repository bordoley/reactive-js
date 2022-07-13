[Reactive-JS](../README.md) / rx/SubjectLike

# Module: rx/SubjectLike

## Table of contents

### Interfaces

- [SubjectLike](../interfaces/rx_SubjectLike.SubjectLike.md)

### Variables

- [SubjectLike\_publish](rx_SubjectLike.md#subjectlike_publish)

### Functions

- [create](rx_SubjectLike.md#create)
- [publish](rx_SubjectLike.md#publish)
- [publishTo](rx_SubjectLike.md#publishto)

## Variables

### SubjectLike\_publish

• `Const` **SubjectLike\_publish**: unique `symbol`

## Functions

### create

▸ **create**<`T`\>(`options?`): [`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\>

___

### publish

▸ **publish**<`T`\>(`v`): [`Function1`](util_functions.md#function1)<[`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\>, [`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](util_functions.md#function1)<[`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\>, [`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\>\>

___

### publishTo

▸ **publishTo**<`T`\>(`subject`): [`SideEffect1`](util_functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | [`SubjectLike`](../interfaces/rx_SubjectLike.SubjectLike.md)<`T`\> |

#### Returns

[`SideEffect1`](util_functions.md#sideeffect1)<`T`\>
