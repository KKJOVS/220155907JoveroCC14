<?php

echo "This is FizzBuzz.";
echo "\n";
echo "======================";
echo "\n";

for($i=1;$i<=100;$i++){
    if ($i%3==0&&$i%5==0){
        echo"FIZZBUZZ\n";
    }elseif($i%3==0){
        echo"FIZZ\n";
    }elseif($i%5==0){
        echo"BUZZ\n";
    }else{
        echo$i."\n";
    }
}

echo "\n";
echo "==============================";
echo "\n";
echo "This is Fibonacci Sequence.";
echo "\n";
echo "==============================";
echo "\n";

$fibonacci=[0,1];
$evenFibonacci=[];

for($i=2;$i<10;$i++){
    $fibonacci[$i]=$fibonacci[$i-1]+$fibonacci[$i-2];
}
foreach($fibonacci as $num){
    if($num%2==0){
        $evenFibonacci[]=$num;
    }
}
echo "The Even Fibonaci Number are: ". implode(",", $evenFibonacci) . "\n";
?>