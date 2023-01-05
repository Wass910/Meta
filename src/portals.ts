import * as utils from '@dcl/ecs-scene-utils'
import { Portal } from './portalConfig' 
import { movePlayerTo } from '@decentraland/RestrictedActions'

function createPortals(){
    const portalOrange = new Portal(new GLTFShape('models/portalOrange.glb'))
    const portalBlue = new Portal(new GLTFShape('models/portalBlue.glb'))
    const DELAY_TIME = 1500 // In milliseconds
    const RESET_SIZE = 1 // In meters

    const triggerBox = new utils.TriggerBoxShape(
    new Vector3(RESET_SIZE, RESET_SIZE, RESET_SIZE),
    Vector3.Zero()
    )

    portalBlue.addComponent(
    new utils.TriggerComponent(triggerBox, {
        onCameraEnter: () => {
        if (portalOrange.hasComponent(Transform)) {
            movePlayerTo(
            portalOrange.getComponent(Transform).position,
            portalOrange.cameraTarget
            ).catch((error) => log(error))
            triggerBox.size.setAll(0) 
            portalOrange.addComponentOrReplace(
            new utils.Delay(DELAY_TIME, () => {
                triggerBox.size.setAll(RESET_SIZE)
            })
            ) 
            portalBlue.addComponentOrReplace(
            new utils.Delay(DELAY_TIME, () => {
                triggerBox.size.setAll(RESET_SIZE)
            })
            )
        }
        }
    })
    )
    portalOrange.addComponent(
    new utils.TriggerComponent(triggerBox, {
        onCameraEnter: () => {
        if (portalBlue.hasComponent(Transform)) {
            movePlayerTo(
            portalBlue.getComponent(Transform).position,
            portalBlue.cameraTarget
            ).catch((error) => log(error))
            triggerBox.size.setAll(0)
            portalOrange.addComponentOrReplace(
            new utils.Delay(DELAY_TIME, () => {
                triggerBox.size.setAll(RESET_SIZE)
            })
            )
            portalBlue.addComponentOrReplace(
            new utils.Delay(DELAY_TIME, () => {
                triggerBox.size.setAll(RESET_SIZE)
            })
            )
        }
        }
    })
    )
    portalBlue.addComponentOrReplace(new Transform())
    const transformBlue = portalBlue.getComponent(Transform)

    transformBlue.position = new Vector3(8, 1.5, 0) 
    portalBlue.cameraTarget = transformBlue.position.add(new Vector3(8, 1.5, 9) )
    if (transformBlue.position.y <= 1.2)
    transformBlue.position.y = 1.2 // 
    portalBlue.playAnimation()
        
    portalOrange.addComponentOrReplace(new Transform())
    const transformOrange = portalOrange.getComponent(Transform)
    transformOrange.position = new Vector3(26, 25, 8) 
    portalOrange.cameraTarget = transformOrange.position.add(new Vector3(26, 25, 8) )
    if (transformOrange.position.y <= 1.2)
    transformOrange.position.y = 1.2
    portalOrange.playAnimation()
}

export default createPortals