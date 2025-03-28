require('dotenv').config();
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  console.log("Connection succesfull")
).catch((error) => {
  console.log("connection failed", error)
})

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: Number,
  favoriteFoods: [String],
})


let Person = mongoose.model('Person', personSchema);


const createAndSavePerson = (done) => {
  let person = new Person({
    name: "John Doe",
    age: 24,
    favoriteFoods: ["Pizza", "HotDog", "Rice"],
  });
  console.log("this is just to show that this function works and it is not your code man")
  person.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
}
const arrayOfPeople = [
  {
    name: "Mary Slessor",
    age: 27,
    favoriteFoods: ["twins", "babies"]
  }, {
    name: "Ellen Gold White",
    age: 12,
    favoriteFoods: ["visions", "prophecy"],
  }, {
    name: "Elon Musk",
    age: 32,
    favoriteFoods: ["Tesla", "Money"],
  }
]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people) {
    if (err) done(err);
    done(null, people);
  })
};


const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, personFound) {
    if (err) console.log(err);
    done(null, personFound);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function(err, personFound) {
    if (err) console.log(err);
    done(null, personFound)
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, person) {
    if (err) console.log(err);
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, person) {
    if (err) console.log(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err) => {
      if (err) console.log(err)
      done(null, person)
    });
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
