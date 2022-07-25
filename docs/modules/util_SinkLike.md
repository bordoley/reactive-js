[Reactive-JS](../README.md) / util/SinkLike

# Module: util/SinkLike

## Table of contents

### Functions

- [notify](util_SinkLike.md#notify)
- [notifySink](util_SinkLike.md#notifysink)

## Functions

### notify

▸ **notify**<`T`, `TSink`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`T`, `TSink`\> = [`SinkLike`](../interfaces/util.SinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`T`, `TSink`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`T`, `TSink`\> = [`SinkLike`](../interfaces/util.SinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
