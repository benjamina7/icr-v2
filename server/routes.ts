import * as express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json({ working: true });
});

router.get('/test1/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json('test1 it is');
});

router.get('/test2/:someVar', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let someVarVal = req.params.someVar || 'MISSING';
    
    res.status(200).json({ someVarValue: someVarVal });
});

router.get('/sqltest1/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let sqlVal = '';

    var sql = require("seriate");

    var config = {
        "server": "mySqlServerInstance",
        "user": "superguy",
        "password": "secretlyabadguy",
        "database": "myDatabase1"
    };

    sql.setDefaultConfig( config );

    sql.execute( {
        query: "SELECT TOP 1 SomeColumn1 FROM dbo.SomeTable1"
    } ).then( function( results ) {
        console.log( results );
        sqlVal = results;
        res.status(200).json({ sqlValue: sqlVal });
    }, function( err ) {
        console.log( "Something bad happened:", err );
        res.status(500);
    } );
});

export = router;