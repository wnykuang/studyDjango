class Animal():
    def __init__(self):
        return 
    
    def getId(self):
        print("An animal, nothing more.")

    def bark(self):
        print('not sure how\n')

class Dog(Animal):

    def __init__(self):
        return

    def __str__(self):
        return "Dog dog"
    
    def getId(self):
        print("I am a dog.")

    def bark(self):
        print("Wang Wang!")

danie = Dog()
danie.bark()
print(danie)