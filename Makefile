all:
	gulp

publish:
	rsync -rulP ./dest/* oskar@ehnstrom.fi:~/sites/ehnstrom.fi/www/

clean:
	rm -r tmp/
