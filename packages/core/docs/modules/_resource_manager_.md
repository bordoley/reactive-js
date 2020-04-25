[@reactive-js/core - v0.0.37](../README.md) › ["resource-manager"](_resource_manager_.md)

# Module: "resource-manager"

## Index

### Interfaces

* [ResourceManagerLike](../interfaces/_resource_manager_.resourcemanagerlike.md)

### Functions

* [createResourceManager](_resource_manager_.md#const-createresourcemanager)

## Functions

### `Const` createResourceManager

▸ **createResourceManager**<**TResource**>(`createResource`: function, `scheduler`: [SchedulerLike](../interfaces/_scheduler_.schedulerlike.md), `options`: object): *[ResourceManagerLike](../interfaces/_resource_manager_.resourcemanagerlike.md)‹TResource›*

**Type parameters:**

▪ **TResource**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

▪ **createResource**: *function*

▸ (`key`: string): *TResource*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

▪ **scheduler**: *[SchedulerLike](../interfaces/_scheduler_.schedulerlike.md)*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`maxIdleTime?` | number |
`maxResourcesPerKey?` | number |
`maxTotalResources?` | number |

**Returns:** *[ResourceManagerLike](../interfaces/_resource_manager_.resourcemanagerlike.md)‹TResource›*
