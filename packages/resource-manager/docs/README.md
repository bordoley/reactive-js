[@reactive-js/resource-manager - v0.0.35](README.md)

# @reactive-js/resource-manager - v0.0.35

## Index

### Interfaces

* [ResourceManagerLike](interfaces/resourcemanagerlike.md)

### Functions

* [createResourceManager](README.md#const-createresourcemanager)

## Functions

### `Const` createResourceManager

▸ **createResourceManager**<**TResource**>(`createResource`: function, `scheduler`: SchedulerLike, `options`: object): *[ResourceManagerLike](interfaces/resourcemanagerlike.md)‹TResource›*

**Type parameters:**

▪ **TResource**: *DisposableLike*

**Parameters:**

▪ **createResource**: *function*

▸ (`key`: string): *TResource*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

▪ **scheduler**: *SchedulerLike*

▪`Default value`  **options**: *object*=  {}

**Returns:** *[ResourceManagerLike](interfaces/resourcemanagerlike.md)‹TResource›*
