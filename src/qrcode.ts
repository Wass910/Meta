function createQRCode(){
    const qrcode = new Entity()
    qrcode.addComponent(
    new Transform({
        position: new Vector3(11, 1.5, 0),
        rotation: Quaternion.Euler(180, 90, 90),  
        scale: new Vector3(0.05, 0.05, 0.05)
    })
    )
    qrcode.addComponent(new GLTFShape('models/frame.glb'))

    engine.addEntity(qrcode)
}

export default createQRCode
