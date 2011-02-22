function User() {
  this.parseGenome = function(lines) {
    
    this.snps = {};
    this.rsids = [];
    
    for (var i in lines) {
      if (lines[i].indexOf("#") == 0 || lines[i] == "") continue;
      
      var tokens = lines[i].split("\t");
      this.snps[$.trim(tokens[0])] = {chromosome: $.trim(tokens[1]), genotype: $.trim(tokens[3])};
      this.rsids.push($.trim(tokens[0]));
    }
    
    this.chromosomes = {};
    this.heterozygosity = [0, 0];
    
    for (i in this.rsids) {
      var snp = this.snps[this.rsids[i]];
      if (this.chromosomes[snp.chromosome] == undefined) {
        this.chromosomes[snp.chromosome] = 1; 
      } else {
        this.chromosomes[snp.chromosome]++;
      }
      
      if (snp.genotype.length == 2) {
        if (snp.genotype[0] != snp.genotype[1]) {
          this.heterozygosity[0]++;
        }
        this.heterozygosity[1]++;
      }
    }
    
    // Other attributes.
    this.ethnicity = null;
  }
  this.lookup = function(rsid) {
    var snp = this.snps[rsid];
    if (snp != undefined) return this.snps[rsid].genotype;
  }
}
