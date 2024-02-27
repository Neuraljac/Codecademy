// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // Factory function to create Pila aequor organisms
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (newBase === this.dna[randIndex]) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(otherOrganism) {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherOrganism.dna[i]) {
            identicalBases++;
          }
        }
        const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
        console.log(`Specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentage}% DNA in common.`);
      },
      willLikelySurvive() {
        const countCOrG = this.dna.filter(base => base === 'C' || base === 'G').length;
        return (countCOrG / this.dna.length) >= 0.6;
      }
    };
  };
  
  // Create 30 instances of Pila aequor organisms
  const organisms = [];
  let specimenNum = 1;
  while (organisms.length < 30) {
    const newOrganism = pAequorFactory(specimenNum, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      organisms.push(newOrganism);
    }
    specimenNum++;
  }
  
  // Testing the functionalities
  console.log(organisms);
  
  const organism1 = organisms[0];
  const organism2 = organisms[1];
  organism1.mutate();
  console.log(organism1.dna);
  organism1.compareDNA(organism2);
  console.log(organism1.willLikelySurvive());
  