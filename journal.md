PHASE 1 - I used <div> for the two walls and <article> for each poem. Inside each, <h3> marks the title and <p> the poem text. An id is the handle Javascript uses to grab one exact element. getElementById works because that value belongs to a single article.

PHASE 2 - getElementById returned a single element and that was the one "poem-moon". querySelectorAll returned a NodeList of two. It is holding both west wall poems.

PHASE 3 - I did not write a line removing the poem from west wall. Called appendChild on the east wall. Its one node that changed position in the tree. Since it can only have one parent it was detached and reattached.

PHASE 4 - createElement makes an element bit it only exists in memory as a JS object without a parent.  Could still set its text, class, and color while its detached from the page. That became visible when appenChild is called.