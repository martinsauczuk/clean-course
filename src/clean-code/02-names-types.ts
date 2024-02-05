(() => {

    const temperatureCelsiusList = [33.6, 12.34];

    const serverIpAdrress = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const idLoading = false;


    const startingTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endingTime = new Date().getTime() - startingTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

})();




