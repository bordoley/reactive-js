[Reactive-JS](../README.md) / rx/SubjectLike

# Module: rx/SubjectLike

## Table of contents

### Functions

- [publish](rx_SubjectLike.md#publish)
- [publishTo](rx_SubjectLike.md#publishto)

## Functions

### publish

▸ **publish**<`T`\>(`v`): [`Function1`](functions.md#function1)<[`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>, [`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>, [`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>\>

___

### publishTo

▸ **publishTo**<`T`\>(`subject`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | [`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
