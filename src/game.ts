import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../c1e126e7-374e-4fe3-aaae-b4211c321cf3/src/item"
import Script2 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script3 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script4 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script5 from "../2e1c4446-c99a-4698-9e13-819d232ca849/src/item"
import Script6 from "../0b8f3b57-a7f3-48aa-a88a-41098f264566/src/item"
import Script7 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import { Zombie_bot, Alice_bot }  from './npc'
import createQRCode from './qrcode'
import newBird from './bird'
import createPortals from './portals'

//add QRCode

createQRCode()

// Add npc

Zombie_bot()
Alice_bot()

// Create a new bird

newBird()

// add teleporteur

createPortals()

// Builder

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bigStoneSlabTile = new Entity('bigStoneSlabTile')
engine.addEntity(bigStoneSlabTile)
bigStoneSlabTile.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(32, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("5ddd810b-9cc1-4451-bb65-2626e182d8b1/StoneSlabSmall_02/StoneSlabSmall_02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bigStoneSlabTile.addComponentOrReplace(gltfShape)

const bigStoneSlabTile2 = new Entity('bigStoneSlabTile2')
engine.addEntity(bigStoneSlabTile2)
bigStoneSlabTile2.setParent(_scene)
bigStoneSlabTile2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(30, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile2.addComponentOrReplace(transform3)

const bigStoneSlabTile3 = new Entity('bigStoneSlabTile3')
engine.addEntity(bigStoneSlabTile3)
bigStoneSlabTile3.setParent(_scene)
bigStoneSlabTile3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(28, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile3.addComponentOrReplace(transform4)

const bigStoneSlabTile4 = new Entity('bigStoneSlabTile4')
engine.addEntity(bigStoneSlabTile4)
bigStoneSlabTile4.setParent(_scene)
bigStoneSlabTile4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(26, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile4.addComponentOrReplace(transform5)

const bigStoneSlabTile5 = new Entity('bigStoneSlabTile5')
engine.addEntity(bigStoneSlabTile5)
bigStoneSlabTile5.setParent(_scene)
bigStoneSlabTile5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(24, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile5.addComponentOrReplace(transform6)

const bigStoneSlabTile6 = new Entity('bigStoneSlabTile6')
engine.addEntity(bigStoneSlabTile6)
bigStoneSlabTile6.setParent(_scene)
bigStoneSlabTile6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(21.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile6.addComponentOrReplace(transform7)

const bigStoneSlabTile7 = new Entity('bigStoneSlabTile7')
engine.addEntity(bigStoneSlabTile7)
bigStoneSlabTile7.setParent(_scene)
bigStoneSlabTile7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(21.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile7.addComponentOrReplace(transform8)

const bigStoneSlabTile8 = new Entity('bigStoneSlabTile8')
engine.addEntity(bigStoneSlabTile8)
bigStoneSlabTile8.setParent(_scene)
bigStoneSlabTile8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(21.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile8.addComponentOrReplace(transform9)

const bigStoneSlabTile9 = new Entity('bigStoneSlabTile9')
engine.addEntity(bigStoneSlabTile9)
bigStoneSlabTile9.setParent(_scene)
bigStoneSlabTile9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(19, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile9.addComponentOrReplace(transform10)

const bigStoneSlabTile12 = new Entity('bigStoneSlabTile12')
engine.addEntity(bigStoneSlabTile12)
bigStoneSlabTile12.setParent(_scene)
bigStoneSlabTile12.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(21.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile12.addComponentOrReplace(transform11)

const bigStoneSlabTile13 = new Entity('bigStoneSlabTile13')
engine.addEntity(bigStoneSlabTile13)
bigStoneSlabTile13.setParent(_scene)
bigStoneSlabTile13.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(21.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile13.addComponentOrReplace(transform12)

const bigStoneSlabTile14 = new Entity('bigStoneSlabTile14')
engine.addEntity(bigStoneSlabTile14)
bigStoneSlabTile14.setParent(_scene)
bigStoneSlabTile14.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(11.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile14.addComponentOrReplace(transform13)

const bigStoneSlabTile15 = new Entity('bigStoneSlabTile15')
engine.addEntity(bigStoneSlabTile15)
bigStoneSlabTile15.setParent(_scene)
bigStoneSlabTile15.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(9, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile15.addComponentOrReplace(transform14)

const bigStoneSlabTile16 = new Entity('bigStoneSlabTile16')
engine.addEntity(bigStoneSlabTile16)
bigStoneSlabTile16.setParent(_scene)
bigStoneSlabTile16.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(6.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile16.addComponentOrReplace(transform15)

const bigStoneSlabTile17 = new Entity('bigStoneSlabTile17')
engine.addEntity(bigStoneSlabTile17)
bigStoneSlabTile17.setParent(_scene)
bigStoneSlabTile17.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(4.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile17.addComponentOrReplace(transform16)

const bigStoneSlabTile18 = new Entity('bigStoneSlabTile18')
engine.addEntity(bigStoneSlabTile18)
bigStoneSlabTile18.setParent(_scene)
bigStoneSlabTile18.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(4.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile18.addComponentOrReplace(transform17)

const bigStoneSlabTile19 = new Entity('bigStoneSlabTile19')
engine.addEntity(bigStoneSlabTile19)
bigStoneSlabTile19.setParent(_scene)
bigStoneSlabTile19.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(4.5, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile19.addComponentOrReplace(transform18)

const galleryInfoBlack = new Entity('galleryInfoBlack')
engine.addEntity(galleryInfoBlack)
galleryInfoBlack.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(10.984396934509277, 8.520434379577637, 0.5009294748306274),
  rotation: new Quaternion(-6.124396339189913e-15, 0.009097272530198097, -1.0844822817546174e-9, -0.9999586343765259),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
galleryInfoBlack.addComponentOrReplace(transform19)

const galleryInfoBlack2 = new Entity('galleryInfoBlack2')
engine.addEntity(galleryInfoBlack2)
galleryInfoBlack2.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(1.9213409423828125, 8.520434379577637, 0.2852306365966797),
  rotation: new Quaternion(4.465509417046678e-15, 0.7069060206413269, -8.426976449982249e-8, 0.7073075175285339),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
galleryInfoBlack2.addComponentOrReplace(transform20)

const galleryInfoBlack3 = new Entity('galleryInfoBlack3')
engine.addEntity(galleryInfoBlack3)
galleryInfoBlack3.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(1.9622092247009277, 8.520434379577637, 5.637544631958008),
  rotation: new Quaternion(4.021166944345386e-15, 0.7030097246170044, -8.380528981888347e-8, 0.7111803293228149),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
galleryInfoBlack3.addComponentOrReplace(transform21)

const bigStoneSlabTile10 = new Entity('bigStoneSlabTile10')
engine.addEntity(bigStoneSlabTile10)
bigStoneSlabTile10.setParent(_scene)
bigStoneSlabTile10.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(4.5, 8.542102813720703, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 4.879674434661865)
})
bigStoneSlabTile10.addComponentOrReplace(transform22)


const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(3.680201530456543, 0, 14.707195281982422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalPlatform.addComponentOrReplace(transform23)

const purpleWeepingWillowTree = new Entity('purpleWeepingWillowTree')
engine.addEntity(purpleWeepingWillowTree)
purpleWeepingWillowTree.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(26, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
purpleWeepingWillowTree.addComponentOrReplace(transform24)
const gltfShape2 = new GLTFShape("e8013294-8574-44a5-9207-9275ea235a63/Tree_Leafs_01/Tree_Leafs_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
purpleWeepingWillowTree.addComponentOrReplace(gltfShape2)

purpleWeepingWillowTree.addComponent(new Animator())
const treeClip = new AnimationState('Tree_Action', { looping: false })
purpleWeepingWillowTree.getComponent(Animator).addClip(treeClip)
purpleWeepingWillowTree.addComponent(
  new OnPointerDown(
    (e) => {
      //treeClip.stop()
      treeClip.play()
      log('new bird')
      newBird()
    },
    { button: ActionButton.POINTER, hoverText: 'Spawn your bird' }
  )
)

const bigStoneSlabTile11 = new Entity('bigStoneSlabTile11')
engine.addEntity(bigStoneSlabTile11)
bigStoneSlabTile11.setParent(_scene)
bigStoneSlabTile11.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(15.739194869995117, 8.542102813720703, 3),
  rotation: new Quaternion(-4.504429098665355e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.5000051259994507, 1, 4.185303211212158)
})
bigStoneSlabTile11.addComponentOrReplace(transform25)

const verticalPlatform2 = new Entity('verticalPlatform2')
engine.addEntity(verticalPlatform2)
verticalPlatform2.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(17.180553436279297, 7.88078498840332, 3.775847911834717),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalPlatform2.addComponentOrReplace(transform26)

const largeStoneFloor = new Entity('largeStoneFloor')
engine.addEntity(largeStoneFloor)
largeStoneFloor.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(31.989418029785156, 16.5772762298584, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.375, 9.012784957885742, 3)
})
largeStoneFloor.addComponentOrReplace(transform27)
const gltfShape3 = new GLTFShape("717323f7-72ff-48f4-b4ca-9afffb81aaa8/Stone_Module_4M/Stone_Module_4M.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
largeStoneFloor.addComponentOrReplace(gltfShape3)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const gltfShape4 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = false
wallPlainGlass2.addComponentOrReplace(gltfShape4)
const transform28 = new Transform({
  position: new Vector3(4.6621623039245605, 3.581775188446045, 13.774858474731445),
  rotation: new Quaternion(1.9792379591683637e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0933341979980469, 1.2440904378890991, 0.11386358737945557)
})
wallPlainGlass2.addComponentOrReplace(transform28)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
wallPlainGlass.addComponentOrReplace(gltfShape4)
const transform29 = new Transform({
  position: new Vector3(4.6621623039245605, 3.581775188446045, 13.774858474731445),
  rotation: new Quaternion(2.4880637795947043e-15, 5.960464477539063e-8, -2.4641827444380534e-15, -1),
  scale: new Vector3(1.0933343172073364, 1.2440904378890991, 0.11386360228061676)
})
wallPlainGlass.addComponentOrReplace(transform29)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape4)
const transform30 = new Transform({
  position: new Vector3(2.4830079078674316, 3.581775188446045, 13.774858474731445),
  rotation: new Quaternion(1.9792379591683637e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0933341979980469, 1.2440904378890991, 0.11386358737945557)
})
wallPlainGlass3.addComponentOrReplace(transform30)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape4)
const transform31 = new Transform({
  position: new Vector3(4.6621623039245605, 3.581775188446045, 15.95887565612793),
  rotation: new Quaternion(2.4880637795947043e-15, 5.960464477539063e-8, -2.4641827444380534e-15, -1),
  scale: new Vector3(1.0933343172073364, 1.2440904378890991, 0.11386360228061676)
})
wallPlainGlass4.addComponentOrReplace(transform31)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape5 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
entity.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform32)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape5)
const transform33 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform33)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(5.548172950744629, 9.14987564086914, 0.18596556782722473),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.8712526559829712, 1.604153037071228, 10.304397583007812)
})
videoStream.addComponentOrReplace(transform34)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(19.20928955078125, 16.636476516723633, 1.1597778797149658),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3.5, 2)
})
blockFloorLight.addComponentOrReplace(transform35)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(31.894134521484375, 16.636476516723633, 1.1597778797149658),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3.5, 2)
})
blockFloorLight2.addComponentOrReplace(transform36)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(28.14927101135254, 14.414121627807617, 4.550516128540039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.279629111289978, 108.78959655761719, 0.9999999403953552)
})
floorBlack.addComponentOrReplace(transform37)
const gltfShape6 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
floorBlack.addComponentOrReplace(gltfShape6)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape4)
const transform38 = new Transform({
  position: new Vector3(18.31157112121582, 8.581775665283203, 2.295105218887329),
  rotation: new Quaternion(1.9792379591683637e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.331694483757019, 2.00925612449646, 0.11386358737945557)
})
wallPlainGlass5.addComponentOrReplace(transform38)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape4)
const transform39 = new Transform({
  position: new Vector3(18.249887466430664, 8.581775665283203, 4.932019233703613),
  rotation: new Quaternion(2.2745526080967865e-15, 5.960464477539063e-8, -2.6776937041777344e-15, -1),
  scale: new Vector3(1.3316946029663086, 2.00925612449646, 0.11386360228061676)
})
wallPlainGlass6.addComponentOrReplace(transform39)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape4)
const transform40 = new Transform({
  position: new Vector3(18.256813049316406, 8.581775665283203, 2.295105218887329),
  rotation: new Quaternion(2.1639932091399453e-15, 5.960464477539063e-8, -2.7882533148928124e-15, -1),
  scale: new Vector3(1.3316946029663086, 2.00925612449646, 0.11386360228061676)
})
wallPlainGlass7.addComponentOrReplace(transform40)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape4)
const transform41 = new Transform({
  position: new Vector3(15.523170471191406, 11.970744132995605, 2.260288953781128),
  rotation: new Quaternion(1.9792379591683637e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.331694483757019, 1.161027193069458, 0.11386358737945557)
})
wallPlainGlass8.addComponentOrReplace(transform41)

