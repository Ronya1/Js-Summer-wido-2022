/*
    *   ->  0 or more instances of left to it.
    +   ->  1 or more instances of left to it.
    .   ->  one instance of anything

    .*  ->  0 or more instances of anything
    .+  ->  1 or more instances of anything

    ^   ->  starting with
    $   ->  ending with

    [abcd]  -> either a or b or c or d for every instance
    |       -> or operator



    ^b*$  (0 or more instances of b)

    abc

    ac

    aaaaaa

    bbbbbbbbb


    . (one instance of anything)

    ac

    a

    bb

    aa

    .*  -> 0 or more instances of anything
    
    ueyurlykfhdkjhfkd

    erueiuklfdsjfkldjflkd

    123456789

    .+  -> 1 or more instances of anything
    
    ueyurlykfhdkjhfkd

    erueiuklfdsjfkldjflkd

    123456789

    a

    [abcd]  -> either a or b or c or d for every instance


    accbbbbddddddddd


    (Hi|Hello) dear


    Hi dear
    Hello Dear
    Hi Hello dear


*/ 