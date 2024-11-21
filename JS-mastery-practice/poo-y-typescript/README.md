## Si se tiene instalado ts-node y live server 

- Para ver los cambios automáticamente en tu HTML mientras modificas el archivo TypeScript, necesitas ejecutar dos comandos en terminales separadas:

- En una terminal, ejecuta para compilar TypeScript automáticamente:

        tsc -w 03-tipos-de-datos.ts

- En otra terminal, ejecuta para iniciar un servidor local que actualice el navegador:

        live-server

- Ya instalaste los paquetes necesarios (ts-node y live-server). 
- El navegador se actualizará automáticamente cuando guardes cambios en tu archivo .ts.




## Si no se tiene instalado ts-node y live server 


- Para instalar los paquetes necesarios:

- Instalar TypeScript globalmente:

        npm install -g typescript

- Instalar ts-node globalmente:

        npm install -g ts-node

- Instalar live-server globalmente:

        npm install -g live-server

- Luego podrás usar los comandos mencionados anteriormente:
        tsc -w 03-tipos-de-datos.ts  # En una terminal
        live-server                  # En otra terminal