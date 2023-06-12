#The ever changing Ankara Designs
#You are  fashion desoigner known for your unique ans vibrant Ankara designs. Recently, you've discovered
#that some of your fabric patterns change their designs based on the temperature and mood of the wearer.
# You want to create a software that can predict the changes given the temperature and mood data. 
#Think about the classes you will need to model this changing Ankara and how to predict the changes.
class Ankara:
    def __init__(self, design_pattern):
        self.design_pattern = design_pattern
    def designChange(self, mood, temperature):
        if mood == "sad" and temperature<=20.0:
            return f"{self.design_pattern} design changes to dull and wavvy"
        elif mood =="happy" and temperature >20:
            return f"{self.design_pattern} design will change to bright and straight"
        else:
            return f"{self.design_pattern} design does not change pattern"
one = Ankara("dotted")
one.designChange("sad",20.0)