import os
import sys

while True:
 print("")
 print(" ФИШ - НОВОЕ ПОКОЛЕНИЕ")
 print("-----------------------")
 print("[1]ФишГолосование")
 print("[2]фишГолоса")
 print("[3]просмотреть логин")
 print("[4]Просмотреть пароль")
 print("[5]Об авторе")
 print("-----------------------")
 print("")
 inp = int(input("\x1b[33mВыберите пункт: "))
 print("\x1b[37m")
 if inp == 1:
     print("")
     print("\x1b[33mЛокальный сервер был открыт на : http://localhost:8080/run.html")
     print("\x1b[37m")
     os.system("php -S localhost:8080")
 elif inp == 2:
     print("")
     print("\x1b[33mЛокальный сервер был открыт на : http:localhost:8000/run2.html")
     print("\x1b[37m")
     os.system("php -S localhost:8000")
 elif inp == 3:
     f = open("names.txt")
     a = f.read()
     print("")
     print("\x1b[33mLogin: " + a)
     print("\x1b[37m")
 elif inp == 4:
     f = open("password.txt")
     g = f.read()
     print("")
     print("\x1b[33mPassword: " + g)
     print("\x1b[37m")
 elif inp == 5:
     print("")
     print("Создатель : Артем Бородин.")
     print("Вк создателя : https://vk.com/hutcker228")
     print("")
 else:
    print("\x1b[33mПункт не валиден")
    print("\x1b[37m")