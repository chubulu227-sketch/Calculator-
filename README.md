<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculator.in</title>
    <link rel="stylesheet" href="style.css">
    <style>
        *{
    margin: 0px;
    padding: 0px;
}
body{
    background-color: rgb(2, 1, 35);
}
h1{
    text-align: center;
    margin-top: 30px;
    color: white;
    
}
.contener{
    background-color: gray;
   border: 5px solid black;
   border-radius: 10px;
    height: 540px;
    width: 400px;
    margin-top: 40px;
    margin-left: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px -10px 30px rgb(216, 213, 213);
    
    
}
.display{
    width: 100%;
    height: 20%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}
#input{
    height: 60px;
    width: 80%;
    font-size: 30px;
    border: none;
}
.input{
    border: 2px solid;
    height: 80%;
    width: 100%;
    
}
.row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.row button{
    background-color: black;
    color: white;
    height: 50px;
    width: 50px;
    margin-top: 30px;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 30px;
    box-shadow: 3px 4px 3px;

}
.row button:hover{
    background-color: rgb(12, 75, 153);
    color: black;
}
    </style>
</head>
<body>
    <h1>WELCOM MY CALCULATOR!</h1>
    <div class="contener">
        <div class="display">
            <input type="" id="input" value="">
        </div>
        <div class="input">
            <div class="row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
        </div>
        <div class="row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
        </div>
        <div class="row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
        </div>
        <div class="row">
            <button>0</button>
            <button>.</button>
            <button>AC</button>
            <button>+</button>
        </div>
        <div class="row">
            <button id="equal">=</button>
            
        </div>
        </div>
    </div>
    <script src="first.js"></script>
</body>
</html>