const blackButton = new Entity('blackButton')
engine.addEntity(blackButton)
blackButton.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(4.9386749267578125, 2, 14.791656494140625),
  rotation: new Quaternion(-0.5, 0.5, 0.5000001192092896, 0.5),
  scale: new Vector3(1.0000020265579224, 1.0000014305114746, 1.0000004768371582)
})
blackButton.addComponentOrReplace(transform42)

const buttonChest = new Entity('buttonChest')
engine.addEntity(buttonChest)
buttonChest.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(18.355066299438477, 10.353653907775879, 3.811951160430908),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1.0000009536743164, 1)
})
buttonChest.addComponentOrReplace(transform43)

const wallcornerBlack = new Entity('wallcornerBlack')
engine.addEntity(wallcornerBlack)
wallcornerBlack.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(31.946239471435547, 16.866666793823242, 12.578468322753906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wallcornerBlack.addComponentOrReplace(transform44)
const gltfShape7 = new GLTFShape("b147f30c-9dee-4138-8ac3-3f9d1fadee5f/BlackCorner.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
wallcornerBlack.addComponentOrReplace(gltfShape7)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(30, 16.86326026916504, 12.58285903930664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2814178466796875, 1, 1)
})
wallPlainBlack.addComponentOrReplace(transform45)
const gltfShape8 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape8)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape8)
const transform46 = new Transform({
  position: new Vector3(31.63922119140625, 16.861448287963867, 10.63381576538086),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.8822698593139648, 1, 1.0000019073486328)
})
wallPlainBlack2.addComponentOrReplace(transform46)

