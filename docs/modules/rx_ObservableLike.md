[Reactive-JS](../README.md) / rx/ObservableLike

# Module: rx/ObservableLike

## Table of contents

### Variables

- [TContainerOf](rx_ObservableLike.md#tcontainerof)
- [liftT](rx_ObservableLike.md#liftt)

### Functions

- [getObservableType](rx_ObservableLike.md#getobservabletype)
- [map](rx_ObservableLike.md#map)

## Variables

### TContainerOf

• `Const` **TContainerOf**: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>

___

### liftT

• `Const` **liftT**: `Lift`<[`ObservableLike`](../interfaces/rx.ObservableLike.md), `TReactive`\>

## Functions

### getObservableType

▸ **getObservableType**(`obs`): ``0`` \| ``2`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\> |

#### Returns

``0`` \| ``2`` \| ``1``

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TA`, `TB`\>
