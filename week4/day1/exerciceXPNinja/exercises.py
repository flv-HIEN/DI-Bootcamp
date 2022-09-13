# Exercice 1
#Nous pouvons appeler python lorsaue nous ne sommes pas dans le repertoire exécutable car
# nous l'avons intégreé dans les variables d'environnenment, c'est à dire dans le path
# et cela nous permet de l'exécuter partout ailleurs
#
#Exercice 2
# New-Alias name:py value:python

#Exercice 3

3 <= 3 < 9 #True
3 == 3 == 3 #True
bool(0) #False
bool(5 == "5") #False
bool(4 == 4) == bool("4" == "4")#True
bool(bool(None))#False

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)# x is True
print("y is", y)# y is False
print("a:", a) #a:5
print("b:", b) #b:10

# Exercice 4

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
nb=len(my_text)
print(nb)

# Exercice 5
sans_a=input("Veuillez inserer la plus longue phrase sans la lette A \n")
if("a" in sans_a):sans_a=input("Veuillez inserer à nouveau \n")
else:print(sans_a)