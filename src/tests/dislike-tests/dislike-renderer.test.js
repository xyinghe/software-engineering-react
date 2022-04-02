/**
 * @file Implements UI test for dislikes button rendering
 */
import React from "react";
import renderer, {act, create}
    from 'react-test-renderer';
import TuitStats from "../../components/tuits/tuit-stats";



describe('dislike stats render correctly', () => {
    let stats = {
        dislikes: 123
    }
    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                dislikeTuit={()=>{}}
                tuit={{stats: stats}}/>
        );
    })
     test('like and dislike button counts rendered correctly', () =>{
         const root = tuitStats.root;
         const dislikesCounter = root.findByProps(
             {className: 'ttr-stats-dislikes-count'})
         let dislikesText = dislikesCounter.children[0];
         expect(dislikesText).toBe('123');

     })
})

describe('increase dislikes and update component on click' ,() => {
    let stats = {
        dislikes: 123
    }
    const dislikeTuit = () => {
        act(() => {
            stats.dislikes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    dislikeTuit={() => {
                    }}>
                </TuitStats>
            )
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                dislikeTuit={dislikeTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    const dislikesCount = root.findByProps({className: 'ttr-stats-dislikes-count'})
    const dislikeTuitButton = root.findByProps({className: 'ttr-dislike-tuit-click'})
    act(() => {
        dislikeTuitButton.props.onClick()
    })
    let dislikesText = dislikesCount.children[0];
    expect(dislikesText).toBe('124');
})

describe("decrease dislikes if the user disliked the tuit before and update component on click", () => {
    let stats = {
        dislikes: 123
    }
    const dislikeTuit = () => {
        act(() => {
            stats.dislikes--;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    dislikeTuit={()=>{}}>
                </TuitStats>
            )
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                dislikeTuit={dislikeTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    const dislikesCount = root.findByProps({className: 'ttr-stats-dislikes-count'})
    const dislikeTuitButton = root.findByProps({className: 'ttr-dislike-tuit-click'})
    // check for initial dislike count
    let dislikesText = dislikesCount.children[0];
    expect(dislikesText).toBe('123')

    // check for updated count after click
    act(() => {dislikeTuitButton.props.onClick()})
    dislikesText = dislikesCount.children[0];
    expect(dislikesText).toBe('122');
})

describe("increase dislikes if the user clicks the dislike button and liked the tuit before and update component on click", () => {
    let stats = {
        dislikes: 123,
        likes:234
    }
    const dislikeTuit = () => {
        act(() => {
            stats.dislikes++;
            stats.likes--;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    dislikeTuit={()=>{}}>
                </TuitStats>
            )
        })
    }

    let tuitStats;
    act(() => {
        tuitStats = create(
            <TuitStats
                dislikeTuit={dislikeTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    const dislikesCount = root.findByProps({className: 'ttr-stats-dislikes-count'})
    const dislikeTuitButton = root.findByProps({className: 'ttr-dislike-tuit-click'})
    const likesCount = root.findByProps({className: 'ttr-stats-likes-count'})

    // check for initial likes and dislike counts
    let dislikesText = dislikesCount.children[0];
    let likesText = likesCount.children[0];
    expect(dislikesText).toBe('123');
    expect(likesText).toBe('234');

    // check for updated dislike and like counts after click
    act(() => {dislikeTuitButton.props.onClick()})
    dislikesText = dislikesCount.children[0];
    likesText = likesCount.children[0];
    expect(dislikesText).toBe('124');
    expect(likesText).toBe('233');
})
