[Reactive-JS](../README.md) / rx/ReactiveContainerLike

# Module: rx/ReactiveContainerLike

## Table of contents

### Functions

- [sinkInto](rx_ReactiveContainerLike.md#sinkinto)
- [sourceFrom](rx_ReactiveContainerLike.md#sourcefrom)

## Functions

### sinkInto

▸ **sinkInto**<`C`, `TSink`, `T`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md)<`TSink`, `C`\> |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`Function1`](functions.md#function1)<`C`, `C`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `TSink`, `T`\>(`source`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx.ReactiveContainerLike.md)<`TSink`, `C`\> |
| `TSink` | extends [`SinkLike`](../interfaces/util.SinkLike.md)<`T`, `TSink`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
