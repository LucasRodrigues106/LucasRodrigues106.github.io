#!/bin/bash

# Adicione todos os arquivos ao git
git add .

# Faça o commit com a mensagem passada como argumento
git commit -m "$1"

# Empurre as alterações para a branch principal
git push origin main
