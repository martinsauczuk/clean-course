(() => {

    // Aplicando principio de responsabilidad unica
    // Single Responsability

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        } 
   
    }


    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class User extends Person {

        private lastAccess: Date;
        public email: string;
        public role: string;
        
        constructor(
            {email, role, name, gender, birthdate}: UserProps, 
        ){
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }    
    }


    interface UserSettingProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string;
        role: string;
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory:string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate}: UserSettingProps ) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }

    }

    const userSettings = new UserSettings({
        workingDirectory:'/usr/martin', 
        lastOpenFolder: '/home',
        email: 'martin@martin.com',
        role: 'admin',
        name: 'Martin Pablo',
        gender: 'M', 
        birthdate: new Date('1987-05-20'),
    });
    console.log({ userSettings });

    

})();