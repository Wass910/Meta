import * as utils from '@dcl/ecs-scene-utils'

const birdShape = new GLTFShape('models/hummingbird.glb')

let birdCounter = 0

function newBird() {
  if (birdCounter > 30) {
    return
  }

  birdCounter += 1

  const bird = new Entity()

  const startPosition = new Vector3(27, 4, 12.5)
  const birdScale = new Vector3(0.2, 0.2, 0.2)

  bird.addComponent(
    new Transform({
      position: startPosition,
      scale: birdScale
    })
  )

  bird.addComponent(birdShape)
  const birdAnim = new Animator()
  bird.addComponent(birdAnim)
  const flyAnim = new AnimationState('fly', { layer: 0 })
  flyAnim.speed = 2
  const lookAnim = new AnimationState('look', { looping: false, layer: 1 })
  const shakeAnim = new AnimationState('shake', { looping: false, layer: 1 })
  birdAnim.addClip(flyAnim)
  birdAnim.addClip(lookAnim)
  birdAnim.addClip(shakeAnim)
  flyAnim.play()

  // first sprint
  const nextPos = new Vector3(
    Math.random() * 16 + 2,
    Math.random() * 15 + 1,
    Math.random() * 12 + 2
  )
  bird.getComponent(Transform).lookAt(nextPos)
  bird.addComponent(new utils.MoveTransformComponent(startPosition, nextPos, 2))

  // keep sprinting on a regular basis
  bird.addComponent(
    new utils.Interval(Math.floor(Math.random() * 3000) + 3000, () => {
      const nextPos = new Vector3(
        Math.random() * 12 + 2,
        Math.random() * 3 + 1,
        Math.random() * 12 + 2
      )
      bird.getComponent(Transform).lookAt(nextPos)
      bird.addComponent(
        new utils.MoveTransformComponent(
          bird.getComponent(Transform).position,
          nextPos,
          2
        )
      )
    })
  )

  engine.addEntity(bird)
}

export default newBird