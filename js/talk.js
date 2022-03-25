new TypeIt("#love", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("YOU == ME")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("感谢有你")
    .pause(3000)
    .go();

new TypeIt('#Love1', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();