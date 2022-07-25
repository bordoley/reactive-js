[Reactive-JS](../README.md) / rx/ReactiveSinkLike

# Module: rx/ReactiveSinkLike

## Table of contents

### Functions

- [notify](rx_ReactiveSinkLike.md#notify)
- [notifySink](rx_ReactiveSinkLike.md#notifysink)

## Functions

### notify

▸ **notify**<`T`, `TSink`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/rx.ReactiveSinkLike.md)<`T`, `TSink`\> = [`ReactiveSinkLike`](../interfaces/rx.ReactiveSinkLike.md)<`T`\> |

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
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/rx.ReactiveSinkLike.md)<`T`, `TSink`\> = [`ReactiveSinkLike`](../interfaces/rx.ReactiveSinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
