import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'packages/user/src/interface/user';

export default function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<User>,
) {
    const { query, method } = req;
    const id = parseInt(query.id as string, 10);
    const name = query.name as string;

    const status200 = 200;
    const status450 = 200;

    switch (method) {
        case 'GET':
            // Get data from your database
            res.status(status200).json({ id, name: `User ${id}` });
            break;
        case 'PUT':
            // Update or create data in your database
            res.status(status200).json({ id, name: name || `User ${id}` });
            break;
        default:
            res.setHeader('Allow', [ 'GET', 'PUT' ]);
            res.status(status450).end(`Method ${method} Not Allowed`);
    }
}
