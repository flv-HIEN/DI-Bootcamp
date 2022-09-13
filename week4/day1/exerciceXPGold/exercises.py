print("Hello World\n"*4+"I love python \n"*4)

# Exercice 2

month=int(input("Veuillez inserer un nombre \n"))
if(month>=3 and month<=5):print("Spring")
elif(month>=6 and month<=8):print("Summer")
elif(month>=9 and month<=11):print("Autumn")
elif((month==12 or month<=2) and month!=0):print("Winter")
else:print("error")