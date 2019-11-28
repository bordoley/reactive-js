[@reactive-js/rx-subject](README.md)

# @reactive-js/rx-subject

## Index

### Interfaces

* [SubjectLike](interfaces/subjectlike.md)
* [SubjectResourceLike](interfaces/subjectresourcelike.md)

### Functions

* [create](README.md#const-create)
* [share](README.md#const-share)

## Functions

### `Const` create

▸ **create**<**T**>(`replayCount`: number): *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`replayCount` | number | 0 |

**Returns:** *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount?`: undefined | number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |
`replayCount?` | undefined &#124; number |

**Returns:** *ObservableOperator‹T, T›*
