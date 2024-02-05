(() => {

    // NO aplicando principio de responsabilidad unica
    // Single Responsability

    type Gender = 'M' | 'F';

    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor( name: string, gender: Gender, birthdate: Date) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }   
    // }

    class Person {
        constructor( 
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) { }   
    }

    class User extends Person {

        private lastAccess: Date;
        
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }    
    }


    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lasOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate);
        }

    }

    const userSettings = new UserSettings(
        '/usr/martin', 
        '/home',
        'martin@martin.com',
        'admin',
        'Martin Pablo',
        'M', 
        new Date('1987-05-20'),
    );
    console.log({ userSettings });

    

})();