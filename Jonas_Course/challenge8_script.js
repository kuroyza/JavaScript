/**
 * @author Kuroyza
 * @email kuroyza@gmail.com
 * @insta instagram.com/kuroyza
 * @desc Challenge 8 of Jonas JavaScript Course 
 */

/* CHALLENGE
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

/*
   --> | STEEPS |
   NOTE :
         -> 3 Parks
         -> 4 Streets
         -> A Park Holds: name, build year, number of Trees, area (Float)
         -> A Street Holds: name, build year, area (Float), size Classification (String)
         -> Both Hold: name, build year
         -> Tree density: number of trees / park area
         -> Average age: sum of all ages/number of parks
   TODO :
         - Create Place Class
         - Parks class & Streets class  Extends Place class
         - Fill Data (Random)
         - Calculate Parks Data: 
                                 + Age
                                 + Sum Age
                                 + Average Age
                                 + Sum Tree
                                 + Tree density
         - Display Parks Data
         - Calculate Streets Data: 
                                 + Streets Total Length
                                 + Streets Average Length
                                 + Size classification (Opptional)
         - Display Streets Data
*/


class TownElements{
   constructor(name, bYear, area){
      this.name = name;
      this.bYear = bYear;
      this.area = area;
   }
}

class Park extends TownElements{
   constructor(name, bYear, treesNbr, area){
      super(name, bYear, area);
      this.treesNbr = treesNbr;
   }

   calcAge(){
      var date = new Date().getFullYear();
      return date - this.bYear;
   }

   calcDensity(){
      const density = this.treesNbr / this.area;
      console.log(`${this.name} Park has a tree density of ${density} trees per Km².`);
   }

   hasMore(){
      if(this.treesNbr > 1000)
         console.log(`${this.name} Park has more than 1000 trees.`);
   }
}

class Street extends TownElements{
   constructor(name, bYear, area, size){
      super(name, bYear, area);
      this.size = size-1;
      this.types = ['Small','Normal','Big','Huge'];
   }

   calcType(){
      console.log(`${this.name}, built in ${this.bYear} is a ${
         this.types[this.size]} street.`);
   }
}

function displayParksData(parks){
   console.log('▬▬▬▐ PARK REPORT ▐▬▬▬');
   let agesSum = 0;

   parks.forEach(cur => agesSum += cur.calcAge());

   const averageAge =  parseInt(agesSum / parks.length);
   
   console.log(`Our ${parks.length} parks Have an average age of ${averageAge} Years.`);
   parks.forEach(cur => cur.calcDensity());
   parks.forEach(cur => cur.hasMore());
}



function displayStreetsData(streets){
   console.log('▬▬▬▐ STREETS REPORT ▐▬▬▬');

   var steetsTotalLength = 0;
   streets.forEach(cur => steetsTotalLength += cur.area);

   var steetsAvgLength = steetsTotalLength / streets.length;

   console.log(`Our ${streets.length} streets Have a total length of ${steetsTotalLength} Km, with an average of ${steetsAvgLength} Km.`);
   
   streets.forEach(cur => cur.calcType());
}

var allParks = [
   new Park('Morocco',1990, 1201, 2.6),
   new Park('National',1997, 944, 2.4),
   new Park('Nador',2012, 695, 1.2)
];

var allStreets =[
   new Street('Kuroyza',2008, 3.55, 4),
   new Street('Yusha',1999, 1.77, 3),
   new Street('Devs',2001, 4.5, 2),
   new Street('King',2013, 0.75, 1)
 ];

 displayParksData(allParks);
 displayStreetsData(allStreets);