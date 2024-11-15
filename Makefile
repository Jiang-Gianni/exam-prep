test:
	rm -fr docs && gmt -out docs -head header_local.html

prod:
	rm -fr docs && gmt -out docs -head header.html