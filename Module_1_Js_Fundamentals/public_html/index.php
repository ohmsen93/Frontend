<?php
//PHPINFO();

?>

<!doctype html>
<html lang="en">

    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS v5.2.1 -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

        <script defer src="../js/script.js"></script>
    </head>
    <body>
        <header>
        <!-- place navbar here -->
        </header>
        <main>
            <header>
            <h1>Computer store</h1>
            </header>
            <div id="content">
                <div class="grid">
                    <div class="gridTile" id="bank">
                        <h2>Joe Banker</h2>
                        <p id="balance">Balance 200 Kr.</p>
                        <br>
                        <p id="loan"></p>
                        <button id="loanBtn">Get a loan</button>
                    </div>
                    <div class="gridTile" id="work">
                        <h2>Work</h2>
                        <p id="workBalance">Pay 0 Kr.</p>
                        <button id="bankBtn">Bank</button>
                        <button id="workBtn">Work</button>
                        <button id="repayLoanBtn">repay Loan</button>

                    </div>
                    <div class="gridTile" id="laptops">
                        <h2>Laptops</h2>
                        <Select>
                            <Option>Laptop 1</Option>
                            <Option>Laptop 2</Option>
                            <Option>Laptop 3</Option>
                        </Select>
                        <h4>Features:</h4>
                        <p>Description of the laptop</p>
                    </div>
                    <div class="gridTile" id="product">
                        <img id="productImg" src="https://dummyimage.com/100/00ff48/ff0000.png&text=Image+Found" />
                        <div id="productText">
                            <h3 id="productTitle" >Product Title</h3>
                            <p id="productDesc">product Description, this is the description of the product. it should not take up overly much space and should be limited to the middle of the div right below the title.</p>
                        </div>
                        <div id="productPurchase">
                            <h3 id="productPrice">1500 DKK</h3>
                            <button id="productBtn">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
        <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
        </script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
        </script>
    </body>
</html>
