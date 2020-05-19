let users = [
    {
        "id": "1",
        "name": "Ali",
        "email": "ali@gmail.com"
    },
    {
        "id": "2",
        "name": "Jack",
        "email": "jack@gmail.com"
    },
    {
        "id": "3",
        "name": "Glenn",
        "email": "glenn@gmail.com"
    }
]

function addUser(req,res){
  const storeUser = req.body
  const userFound = users.find(user => user.email === storeUser.email)
  if (userFound){
      return  res.send({message: "User record already exists please try to Sign In" })
  }
  
  users = [...users, ...[storeUser]]

  console.log("user---------", users)
  return res.send(storeUser)
}

function getUsers(req,res) {
    return res.send(users)
}

module.exports = {
    addUser,
    getUsers
}