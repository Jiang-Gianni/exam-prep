test:
	rm -fr out && gmt -out out -head header_local.html

prod:
	rm -fr out && gmt -out out -head header.html