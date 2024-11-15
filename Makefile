assets:
	cp main.js docs/main.js && cp style.css docs/style.css

test:
	rm -fr docs && gmt -out docs -head header_local.html && make assets

prod:
	rm -fr docs && gmt -out docs -head header.html && make assets