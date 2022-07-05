[Reactive-JS](../README.md) / reactiveSink

# Module: reactiveSink

## Table of contents

### Interfaces

- [ReactiveSinkLike](../interfaces/reactiveSink.ReactiveSinkLike.md)

### Functions

- [assertState](reactiveSink.md#assertstate)
- [notify](reactiveSink.md#notify)
- [notifySink](reactiveSink.md#notifysink)

## Functions

### assertState

▸ **assertState**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`unknown`\> |

#### Returns

`void`

___

### notify

▸ **notify**<`TSink`, `T`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`TSink`, `T`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/reactiveSink.ReactiveSinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>
