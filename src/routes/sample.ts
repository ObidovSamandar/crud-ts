import { Router } from "express"
import { SampleController } from "../controllers/sample"
import { SampleValidator } from "../validators/uservalidator"

const router = Router({ mergeParams: true })
const controller = new SampleController()
const validator = new SampleValidator()

router.route("/")
.post(validator.create, controller.create)
.get(controller.getAll)

router.route('/:id')
.put(validator.update,controller.update)
.delete(controller.delete)
.get(controller.get)
export default router
