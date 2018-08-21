install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
start1:
	npx babel-node -- src/bin/brain-even.js
start2:
	npx babel-node -- src/bin/brain-calc.js
start3:
	npx babel-node -- src/bin/brain-gcd.js
start4:
	npx babel-node -- src/bin/brain-balance.js
publish:
	npm publish
lint:
	npx eslint .
