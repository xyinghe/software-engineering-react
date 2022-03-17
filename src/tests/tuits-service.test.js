import{
    createTuit,findAllTuits,findTuitById,findTuitByUser,deleteTuit, deleteTuitByContent
} from "../services/tuits-service";

import {
    createUser, deleteUsersByUsername,
} from "../services/users-service"

describe('can create tuit with REST API', () => {
    const sampleTuit = {
        tuit: "test for create tuit",
        postedOn: "2022-03-09T00:00:00.000Z"
    }

    let tid;
    let sampleUser = {
        username: 'sample user for tuit test',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };



    beforeAll(()=> {
        return deleteUsersByUsername(sampleUser.username);
    })

    afterAll(()=> {
        let promises = []
        promises.push(deleteUsersByUsername(sampleUser.username));
        promises.push(deleteTuit(tid));
        return Promise.all(promises);
    })
    test('can insert new tuit with REST API', async () => {

        const newUser = await createUser(sampleUser);
        const newTuit = await createTuit(newUser._id, sampleTuit);
        tid = newTuit._id

        expect(newTuit.tuit).toEqual(sampleTuit.tuit);
        expect(newTuit.postedOn).toEqual(sampleTuit.postedOn);
        expect(newTuit.postedBy).toEqual(newUser._id);
    })
});


describe('can delete tuit wtih REST API', () => {
    const sampleTuit = {
        tuit: "test for delete tuit",
        postedOn: "2022-03-09T00:00:00.000Z"
    }
    let sampleUser = {
        username: 'sample user for tuit test',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };


    let tid;

    afterAll(()=> {
        let promises = []
        promises.push(deleteUsersByUsername(sampleUser.username));
        promises.push(deleteTuit(tid));
        return Promise.all(promises);
    })
    test('can delete a tuit with REST API', async () => {
        const newUser = await createUser(sampleUser);
        const newTuit = await createTuit(newUser._id, sampleTuit);
        tid = newTuit._id
        const status = await deleteTuit(tid)
        expect(status.deletedCount).toBeGreaterThanOrEqual(1);

    })

});

describe('can retrieve a tuit by their primary key with REST API', () => {
    const sampleTuit = {
        tuit: "test for retrieve a tuit by ID",
        postedOn: "2022-03-09T00:00:00.000Z"
    }
    let sampleUser = {
        username: 'sample user for tuit test',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };



    let tid;
    beforeAll(()=> {
        return deleteUsersByUsername(sampleUser.username);
    })

    afterAll(()=> {
        let promises = []
        promises.push(deleteUsersByUsername(sampleUser.username));
        promises.push(deleteTuit(tid));
        return Promise.all(promises);
    })

    test('can insert new tuit with REST API', async () => {

        const newUser = await createUser(sampleUser);
        const newTuit = await createTuit(newUser._id, sampleTuit);
        tid = newTuit._id
        const retrievedTuit = await findTuitById(tid)
        expect(retrievedTuit.tuit).toEqual(sampleTuit.tuit);
        expect(retrievedTuit.postedOn).toEqual(sampleTuit.postedOn);
        expect(retrievedTuit.postedBy._id).toEqual(newUser._id);
    })
});

describe('can retrieve all tuits with REST API', () => {
    const sampleUser = {
        username: 'user for test retrieve all tuits',
        password: '123456',
        email: '123456.1'
    };
    const tuits = ["tuit1233", "tuit2344", "tuit3455"]

    let newUser = "";
    beforeAll(async () => {
        newUser = await createUser(sampleUser);
        tuits.map(tuit =>
            createTuit(newUser._id,
                {
                    tuit: tuit,
                })
        )
    })

    afterAll(() => {
        tuits.map(tid =>
            deleteTuit(tid)
        )
        return deleteUsersByUsername(sampleUser.username);
    })

    test('can retrieve all tuits with REST API', async () => {
        const allTuits = await findAllTuits();

        expect(allTuits.length).toBeGreaterThanOrEqual(tuits.length);
        const tuitsWeInserted = allTuits.filter(
            tuit => tuits.indexOf(tuit.tuit) >= 0);

        tuitsWeInserted.forEach(tuit => {
            const constent = tuits.find(constent => constent === tuit.tuit);
            expect(tuit.tuit).toEqual(constent);

        });
    });

  });