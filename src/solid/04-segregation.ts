interface Bird {
    eat(): void;
    run(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}



class Tucan implements Bird, FlyingBird {

    public fly() {

    }

    public eat() {
        
    }

    public run() {
        
    }

}

class Homminbird implements Bird, FlyingBird {
    
    public fly() {

    }

    public eat() {
        
    }

    public run() {
        
    }

}

class Ostrich implements Bird {
    
    public eat() {
        
    }

    public run() {
        
    }
}

class Penguin implements Bird, SwimmingBird {
    
    swim(): void {
        throw new Error("Method not implemented.");
    }

    eat(): void {
        throw new Error("Method not implemented.");
    }

    run(): void {
        throw new Error("Method not implemented.");
    }

}