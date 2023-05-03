[Reactive-JS](../README.md) / containers

# Module: containers

## Table of contents

### Namespaces

- [Container](containers.Container.md)
- [KeyedContainer](containers.KeyedContainer.md)

### Container Interfaces

- [AsyncIterableContainer](../interfaces/containers.AsyncIterableContainer.md)
- [Container](../interfaces/containers.Container-1.md)
- [EnumeratorContainer](../interfaces/containers.EnumeratorContainer.md)
- [IterableContainer](../interfaces/containers.IterableContainer.md)
- [KeyedContainer](../interfaces/containers.KeyedContainer-1.md)
- [PromiseContainer](../interfaces/containers.PromiseContainer.md)
- [ReadonlyArrayContainer](../interfaces/containers.ReadonlyArrayContainer.md)
- [ReadonlyMapContainer](../interfaces/containers.ReadonlyMapContainer.md)
- [ReadonlyObjectMapContainer](../interfaces/containers.ReadonlyObjectMapContainer.md)

### Other Interfaces

- [EnumeratorLike](../interfaces/containers.EnumeratorLike.md)

### Type Aliases

- [ContainerOf](containers.md#containerof)
- [ContainerOperator](containers.md#containeroperator)
- [KeyOf](containers.md#keyof)
- [KeyedContainerOf](containers.md#keyedcontainerof)
- [KeyedContainerOperator](containers.md#keyedcontaineroperator)
- [ReadonlyObjectMapLike](containers.md#readonlyobjectmaplike)

## Type Aliases

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container-1.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container-1.md) |
| `TA` | `TA` |
| `TB` | `TB` |

___

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof `KeyedContainer_TKey`]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/containers.KeyedContainer-1.md) |

___

### KeyedContainerOf

Ƭ **KeyedContainerOf**<`C`, `TKey`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T` ; `[___KeyedContainer_TKey]`: `TKey`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

Utility type for higher order programming with keyed-containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container-1.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### KeyedContainerOperator

Ƭ **KeyedContainerOperator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`KeyedContainerOf`](containers.md#keyedcontainerof)<`C`, `TKey`, `TA`\>, [`KeyedContainerOf`](containers.md#keyedcontainerof)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/containers.KeyedContainer-1.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |

___

### ReadonlyObjectMapLike

Ƭ **ReadonlyObjectMapLike**<`TKey`, `T`\>: { readonly [P in TKey]?: T }

**`No Inherit Doc`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `string` |
| `T` | `unknown` |
