
# @reactive-js/parser-combinators

## Index

### Interfaces

* [CharStreamLike](interfaces/charstreamlike.md)
* [ParserLike](interfaces/parserlike.md)

### Type aliases

* [CharCode](README.md#charcode)

### Variables

* [many1Satisfy](README.md#const-many1satisfy)
* [manySatisfy](README.md#const-manysatisfy)
* [pAsterisk](README.md#const-pasterisk)
* [pCloseParen](README.md#const-pcloseparen)
* [pColon](README.md#const-pcolon)
* [pComma](README.md#const-pcomma)
* [pDash](README.md#const-pdash)
* [pDquote](README.md#const-pdquote)
* [pEquals](README.md#const-pequals)
* [pForwardSlash](README.md#const-pforwardslash)
* [pOpenParen](README.md#const-popenparen)
* [pPeriod](README.md#const-pperiod)
* [pSemicolon](README.md#const-psemicolon)
* [pSpace](README.md#const-pspace)

### Functions

* [char](README.md#const-char)
* [compute](README.md#const-compute)
* [concat](README.md#concat)
* [createCharStream](README.md#const-createcharstream)
* [eof](README.md#const-eof)
* [flatMap](README.md#const-flatmap)
* [followedBy](README.md#const-followedby)
* [isParseError](README.md#const-isparseerror)
* [many](README.md#const-many)
* [many1](README.md#const-many1)
* [manyMinMax](README.md#const-manyminmax)
* [manyMinMaxSatisfy](README.md#const-manyminmaxsatisfy)
* [map](README.md#const-map)
* [mapTo](README.md#const-mapto)
* [notFollowedBy](README.md#const-notfollowedby)
* [ofValue](README.md#const-ofvalue)
* [optional](README.md#const-optional)
* [or](README.md#const-or)
* [orDefault](README.md#const-ordefault)
* [parseWith](README.md#const-parsewith)
* [regexp](README.md#const-regexp)
* [satisfy](README.md#const-satisfy)
* [sepBy](README.md#const-sepby)
* [sepBy1](README.md#const-sepby1)
* [string](README.md#const-string)
* [throwParseError](README.md#const-throwparseerror)
* [throws](README.md#const-throws)

## Type aliases

###  CharCode

Ƭ **CharCode**: *number*

## Variables

### `Const` many1Satisfy

• **many1Satisfy**: *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹number›, [ParserLike](interfaces/parserlike.md)‹string››* =  manyMinMaxSatisfy(1, Number.MAX_SAFE_INTEGER)

___

### `Const` manySatisfy

• **manySatisfy**: *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹number›, [ParserLike](interfaces/parserlike.md)‹string››* =  manyMinMaxSatisfy(0, Number.MAX_SAFE_INTEGER)

___

### `Const` pAsterisk

• **pAsterisk**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("*")

___

### `Const` pCloseParen

• **pCloseParen**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(")")

___

### `Const` pColon

• **pColon**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(":")

___

### `Const` pComma

• **pComma**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(",")

___

### `Const` pDash

• **pDash**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("-")

___

### `Const` pDquote

• **pDquote**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char('"')

___

### `Const` pEquals

• **pEquals**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("=")

___

### `Const` pForwardSlash

• **pForwardSlash**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("/")

___

### `Const` pOpenParen

• **pOpenParen**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char("(")

___

### `Const` pPeriod

• **pPeriod**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(".")

___

### `Const` pSemicolon

• **pSemicolon**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(";")

___

### `Const` pSpace

• **pSpace**: *[ParserLike](interfaces/parserlike.md)‹number›* =  char(" ")

## Functions

### `Const` char

▸ **char**(`c`: string): *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

___

### `Const` compute

▸ **compute**<**T**>(`f`: function): *[ParserLike](interfaces/parserlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **f**: *function*

▸ (): *T*

**Returns:** *[ParserLike](interfaces/parserlike.md)‹T›*

___

###  concat

▸ **concat**<**TA**, **TB**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB]›*

▸ **concat**<**TA**, **TB**, **TC**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›, `d`: [ParserLike](interfaces/parserlike.md)‹TD›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |
`d` | [ParserLike](interfaces/parserlike.md)‹TD› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›, `d`: [ParserLike](interfaces/parserlike.md)‹TD›, `e`: [ParserLike](interfaces/parserlike.md)‹TE›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |
`d` | [ParserLike](interfaces/parserlike.md)‹TD› |
`e` | [ParserLike](interfaces/parserlike.md)‹TE› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›, `d`: [ParserLike](interfaces/parserlike.md)‹TD›, `e`: [ParserLike](interfaces/parserlike.md)‹TE›, `f`: [ParserLike](interfaces/parserlike.md)‹TF›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |
`d` | [ParserLike](interfaces/parserlike.md)‹TD› |
`e` | [ParserLike](interfaces/parserlike.md)‹TE› |
`f` | [ParserLike](interfaces/parserlike.md)‹TF› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›, `d`: [ParserLike](interfaces/parserlike.md)‹TD›, `e`: [ParserLike](interfaces/parserlike.md)‹TE›, `f`: [ParserLike](interfaces/parserlike.md)‹TF›, `g`: [ParserLike](interfaces/parserlike.md)‹TG›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |
`d` | [ParserLike](interfaces/parserlike.md)‹TD› |
`e` | [ParserLike](interfaces/parserlike.md)‹TE› |
`f` | [ParserLike](interfaces/parserlike.md)‹TF› |
`g` | [ParserLike](interfaces/parserlike.md)‹TG› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›, `d`: [ParserLike](interfaces/parserlike.md)‹TD›, `e`: [ParserLike](interfaces/parserlike.md)‹TE›, `f`: [ParserLike](interfaces/parserlike.md)‹TF›, `g`: [ParserLike](interfaces/parserlike.md)‹TG›, `h`: [ParserLike](interfaces/parserlike.md)‹TH›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |
`d` | [ParserLike](interfaces/parserlike.md)‹TD› |
`e` | [ParserLike](interfaces/parserlike.md)‹TE› |
`f` | [ParserLike](interfaces/parserlike.md)‹TF› |
`g` | [ParserLike](interfaces/parserlike.md)‹TG› |
`h` | [ParserLike](interfaces/parserlike.md)‹TH› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [ParserLike](interfaces/parserlike.md)‹TA›, `b`: [ParserLike](interfaces/parserlike.md)‹TB›, `c`: [ParserLike](interfaces/parserlike.md)‹TC›, `d`: [ParserLike](interfaces/parserlike.md)‹TD›, `e`: [ParserLike](interfaces/parserlike.md)‹TE›, `f`: [ParserLike](interfaces/parserlike.md)‹TF›, `g`: [ParserLike](interfaces/parserlike.md)‹TG›, `h`: [ParserLike](interfaces/parserlike.md)‹TH›, `i`: [ParserLike](interfaces/parserlike.md)‹TI›): *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ParserLike](interfaces/parserlike.md)‹TA› |
`b` | [ParserLike](interfaces/parserlike.md)‹TB› |
`c` | [ParserLike](interfaces/parserlike.md)‹TC› |
`d` | [ParserLike](interfaces/parserlike.md)‹TD› |
`e` | [ParserLike](interfaces/parserlike.md)‹TE› |
`f` | [ParserLike](interfaces/parserlike.md)‹TF› |
`g` | [ParserLike](interfaces/parserlike.md)‹TG› |
`h` | [ParserLike](interfaces/parserlike.md)‹TH› |
`i` | [ParserLike](interfaces/parserlike.md)‹TI› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` createCharStream

▸ **createCharStream**(`input`: string): *[CharStreamLike](interfaces/charstreamlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *[CharStreamLike](interfaces/charstreamlike.md)*

___

### `Const` eof

▸ **eof**(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)): *undefined*

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md) |

**Returns:** *undefined*

___

### `Const` flatMap

▸ **flatMap**<**TA**, **TB**>(`mapper`: function): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *[ParserLike](interfaces/parserlike.md)‹TB›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

___

### `Const` followedBy

▸ **followedBy**(`pnext`: [ParserLike](interfaces/parserlike.md)‹unknown›): *[ParserLike](interfaces/parserlike.md)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`pnext` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹unknown›*

___

### `Const` isParseError

▸ **isParseError**(`e`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`e` | unknown |

**Returns:** *boolean*

___

### `Const` many

▸ **many**<**T**>(): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` many1

▸ **many1**<**T**>(): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` manyMinMax

▸ **manyMinMax**<**T**>(`min`: number, `max`: number): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` manyMinMaxSatisfy

▸ **manyMinMaxSatisfy**(`min`: number, `max`: number): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›, [ParserLike](interfaces/parserlike.md)‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›, [ParserLike](interfaces/parserlike.md)‹string››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹TA›, [ParserLike](interfaces/parserlike.md)‹TB››*

___

### `Const` notFollowedBy

▸ **notFollowedBy**(`pnext`: [ParserLike](interfaces/parserlike.md)‹unknown›): *[ParserLike](interfaces/parserlike.md)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`pnext` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹unknown›*

___

### `Const` ofValue

▸ **ofValue**<**T**>(`value`: T): *[ParserLike](interfaces/parserlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹T›*

___

### `Const` optional

▸ **optional**<**T**>(`parse`: [ParserLike](interfaces/parserlike.md)‹T›): *[ParserLike](interfaces/parserlike.md)‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [ParserLike](interfaces/parserlike.md)‹T› |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹T | undefined›*

___

### `Const` or

▸ **or**<**T**>(`otherParse`: [ParserLike](interfaces/parserlike.md)‹T›): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`otherParse` | [ParserLike](interfaces/parserlike.md)‹T› |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹T››*

___

### `Const` orDefault

▸ **orDefault**<**T**>(`default_`: T): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T | undefined›, [ParserLike](interfaces/parserlike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`default_` | T |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T | undefined›, [ParserLike](interfaces/parserlike.md)‹T››*

___

### `Const` parseWith

▸ **parseWith**<**T**>(`parse`: [ParserLike](interfaces/parserlike.md)‹T›): *OperatorLike‹string, T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [ParserLike](interfaces/parserlike.md)‹T› |

**Returns:** *OperatorLike‹string, T | undefined›*

___

### `Const` regexp

▸ **regexp**(`input`: string, `options`: object): *[ParserLike](interfaces/parserlike.md)‹string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | string | - |
`options` | object |  {} |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹string›*

___

### `Const` satisfy

▸ **satisfy**(`f`: function): *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

**Parameters:**

▪ **f**: *function*

▸ (`char`: [CharCode](README.md#charcode)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`char` | [CharCode](README.md#charcode) |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹[CharCode](README.md#charcode)›*

___

### `Const` sepBy

▸ **sepBy**<**T**>(`separator`: [ParserLike](interfaces/parserlike.md)‹unknown›): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` sepBy1

▸ **sepBy1**<**T**>(`separator`: [ParserLike](interfaces/parserlike.md)‹unknown›): *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [ParserLike](interfaces/parserlike.md)‹unknown› |

**Returns:** *OperatorLike‹[ParserLike](interfaces/parserlike.md)‹T›, [ParserLike](interfaces/parserlike.md)‹keyof T[]››*

___

### `Const` string

▸ **string**(`str`: string): *[ParserLike](interfaces/parserlike.md)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[ParserLike](interfaces/parserlike.md)‹string›*

___

### `Const` throwParseError

▸ **throwParseError**<**T**>(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md) |

**Returns:** *T*

___

### `Const` throws

▸ **throws**<**T**>(`charStream`: [CharStreamLike](interfaces/charstreamlike.md)): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](interfaces/charstreamlike.md) |

**Returns:** *T*
