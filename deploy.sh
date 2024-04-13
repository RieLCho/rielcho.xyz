pnpm run build
sudo rm -rf /var/www/jini.dev/*
cp -r dist /var/www/jini.dev
sudo systemctl restart nginx
sudo systemctl status nginx