[@reactive-js/rx](../README.md) › [AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)

# Class: AbstractDelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriber‹TA›

  ↳ **AbstractDelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](abstractdelegatingsubscriber.md#constructor)

### Properties

* [delegate](abstractdelegatingsubscriber.md#delegate)

### Methods

* [completeUnsafe](abstractdelegatingsubscriber.md#abstract-completeunsafe)
* [nextUnsafe](abstractdelegatingsubscriber.md#abstract-nextunsafe)

## Constructors

###  constructor

\+ **new AbstractDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[ObserverLike](../interfaces/observerlike.md)‹TB›*

## Methods

### `Abstract` completeUnsafe

▸ **completeUnsafe**(`error?`: [ErrorLike](../interfaces/errorlike.md)): *void*

Override to handle complete notification. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [ErrorLike](../interfaces/errorlike.md) |   |

**Returns:** *void*

___

### `Abstract` nextUnsafe

▸ **nextUnsafe**(`data`: TA): *void*

Overried to handle incoming next notifications. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | TA |   |

**Returns:** *void*
