//The ever changing Ankara Designs
//You are  fashion desoigner known for your unique ans vibrant Ankara designs. Recently, you've discovered
//that some of your fabric patterns change their designs based on the temperature and mood of the wearer.
// You want to create a software that can predict the changes given the temperature and mood data. 
//Think about the classes you will need to model this changin Ankara and how to predict the changes.
class Ankara{
    constructor(designPattern){
        this.designPattern = designPattern;
    }
    predictDesignChange(temperature,mood){
        if(temperature<=20.0 && mood=="sad"){
            return (this.designPattern +" pattern changes to dull and wavy")
        }
        else if(temperature>20.0 && mood == "happy"){
            return (this.designPattern + " pattern changes to bright and polka dotted")
        }
        else{
            return (this.designPattern + " pattern experiences no design pattern change")
        }
    }
}
const one = new Ankara("straight")
const two = new Ankara("Floral")
console.log(one.predictDesignChange(18.5, "sad"));
console.log(two.predictDesignChange(25.0,"happy"));

