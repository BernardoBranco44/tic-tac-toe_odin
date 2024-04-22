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
    let activePlayer = ""
    const play1 = player1()
    const play2 = player2()
    let isFinished = false

    const startGame = () => {
        while (!isFinished) {
            playRound()
        }
        console.log(`${activePlayer.name} won, congrats`)
        gameboard = Gameboard()
        isFinished = false
    }

    const playRound = () => {
        activePlayer === play1 ? activePlayer = play2 : activePlayer = play1
        gameboard.printBoard()
        let row = prompt("Choose row")
        let column = prompt("Choose column")
        let playerChoice = gameboard.changeBoard(row, column, activePlayer.token)
        while (playerChoice === "error") {
            console.log("Spot already occupied")
            let row = prompt("Choose row")
            let column = prompt("Choose column")
            playerChoice = gameboard.changeBoard(row, column, activePlayer.token)
        }
        if(gameboard.detectWin() && round > 0) {
            isFinished = true
        }
        console.clear()
        round++
    }
    return { playRound, startGame }
}