class Druming:
    def __init__(self, material, size):
        self.material = material
        self.size = size
    def playSounds(self, tones):
        print(f"This {self.size} {type(self).__name__} drum is made of {self.material} and produces {tones} tone")

class Djembe(Druming):
    def playSounds(self, tones):
        super().playSounds(tones)

class TalkingDruming(Druming):
    def __init__(self, material, size, height):
        super().__init__(material, size)
        self.height = height
    def playSounds(self, tones):
        # super().playSounds(tones)
        print(f"This {self.size} {type(self).__name__} mimics the lines of human {tones} speech and has {self.height}")
        return self.height
class Bougarabous(Druming):
    def playSounds(self, tones):
        super().playSounds(tones)

drum = []
drum.append(Djembe("wood", "Small"))

drum.append(Bougarabous("plastic", "medium"))

theDjembeing = Djembe("wood", "small")
theDjembeing.playSounds("heavy")
theTalkingDrum = TalkingDruming("leather", "huge", "3 feet")
theTalkingDrum.playSounds("crunch crunch")
theBougarabous = Bougarabous("animalskin", "big")
theBougarabous.playSounds("deep")






