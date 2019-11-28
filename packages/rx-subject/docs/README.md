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

▸ **create**<**T**>(`count`: number): *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`count` | number | 0 |

**Returns:** *[SubjectResourceLike](interfaces/subjectresourcelike.md)‹T›*

___

### `Const` share

▸ **share**<**T**>(`scheduler`: SchedulerLike, `replayCount`: number): *ObservableOperator‹T, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`scheduler` | SchedulerLike | - |
`replayCount` | number | 0 |

**Returns:** *ObservableOperator‹T, T›*
