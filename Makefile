unit-test:

	@./node_modules/.bin/mocha \
	-w \
	insertion-sort.js \
	test/unit/insertion-sort.suite.js

test:

	make unit-test

.PHONY: test
