use slot_machine;
db.dropDatabase();


db.users.insertMany([
    {
        "name": "Tim Bart",
        "initial balance": 0.00,
        "playing": false,
        "transactions": [
            {
            "game_number": 300422,
            "profit": 2.00,
            "loss": 0
            }
        ]
    },
    {
        "name": "Nina Sampson",
        "initial balance": 0.00,
        "playing": false,
    },
    {
        "name": "Aubrey John",
        "initial balance": 0.00,
        "playing": false,
    },
    {
        "name": "Matilda Beagle",
        "initial balance": 0.00,
        "playing": false,
    }
])

db.wheelsets.insertMany([
    {
    "fruit": [{
            "symbol_name": "banana",
            "value": 8,
            "image_url": "urlhere"
            },
            {
            "symbol_name": "aubergine",
            "value": 10,
            "image_url": "urlhere" 
            },
            {
            "symbol_name": "green apple",
            "value": 4,
            "image_url": "urlhere"
            },
            {
            "symbol_name": "peach",
            "value": 6,
            "image_url": "urlhere"
            }]
    }
])