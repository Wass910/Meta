import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script2 from "../12b03cb6-2066-4f72-b8ef-27bb851de48e/src/item"
import Script3 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script4 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("62b9b3e0-f0d9-4693-b8ee-fee3c20ca29c/FloorBasePebbles_01/FloorBasePebbles_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const wallcornerDarkGrey = new Entity('wallcornerDarkGrey')
engine.addEntity(wallcornerDarkGrey)
wallcornerDarkGrey.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.274999737739563, 1.125, 0.7499997615814209)
})
wallcornerDarkGrey.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("093f79a8-685d-49c8-8c22-0dbdbd594328/DarkGreyCorner.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallcornerDarkGrey.addComponentOrReplace(gltfShape2)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(13.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.950503826141357, 1.1302199363708496, 0.7499998807907104)
})
wallPlainGlass.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape3)

const wallcornerDarkGrey2 = new Entity('wallcornerDarkGrey2')
engine.addEntity(wallcornerDarkGrey2)
wallcornerDarkGrey2.setParent(_scene)
wallcornerDarkGrey2.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(8.775275097839944e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.274999737739563, 1.125, 0.7499997615814209)
})
wallcornerDarkGrey2.addComponentOrReplace(transform5)

const wallcornerDarkGrey3 = new Entity('wallcornerDarkGrey3')
engine.addEntity(wallcornerDarkGrey3)
wallcornerDarkGrey3.setParent(_scene)
wallcornerDarkGrey3.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1.274999737739563, 1.125, 0.7499997615814209)
})
wallcornerDarkGrey3.addComponentOrReplace(transform6)

const wallcornerDarkGrey4 = new Entity('wallcornerDarkGrey4')
engine.addEntity(wallcornerDarkGrey4)
wallcornerDarkGrey4.setParent(_scene)
wallcornerDarkGrey4.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: new Quaternion(-2.8107848148062504e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.274998664855957, 1.125, 0.7499992251396179)
})
wallcornerDarkGrey4.addComponentOrReplace(transform7)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(14.5, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.950502395629883, 1.1302199363708496, -0.8049998879432678)
})
wallPlainGlass2.addComponentOrReplace(transform8)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(16, 0, 14.5),
  rotation: new Quaternion(1.6196093691043427e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(2.9752511978149414, 1.1302199363708496, -0.8049998879432678)
})
wallPlainGlass3.addComponentOrReplace(transform9)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(0, 0, 13.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.950500965118408, 1.1302199363708496, 0.7499995231628418)
})
wallPlainGlass4.addComponentOrReplace(transform10)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.5, 2.5, 14.5),
  rotation: new Quaternion(-3.515930002516562e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.9999998807907104, 1, 7.874999046325684)
})
instagramButtonLink.addComponentOrReplace(transform11)

const facebookButtonLink = new Entity('facebookButtonLink')
engine.addEntity(facebookButtonLink)
facebookButtonLink.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(1.5, 2.5, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 7.5)
})
facebookButtonLink.addComponentOrReplace(transform12)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(15.5, 2.5, 1),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 8.26500415802002)
})
twitterButtonLink.addComponentOrReplace(transform13)

const wallcornerDarkGrey5 = new Entity('wallcornerDarkGrey5')
engine.addEntity(wallcornerDarkGrey5)
wallcornerDarkGrey5.setParent(_scene)
wallcornerDarkGrey5.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(16, 4.5, 0),
  rotation: new Quaternion(-2.8107848148062504e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.274998426437378, 1.125, 0.7499991059303284)
})
wallcornerDarkGrey5.addComponentOrReplace(transform14)

const wallcornerDarkGrey6 = new Entity('wallcornerDarkGrey6')
engine.addEntity(wallcornerDarkGrey6)
wallcornerDarkGrey6.setParent(_scene)
wallcornerDarkGrey6.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(16, 4.5, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.274999737739563, 1.125, 0.7499997615814209)
})
wallcornerDarkGrey6.addComponentOrReplace(transform15)

const wallcornerDarkGrey7 = new Entity('wallcornerDarkGrey7')
engine.addEntity(wallcornerDarkGrey7)
wallcornerDarkGrey7.setParent(_scene)
wallcornerDarkGrey7.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(0, 4.5, 16),
  rotation: new Quaternion(8.775275097839944e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.274999737739563, 1.125, 0.7499997615814209)
})
wallcornerDarkGrey7.addComponentOrReplace(transform16)

