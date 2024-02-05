(() => {

    // Aplicando principio de responsabilidad unica
    // Single Responsability
    // priorizar composicion frente a la herencia

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
    }

    class User {

        private lastAccess: Date;
        public email: string;
        public role: string;
        
        constructor({
            email, 
            role} : UserProps
        ){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }    
    }


    interface SettingProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings {
        public workingDirectory:string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public setting: Settings;

        constructor({
            name, gender, birthdate, email, role, workingDirectory, lastOpenFolder
        }: UserSettingProps) {
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role})
            this.setting = new Settings({workingDirectory, lastOpenFolder})
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