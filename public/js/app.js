
let boxes = document.querySelectorAll(".box")
let currentPlayer = "X"
let btn = document.getElementById("restartBtn")
let winner = false

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent !== "") 
            return
        box.textContent = currentPlayer

        if (currentPlayer === "X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }

        checkWinner()
    })
})

const checkWinner = () => {
    let winPossibilty = [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    winner = false

    winPossibilty.forEach(cases => {
        let boxContent = cases.map(index => boxes[index].textContent);
        if (boxContent.every(e => e !== "" && e === boxContent[0])) {
            alert("Player " + boxContent[0] + " win")
            winner = true
        }
    });

    if (!winner) {
        let all= true;
        boxes.forEach(box => {
            if (box.textContent === "") {
                all = false
            }
        });

        if (all) {
            alert("Ta3aaaaaaaaaaaaaaaadol")
        }
    }
};

btn.addEventListener("click", () => {
    restart()
});

const restart = () => {
    location.reload(true)
};
