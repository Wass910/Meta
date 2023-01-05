import * as utils from '@dcl/ecs-scene-utils'
import { zombieSpeak, aliceSpeak } from './dialogue'
import { NPC } from '@dcl/npc-scene-utils'

export function Zombie_bot():void{
    let path = []
    path[0] = new Vector3(2, 0.95, 11),
    path[1] = new Vector3(8, 0.95, 11)
    path[2] = new Vector3(8, 0.95, 2)
    path[3] = new Vector3(2, 0.95, 2)

    let zombie = new NPC({ position: new Vector3(2, 0.95, 2) }, 'models/zombie.glb', () => {
    zombie.talk(zombieSpeak, 0)
    }, {faceUser: false, darkUI: true, onlyETrigger: true, continueOnWalkAway: true})
    zombie.getComponent(Animator).getClip('Walking').play()
    zombie.addComponent(
    new utils.Interval(100, () => {
        zombie.addComponent(new utils.FollowCurvedPathComponent(path, 30, 120, true, true))
    })
    )

    // Add zombie to engine
    engine.addEntity(zombie)
}

export function Alice_bot():void{
    let alice = new NPC({ position: new Vector3(28.50973587036133, 18.81513557434082, 10.939208221435547), rotation: Quaternion.Euler(0, 180, 0) }, 'models/alice.glb', () => {
        alice.talk(aliceSpeak, 0)
      }, {faceUser: true, darkUI: true, onlyETrigger: true, continueOnWalkAway: false})
      
      
      engine.addEntity(alice)
}