const wallcornerDarkGrey8 = new Entity('wallcornerDarkGrey8')
engine.addEntity(wallcornerDarkGrey8)
wallcornerDarkGrey8.setParent(_scene)
wallcornerDarkGrey8.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(0, 4.5, 0),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1.274999737739563, 1.125, 0.7499997615814209)
})
wallcornerDarkGrey8.addComponentOrReplace(transform17)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape3)
const transform18 = new Transform({
  position: new Vector3(14.5, 4.5, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.950502395629883, 1.1302199363708496, -0.8049998879432678)
})
wallPlainGlass5.addComponentOrReplace(transform18)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape3)
const transform19 = new Transform({
  position: new Vector3(13.5, 4.5, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.950503826141357, 1.1302199363708496, 0.7499998807907104)
})
wallPlainGlass6.addComponentOrReplace(transform19)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape3)
const transform20 = new Transform({
  position: new Vector3(0, 4.5, 13.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.950501441955566, 1.1302199363708496, 0.7499995827674866)
})
wallPlainGlass7.addComponentOrReplace(transform20)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape3)
const transform21 = new Transform({
  position: new Vector3(16, 4.5, 14.5),
  rotation: new Quaternion(1.6196093691043427e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(5.950502395629883, 1.1302199363708496, -0.8049998879432678)
})
wallPlainGlass8.addComponentOrReplace(transform21)

const stairsMetalRail = new Entity('stairsMetalRail')
engine.addEntity(stairsMetalRail)
stairsMetalRail.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(10.5, 0, 0),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.22361421585083, 1.1304519176483154, 1.0000014305114746)
})
stairsMetalRail.addComponentOrReplace(transform22)
const gltfShape4 = new GLTFShape("06f897f5-e270-429b-bed1-0adc2644ed15/metalRailStairs.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
stairsMetalRail.addComponentOrReplace(gltfShape4)

const floorGlass2 = new Entity('floorGlass2')
engine.addEntity(floorGlass2)
floorGlass2.setParent(_scene)
const gltfShape5 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
floorGlass2.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(6.5, 4.15981388092041, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5574861764907837, 11.5, 0.6111517548561096)
})
floorGlass2.addComponentOrReplace(transform23)

const table = new Entity('table')
engine.addEntity(table)
table.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(7.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 2.5, 2.5)
})
table.addComponentOrReplace(transform24)
const gltfShape6 = new GLTFShape("bb1d0557-fba7-4d0c-a823-c33b665845d8/Table 4.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
table.addComponentOrReplace(gltfShape6)

const chair = new Entity('chair')
engine.addEntity(chair)
chair.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(9.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
chair.addComponentOrReplace(transform25)
const gltfShape7 = new GLTFShape("70967c9e-8252-4526-aedb-1856d71f26cf/Chair 3.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
chair.addComponentOrReplace(gltfShape7)

const chair2 = new Entity('chair2')
engine.addEntity(chair2)
chair2.setParent(_scene)
chair2.addComponentOrReplace(gltfShape7)
const transform26 = new Transform({
  position: new Vector3(7.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
chair2.addComponentOrReplace(transform26)

const chair3 = new Entity('chair3')
engine.addEntity(chair3)
chair3.setParent(_scene)
chair3.addComponentOrReplace(gltfShape7)
const transform27 = new Transform({
  position: new Vector3(5.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
chair3.addComponentOrReplace(transform27)

const chair4 = new Entity('chair4')
engine.addEntity(chair4)
chair4.setParent(_scene)
chair4.addComponentOrReplace(gltfShape7)
const transform28 = new Transform({
  position: new Vector3(11.5, 0, 7.5),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.500002145767212, 1.5, 1.500002145767212)
})
chair4.addComponentOrReplace(transform28)

const chair5 = new Entity('chair5')
engine.addEntity(chair5)
chair5.setParent(_scene)
chair5.addComponentOrReplace(gltfShape7)
const transform29 = new Transform({
  position: new Vector3(11.5, 0, 9),
  rotation: new Quaternion(-4.127578846475997e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.5000032186508179, 1.5, 1.5000032186508179)
})
chair5.addComponentOrReplace(transform29)

const chair6 = new Entity('chair6')
engine.addEntity(chair6)
chair6.setParent(_scene)
chair6.addComponentOrReplace(gltfShape7)
const transform30 = new Transform({
  position: new Vector3(5.5, 0, 11.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.5, 1.5, 1.5)
})
chair6.addComponentOrReplace(transform30)

const chair7 = new Entity('chair7')
engine.addEntity(chair7)
chair7.setParent(_scene)
chair7.addComponentOrReplace(gltfShape7)
const transform31 = new Transform({
  position: new Vector3(7.5, 0, 11.5),
  rotation: new Quaternion(4.588423215055697e-15, -1, 1.1920928244535389e-7, 2.9802322387695312e-8),
  scale: new Vector3(1.5, 1.5, 1.5)
})
chair7.addComponentOrReplace(transform31)

const chair8 = new Entity('chair8')
engine.addEntity(chair8)
chair8.setParent(_scene)
chair8.addComponentOrReplace(gltfShape7)
const transform32 = new Transform({
  position: new Vector3(9.5, 0, 11.5),
  rotation: new Quaternion(8.467931522269326e-15, -1, 1.1920928244535389e-7, -2.2351741790771484e-8),
  scale: new Vector3(1.5, 1.5, 1.5)
})
chair8.addComponentOrReplace(transform32)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(3, 0, 8.5),
  rotation: new Quaternion(1.8655277247026786e-14, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 0.7901076078414917, 1.000002145767212)
})
videoScreenStanding.addComponentOrReplace(transform33)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(instagramButtonLink, {"url":"decentraland_art","bnw":true,"name":"https://www.google.fr/"}, createChannel(channelId, instagramButtonLink, channelBus))
script2.spawn(facebookButtonLink, {"url":"decentraland","bnw":false}, createChannel(channelId, facebookButtonLink, channelBus))
script3.spawn(twitterButtonLink, {"url":"decentraland","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
script4.spawn(videoScreenStanding, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}]}, createChannel(channelId, videoScreenStanding, channelBus))