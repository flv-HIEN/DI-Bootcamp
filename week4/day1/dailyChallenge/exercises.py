sentence=input("Entrez une chaine de 10 charactère \n")
if(len(sentence)<10):print("string not long enough")
elif(len(sentence)>10):print("string too long")
else:print("Correct")

print(sentence[1])
print(sentence[len(sentence)-1])
var=""
for i in sentence:
    var=var+i
    print(var)

import random
#random.shuffle(sentence) displays TypeError: 'str' object does not support item assignment
sentence=''.join(random.sample(sentence, len(sentence)))
print(sentence)