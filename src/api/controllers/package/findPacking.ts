import { Request, Response } from 'express';
import BoxPacker from '../../../boxPacker/BoxPacker';

const findPacking = (req: Request, res: Response) => {
  const ids = req.body.ids;
  const weights = req.body.weights;
  const deliveryDays = req.body.deliveryDays;

  const packer = new BoxPacker(ids, weights, deliveryDays);
  const packingResult = packer.calculate(10);

  res.send(packingResult);
};

export default findPacking;
