(() => {
    var video = document.querySelector("#videoElement")
    var $image = document.querySelector('#capturedimage')

    if (navigator.mediaDevices.getUserMedia) {       
        navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
            video.srcObject = stream
        })
        .catch((err0r) => {
            console.log("Something went wrong!")
        });
    }

    var createCanvas = () => {
        var canvas = document.createElement("canvas")
        canvas.width = '1024'
        canvas.height = '576'

        canvas.getContext('2d')
            .drawImage(video, 0, 0, canvas.width, canvas.height)

        return canvas
    }

    var btnCapture = document.querySelector('#btn-capture')
    var btnSave = document.querySelector('#btn-save')

    var getImage = () => {
        var canvas = createCanvas()

        var img = document.createElement("img")

        img.src = canvas.toDataURL()


        if($image.hasChildNodes())
            $image.removeChild($image.firstChild)
        
        $image.prepend(img)
    }
    
    var getSave = () => {
        var canvas = createCanvas()

        btnSave.download = "MyScreenshot.jpg";
        btnSave.href = canvas.toDataURL("image/jpg").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    }

    btnCapture.addEventListener('click', getImage)
    btnSave.addEventListener('click', getSave)
 })()