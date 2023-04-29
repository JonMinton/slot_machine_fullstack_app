use slot_machine;
db.dropDatabase();


db.users.insertMany([
    {
        "name": "Tim Bart",
        "balance": 10,
        "playing": false,
    },
    {
        "name": "Nina Sampson",
        "balance": 10,
        "playing": false,
    },
    {
        "name": "Aubrey John",
        "balance": 10,
        "playing": false,
    },
    {
        "name": "Matilda Beagle",
        "balance": 10,
        "playing": false,
    }
])
