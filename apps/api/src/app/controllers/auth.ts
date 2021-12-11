import { Router } from 'express';

interface Payload {
  google_client_id: string;
}

const googleClientIDRouter = Router();

googleClientIDRouter.get<'/clientID', null, Payload>(
  '/clientID',
  async (req, res) => {
    const google_client_id = process.env.GOOGLE_CLIENT_ID ?? '';
    res.json({ google_client_id });
  }
);

export default googleClientIDRouter;
