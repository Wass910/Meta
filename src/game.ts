import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script2 from "../12b03cb6-2066-4f72-b8ef-27bb851de48e/src/item"
import Script3 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script4 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script5 from "../28682b28-1752-4f56-9683-adb5a325a285/src/item"
import Script6 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script7 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script8 from "../c1e126e7-374e-4fe3-aaae-b4211c321cf3/src/item"

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
  scale: new Vector3(6.0127081871032715, 1.1302199363708496, 0.749998927116394)
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

const floorGlass = new Entity('floorGlass')
engine.addEntity(floorGlass)
floorGlass.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0, 4, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-3.9306910037994385, 17, -3.3611326217651367)
})
floorGlass.addComponentOrReplace(transform34)
floorGlass.addComponentOrReplace(gltfShape5)

const concreteRoundedTable = new Entity('concreteRoundedTable')
engine.addEntity(concreteRoundedTable)
concreteRoundedTable.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(5, 4.5, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.3669129610061646, 1.5)
})
concreteRoundedTable.addComponentOrReplace(transform35)
const gltfShape8 = new GLTFShape("9d9c165d-3aaa-44ae-89f6-20d977122fce/Table_04/Table_04.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
concreteRoundedTable.addComponentOrReplace(gltfShape8)

const chairHighBack2 = new Entity('chairHighBack2')
engine.addEntity(chairHighBack2)
chairHighBack2.setParent(_scene)
const gltfShape9 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
chairHighBack2.addComponentOrReplace(gltfShape9)
const transform36 = new Transform({
  position: new Vector3(5, 4.5, 11),
  rotation: new Quaternion(4.440840747128199e-16, 0.19509033858776093, -2.3256578884911505e-8, 0.9807853698730469),
  scale: new Vector3(1.5000003576278687, 1.2774569988250732, 1.5000003576278687)
})
chairHighBack2.addComponentOrReplace(transform36)

const chairHighBack3 = new Entity('chairHighBack3')
engine.addEntity(chairHighBack3)
chairHighBack3.setParent(_scene)
chairHighBack3.addComponentOrReplace(gltfShape9)
const transform37 = new Transform({
  position: new Vector3(3.5, 4.5, 12),
  rotation: new Quaternion(1.195820997901124e-15, -0.8314696550369263, 9.911889975455779e-8, -0.5555703043937683),
  scale: new Vector3(1.5000014305114746, 1.197467565536499, 1.5000014305114746)
})
chairHighBack3.addComponentOrReplace(transform37)

const chairHighBack4 = new Entity('chairHighBack4')
engine.addEntity(chairHighBack4)
chairHighBack4.setParent(_scene)
chairHighBack4.addComponentOrReplace(gltfShape9)
const transform38 = new Transform({
  position: new Vector3(4.5, 4.5, 13.5),
  rotation: new Quaternion(-5.725116442799024e-15, -0.9807853698730469, 1.1691872003893877e-7, 0.19509033858776093),
  scale: new Vector3(1.5000072717666626, 1.1997764110565186, 1.5000072717666626)
})
chairHighBack4.addComponentOrReplace(transform38)

const chairHighBack6 = new Entity('chairHighBack6')
engine.addEntity(chairHighBack6)
chairHighBack6.setParent(_scene)
chairHighBack6.addComponentOrReplace(gltfShape9)
const transform39 = new Transform({
  position: new Vector3(6, 4.5, 12),
  rotation: new Quaternion(-1.0889569919349164e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314696550369263),
  scale: new Vector3(1.5000016689300537, 1.3803800344467163, 1.5000016689300537)
})
chairHighBack6.addComponentOrReplace(transform39)

const galleryInfoDarkGrey2 = new Entity('galleryInfoDarkGrey2')
engine.addEntity(galleryInfoDarkGrey2)
galleryInfoDarkGrey2.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(0.5, 5, 4.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000038146972656, 1, 1.0000019073486328)
})
galleryInfoDarkGrey2.addComponentOrReplace(transform40)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(0.35857200622558594, 6, 2.5),
  rotation: new Quaternion(-5.861544757360603e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 3, 2.000004768371582)
})
externalLink.addComponentOrReplace(transform41)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(16, 2.5, 11.5),
  rotation: new Quaternion(2.980232594040899e-8, 0.7071068286895752, -1.3411046495548362e-7, 0.7071068286895752),
  scale: new Vector3(2.9238779544830322, 5.3441667556762695, 1.257036566734314)
})
plainText.addComponentOrReplace(transform42)

const galleryInfoBlack = new Entity('galleryInfoBlack')
engine.addEntity(galleryInfoBlack)
galleryInfoBlack.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(13.629700660705566, 0, 15.5),
  rotation: new Quaternion(-4.693676376114463e-15, 1, -1.1920928244535389e-7, -5.960464477539063e-8),
  scale: new Vector3(0.8168486952781677, 1, 0.9999999403953552)
})
galleryInfoBlack.addComponentOrReplace(transform43)

const concreteRoundedTable2 = new Entity('concreteRoundedTable2')
engine.addEntity(concreteRoundedTable2)
concreteRoundedTable2.setParent(_scene)
concreteRoundedTable2.addComponentOrReplace(gltfShape8)
const transform44 = new Transform({
  position: new Vector3(11, 4.5, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.3669129610061646, 1.5)
})
concreteRoundedTable2.addComponentOrReplace(transform44)

