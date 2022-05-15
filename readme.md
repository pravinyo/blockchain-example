## Installation fix
```
I had a similar problem. I ran npm i -g truffle and then when I tried to run truffle init I got an error: zsh: command not found: truffle. What solved it for me is to create a local node_modules with truffle installed in it, and then run that copy.

run npm init and make a new npm project
run npm i truffle
run `./node_modules/.bin/truffle init` and it should work!

```