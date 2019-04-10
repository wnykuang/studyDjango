###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# Try to figure out what this code is doing and how it might be useful to you
# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
import random


def getGuess():
    return input("Guess it")

def getAns():
    nums = [str(i) for i in range(1, 10)]
    random.shuffle(nums)
    return nums[:3]    

def getHints(guess, ans):
    print(ans)
    guess = list(guess)
    if ans == guess:
        return 0
    for g, a in zip(guess, ans):
        if a == g:
            print("match")
        elif a in guess:
            print("near") 
        else:
            print("wrong")
    return 1 

def main(hints):
    ans = getAns()
    while hints != 0:
        guess = getGuess()
        hints = getHints(guess, ans) 
    print("Done!")
    return
if __name__ == '__main__':
    main(1)
