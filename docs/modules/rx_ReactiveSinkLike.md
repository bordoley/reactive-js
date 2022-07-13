[Reactive-JS](../README.md) / rx/ReactiveSinkLike

# Module: rx/ReactiveSinkLike

## Table of contents

### Interfaces

- [ReactiveSinkLike](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)

### Variables

- [ReactiveSinkLike\_notify](rx_ReactiveSinkLike.md#reactivesinklike_notify)

### Functions

- [notify](rx_ReactiveSinkLike.md#notify)
- [notifySink](rx_ReactiveSinkLike.md#notifysink)

## Variables

### ReactiveSinkLike\_notify

• `Const` **ReactiveSinkLike\_notify**: unique `symbol`

## Functions

### notify

▸ **notify**<`T`, `TSink`\>(`v`): [`Function1`](util_functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)<`T`, `TSink`\> = [`ReactiveSinkLike`](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](util_functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`T`, `TSink`\>(`sink`): [`SideEffect1`](util_functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)<`T`, `TSink`\> = [`ReactiveSinkLike`](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](util_functions.md#sideeffect1)<`T`\>
