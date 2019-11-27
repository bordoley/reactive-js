[@reactive-js/ix-state-container-resource](README.md)

# @reactive-js/ix-state-container-resource

## Index

### Interfaces

* [StateContainerResourceLike](interfaces/statecontainerresourcelike.md)

### Functions

* [create](README.md#const-create)

## Functions

### `Const` create

▸ **create**<**T**>(`initialState`: T, `equals`: function, `scheduler?`: SchedulerLike, `priority?`: undefined | number): *[StateContainerResourceLike](interfaces/statecontainerresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *T*

▪`Default value`  **equals**: *function*=  referenceEquality

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

▪`Optional`  **scheduler**: *SchedulerLike*

▪`Optional`  **priority**: *undefined | number*

**Returns:** *[StateContainerResourceLike](interfaces/statecontainerresourcelike.md)‹T›*
