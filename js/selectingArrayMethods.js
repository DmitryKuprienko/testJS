
const numbers = [1,3,4,5,8,5,7];

const forEach= numbers.forEach((num,ind,arr) => {return num});


// console.log(forEach)

const map = numbers.map(num=>num % 2);

console.log("map", map)
// console.log("origi", numbers)

const users =[
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
      },
    ]
    console.table(users);

    const userName = users.map(({email})=> email);
    // console.log(userName);
    const res = users.map(({balance,age }) =>({ balance, age}));
    // console.log("res",res);

    // const resObject = users.map(user =>{return {...user,balance: user.balance-500}});
    // console.table(resObject);
    const namenew = "Carey Barr";

    const  userRefName = users.map(user =>namenew === user.name? {...user, name:"Barr Carey"}:user
        // {
        // if (namenew === user.name) {
        //     console.log("user", user)
        //     return {
        //       ...user, name:"Barr Carey"}
        // }
        // return  user}

        // {return namenew === user.name? {...user, name:"Barr Carey"}:user;}
             
);
    // console.table(userRefName);
    // ======================================================

    const emailName = 'cuprienko.d@mail.com'
    const user1=function (allUsers, emailName){
        return allUsers.find(
            user=>user.email=== emailName
            );
    }

    // console.table(user1(users, 'cuprienko.d@mail.com'));
    // console.table(user1(users, "moorehensley@indexia.com"));
    // console.table(user1(users, 'cuprienko.d@mail.com'));
    // console.table(user1(users, "blackburndotson@furnigeer.com"));

    const sumBalance = users.map(({balance})=> balance).reduce((total,bal)=>total +bal,0);
    console.log(sumBalance)