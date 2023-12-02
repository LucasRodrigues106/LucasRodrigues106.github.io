#!/bin/bash

#build da aplicação, a ultima parte tem que ser com aspas duplas
ng build --configuration production --base-href "LucasRodrigues106.github.io"

# Adicione todos os arquivos ao git
git add .

# Faça o commit com a mensagem passada como argumento
git commit -m "$1"

# Empurre as alterações para a branch principal
git push origin main
