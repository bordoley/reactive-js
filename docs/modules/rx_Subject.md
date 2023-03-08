[Reactive-JS](../README.md) / rx/Subject

# Module: rx/Subject

## Table of contents

### Functions

- [create](rx_Subject.md#create)
- [publishTo](rx_Subject.md#publishto)

## Functions

### create

▸ **create**<`T`\>(`options?`): [`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>

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

[`SubjectLike`](../interfaces/rx.SubjectLike.md)<`T`\>

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
