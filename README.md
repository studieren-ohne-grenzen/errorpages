# Errorpages
A collection of errorpages

# Context
This project is used at studieren-ohne-grenzen.org for further information about the authors see the license.

# Usage
Simply add a piece of nginx config to your service config:
```
error_page 404 /error/404.html;
error_page 500 501 502 503 504 /error/50x.html;

location ^~ /error/ {
  root /var/www/default;
}
```
Note that you need to clone this repo into `/var/www/default` to work properly. Also, these error pages will only be effective if the proxy doesn't handle them. Hence, Some 502 will be cought by nginx but maybe not 404.
