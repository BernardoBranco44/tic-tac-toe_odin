function Gameboard() {
    let board =[["", "", ""], ["", "", ""], ["", "", ""]]
    const printBoard = () => {
        console.log(board[0])
        console.log(board[1])
        console.log(board[2])
    }
    const changeBoard = (pos1, pos2, token) => {
        if (board[pos1][pos2] === "") {
            board[pos1][pos2] = token
        } else {
            return "error"
        }
    }

    const detectWin = () => {
            return (board[0][0] === board[0][1] && board[0][1] === board[0][2] && (board[0][0] === "X" || board[0][0] === "O" ) || 
                board[1][0] === board[1][1] && board[1][1] === board[1][2] && (board[1][0] === "X" || board[1][0] === "O" )|| 
                board[2][0] === board[2][1] && board[2][1] === board[2][2] && (board[2][0] === "X" || board[2][0] === "O" )|| 
                board[0][0] === board[1][0] && board[1][0] === board[2][0] && (board[0][0] === "X" || board[0][0] === "O" )|| 
                board[0][1] === board[1][1] && board[1][1] === board[2][1] && (board[0][1] === "X" || board[0][1] === "O" )|| 
                board[0][2] === board[1][2] && board[1][2] === board[2][2] && (board[0][2] === "X" || board[0][2] === "O" )|| 
                board[0][0] === board[1][1] && board[1][1] === board[2][2] && (board[0][0] === "X" || board[0][0] === "O" )|| 
                board[0][2] === board[1][1] && board[1][1] === board[2][0] && (board[0][2] === "X" || board[0][2] === "O" ))
    }

    return { printBoard, changeBoard, detectWin }
}

function player1() {
    const name = "player1"
    const token = "X"

    return { name, token }
}

function player2() {
    const name = "player2"
    const token = "O"
    return { name, token }
}

function GameController() {
    let gameboard = Gameboard()
    let round = 0
    const play1 = player1()
    const play2 = player2()
    let activePlayer = play1
    let isFinished = false

    const square1 = document.querySelector("#square1")
    const square2 = document.querySelector("#square2")
    const square3 = document.querySelector("#square3")
    const square4 = document.querySelector("#square4")
    const square5 = document.querySelector("#square5")
    const square6 = document.querySelector("#square6")
    const square7 = document.querySelector("#square7")
    const square8 = document.querySelector("#square8")
    const square9 = document.querySelector("#square9")
    const resetBtn = document.querySelector("#reset-game")
    const grid = document.querySelector(".grid")

    const addSymbol = (e) => {
            if (e.target.innerHTML === "") {
                e.target.innerHTML = activePlayer.token
                if (e.target.id === "square1") {
                    gameboard.changeBoard(0, 0, activePlayer.token)
                } else if (e.target.id === "square2") {
                    gameboard.changeBoard(0, 1, activePlayer.token)
                } else if (e.target.id === "square3") {
                    gameboard.changeBoard(0, 2, activePlayer.token)
                } else if (e.target.id === "square4") {
                    gameboard.changeBoard(1, 0, activePlayer.token)
                } else if (e.target.id === "square5") {
                    gameboard.changeBoard(1, 1, activePlayer.token)
                } else if (e.target.id === "square6") {
                    gameboard.changeBoard(1, 2, activePlayer.token)
                } else if (e.target.id === "square7") {
                    gameboard.changeBoard(2, 0, activePlayer.token)
                } else if (e.target.id === "square8") {
                    gameboard.changeBoard(2, 1, activePlayer.token)
                } else if (e.target.id === "square9") {
                    gameboard.changeBoard(2, 2, activePlayer.token)
                }
            }
            if(gameboard.detectWin() && round > 0) {
                isFinished = true
                console.log(`${activePlayer.name} won, congrats`)
                resetBtn.disabled = false
                grid.style.pointerEvents = "none"
            }
            activePlayer === play1 ? activePlayer = play2 : activePlayer = play1
            round++
        gameboard.printBoard()
    }

    square1.addEventListener("click", addSymbol)
    square2.addEventListener("click", addSymbol)
    square3.addEventListener("click", addSymbol)
    square4.addEventListener("click", addSymbol)
    square5.addEventListener("click", addSymbol)
    square6.addEventListener("click", addSymbol)
    square7.addEventListener("click", addSymbol)
    square8.addEventListener("click", addSymbol)
    square9.addEventListener("click", addSymbol)

    resetBtn.addEventListener("click", function() {
        location.reload()
    })

}

const controller = GameController()