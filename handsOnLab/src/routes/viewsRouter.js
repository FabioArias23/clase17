import {Router} from 'express';
import studentModel from '../models/studentModel.js';

const router = Router();

router.get("/", async (req, res) => {
    let page = parseInt(req.query.page);
    if (!page) {
        page = 1;
    }

    let result = await studentModel.paginate({}, {page, limit: 5, lean: true});

    result.title = "Coder House";
    result.prevLink = result.hasPrevPage?`http://localhost:8080/students?page=${result.prevPage}`:'';
    result.nextLink = result.hasNextPage?`http://localhost:8080/students?page=${result.nextPage}`:'';
    result.isValid= !(page<=0||page>result.totalPages)

    res.render(
        'index',
        result
    );
});

export default router;