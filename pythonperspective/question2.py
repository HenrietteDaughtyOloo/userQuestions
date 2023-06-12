#The ever changing Ankara Designs
#You are  fashion desoigner known for your unique ans vibrant Ankara designs. Recently, you've discovered
#that some of your fabric patterns change their designs based on the temperature and mood of the wearer.
# You want to create a software that can predict the changes given the temperature and mood data. 
#Think about the classes you will need to model this changin Ankara and how to predict the changes.
class Migration:
    def __init__(self,animals,weather_patterns,river_levels,predator_location):
        self.animals = animals
        self.weather_patterns = weather_patterns
        self.river_levels = river_levels
        self.predator_location = predator_location
    def predictMovement(self):
        if self.weather_patterns=="wet" and self.river_levels > 5:
            return f"{self.animals} do not migrate"
        else:
            return f"{self.animals} can migrate"
    def predict_location (self,current_location):
        if current_location=="Mara" and self.predator_location == "Near":
            return f"{self.animals} migrate to Serengeti"
        elif current_location =="Serengeti" and self.predator_location =="Near":
            return f"{self.animals} migrate to Mara"
        else:
            return f"{self.animals} can stay in {current_location}"
