[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / AbstractDelegatingSink

# Class: AbstractDelegatingSink<TA, TB\>

## Type parameters

Name |
------ |
`TA` |
`TB` |

## Hierarchy

* **AbstractDelegatingSink**

## Implements

* [*SinkLike*](../interfaces/runnable.sinklike.md)<TA\>

## Index

### Constructors

* [constructor](runnable.abstractdelegatingsink.md#constructor)

### Properties

* [delegate](runnable.abstractdelegatingsink.md#delegate)

### Accessors

* [isDone](runnable.abstractdelegatingsink.md#isdone)

### Methods

* [done](runnable.abstractdelegatingsink.md#done)
* [notify](runnable.abstractdelegatingsink.md#notify)

## Constructors

### constructor

\+ **new AbstractDelegatingSink**\<TA, TB>(`delegate`: [*SinkLike*](../interfaces/runnable.sinklike.md)<TB\>): [*AbstractDelegatingSink*](runnable.abstractdelegatingsink.md)<TA, TB\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`delegate` | [*SinkLike*](../interfaces/runnable.sinklike.md)<TB\> |

**Returns:** [*AbstractDelegatingSink*](runnable.abstractdelegatingsink.md)<TA, TB\>

## Properties

### delegate

• `Readonly` **delegate**: [*SinkLike*](../interfaces/runnable.sinklike.md)<TB\>

## Accessors

### isDone

• **isDone**(): *boolean*

**Returns:** *boolean*

## Methods

### done

▸ **done**(): *void*

Implementation of: [SinkLike](../interfaces/runnable.sinklike.md)

**Returns:** *void*

___

### notify

▸ `Abstract`**notify**(`next`: TA): *void*

#### Parameters:

Name | Type |
------ | ------ |
`next` | TA |

**Returns:** *void*
