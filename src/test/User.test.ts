
// import { JSONSDK } from "../apiSdk/User";

// describe('JSONSDK', () => {
//     let sdk: JSONSDK;

//     beforeEach(() => {
//         sdk = new JSONSDK();
//     });

//     test('fetchAllUsers returns a list of users', async () => {
//         const users = await sdk.fetchAllUsers();
//         expect(users).toBeInstanceOf(Array);
//         expect(users.length).toBeGreaterThan(0);
//     });

//     test('fetchUserById returns a user', async () => {
//         const user = await sdk.fetchUserById(1);
//         expect(user).toHaveProperty('id', 1);
//     });
// });