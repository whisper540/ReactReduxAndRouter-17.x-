import { Router } from 'express'

const dispatchAndRespond = (req, res, action) => {
    req.store.dispatch(action)
    res.status(200).json(action)
}

const router = Router()

router.get('/colors', (req, res)=>
    dispatchAndRespond(req, res, {
        type: 'ADD_COLOR',
        id: (+new Date()).toString(),
        title: req.body.title,
        color: req.body.color,
        timestamp: new Date.toString()
    })
)

router.put('/color/:id', (req, res)=>
    dispatchAndRespond(req, res, {
        type: 'RATE_COLOR',
        id: req.params.id,
        rating: parseInt(req.body.rating)
    })
)

router.delete('/color/:id', (req, res)=>
    dispatchAndRespond(req, res, {
        type: 'REMOVE_COLOR',
        id: req.params.id
    })
)

export default router