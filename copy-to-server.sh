d=$(date +%Y%m%d%H%M%S)
echo $d
zip -r public.zip public
scp public.zip busation.ru:"/home/mike/nginx_apps/busationru/"
ssh busation.ru "cd /home/mike/nginx_apps/busationru && unzip public.zip && mv html old_html$d && mv public html && rm public.zip"
rm public.zip
