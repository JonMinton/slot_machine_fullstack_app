use slot_machine;
db.dropDatabase();


db.users.insertMany([
    {
        "name": "Tim Bart",
        "inital balance": 0.00,
        "playing": false,
    },
    {
        "name": "Nina Sampson",
        "inital balance": 0.00,
        "playing": false,
    },
    {
        "name": "Aubrey John",
        "inital balance": 0.00,
        "playing": false,
    },
    {
        "name": "Matilda Beagle",
        "inital balance": 0.00,
        "playing": false,
    }
])
