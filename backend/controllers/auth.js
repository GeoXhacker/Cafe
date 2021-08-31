const jwt = require("jsonwebtoken");
const { validationResult, body } = require("express-validator");
const randomize = require("randomatic");
const sendSms = require("../utils/sms");
const Users = require("../models/user");

let pendingAuth = new Map();

exports.authenticate = function (req, res, next) {
  console.log(req.body, "starting auth");

  const errors = validationResult(req);
  console.log(errors, "validation errors");
  console.log(req.body);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    return res.json({
      errors: errors.array(),
    });
  }

  let data = { ...req.body, code: randomize("0", 5) };

  if (process.env.NODE_ENV !== "production") {
    console.log(data);
  }

  //irreleveant block of code you should remove it
  // let pendingAuth = new Map();

  pendingAuth.set("code", data.code); //The set(key, value) method adds or updates an element with a specified key and a value to a Map object.
  /////////////////////// on second thought i guess its relevant, makes a memory copy of the data, which can be accessed, instance..
  pendingAuth.set("userInfo", req.body);
  sendSms(
    data.phone,
    `${data.username}, Your activation code is ${data.code}`,
    function (result) {}
  );

  res.json({ data: data });

  console.log("almost there...");
};

exports.verify = function (req, res, next) {
  let { phone, code } = req.params;

  let codeInMemory = pendingAuth.get("code");

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  if (!codeInMemory) {
    console.log("no in memory code");
    return next(
      new Error(
        "Authentication failed, In memory code missing, check pendingAuthMap()"
      )
    );
  }

  if (Number(codeInMemory) === Number(code)) {
    Users.findOne({ phone: phone }, (err, user) => {
      if (user) {
        console.log(user, "user exists");
        var token = jwt.sign({ id: user._id }, "d's cafe");
        console.log(token);

        wait(3000);

        res.json({
          message: "Authentication succeeded",
          token,
          userInfo: pendingAuth.get("userInfo"),
        });
        console.log("response sent");
      } else {
        let addUser = new Promise((resolve, reject) => {
          let user = new Users(pendingAuth.get("userInfo"));
          user.save((err, record) => {
            if (err) return reject(err);

            resolve(record);
          });
        });

        addUser
          .then((user) => {
            //handleResolve then
            var token = jwt.sign({ id: user._id }, "d's cafe");
            wait(5000);

            res.json({
              message: "Authentication succeeded",
              token,
              userInfo: pendingAuth.get("userInfo"),
            });
            console.log("new user created");
          })
          .catch((err) => {
            //handleReject
            console.log(err);
            console.log(err, "failed to save to db");
          });
      }
    });
  } else {
    wait(5000);
    next(new Error("Invalid code"));
  }
};
