
document.addEventListener('DOMContentLoaded', ()=>{  // // ? Pesquisar sobre addVentListener
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div')) // * Estou capturando todas as divs dentro de GRID para uma rray
    // * selecionando meu span placar e meu botão deiniciar o jogo
    const ScoreDisplay = document.querySelector('#score') 
    const LineTotal = document.querySelector('#line')
    const  startBtn = document.querySelector('#start-button')
    const width = 10
    let nextRandom = 0
    let score = 0
    let line = 0
    let gameFlag = true

    const colors = [
        '#0D0D0D',
        '#AB3325',
        '#E35531',
        '#332C5A',
        '#661414'
    ]

    let timerId

    // The Tetominoes

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino =[
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2 +1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2 +1]
    ]

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2 ,width*2+1],
        [width, width+1, width+2, width*2+1],
        [1,width, width+1, width*2+1]    
    ]

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const iTrtromino =[
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]

    ]

    const theTetrominoes = [lTetromino, 
        zTetromino, 
        tTetromino, 
        oTetromino, 
        iTrtromino
    ]

    let currentPosition = 4
    let currentRotation = 0


    // randonly select Tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length)

    let current = theTetrominoes[random][currentRotation] // Tetromino current

    //draw the Tetromino
    function draw(){
        current.forEach( index => {
            // console.log(index + currentPosition) // !Debug apenas
            // squares[currentPosition + index].innerHTML = currentPosition + index // !Debug apenas
            squares[currentPosition + index].classList.add('tetromino')
            squares[currentPosition+index].style.backgroundColor = colors[random]
        })
    }
    
    
    // undraw the Tetromino
    function undraw(){
        current.forEach( index => {
            squares[currentPosition + index].classList.remove('tetromino')
            squares[currentPosition+index].style.backgroundColor = ''

        })
    }

    //make the tetromino move down every second
    
    // timerId = setInterval(moveDawn, 1000) // ! Remover depois

    // assign functions to keyCodes
    function control(e){
        if(e.keyCode === 37 && gameFlag){
            moveLeft()
        }else if(e.keyCode === 38 && gameFlag){
            rotate()
        }else if (e.keyCode === 39 && gameFlag){
            moveRight()
        }else if(e.keyCode === 40 && gameFlag){
            moveDawn()
        } 
    }
    document.addEventListener('keydown', control)

    // * move down function
    function moveDawn(){
        undraw()
        currentPosition += width
        draw()
        freeze()
    }
    

    // * freeze function

    function freeze(){ // // ! Estudar o comportamento desta função
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            
            // start a new tetromino falling
           
            random = nextRandom
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
            addScore()
            gameOver()
        }
    }

    // * move de tetromino left, unless is at the edge or there is a blockage
    function moveLeft(){
        undraw()
        const isAtleftEdge = current.some(index => (currentPosition + index) % width === 0)
        if(!isAtleftEdge){
            currentPosition -= 1
        }

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            currentPosition += 1
        }
        draw()
    }

    // move the tetromino right, unless is at  there is a blockage
    function moveRight(){
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)

        if(!isAtRightEdge){
            currentPosition += 1
        }

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            currentPosition -= 1
        }
        draw()
    }

    // rotate the tetromino
    function rotate(){
        undraw()
        currentRotation ++
        if(currentRotation === current.length){ // if the cuurrent rotation gets to 4, make it go back to 0
            currentRotation = 0
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }



    // show up-next tetromino in mini-grid
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    const displayIndex = 0

    // the Tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2], // lTetromino
        [0, displayWidth, displayWidth+1, displayWidth+2], // zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetroino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
    ] 

    // display the shape in the mini-grid display
    function displayShape(){

        // remove any trace in the mini-grid display
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
            square.style.backgroundColor = ''

        })

        upNextTetrominoes[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].classList.add('tetromino')
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
        })
    }


    // add functionality to the button

    startBtn.addEventListener('click', ()=>{
        if(timerId){
            clearInterval(timerId) // // ? Pesqusiar sobre esse método
            timerId = null
        }else{
            draw()
            timerId = setInterval(moveDawn, 1000)
            nextRandom = Math.floor(Math.random()* theTetrominoes.length)
            displayShape()
        }
    })


    // add score
    function addScore(){ // ? Estudar o comportamento desta função
        for(let i = 0; i < 199; i += width){
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
            
            if(row.every(index => squares[index].classList.contains('taken'))){
                score += 10
                line+=1;
                LineTotal.innerHTML = line
                ScoreDisplay.innerHTML = score
                row.forEach(index => {
                    squares[index].classList.remove('taken')
                    squares[index].classList.remove('tetromino')
                    squares[index].style.backgroundColor = ''
                })
                const squaresRemoved = squares.splice(i, width)
                squares = squaresRemoved.concat(squares)
                squares.forEach(cell => grid.appendChild(cell))
            }
        }
    }

    // gameover
    function gameOver(){
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
            ScoreDisplay.innerHTML = 'FIM!'
            clearInterval(timerId)
            gameFlag = false
        }
    }
    

})