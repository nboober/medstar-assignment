let courses = [
    {
        id: 1,
        "title": "Course 1",
        "filter": ["hard", "cool course", "fun course", "video"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales.",
        courseType:{
            video: "https://www.youtube.com/watch?v=4xKihjI6HJ0",
            book: "n/a"
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"
            },
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"
            }
        ]
    },
    {
        id: 2,
        "title": "Course 2",
        "filter": ["easy", "fun course", "book"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et.  Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales.",
        courseType:{
            video: "n/a",
            book: [
                "Page 1 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 2 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 3 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
            
            ]
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"

            },
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"

            },
            {
                name: "Rachel Adams",
                decription: "8 years experience on this topic.",
                email: "radams@gmail.com",
                image: "https://simonsfoundation.imgix.net/wp-content/uploads/2016/12/01152650/N4A7974.jpg?auto=format&q=90"
            }
        ]
    },
    {
        id: 3,
        "title": "Course 3",
        "filter": ["easy", "html course", "video"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta.",
        courseType:{
            video: "https://www.youtube.com/watch?v=4xKihjI6HJ0",
            book: "n/a"
        },
        instructors: [
            {
                name: "Rachel Adams",
                decription: "8 years experience on this topic.",
                email: "radams@gmail.com",
                image: "https://simonsfoundation.imgix.net/wp-content/uploads/2016/12/01152650/N4A7974.jpg?auto=format&q=90"

            }
        ]
    },
    {
        id: 4,
        "title": "Course 4",
        "filter": ["medium", "css course", "book"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta.",
        courseType:{
            video: "n/a",
            book: [
                "Page 1 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 2 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 3 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
            
            ]
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"

            },
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"

            },
            {
                name: "Rachel Adams",
                decription: "8 years experience on this topic.",
                email: "radams@gmail.com",
                image: "https://simonsfoundation.imgix.net/wp-content/uploads/2016/12/01152650/N4A7974.jpg?auto=format&q=90"

            }
        ]
    },
    {
        id: 5,
        "title": "Course 5",
        "filter": ["hard", "spring course", "video"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas.",
        courseType:{
            video: "https://www.youtube.com/watch?v=4xKihjI6HJ0",
            book: "n/a"
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"

            },
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"

            },
            {
                name: "Rachel Adams",
                decription: "8 years experience on this topic.",
                email: "radams@gmail.com",
                image: "https://simonsfoundation.imgix.net/wp-content/uploads/2016/12/01152650/N4A7974.jpg?auto=format&q=90"

            }
        ]
    },
    {
        id: 6,
        "title": "Course 6",
        "filter": ["easy", "beginner course", "video"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at!",
        courseType:{
            video: "https://www.youtube.com/watch?v=4xKihjI6HJ0",
            book: "n/a"
        },
        instructors: [
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"

            }
        ]
    },
    {
        id: 7,
        "title": "Course 7",
        "filter": ["intermediate", "ruby", "book"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta.",
        courseType:{
            video: "n/a",
            book: [
                "Page 1 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 2 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 3 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
            
            ]
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"

            },
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"

            },
            {
                name: "Rachel Adams",
                decription: "8 years experience on this topic.",
                email: "radams@gmail.com",
                image: "https://simonsfoundation.imgix.net/wp-content/uploads/2016/12/01152650/N4A7974.jpg?auto=format&q=90"

            }
        ]
    },
    {
        id: 8,
        "title": "Course 8",
        "filter": ["great coach", "java course","video"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales.",
        courseType:{
            video: "https://www.youtube.com/watch?v=4xKihjI6HJ0",
            book: "n/a"
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"

            },
            {
                name: "Timmy Turner",
                description: "2 years experience on this topic.",
                email: "tturner@gmail.com",
                image: "https://www.nydailynews.com/resizer/aigQ_oh-3t5wMMtglaFT6q4xIko=/448x336/top/s3.amazonaws.com/arc-authors/tronc/582bf652-3fff-475d-b02a-868edeb9acc0.png"

            }
        ]
    },
    {
        id: 9,
        "title": "Course 9",
        "filter": ["fun games", "javaScript course", "video"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum.",
        courseType:{
            video: "https://www.youtube.com/watch?v=4xKihjI6HJ0",
            book: "n/a"
        },
        instructors: [
            {
                name: "Rachel Adams",
                decription: "8 years experience on this topic.",
                email: "radams@gmail.com",
                image: "https://simonsfoundation.imgix.net/wp-content/uploads/2016/12/01152650/N4A7974.jpg?auto=format&q=90"

            }
        ]
    },
    {
        id: 10,
        "title": "Course 10",
        "filter": ["tutorial", "php course","book"],
        "description": "Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales.",
        courseType:{
            video: "n/a",
            book: [
                "Page 1 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 2 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
                ,
                "Page 3 text. Himenaeos lacinia libero ante mollis imperdiet porttitor erat euismod suspendisse bibendum. Dictumst class laoreet sagittis sem cubilia condimentum aptent dolor? Sit dapibus, habitant et. Aliquet faucibus vehicula a senectus aenean netus posuere adipiscing nisl adipiscing laoreet maecenas. Vivamus posuere vulputate tristique cubilia scelerisque porttitor tempus erat. Inceptos blandit gravida, arcu sodales. Urna proin viverra consectetur torquent elit nascetur maecenas duis lectus, semper natoque dignissim. Fringilla sed blandit vitae felis non lobortis per justo conubia porta. Parturient nascetur in duis, consequat non neque tellus sem! Penatibus cum tincidunt at! Mattis scelerisque molestie at blandit. Tempus urna malesuada velit vivamus libero eu, molestie scelerisque lobortis consectetur. Consectetur facilisis molestie convallis. Montes cursus himenaeos arcu lacus metus sit parturient dictum conubia nullam condimentum. Cum, condimentum felis ante ante libero iaculis class quam phasellus. Mi habitasse sodales netus tellus praesent adipiscing euismod nam ad scelerisque. Magna, gravida class fermentum sem a ornare aenean curabitur nisl ullamcorper quisque. Dis, et leo sagittis quisque habitant lacinia. Blandit, fringilla torquent in tristique pellentesque. Ipsum eleifend facilisi senectus viverra blandit nisl sem turpis. Habitant placerat fames?"
            
            ]
        },
        instructors: [
            {
                name: "Nick Alexander",
                description: "3 years Experience on this topic.",
                email: "nalex@gmail.com",
                image: "https://www.milkeneducatorawards.org/assets/Person/_resampled/TopCroppedImageWyIzMDAiLCI0MDAiXQ-2019-MI-Nick-Peruski-bio-3x4.jpg"

            }
        ]
    }
]

export default courses