controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        . . . . . . 9 9 9 5 5 9 9 . . . 
        . 9 9 9 9 9 9 5 5 5 5 5 9 9 . . 
        . . . . . . 9 9 9 5 5 9 9 . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    4 4 4 6 f f . . . . . . . . . . 
    f 6 6 6 6 f f f f f . . . . . . 
    f f f 6 6 6 6 6 6 f f f . . . . 
    . . f 6 9 6 6 6 6 6 6 f f f f . 
    . . f 6 9 9 9 6 6 6 6 6 6 4 f f 
    . . f 6 9 9 9 9 9 6 6 6 4 4 4 4 
    . . f 6 9 9 9 6 6 6 6 6 6 4 f f 
    . . f 6 9 6 6 6 6 6 6 6 f f f . 
    f f f 6 6 6 6 6 6 6 f f f . . . 
    f 6 6 6 6 f f f f f f . . . . . 
    4 4 4 6 f f . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 2 2 . . . . . . 
        . . . . . . . . 3 2 . . . . . . 
        . . . . . . . . 3 2 4 . . . . . 
        . . . . . . . . 3 2 . . . . . . 
        . . . . . . 3 3 2 2 . . . . . . 
        . . . . 3 3 2 2 2 2 . . . . . . 
        . . 3 3 2 2 2 3 2 2 . . . . . . 
        . . 2 2 2 3 3 3 2 2 . . . . . . 
        . . 3 3 2 2 2 3 2 2 . . . . . . 
        . . . . 3 3 2 2 2 2 . . . . . . 
        . . . . . . 3 3 2 2 . . . . . . 
        . . . . . . . . 3 2 . . . . . . 
        . . . . . . . . 3 2 4 . . . . . 
        . . . . . . . . 3 2 . . . . . . 
        . . . . . . . 3 2 2 . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(10, scene.screenHeight() - 10)
})