const concreteRoundedTable3 = new Entity('concreteRoundedTable3')
engine.addEntity(concreteRoundedTable3)
concreteRoundedTable3.setParent(_scene)
concreteRoundedTable3.addComponentOrReplace(gltfShape8)
const transform45 = new Transform({
  position: new Vector3(13, 4.5, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.3669129610061646, 1.5)
})
concreteRoundedTable3.addComponentOrReplace(transform45)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
chairHighBack.addComponentOrReplace(gltfShape9)
const transform46 = new Transform({
  position: new Vector3(11.5, 4.5, 11),
  rotation: new Quaternion(4.440840747128199e-16, 0.19509033858776093, -2.3256578884911505e-8, 0.9807853698730469),
  scale: new Vector3(1.5000003576278687, 1.2774569988250732, 1.5000003576278687)
})
chairHighBack.addComponentOrReplace(transform46)

const chairHighBack5 = new Entity('chairHighBack5')
engine.addEntity(chairHighBack5)
chairHighBack5.setParent(_scene)
chairHighBack5.addComponentOrReplace(gltfShape9)
const transform47 = new Transform({
  position: new Vector3(12, 4.5, 12),
  rotation: new Quaternion(-1.0889569919349164e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314696550369263),
  scale: new Vector3(1.5000019073486328, 1.3803800344467163, 1.5000019073486328)
})
chairHighBack5.addComponentOrReplace(transform47)

const chairHighBack7 = new Entity('chairHighBack7')
engine.addEntity(chairHighBack7)
chairHighBack7.setParent(_scene)
chairHighBack7.addComponentOrReplace(gltfShape9)
const transform48 = new Transform({
  position: new Vector3(11, 4.5, 13),
  rotation: new Quaternion(-5.725116442799024e-15, -0.9807853698730469, 1.1691872003893877e-7, 0.19509033858776093),
  scale: new Vector3(1.5000076293945312, 1.1997764110565186, 1.5000076293945312)
})
chairHighBack7.addComponentOrReplace(transform48)

const chairHighBack8 = new Entity('chairHighBack8')
engine.addEntity(chairHighBack8)
chairHighBack8.setParent(_scene)
chairHighBack8.addComponentOrReplace(gltfShape9)
const transform49 = new Transform({
  position: new Vector3(10, 4.5, 12),
  rotation: new Quaternion(1.195820997901124e-15, -0.8314696550369263, 9.911889975455779e-8, -0.5555703043937683),
  scale: new Vector3(1.5000014305114746, 1.197467565536499, 1.5000014305114746)
})
chairHighBack8.addComponentOrReplace(transform49)

const chairHighBack9 = new Entity('chairHighBack9')
engine.addEntity(chairHighBack9)
chairHighBack9.setParent(_scene)
chairHighBack9.addComponentOrReplace(gltfShape9)
const transform50 = new Transform({
  position: new Vector3(14, 4.5, 6.5),
  rotation: new Quaternion(-1.0889569919349164e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314696550369263),
  scale: new Vector3(1.500002145767212, 1.3803800344467163, 1.500002145767212)
})
chairHighBack9.addComponentOrReplace(transform50)

const chairHighBack10 = new Entity('chairHighBack10')
engine.addEntity(chairHighBack10)
chairHighBack10.setParent(_scene)
chairHighBack10.addComponentOrReplace(gltfShape9)
const transform51 = new Transform({
  position: new Vector3(13, 4.5, 5.5),
  rotation: new Quaternion(4.440840747128199e-16, 0.19509033858776093, -2.3256578884911505e-8, 0.9807853698730469),
  scale: new Vector3(1.5000003576278687, 1.2774569988250732, 1.5000003576278687)
})
chairHighBack10.addComponentOrReplace(transform51)

const chairHighBack11 = new Entity('chairHighBack11')
engine.addEntity(chairHighBack11)
chairHighBack11.setParent(_scene)
chairHighBack11.addComponentOrReplace(gltfShape9)
const transform52 = new Transform({
  position: new Vector3(12, 4.5, 6.5),
  rotation: new Quaternion(1.195820997901124e-15, -0.8314696550369263, 9.911889975455779e-8, -0.5555703043937683),
  scale: new Vector3(1.5000014305114746, 1.197467565536499, 1.5000014305114746)
})
chairHighBack11.addComponentOrReplace(transform52)

const chairHighBack12 = new Entity('chairHighBack12')
engine.addEntity(chairHighBack12)
chairHighBack12.setParent(_scene)
chairHighBack12.addComponentOrReplace(gltfShape9)
const transform53 = new Transform({
  position: new Vector3(13, 4.5, 7.5),
  rotation: new Quaternion(-5.725116442799024e-15, -0.9807853698730469, 1.1691872003893877e-7, 0.19509033858776093),
  scale: new Vector3(1.5000076293945312, 1.1997764110565186, 1.5000076293945312)
})
chairHighBack12.addComponentOrReplace(transform53)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(instagramButtonLink, {"url":"decentraland_art","bnw":true,"name":"https://www.google.fr/"}, createChannel(channelId, instagramButtonLink, channelBus))
script2.spawn(facebookButtonLink, {"url":"decentraland","bnw":false}, createChannel(channelId, facebookButtonLink, channelBus))
script3.spawn(twitterButtonLink, {"url":"decentraland","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
script4.spawn(videoScreenStanding, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}]}, createChannel(channelId, videoScreenStanding, channelBus))
script5.spawn(galleryInfoDarkGrey2, {"text":"info natixis recrutement","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoDarkGrey2, channelBus))
script6.spawn(externalLink, {"url":"https://recrutement.natixis.com/"}, createChannel(channelId, externalLink, channelBus))
script7.spawn(plainText, {"text":"Welcome on \nNatixis Building","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script8.spawn(galleryInfoBlack, {"text":"Information natixis evenement\n","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack, channelBus))