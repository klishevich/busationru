d=$(date +%Y%m%d%H%M%S)
echo $d
# zip -r public.zip public // do manually
scp public.zip root@busation.ru:"/root/apps/busation.ru/"
ssh root@busation.ru "cd /root/apps/busation.ru && unzip public.zip && mv html old_html$d && mv public html && rm public.zip"
rm public.zip
