import random
right_number = random.randint(1,10)
name = input("Hello, what's your name? ")
guess_times = 0
print("Awesome "+name+" Try Guessing a number between 1 and 10")
while guess_times <5:
    guess = int(input())
    guess_times += 1
    if guess < right_number:
        print("Try again,"+str(guess)+" is too low")
    if guess > right_number:
        print(str(guess)+" is too high. Try again")
    if guess == right_number:
        break
        # print("Correct! You finished the game in "+str(guess_times)+" trials")
    
if guess == right_number:
    print("Correct! You finished the game in "+str(guess_times)+" trials")
else:
    print('You did not guess the number, The number was ' + str(right_number))
