import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

jest.mock('axios');
const MOCKED_USERS = [
    {username: 'alice', password: '111', email: 'alice@1', _id: "123"},
    {username: 'bob', password: '222', email: 'bob@2', _id: "234"},
    {username: 'charlie', password: '333', email: 'charlie@3', _id: "345"}
]

const MOCKED_TUITS = [
    {tuit: "alice's tuit", postedBy: "123"},
    {tuit: "bob's tuit", postedBy: "234"},
    {tuit: "charlie's tuit", postedBy: "345"}
];



test('tuit list renders static tuit array', () => {
    render(
        <HashRouter>
            <Tuits tuits={MOCKED_TUITS}/>
        </HashRouter>);
    const linkElement = screen.getByText(/alice's tuit/i);
    expect(linkElement).toBeInTheDocument();
});


test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
    const response = await findAllTuits();
    const tuits = response.tuits;

    render(
        <HashRouter>
            <Tuits tuits={tuits}/>
        </HashRouter>);

    const user = screen.getByText(/alice's tuit/i);
    expect(user).toBeInTheDocument();
});