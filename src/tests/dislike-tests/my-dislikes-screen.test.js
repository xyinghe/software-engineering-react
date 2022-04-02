/**
 * @file Implements UI test for disliked tuits screen
 */
import {act, create} from "react-test-renderer";
import Tuits from "../../components/tuits/index";
import {BrowserRouter} from "react-router-dom";

test('disliked tuits screen render', () => {
    const DISLIKED_TUITS =[
        { "_id":  "123",
            "tuit": "Alice's tuit"   },
        { "_id":  "234",
            "tuit": "Bob's tuit"     },
        { "_id":  "345",
            "tuit": "Charlie's tuit" }
    ]
    let tuitsRender
    act(() => {
        tuitsRender = create(
            <BrowserRouter><Tuits tuits={DISLIKED_TUITS}/></BrowserRouter>
        )
    })
    const root = tuitsRender.root
    const ttrTuits = root.findAllByProps({className: 'ttr-tuit'})
    expect(ttrTuits.length)
        .toBe(DISLIKED_TUITS.length)

    ttrTuits.forEach((ttrTuit, ndx) => {
        expect(ttrTuit.props.children)
            .toBe(DISLIKED_TUITS[ndx].tuit)
    })

})
