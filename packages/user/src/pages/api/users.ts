import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from 'packages/user/src/interface/user';

// Fake users data
const users: User[] = [ { id: 1 }, { id: 2 }, { id: 3 } ];

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<User[]>,
) {
    // Get data from your database
    const statusCode = 200;
    res.status(statusCode).json(users);
}
