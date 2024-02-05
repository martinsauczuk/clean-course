(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastByMovieId( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBioByActorId( actorId: string ) {
        console.log({ actorId });
    }
    

    interface MovieArgs {
        cast        : string[];
        description : string;
        rating      : number;
        title       : string;
    }

    function createMovie({ title, description, rating, cast }: MovieArgs ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, _birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        // let result: number;
        
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500
        
        return ( isRetired ) 
            ? 3000
            : 4000;
    }
    

})();
