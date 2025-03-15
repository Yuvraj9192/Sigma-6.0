let size = "XXL" ;

if(size === 'XL') {
    console.log(`Price: RS.250`);
}
else if(size === 'L'){
    console.log(`price: RS.200`);
}
else if(size === 'M'){
    console.log(`price: RS.100`);
}
else if(size === 'S'){
    console.log(`price: RS.50`);
}
else{
    console.log("out of stock!");
}