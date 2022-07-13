[Reactive-JS](../README.md) / rx/ReactiveContainerLike

# Module: rx/ReactiveContainerLike

## Table of contents

### Interfaces

- [ReactiveContainerLike](../interfaces/rx_ReactiveContainerLike.ReactiveContainerLike.md)

### Type Aliases

- [CreateReactiveContainer](rx_ReactiveContainerLike.md#createreactivecontainer)
- [Never](rx_ReactiveContainerLike.md#never)

### Variables

- [ReactiveContainerLike\_sinkInto](rx_ReactiveContainerLike.md#reactivecontainerlike_sinkinto)

### Functions

- [sinkInto](rx_ReactiveContainerLike.md#sinkinto)
- [sourceFrom](rx_ReactiveContainerLike.md#sourcefrom)

## Type Aliases

### CreateReactiveContainer

Ƭ **CreateReactiveContainer**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `create`: <T\>(`onSink`: (`sink`: [`StatefulContainerStateOf`](containers_StatefulContainerLike.md#statefulcontainerstateof)<`C`, `T`\>) => `void`) => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx_ReactiveContainerLike.ReactiveContainerLike.md) |

___

### Never

Ƭ **Never**<`C`\>: [`Container`](containers_ContainerLike.md#container)<`C`\> & { `never`: <T\>() => [`ContainerOf`](containers_ContainerLike.md#containerof)<`C`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx_ReactiveContainerLike.ReactiveContainerLike.md) |

## Variables

### ReactiveContainerLike\_sinkInto

• `Const` **ReactiveContainerLike\_sinkInto**: unique `symbol`

## Functions

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](util_functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx_ReactiveContainerLike.ReactiveContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`Function1`](util_functions.md#function1)<`C`, `C`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `T`, `TSink`\>(`source`): [`Function1`](util_functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ReactiveContainerLike`](../interfaces/rx_ReactiveContainerLike.ReactiveContainerLike.md)<`unknown`, `C`\> |
| `T` | `T` |
| `TSink` | extends [`ReactiveSinkLike`](../interfaces/rx_ReactiveSinkLike.ReactiveSinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](util_functions.md#function1)<`TSink`, `TSink`\>
