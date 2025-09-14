import { User } from "../models";

export default class userController {
    getUsers(res) {
        User.find({})
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }

    createUser(data, res) {
        console.log(data)
        new User(data).save()
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}