const barBlack = new Entity('barBlack')
engine.addEntity(barBlack)
barBlack.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(25.48448944091797, 17, 9.021817207336426),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1, 1, 1)
})
barBlack.addComponentOrReplace(transform47)
const gltfShape9 = new GLTFShape("17b9739f-a1d4-494c-8766-8429067d6b19/Bar_Black.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
barBlack.addComponentOrReplace(gltfShape9)

const coffeeMachine = new Entity('coffeeMachine')
engine.addEntity(coffeeMachine)
coffeeMachine.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(26.120973587036133, 18.21513557434082, 9.239208221435547),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
coffeeMachine.addComponentOrReplace(transform48)
const gltfShape10 = new GLTFShape("bf7da256-1314-40dc-a5b4-19c8dc5196e4/Coffee_Machine.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
coffeeMachine.addComponentOrReplace(gltfShape10)

const blueWeepingWillowTree = new Entity('blueWeepingWillowTree')
engine.addEntity(blueWeepingWillowTree)
blueWeepingWillowTree.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(27.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blueWeepingWillowTree.addComponentOrReplace(transform49)
const gltfShape11 = new GLTFShape("a917defc-3e47-4e55-90a6-dd6c4f03c9f5/Tree_Leafs_02/Tree_Leafs_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
blueWeepingWillowTree.addComponentOrReplace(gltfShape11)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(1.794672966003418, 10.5, 4),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink.addComponentOrReplace(transform50)

const mediumStoneFloor = new Entity('mediumStoneFloor')
engine.addEntity(mediumStoneFloor)
mediumStoneFloor.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(1.479142189025879, 8.466569900512695, 8.00460147857666),
  rotation: new Quaternion(0, 0, -1, -5.960464477539063e-8),
  scale: new Vector3(4.953874588012695, 25.200000762939453, 4)
})
mediumStoneFloor.addComponentOrReplace(transform51)
const gltfShape12 = new GLTFShape("fd71f814-f4b5-47f6-9ea4-ae6e768ee5a7/Stone_Module_2M/Stone_Module_2M.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
mediumStoneFloor.addComponentOrReplace(gltfShape12)


const bigStoneSlabTile20 = new Entity('bigStoneSlabTile20')
engine.addEntity(bigStoneSlabTile20)
bigStoneSlabTile20.setParent(_scene)
bigStoneSlabTile20.addComponentOrReplace(gltfShape)
const transform52 = new Transform({
  position: new Vector3(16.41156005859375, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile20.addComponentOrReplace(transform52)

const bigStoneSlabTile21 = new Entity('bigStoneSlabTile21')
engine.addEntity(bigStoneSlabTile21)
bigStoneSlabTile21.setParent(_scene)
bigStoneSlabTile21.addComponentOrReplace(gltfShape)
const transform53 = new Transform({
  position: new Vector3(14.042681694030762, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
bigStoneSlabTile21.addComponentOrReplace(transform53)

const theFountainOfSpirits = new Entity('theFountainOfSpirits')
engine.addEntity(theFountainOfSpirits)
theFountainOfSpirits.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(14.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
theFountainOfSpirits.addComponentOrReplace(transform54)
const gltfShape13 = new GLTFShape("fca5ed25-573f-4792-ac64-3d5a48933dec/Fountain_01/Fountain_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
theFountainOfSpirits.addComponentOrReplace(gltfShape13)

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
script1.init()
script2.init()
script3.init()
script4.init()
script5.init()
script6.init()
script7.init()
script1.spawn(galleryInfoBlack, {"text":"Some text","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack, channelBus))
script1.spawn(galleryInfoBlack2, {"text":"Some text","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack2, channelBus))
script1.spawn(galleryInfoBlack3, {"text":"Some text","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoBlack3, channelBus))
script2.spawn(verticalPlatform, {"distance":9,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script2.spawn(verticalPlatform2, {"distance":8,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform2","actionId":"goToStart","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalPlatform2, channelBus))
script3.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8","image":"data:image/png;base64,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"}, createChannel(channelId, videoStream, channelBus))
script4.spawn(blockFloorLight, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script4.spawn(blockFloorLight2, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script5.spawn(blackButton, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blackButton, channelBus))
script6.spawn(buttonChest, {"onClickText":"Open/Close","onClick":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, buttonChest, channelBus))
script7.spawn(externalLink, {"url":"https://recrutement.natixis.com/"}, createChannel(channelId, externalLink, channelBus))

