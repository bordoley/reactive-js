[Reactive-JS](../README.md) / rx/ReactiveContainerLike

# Module: rx/ReactiveContainerLike

## Table of contents

### Functions

- [sinkInto](rx_ReactiveContainerLike.md#sinkinto)
- [sourceFrom](rx_ReactiveContainerLike.md#sourcefrom)

## Functions

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`Function1`](functions.md#function1)<`C`, `C`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `T`, `TSink`\>(`source`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
