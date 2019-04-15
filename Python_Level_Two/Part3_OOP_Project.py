#####################################
### WELCOME TO YOUR OOP PROJECT #####
#####################################

# For this project you will be using OOP to create a card game. This card game will
# be the card game "War" for two players, you an the computer. If you don't know
# how to play "War" here are the basic rules:
#
# The deck is divided evenly, with each player receiving 26 cards, dealt one at a time,
# face down. Anyone may deal first. Each player places his stack of cards face down,
# in front of him.
#
# The Play:
#
# Each player turns up a card at the same time and the player with the higher card
# takes both cards and puts them, face down, on the bottom of his stack.
#
# If the cards are the same rank, it is War. Each player turns up three cards face
# down and one card face up. The player with the higher cards takes both piles
# (six cards). If the turned-up cards are again the same rank, each player places
# another card face down and turns another card face up. The player with the
# higher card takes all 10 cards, and so on.
#
# There are some more variations on this but we will keep it simple for now.
# Ignore "double" wars
#
# https://en.wikipedia.org/wiki/War_(card_game)

from random import shuffle

# Two useful variables for creating Cards.
SUITE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck:
    """
    This is the Deck Class. This object will create a deck of cards to initiate
    play. You can then use this Deck list of cards to split in half and give to
    the players. It will use SUITE and RANKS to create the deck. It should also
    have a method for splitting/cutting the deck in half and Shuffling the deck.
    """
    def __init__(self):
        self.cards = []
        for suite in SUITE:
            for rank in RANKS:
                self.cards.append((suite, rank))
        self.playersCards = None
        self.compsCards = None

    def shuffle(self):
        shuffle(self.cards)

    def split(self):
        self.shuffle()

        self.playersCards = []
        self.compsCards = []

        for idx, card in self.cards:
            #range of idx is from 0 to 51
            if idx < 26:
                self.playersCards.append(card)
            else:
                self.compsCards.append(card)

class Hand:
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''
    def __init__(self, name):
        self.cards = cards

    def __str__(self):
        return "Contains {} cards.".format(len(self.cards))

    def add(self, commingCards):
        self.cards.extend(commingCards)
    
    def removecard(self):
        return self.cards.pop()

class Player:
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Payer can then play cards and check if they still have cards.
    """
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand 
    
    def palyCard(self):
        drawCard = self.hand.removecard()
        print("{} has placed: {}\n".format(self.name, drawCard))
        return drawCard
    
    def removeWarCards(self):
        warCards = []
        if len(self.hand.cards) < 3:
            return warCards
        else:
            for _ in range(3):
                warCards.append(self.hand.cards.pop())
            return warCards

    def isEnoughCards(self):
        return len(self.hand.cards) > 0

######################
#### GAME PLAY #######
######################
print("Welcome to War, let's begin...")

# Use the 3 classes along with some logic to play a game of war!
