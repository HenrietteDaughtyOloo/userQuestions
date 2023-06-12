//The Great Migration
//Every year millions of wildebeest, zebras, and other animals participate in the Great Migration along
//trhe Serengeti Mara ecosysytem. As a coinservationist, you want to develop a software system that models
//this migraytion predicting the movement of the herds based on the weather patterns, riverlevels, and predator
//locations. Consider what classes you'll need to create to to represent the animals, environment, and
//various factors that influence the migration. 
class Migration{
    constructor(animals, weatherPatterns, riverLevels, predatorLocation){
    this.animals = animals
    this.weatherPatterns = weatherPatterns
    this.riverLevels = riverLevels
    this.predatorLocation = predatorLocation
    }
    predictMovement(){
        if (this.riverLevels >= 5 && this.weatherPatterns =="Wet"){
            console.log(this.animals + "will not migrate to Serengeti")
        }
        else if(this.riverLevels <5 && this.weatherPatterns =="Dry"){
            console.log(this.animals+"can cross")
        }
        else{
            console.log(this.animals+" can cross");
        }
    }
    location(currentLocation){
        if (currentLocation =="Mara"&& this.predatorLocation =="Near"){
            console.log(this.animals +" migrate to Serengeti")
        }
        else if (currentLocation=="Serengeti"&& this.predatorLocation == "Near"){
        console.log(this.animals + " Migrates to Mara")
        }
        else{
            console.log(this.animals + " can stay in "+{currentLocation})
        }
    }
}
one =new Migration(["Elephant", "Gazelle",],"Dry", 5,"Near")
one.predictMovement()
one.location("Mara")