const product =[
    {
        image: 'https://wildkard.tn/wp-content/uploads/2020/10/EE7904F.jpg',
        title: 'Chaussure Grand Court Base Adidas',
        price: 120
    },
    {
        image: 'https://www.tuttosport.com.tn/34494-large_default/adidas-chaussures-runfalcon-20-tr.jpg',
        title: 'Chaussures Running',
        price: 150
    },
    {
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Chaussure_Forum_Mid_Blanc_FY4976_01_standard.jpg',
        title: 'Chaussure Forum Mid',
        price: 230
    },
    {
        image: 'https://www.tuttosport.com.tn/35830-large_default/adidas-chaussures-vs-pace-20.jpg',
        title: 'Chaussures Lifestyle',
        price: 100
    },
]

const categories = [...new Set(product.map((item)=>
    {return item}))];

    function delElement(a){
        categories.splice(a, 1);
        displaycart();
    }

    function promo(){
        let promocode=document.getElementById('promocode').value;
        if(promocode==1234){
            displaycart(50);
        }
        else(
            prompt("Enter correct promo code")
        )
    }

function displaycart(c){
    let j=0, total=0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items";
    if(categories.length==0){
        document.getElementById("root").innerHTML="Your cart is empty";

        document.getElementById("totalA").innerHTML = "$ 00.00";
        document.getElementById("totalB").innerHTML = "$ 00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "$ "+ total +".00";

            if(c==50){
                document.getElementById("totalB").innerHTML="$ "+(total-c)+".00";
            }else{
                document.getElementById("totalB").innerHTML="$ "+total+ ".00";
            }

            return(
                `<tr>
                    <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                    <td width="360"><p style='font-size:15px;'>${title}</p></td>
                    <td width="150"><h2 style='font-size:15px; color:red; '>$ ${price}.00</h2></td>
                    <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
}
displaycart();