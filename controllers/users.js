const users = require("../models/users");
const ValidateUsers = require("../validator/users");
const faker = require('faker2')

/* Add users */
const Add = async (req, res) => {
  const { errors, isValid } = ValidateUsers(req.body);
  try {
    if (!isValid) {
      res.status(404).send(errors);
    } else {
      users.findOne({Email: req.body.Email})
      .then(async(exist)=>{
        if(exist){
          errors.Email = "Email exist try other"
          return  res.status(404).send(errors)
        }else{
          await users.create(req.body);
          res.status(201).json({
            success: true,
          });
        }
      })
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GetAll users */
const GetAll = async (req, res) => {
  try {
    const data = await users.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GetOne users */
const GetOne = async (req, res) => {
  try {
    const data = await users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* UpdateOne users */
const UpdateOne = async (req, res) => {
  const { errors, isValid } = ValidateUsers(req.body);
  try {
    if (!isValid) {
      res.status(404).send(errors);
    } else {
      const data = await users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

    res.status(201).json(data);
  }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* DeleteOne users */
const DeleteOne = async (req, res) => {
  try {
    await users.deleteOne({ _id: req.params.id });
    res.status(201).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const Faker = async(req,res)=>{
  
  for (let index = 0; index <= 10; index++) {
    const FakeUsers = {
      Email: faker.Internet.email(),
      Lastname: faker.Name.lastName(),
      Firstname: faker.Name.firstName(),
      Age: 30
    }
          await users.create(FakeUsers);
          if(index === 10){
            res.status(201).json({
              success: true,
            });
          }
  }
}

module.exports = {
  Add,
  GetAll,
  GetOne,
  UpdateOne,
  DeleteOne,
  Faker
};
