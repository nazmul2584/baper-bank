// handele deposite button
document.getElementById('diposite-button').addEventListener('click',function(){
    //get amount from deposite input fild
    const deositefild = document.getElementById('deposite-input')
    const depositeinputtext =deositefild.value;
    const depositeinput = parseFloat(depositeinputtext);
    console.log(depositeinput);

    const depositetotal = document.getElementById('deposite-total');

    const currentdepoamnttext = depositetotal.innerText; 
    const currentdepoamnt = parseFloat(currentdepoamnttext);
    const newdpstamunt = currentdepoamnt + depositeinput;
    depositetotal.innerText = newdpstamunt

    //update account balance

    const balance = document.getElementById('balanc-total')
    const balancetext = balance.innerText;
    const previusbalancetotal = parseFloat(balancetext);
    const newbalancetotal = previusbalancetotal + depositeinput;
    balance.innerText =newbalancetotal;





    // clear  the deposite fild
    deositefild.value='';
})


// handale withdraw event handeler


document.getElementById('widthrow-button').addEventListener('click',function(){
    const widthrowinput = document.getElementById('widthrow-input');
    const widthrowinputtext = widthrowinput.value;
    const newwithdrowamout = parseFloat(widthrowinputtext);
    console.log(newwithdrowamout);

    //set withdrw total

    const withdrwtotal = document.getElementById('withdraw');
    const withdrawtotaltext = withdrwtotal.innerText;
    const withdrawtotaltotal = parseFloat(withdrawtotaltext);
    const finalwithdrw = withdrawtotaltotal + newwithdrowamout;
    withdrwtotal.innerText = finalwithdrw ;

    // update balance
     
    const balancetotal = document.getElementById('balanc-total')
    const balancetotaltext =balancetotal.innerText;
    const prebalancetotalfigur = parseFloat(balancetotaltext);
    const newbalance = prebalancetotalfigur - newwithdrowamout;
    balancetotal.innerText=newbalance;


    // clear width fild
    widthrowinput.value = '';
})