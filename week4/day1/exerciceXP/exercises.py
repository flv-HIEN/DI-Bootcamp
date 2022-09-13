# Exercice 1
print("Hello World\n"*4)

#Exercice 2
(99^3)*8 #768

#Exercice 3
5<3 #False
3==3 #True
3=="3" #False
"3">3 #error:not supported between instances of 'str' and 'int'

#Exercice 4
computer_brand="HP"
print("I have a ",computer_brand," computer")

#Exercice 5

name="Flavie"
age="22"
shoe_size="39"
info="je me nomme "+name+" j'ai "+age+"ans et je porte du "+shoe_size
print(info)

#Exercice 6

a=10
b=5
if(a>b):
    print("Hello World")

# Exercice 7
p=int(input("Veuillez inserer un nombre \n"))
if(p%2==0):print("pair")
else:print("impair")

# Exercice 8
name=input("Veuillez inserer votre nom \n")
mine="Flavie Mahasissa Eléonore"
if(name in mine):print("You are my twin")
else:print("hum...Who are you?!")

#Exercice 9

pouce=int(input("Veuillez inserer votre taille de pouce en cm \n"))
if(pouce>145):print("hum...Too tall enough to ride a roller coaster!")
elif(pouce<145):print("hum...Need to grow some more to ride a roller coaster!")
