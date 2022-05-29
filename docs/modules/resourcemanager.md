[Reactive-JS](../README.md) / resourceManager

# Module: resourceManager

## Index

### Interfaces

* [ResourceManagerLike](../interfaces/resourcemanager.resourcemanagerlike.md)

### Functions

* [createResourceManager](resourcemanager.md#createresourcemanager)

## Functions

### createResourceManager

▸ `Const`**createResourceManager**<TResource\>(`createResource`: [*Function1*](functions.md#function1)<*string*, TResource\>, `scheduler`: [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md), `options?`: { `maxIdleTime?`: *undefined* \| *number* ; `maxResourcesPerKey?`: *undefined* \| *number* ; `maxTotalResources?`: *undefined* \| *number*  }): [*ResourceManagerLike*](../interfaces/resourcemanager.resourcemanagerlike.md)<TResource\>

#### Type parameters:

Name | Type |
------ | ------ |
`TResource` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

#### Parameters:

Name | Type |
------ | ------ |
`createResource` | [*Function1*](functions.md#function1)<*string*, TResource\> |
`scheduler` | [*SchedulerLike*](../interfaces/scheduler.schedulerlike.md) |
`options?` | { `maxIdleTime?`: *undefined* \| *number* ; `maxResourcesPerKey?`: *undefined* \| *number* ; `maxTotalResources?`: *undefined* \| *number*  } |

**Returns:** [*ResourceManagerLike*](../interfaces/resourcemanager.resourcemanagerlike.md)<TResource\>
