class LegendaryDrum {
    constructor(material, size) {
      this.material = material;
      this.size = size;
    }
    playSound(tone) {
    //   console.log(`The drum produces ${tone} sound`);
      console.log(`The ${this.constructor.name} drum is made of ${this.material} and is of size ${this.size}`);
    }
  }
  class Djembe extends LegendaryDrum {
    // constructor(material,size)
    // super(material,size)
    playSound(tone) {
      super.playSound(tone);
      console.log(`The Djembe drum produces ${tone} sound`);
    }
  }
  class TalkingDrum extends LegendaryDrum {
    playSound(tone) {
      super.playSound(tone);
      console.log(`The Talking Drum produces ${tone} sound`);
    }
  }
  class Bouragarabou extends LegendaryDrum {
    playSound(tone) {
      super.playSound(tone);
      console.log(`The Bouragarabou drum produces ${tone} sound`);
    }
  }
  const myTalkingDrum = new TalkingDrum("wood", "large");
  myTalkingDrum.playSound("deep");
  const myDjembe  = new Djembe ("leather", "large");
  myDjembe.playSound("dududu");
  const myBouragarabou = new Bouragarabou("plastic", "small");
  myBouragarabou.playSound("low-high");
  
  