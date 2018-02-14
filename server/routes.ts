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

export = router;