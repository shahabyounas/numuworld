const crypto = require('crypto')

let users = [
    {
        "userId": "1",
        "name": "Ali",
        "email": "ali@gmail.com",
        "hobbies": [
            {
                "id": 1,
                "hobby": "Watching TV",
                "passion": 1,           // 1 - Low , 2- Medium , 3- High Alias for passion strings
                "year": 2000
            },
            {
                "id": 2,
                "hobby": "Reding Books",
                "passion": 3,           
                "year": 2010
            },
            {
                "id": 3,
                "hobby": "Body Building",
                "passion": 2,           
                "year": 2017
            }      
        ]
    },
    {
        "userId": "2",
        "name": "Jack",
        "email": "jack@gmail.com",
        "hobbies": [
            {
                "id": 1,
                "hobby": "Watching TV",
                "passion": 3,           // 1 - Low , 2- Medium , 3- High Alias for passion strings
                "year": 2000
            },
            {
                "id": 2,
                "hobby": "Reding Books",
                "passion": 1,          
                "year": 2010
            },
            {
                "id": 3,
                "hobby": "Body Building",
                "passion": 2,        
                "year": 2017
            }      
        ]
        
    },
    {
        "userId": "3",
        "name": "Glenn",
        "email": "glenn@gmail.com",
        "hobbies": [
            {
                "id": 1,
                "hobby": "Watching TV",
                "passion": 3,           // 1 - Low , 2- Medium , 3- High Alias for passion strings
                "year": 2000
            },
            {
                "id": 2,
                "hobby": "Reding Books",
                "passion": 1,          
                "year": 2010
            },
            {
                "id": 3,
                "hobby": "Body Building",
                "passion": 2,          
                "year": 2017
            }      
        ]
    }
]

function addUser(req,res){
  const storeUser = req.body
  storeUser.userId = crypto.randomBytes(16).toString("hex")

  const userFound = users.find(user => user.email === storeUser.email)
  if (userFound){
      return  res.send({message: "User record already exists please try to Sign In" })
  }
  
  users = [...users, ...[storeUser]]

  return res.send(storeUser)
}

function getUsers(req,res) {
    return res.send(users)
}

const addHobby = (req, res) => {
    const { userId, hobby } = req.body

    users = users.map(user => {
        if(user.userId === userId){
            user.hobbies.push(hobby)
        }
        return user
    })

    return res.send(hobby)
}

const deleteHobby = (req, res) => {
    const { userId, hobbyId } = req.body

     users.forEach(user => {
        if(user.userId === userId){
            user.hobbies = user.hobbies.filter(hobby => hobby.id !== hobbyId)
        }
    })

    return res.send(users)
}
module.exports = {
    addUser,
    getUsers,
    addHobby,
    deleteHobby
}